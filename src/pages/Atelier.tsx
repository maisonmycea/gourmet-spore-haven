import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const } },
} as const;

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const transformedProducts = products.filter(p => p.category === 'transformed');

const Atelier = () => {
  const { addToCart } = useCart();

  return (
    <>
      <SEOHead
        title="L'Atelier | Produits transformés MYCÉA"
        description="Découvrez notre gamme de produits transformés d'exception : duxelles truffée, marinade forestière, poudres aromatiques et huiles infusées."
        url="https://www.mycea.ca/atelier"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.p
              variants={fadeIn}
              className="text-[11px] tracking-[0.4em] uppercase text-accent mb-6"
            >
              L'Atelier
            </motion.p>
            <motion.h1
              variants={fadeIn}
              className="font-serif text-4xl md:text-6xl lg:text-7xl font-normal text-foreground leading-tight mb-8"
            >
              Produits transformés
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
            >
              Au-delà du champignon frais, Maison MYCÉA développe une gamme de produits transformés d'exception.
              Huiles infusées, condiments, poudres aromatiques — chaque produit prolonge l'univers mycélien dans votre cuisine.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {transformedProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={fadeIn}
                className="group border border-border hover:border-accent/30 transition-colors duration-300"
              >
                <Link to={`/produit/${product.id}`}>
                  <div className="aspect-square overflow-hidden bg-secondary/20">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                </Link>
                <div className="p-8">
                  <Link to={`/produit/${product.id}`}>
                    <h2 className="font-serif text-xl md:text-2xl text-foreground mb-3 group-hover:text-accent transition-colors">
                      {product.name}
                    </h2>
                  </Link>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {product.description}
                  </p>

                  {product.ingredients && (
                    <p className="text-muted-foreground/60 text-xs mb-6">
                      {product.ingredients.join(' · ')}
                    </p>
                  )}

                  <div className="flex items-center justify-between">
                    <span className="font-serif text-lg text-foreground">
                      {product.price.toFixed(2)}&nbsp;$
                    </span>
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-xs tracking-[0.1em] uppercase"
                      onClick={() => addToCart(product)}
                    >
                      Ajouter
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p variants={fadeIn} className="text-muted-foreground/50 text-xs tracking-[0.1em] uppercase mb-8">
              Disponibilité sur demande — Réservé aux professionnels et épiceries fines
            </motion.p>
            <motion.div variants={fadeIn}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-xs tracking-[0.15em] uppercase font-medium hover:bg-primary/90 transition-colors"
              >
                Nous contacter
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Atelier;
