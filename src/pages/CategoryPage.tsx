import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProductsByCategory, Product } from '@/data/products';
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

const categoryInfo: Record<string, { title: string; description: string; seoTitle: string; seoDescription: string }> = {
  frais: {
    title: 'Cultures Fraîches',
    description: 'Récoltés à la main, expédiés le jour même. La précision au service de la fraîcheur.',
    seoTitle: 'Cultures Fraîches | MYCÉA',
    seoDescription: 'Champignons frais MYCÉA — Pleurotes, crinière de lion, poulet des bois. Cultivés avec précision dans les Laurentides.',
  },
  seches: {
    title: 'Séchés',
    description: 'Saveurs concentrées, conservation longue durée. L\'essence de nos cultures.',
    seoTitle: 'Séchés | MYCÉA',
    seoDescription: 'Champignons séchés MYCÉA — Mélange forestier artisanal aux saveurs boisées intenses.',
  },
  transformes: {
    title: 'Transformés',
    description: 'Duxelles truffée, marinade forestière. L\'artisanat au service de la gastronomie.',
    seoTitle: 'Transformés | MYCÉA',
    seoDescription: 'Produits transformés MYCÉA — Duxelles truffée et marinade forestière artisanales.',
  },
};

const categoryMapping: Record<string, Product['category']> = {
  frais: 'fresh',
  seches: 'dried',
  transformes: 'transformed',
};

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const categoryKey = category || 'frais';
  const info = categoryInfo[categoryKey] || categoryInfo.frais;
  const products = getProductsByCategory(categoryMapping[categoryKey] || 'fresh');

  return (
    <>
      <SEOHead title={info.seoTitle} description={info.seoDescription} url={`https://www.mycea.ca/champignons/${categoryKey}`} />
      <div className="pt-24 pb-16">
        <section className="py-20 border-b border-border">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center max-w-2xl mx-auto">
              <motion.span variants={fadeInUp} className="inline-block text-xs tracking-[0.3em] uppercase text-accent mb-4">Collection</motion.span>
              <motion.h1 variants={fadeInUp} className="font-serif text-4xl md:text-5xl font-normal text-foreground mb-6">{info.title}</motion.h1>
              <motion.p variants={fadeInUp} className="text-muted-foreground">{info.description}</motion.p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            {products.length > 0 ? (
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <motion.div key={product.id} variants={fadeInUp}>
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-20">
                <p className="text-muted-foreground">Aucun produit dans cette catégorie.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default CategoryPage;