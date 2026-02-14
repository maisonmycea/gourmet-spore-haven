import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
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
} as const;

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const varieties = [
  { name: 'Pleurote Bleue', image: blueOyster },
  { name: 'Pleurote Rose', image: pinkOyster },
  { name: 'Pleurote Jaune', image: yellowOyster },
  { name: 'Crinière de Lion', image: lionsMane },
  { name: 'Pleurote Royale', image: kingOyster },
  { name: 'Poulet des Bois', image: chickenWoods },
];

const Index = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      <SEOHead 
        title="MYCÉA | Culture Fine du Vivant"
        description="Maison de culture mycélienne boréale. Champignons gourmets d'exception cultivés avec précision dans les Laurentides. Pleurotes, crinière de lion, poulet des bois."
        url="https://www.mycea.ca/"
      />
      <div className="overflow-hidden">
        {/* Hero — Cinématique, immersif */}
        <section className="relative min-h-screen flex items-center">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Cultures mycéliennes MYCÉA"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/40" />
          </div>

          <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-2xl"
            >
              <motion.span
                variants={fadeInUp}
                className="inline-block text-xs tracking-[0.3em] uppercase text-white/50 mb-8"
              >
                Maison de culture mycélienne boréale
              </motion.span>

              <motion.h1
                variants={fadeInUp}
                className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal text-white leading-[1.1] mb-8"
              >
                Culture fine
                <br />
                <span className="text-gradient-hero">du vivant</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-white/60 text-lg md:text-xl leading-relaxed mb-10 max-w-lg"
              >
                Précision. Patience. Science maîtrisée. 
                Des champignons d'exception, nés de la forêt boréale.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap gap-4"
              >
                <Button variant="hero" size="xl" asChild>
                  <Link to="/boutique">
                    Découvrir
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="xl" className="text-white border-white/30 hover:bg-white hover:text-foreground" asChild>
                  <Link to="/a-propos">La Maison</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-px h-16 bg-gradient-to-b from-white/40 to-transparent"
            />
          </motion.div>
        </section>

        {/* Variétés — Galerie sobre */}
        <section className="py-28">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
              className="text-center mb-20"
            >
              <motion.span
                variants={fadeInUp}
                className="inline-block text-xs tracking-[0.3em] uppercase text-accent mb-4"
              >
                Nos Cultures
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-serif text-4xl md:text-5xl font-normal text-foreground"
              >
                Six variétés d'exception
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
            >
              {varieties.map((variety) => (
                <motion.div
                  key={variety.name}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[3/4] overflow-hidden mb-4">
                    <img
                      src={variety.image}
                      alt={variety.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <h3 className="text-xs tracking-[0.15em] uppercase text-center text-muted-foreground group-hover:text-foreground transition-colors">
                    {variety.name}
                  </h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Philosophie — Statement */}
        <section className="py-28 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.span
                variants={fadeInUp}
                className="inline-block text-xs tracking-[0.3em] uppercase text-primary-foreground/40 mb-8"
              >
                Philosophie
              </motion.span>
              <motion.blockquote
                variants={fadeInUp}
                className="font-serif text-3xl md:text-4xl font-normal leading-relaxed text-primary-foreground/90 mb-8"
              >
                « Née de la forêt,
                <br />
                maîtrisée par la science »
              </motion.blockquote>
              <motion.p
                variants={fadeInUp}
                className="text-primary-foreground/50 text-sm leading-relaxed max-w-lg mx-auto"
              >
                Chaque culture est le fruit d'une précision quasi horlogère. 
                Du substrat à l'assiette, nous maîtrisons chaque variable pour 
                révéler le meilleur de chaque variété.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Produits phares */}
        <section className="py-28">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
              className="text-center mb-20"
            >
              <motion.span
                variants={fadeInUp}
                className="inline-block text-xs tracking-[0.3em] uppercase text-accent mb-4"
              >
                Sélection
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-serif text-4xl md:text-5xl font-normal text-foreground"
              >
                Produits phares
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {featuredProducts.slice(0, 4).map((product) => (
                <motion.div key={product.id} variants={fadeInUp}>
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <Button variant="hero" size="lg" asChild>
                <Link to="/boutique">
                  Voir toute la collection
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* CTA — Sobre */}
        <section className="py-28 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-2xl mx-auto text-center"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-serif text-4xl md:text-5xl font-normal text-primary-foreground mb-6"
              >
                L'excellence, livrée
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-primary-foreground/50 text-sm mb-10"
              >
                Récoltés le jour même. Expédiés avec précision.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
                <Button variant="accent" size="xl" asChild>
                  <Link to="/boutique">Commander</Link>
                </Button>
                <Button variant="heroOutline" size="xl" className="text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground hover:text-primary" asChild>
                  <Link to="/contact">Nous écrire</Link>
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