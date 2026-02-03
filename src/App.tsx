import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { CartProvider } from "@/context/CartContext";
import { Layout } from "@/components/layout/Layout";
import Index from "./pages/Index";
import Boutique from "./pages/Boutique";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Benefits from "./pages/Benefits";
import Recipes from "./pages/Recipes";
import Contact from "./pages/Contact";
import CategoryPage from "./pages/CategoryPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/boutique" element={<Boutique />} />
                <Route path="/produit/:id" element={<ProductDetail />} />
                <Route path="/a-propos" element={<About />} />
                <Route path="/bienfaits" element={<Benefits />} />
                <Route path="/recettes" element={<Recipes />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/champignons/:category" element={<CategoryPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
