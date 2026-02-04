import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProductsByCategory, Product } from '@/data/products';
import { ProductCard } from '@/components/products/ProductCard';
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
      staggerChildren: 0.1,
    },
  },
};

const categoryInfo: Record<string, { title: string; description: string; seoTitle: string; seoDescription: string }> = {
  frais: {
    title: 'Champignons Frais',
    description: 'Récoltés à la main et expédiés le jour même pour une fraîcheur optimale. Découvrez nos pleurotes colorées, crinière de lion et poulet des bois dans toute leur splendeur.',
    seoTitle: 'Champignons Frais | Pleurotes et Variétés Gourmets',
    seoDescription: 'Champignons frais récoltés à la main dans les Laurentides. Pleurotes bleues, roses, jaunes, royales, crinière de lion et poulet des bois. Livraison express au Québec.',
  },
  seches: {
    title: 'Champignons Séchés',
    description: 'Notre Mélange Forestier soigneusement séché conserve toute sa saveur intense. Parfait pour vos bouillons, risottos, sauces et préparations hivernales.',
    seoTitle: 'Champignons Séchés | Mélange Forestier Premium',
    seoDescription: 'Mélange forestier de champignons séchés artisanalement. Saveurs boisées intenses pour risottos, soupes et sauces. Produit au Québec par Spores Expert.',
  },
  transformes: {
    title: 'Produits Transformés',
    description: 'Découvrez notre gamme artisanale : Duxelles Truffée aux champignons sauvages et truffe d\'été, Marinade Forestière au sucre d\'érable québécois.',
    seoTitle: 'Produits Transformés | Duxelles Truffée et Marinade Forestière',
    seoDescription: 'Produits transformés artisanaux aux champignons. Duxelles truffée, marinade forestière au sucre d\'érable. Créations gourmets québécoises par Spores Expert.',
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
      <SEOHead 
        title={info.seoTitle}
        description={info.seoDescription}
        url={`https://www.sporesexpert.ca/champignons/${categoryKey}`}
      />
      <div className="pt-24 pb-16">
      {/* Header */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block text-accent font-medium mb-4"
            >
              Collection
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6"
            >
              {info.title}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground text-lg"
            >
              {info.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {products.length > 0 ? (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {products.map((product) => (
                <motion.div key={product.id} variants={fadeInUp}>
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                Aucun produit dans cette catégorie pour le moment.
              </p>
            </div>
          )}
        </div>
      </section>
      </div>
    </>
  );
};

export default CategoryPage;
