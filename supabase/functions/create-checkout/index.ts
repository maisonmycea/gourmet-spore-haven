import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";

// Allowed origins for CORS
const allowedOrigins = [
  "https://gourmet-spore-haven.lovable.app",
  "https://id-preview--95dd2ee5-ac72-4653-afed-a98e958b91de.lovable.app",
  "http://localhost:5173",
  "http://localhost:8080",
];

function getCorsHeaders(req: Request) {
  const origin = req.headers.get("Origin") ?? "";
  const isAllowed = allowedOrigins.some((o) => origin === o || origin.endsWith(".lovable.app"));
  return {
    "Access-Control-Allow-Origin": isAllowed ? origin : allowedOrigins[0],
    "Access-Control-Allow-Headers":
      "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
  };
}

// Simple in-memory rate limiter (per-instance)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 10; // max requests per window
const RATE_WINDOW_MS = 60_000; // 1 minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
}

// Helper logging function
const logStep = (step: string, details?: Record<string, unknown>) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : "";
  console.log(`[CREATE-CHECKOUT] ${step}${detailsStr}`);
};

// --- Input validation helpers ---
function validateString(val: unknown, field: string, minLen: number, maxLen: number): string {
  if (typeof val !== "string") throw new Error(`${field} must be a string`);
  const trimmed = val.trim();
  if (trimmed.length < minLen || trimmed.length > maxLen)
    throw new Error(`${field} must be between ${minLen} and ${maxLen} characters`);
  return trimmed;
}

function validateNumber(val: unknown, field: string, min: number, max: number, integer = false): number {
  if (typeof val !== "number" || !isFinite(val)) throw new Error(`${field} must be a number`);
  if (integer && !Number.isInteger(val)) throw new Error(`${field} must be an integer`);
  if (val < min || val > max) throw new Error(`${field} must be between ${min} and ${max}`);
  return val;
}

function validateUrl(val: unknown, field: string): string {
  const s = validateString(val, field, 1, 500);
  try {
    const url = new URL(s);
    if (url.protocol !== "https:" && url.protocol !== "http:")
      throw new Error(`${field} must use http(s)`);
    // Only allow known domains
    const host = url.hostname;
    const allowed = host.endsWith(".lovable.app") || host === "localhost";
    if (!allowed) throw new Error(`${field} has disallowed domain`);
    return s;
  } catch (e) {
    if (e instanceof Error && e.message.includes(field)) throw e;
    throw new Error(`${field} is not a valid URL`);
  }
}

function validateEmail(val: unknown): string {
  const s = validateString(val, "customerEmail", 3, 255);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)) throw new Error("Invalid email format");
  return s;
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  unit: string;
  image?: string;
}

function validateCartItem(raw: unknown, index: number): CartItem {
  if (typeof raw !== "object" || raw === null) throw new Error(`Item ${index} is invalid`);
  const obj = raw as Record<string, unknown>;
  return {
    id: validateString(obj.id, `items[${index}].id`, 1, 100),
    name: validateString(obj.name, `items[${index}].name`, 1, 200),
    price: validateNumber(obj.price, `items[${index}].price`, 0.01, 10000),
    quantity: validateNumber(obj.quantity, `items[${index}].quantity`, 1, 100, true),
    unit: validateString(obj.unit, `items[${index}].unit`, 1, 50),
    image: obj.image != null ? validateString(obj.image, `items[${index}].image`, 0, 500) : undefined,
  };
}

serve(async (req) => {
  const corsHeaders = getCorsHeaders(req);

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep("Function started");

    // Rate limiting
    const clientIp =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      req.headers.get("cf-connecting-ip") ??
      "unknown";
    if (isRateLimited(clientIp)) {
      logStep("Rate limited", { ip: clientIp });
      return new Response(JSON.stringify({ error: "Too many requests. Please try again later." }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 429,
      });
    }

    const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");
    if (!stripeKey) {
      throw new Error("Payment service is not configured");
    }
    logStep("Stripe key verified");

    // Parse and validate input
    const body = await req.json();

    if (!Array.isArray(body.items) || body.items.length === 0 || body.items.length > 50) {
      return new Response(JSON.stringify({ error: "Invalid items: must be 1-50 items" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400,
      });
    }

    const items: CartItem[] = body.items.map((item: unknown, i: number) => validateCartItem(item, i));
    const customerEmail = body.customerEmail != null ? validateEmail(body.customerEmail) : undefined;
    const successUrl = validateUrl(body.successUrl, "successUrl");
    const cancelUrl = validateUrl(body.cancelUrl, "cancelUrl");

    logStep("Request validated", { itemCount: items.length, customerEmail });

    const stripe = new Stripe(stripeKey, { apiVersion: "2025-08-27.basil" });

    const lineItems = items.map((item) => ({
      price_data: {
        currency: "cad",
        product_data: {
          name: item.name,
          description: `${item.unit} - Champignon gourmet Spores Expert`,
          images: item.image ? [`https://sporesexpert.ca${item.image}`] : [],
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }));

    logStep("Line items created", { lineItems: lineItems.length });

    let customerId: string | undefined;
    if (customerEmail) {
      const customers = await stripe.customers.list({ email: customerEmail, limit: 1 });
      if (customers.data.length > 0) {
        customerId = customers.data[0].id;
        logStep("Existing customer found");
      }
    }

    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      customer_email: customerId ? undefined : customerEmail,
      line_items: lineItems,
      mode: "payment",
      success_url: successUrl,
      cancel_url: cancelUrl,
      shipping_address_collection: {
        allowed_countries: ["CA"],
      },
      billing_address_collection: "required",
      phone_number_collection: {
        enabled: true,
      },
      locale: "fr-CA",
      metadata: {
        source: "spores-expert-website",
      },
    });

    logStep("Checkout session created");

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
    logStep("ERROR in create-checkout", { message: errorMessage });

    // Return generic error to client, keep details server-side
    const isValidationError =
      errorMessage.includes("must be") ||
      errorMessage.includes("Invalid") ||
      errorMessage.includes("invalid") ||
      errorMessage.includes("disallowed");

    return new Response(
      JSON.stringify({ error: isValidationError ? errorMessage : "Unable to create checkout session" }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: isValidationError ? 400 : 500,
      }
    );
  }
});
