import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Package, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { SEOHead } from '@/components/seo/SEOHead';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const CheckoutSuccess = () => {
  const { clearCart } = useCart();

  useEffect(() => {
    // Clear cart after successful payment
    clearCart();
  }, [clearCart]);

  return (
    <>
      <SEOHead 
        title="Commande Confirmée | Merci pour votre achat"
        description="Votre commande de champignons gourmets a été confirmée. Nous préparons votre colis avec soin."
        url="https://www.sporesexpert.ca/commande-confirmee"
      />
      <div className="pt-24 pb-16 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-2xl mx-auto text-center"
          >
            {/* Success Icon */}
            <motion.div
              variants={fadeInUp}
              className="w-24 h-24 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-8"
            >
              <CheckCircle className="w-14 h-14 text-accent" />
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={fadeInUp}
              className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4"
            >
              Merci pour votre commande !
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground text-lg mb-8"
            >
              Votre commande de champignons gourmets a été confirmée. 
              Un courriel de confirmation vous sera envoyé sous peu.
            </motion.p>

            {/* Info Cards */}
            <motion.div
              variants={fadeInUp}
              className="grid md:grid-cols-2 gap-6 mb-12"
            >
              <div className="p-6 bg-card rounded-2xl border border-border text-left">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <Package className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  Préparation Express
                </h3>
                <p className="text-muted-foreground text-sm">
                  Vos champignons seront récoltés frais et préparés avec soin. 
                  Expédition sous 24-48h ouvrables.
                </p>
              </div>

              <div className="p-6 bg-card rounded-2xl border border-border text-left">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  Suivi par Courriel
                </h3>
                <p className="text-muted-foreground text-sm">
                  Vous recevrez un numéro de suivi dès que votre colis 
                  sera expédié de nos installations.
                </p>
              </div>
            </motion.div>

            {/* Actions */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button variant="hero" size="lg" asChild>
                <Link to="/boutique">
                  Continuer mes achats
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/">Retour à l'accueil</Link>
              </Button>
            </motion.div>

            {/* Contact Info */}
            <motion.p
              variants={fadeInUp}
              className="mt-12 text-sm text-muted-foreground"
            >
              Des questions ? Contactez-nous à{' '}
              <a href="mailto:info@sporesexpert.ca" className="text-accent hover:underline">
                info@sporesexpert.ca
              </a>{' '}
              ou au{' '}
              <a href="tel:+18193276786" className="text-accent hover:underline">
                819-327-6786
              </a>
            </motion.p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default CheckoutSuccess;
