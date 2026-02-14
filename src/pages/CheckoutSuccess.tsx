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
} as const;

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const CheckoutSuccess = () => {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <>
      <SEOHead 
        title="Commande Confirmée | MYCÉA"
        description="Votre commande MYCÉA a été confirmée. Préparation avec soin."
        url="https://www.mycea.ca/commande-confirmee"
      />
      <div className="pt-24 pb-16 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-2xl mx-auto text-center">
            <motion.div variants={fadeInUp} className="w-20 h-20 mx-auto border border-accent/30 flex items-center justify-center mb-8">
              <CheckCircle className="w-10 h-10 text-accent" />
            </motion.div>

            <motion.h1 variants={fadeInUp} className="font-serif text-4xl md:text-5xl font-normal text-foreground mb-4">
              Merci
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-muted-foreground mb-10">
              Votre commande a été confirmée. Un courriel de confirmation suivra.
            </motion.p>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-4 mb-12">
              <div className="p-6 border border-border text-left">
                <Package className="w-5 h-5 text-accent mb-4" />
                <h3 className="font-serif text-lg text-foreground mb-2">Préparation</h3>
                <p className="text-muted-foreground text-sm">Récoltés frais. Expédition sous 24-48h.</p>
              </div>
              <div className="p-6 border border-border text-left">
                <Mail className="w-5 h-5 text-accent mb-4" />
                <h3 className="font-serif text-lg text-foreground mb-2">Suivi</h3>
                <p className="text-muted-foreground text-sm">Numéro de suivi dès l'expédition.</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/boutique">Continuer <ArrowRight className="w-4 h-4" /></Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/">Accueil</Link>
              </Button>
            </motion.div>

            <motion.p variants={fadeInUp} className="mt-12 text-xs text-muted-foreground">
              Questions ? <a href="mailto:info@mycea.ca" className="text-accent hover:underline">info@mycea.ca</a>
              {' '}· <a href="tel:+18193276786" className="text-accent hover:underline">819-327-6786</a>
            </motion.p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default CheckoutSuccess;