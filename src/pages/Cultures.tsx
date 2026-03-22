import { motion } from 'framer-motion';
import { getProductsByCategory } from '@/data/products';
import { ProductCard } from '@/components/products/ProductCard';
import { SEOHead } from '@/components/seo/SEOHead';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
} as const;

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const Cultures = () => {
  const freshProducts = getProductsByCategory('fresh');

  return (
    <>
      <SEOHead
        title="Cultures | MYCÉA"
        description="Nos variétés de champignons frais cultivés avec précision dans les Laurentides — pleurotes, crinière de lion, maitake, et plus."
        url="https://www.mycea.ca/cultures"
      />
      <div className="pt-24 pb-16">
        <section className="py-20 border-b border-border">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-center max-w-2xl mx-auto"
            >
              <motion.span variants={fadeInUp} className="inline-block text-xs tracking-[0.3em] uppercase text-accent mb-4">
                Nos variétés
              </motion.span>
              <motion.h1 variants={fadeInUp} className="font-serif text-4xl md:text-5xl font-normal text-foreground mb-6">
                Cultures
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-muted-foreground">
                Champignons gourmets frais, cultivés avec soin dans nos installations des Laurentides.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {freshProducts.map((product) => (
                <motion.div key={product.id} variants={fadeInUp}>
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Cultures;
