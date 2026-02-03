import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf, Award, Truck, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { SEOHead } from '@/components/seo/SEOHead';
import heroImage from '@/assets/hero-mushrooms.jpg';
import blueOyster from '@/assets/mushroom-blue-oyster.jpg';
import pinkOyster from '@/assets/mushroom-pink-oyster.jpg';
import yellowOyster from '@/assets/mushroom-yellow-oyster.jpg';
import lionsMane from '@/assets/mushroom-lions-mane.jpg';
import kingOyster from '@/assets/mushroom-king-oyster.jpg';
import chickenWoods from '@/assets/mushroom-chicken-woods.jpg';
import { ProductCard } from '@/components/products/ProductCard';
import { getFeaturedProducts } from '@/data/products';

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

const varieties = [
  { name: 'Pleurote Bleue', image: blueOyster, color: 'bg-mushroom-blue/20' },
  { name: 'Pleurote Rose', image: pinkOyster, color: 'bg-mushroom-pink/20' },
  { name: 'Pleurote Jaune', image: yellowOyster, color: 'bg-mushroom-yellow/20' },
  { name: 'Crinière de Lion', image: lionsMane, color: 'bg-mushroom-cream' },
  { name: 'Pleurote Royale', image: kingOyster, color: 'bg-amber-100' },
  { name: 'Poulet des Bois', image: chickenWoods, color: 'bg-orange-100' },
];

const benefits = [
  {
    icon: Leaf,
    title: 'Culture Artisanale',
    description: 'Cultivés avec passion dans nos installations locales, sans pesticides ni produits chimiques.',
  },
  {
    icon: Award,
    title: 'Qualité Premium',
    description: 'Sélection rigoureuse pour garantir des champignons d\'exception à chaque commande.',
  },
  {
    icon: Truck,
    title: 'Fraîcheur Garantie',
    description: 'Récoltés et expédiés le jour même pour une fraîcheur optimale.',
  },
];

const Index = () => {
  const featuredProducts = getFeaturedProducts();
  const [currentSlide, setCurrentSlide] = useState(0);
  const visibleCount = 4;
  const maxSlide = varieties.length - visibleCount;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [maxSlide]);
  return (
    <>
      <SEOHead 
        title="Spores Expert | Champignons Gourmets Premium au Québec"
        description="Découvrez notre collection exclusive de champignons gourmets cultivés avec passion. Pleurotes colorées, crinière de lion, poulet des bois. Qualité artisanale, fraîcheur garantie à Sainte-Lucie-des-Laurentides."
        url="https://www.sporesexpert.ca/"
      />
      <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Champignons gourmets premium"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6"
            >
              ✨ L'excellence des champignons gourmets
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            >
              Saveurs
              <br />
              <span className="text-pink-300">Extraordinaires</span>
              <br />
              de la Nature
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-white/90 text-lg md:text-xl leading-relaxed mb-8 max-w-xl"
            >
              Découvrez notre collection exclusive de champignons gourmets cultivés 
              avec passion. Pleurotes colorées, crinière de lion... Des saveurs 
              uniques pour sublimer votre cuisine.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4"
            >
              <Button variant="hero" size="xl" asChild>
                <Link to="/boutique">
                  Découvrir la boutique
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" className="text-white border-white/80 hover:bg-white hover:text-foreground" asChild>
                <Link to="/a-propos">Notre savoir-faire</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Varieties Section */}
      <section className="py-24 bg-organic-pattern">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block text-accent font-medium mb-4"
            >
              Nos Variétés
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6"
            >
              Une Palette de Couleurs
              <br />
              et de Saveurs
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Chaque variété offre une expérience gustative unique. 
              Des textures délicates aux arômes subtils, explorez notre collection.
            </motion.p>
          </motion.div>

          <div className="relative">
            {/* Carousel Navigation */}
            <div className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10">
              <button
                onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
                disabled={currentSlide === 0}
                className="p-2 rounded-full bg-white shadow-lg hover:bg-accent hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>
            <div className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10">
              <button
                onClick={() => setCurrentSlide(Math.min(maxSlide, currentSlide + 1))}
                disabled={currentSlide >= maxSlide}
                className="p-2 rounded-full bg-white shadow-lg hover:bg-accent hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Carousel Container */}
            <div className="overflow-hidden">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={staggerContainer}
                className="flex gap-6 transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * (100 / visibleCount + 2.4)}%)` }}
              >
                {varieties.map((variety) => (
                  <motion.div
                    key={variety.name}
                    variants={fadeInUp}
                    whileHover={{ y: -10 }}
                    className="group cursor-pointer flex-shrink-0"
                    style={{ width: `calc(${100 / visibleCount}% - ${(6 * (visibleCount - 1)) / visibleCount}px)` }}
                  >
                    <div className={`${variety.color} rounded-2xl p-4 mb-4 aspect-square overflow-hidden`}>
                      <img
                        src={variety.image}
                        alt={variety.name}
                        className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-center text-foreground group-hover:text-accent transition-colors">
                      {variety.name}
                    </h3>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: maxSlide + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === idx ? 'w-8 bg-accent' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={fadeInUp}
                className="text-center p-8"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-2xl flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block text-accent font-medium mb-4"
            >
              Nos Best-sellers
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6"
            >
              Produits Phares
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Découvrez les champignons préférés de nos clients.
              Qualité exceptionnelle, saveurs incomparables.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {featuredProducts.map((product) => (
              <motion.div key={product.id} variants={fadeInUp}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button variant="hero" size="lg" asChild>
              <Link to="/boutique">
                Voir tous les produits
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-stone-800 via-stone-900 to-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-serif text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Prêt à Sublimer
              <br />
              Votre Cuisine ?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-white/85 text-lg mb-8"
            >
              Rejoignez des centaines de gastronomes et restaurateurs 
              qui font confiance à Spores Expert.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
              <Button variant="secondary" size="xl" asChild>
                <Link to="/boutique">Commander maintenant</Link>
              </Button>
              <Button variant="heroOutline" size="xl" className="text-white border-white/80 hover:bg-white hover:text-foreground" asChild>
                <Link to="/contact">Nous contacter</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Index;
