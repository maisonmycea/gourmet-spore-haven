import { motion } from 'framer-motion';
import { Clock, Users, ChefHat, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/seo/SEOHead';
import blueOyster from '@/assets/mushroom-blue-oyster.jpg';
import pinkOyster from '@/assets/mushroom-pink-oyster.jpg';
import yellowOyster from '@/assets/mushroom-yellow-oyster.jpg';
import lionsMane from '@/assets/mushroom-lions-mane.jpg';
import kingOyster from '@/assets/mushroom-king-oyster.jpg';
import chickenWoods from '@/assets/mushroom-chicken-woods.jpg';
import forestBlend from '@/assets/mushroom-forest-blend.jpg';
import duxelles from '@/assets/duxelles-truffee.jpg';

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

const recipes = [
  {
    id: 1,
    title: 'Risotto aux Pleurotes Bleues',
    image: blueOyster,
    time: '45 min',
    servings: 4,
    difficulty: 'Moyen',
    description: 'Un risotto crémeux et savoureux mettant en valeur la délicatesse des pleurotes bleues, parfumé au parmesan et au vin blanc.',
    tags: ['Italien', 'Végétarien'],
    ingredients: ['300g pleurotes bleues', '320g riz arborio', '150ml vin blanc', 'Parmesan', 'Bouillon de légumes'],
  },
  {
    id: 2,
    title: 'Wok de Pleurotes Roses',
    image: pinkOyster,
    time: '25 min',
    servings: 2,
    difficulty: 'Facile',
    description: 'Un wok coloré et parfumé aux saveurs asiatiques avec nos pleurotes roses, gingembre frais et sauce soja.',
    tags: ['Asiatique', 'Rapide'],
    ingredients: ['250g pleurotes roses', 'Gingembre frais', 'Sauce soja', 'Légumes de saison', 'Huile de sésame'],
  },
  {
    id: 3,
    title: 'Steak de Crinière de Lion',
    image: lionsMane,
    time: '30 min',
    servings: 2,
    difficulty: 'Facile',
    description: 'La crinière de lion tranchée et poêlée comme un steak, accompagnée d\'une sauce au beurre noisette et herbes fraîches.',
    tags: ['Gastronomique', 'Vegan'],
    ingredients: ['300g crinière de lion', 'Beurre', 'Thym frais', 'Ail', 'Jus de citron'],
  },
  {
    id: 4,
    title: 'Pâtes aux Pleurotes Jaunes',
    image: yellowOyster,
    time: '20 min',
    servings: 4,
    difficulty: 'Facile',
    description: 'Des pâtes fraîches enrobées d\'une sauce crémeuse aux pleurotes jaunes et parmesan, parfumées au basilic frais.',
    tags: ['Italien', 'Rapide'],
    ingredients: ['400g pâtes', '250g pleurotes jaunes', 'Crème 35%', 'Parmesan', 'Basilic frais'],
  },
  {
    id: 5,
    title: 'Médaillons de Pleurotes Royales',
    image: kingOyster,
    time: '35 min',
    servings: 2,
    difficulty: 'Moyen',
    description: 'Tranches épaisses de pleurotes royales saisies à la perfection, servies avec une sauce au vin rouge et échalotes.',
    tags: ['Gastronomique', 'Français'],
    ingredients: ['300g pleurotes royales', 'Vin rouge', 'Échalotes', 'Thym', 'Fond de veau'],
  },
  {
    id: 6,
    title: 'Tacos au Poulet des Bois',
    image: chickenWoods,
    time: '40 min',
    servings: 4,
    difficulty: 'Facile',
    description: 'Des tacos généreux garnis de poulet des bois épicé, avocat crémeux, et salsa fraîche maison.',
    tags: ['Mexicain', 'Végétarien'],
    ingredients: ['350g poulet des bois', 'Tortillas', 'Avocat', 'Lime', 'Épices mexicaines'],
  },
  {
    id: 7,
    title: 'Velouté au Mélange Forestier',
    image: forestBlend,
    time: '35 min',
    servings: 6,
    difficulty: 'Facile',
    description: 'Un velouté onctueux préparé avec notre mélange forestier séché, crème d\'érable et croûtons maison.',
    tags: ['Soupe', 'Réconfortant'],
    ingredients: ['50g mélange forestier', 'Oignon', 'Crème', 'Sirop d\'érable', 'Bouillon'],
  },
  {
    id: 8,
    title: 'Feuilletés à la Duxelles Truffée',
    image: duxelles,
    time: '50 min',
    servings: 6,
    difficulty: 'Avancé',
    description: 'Des feuilletés croustillants garnis de notre duxelles truffée artisanale, parfaits en entrée ou apéritif.',
    tags: ['Français', 'Gastronomique'],
    ingredients: ['1 pot duxelles truffée', 'Pâte feuilletée', 'Jaune d\'œuf', 'Crème fraîche', 'Ciboulette'],
  },
];

const Recipes = () => {
  return (
    <>
      <SEOHead 
        title="Recettes | Inspirations Culinaires aux Champignons"
        description="Découvrez nos recettes créatives pour sublimer vos champignons gourmets. Risotto, wok, steaks végétaux et plus. Inspirations pour tous les niveaux."
        url="https://www.sporesexpert.ca/recettes"
      />
      <div className="pt-24 pb-16">
        {/* Hero */}
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
                Inspirations Culinaires
              </motion.span>
              <motion.h1
                variants={fadeInUp}
                className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6"
              >
                Recettes & Inspirations
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-muted-foreground text-lg"
              >
                Laissez-vous inspirer par nos recettes créatives pour sublimer
                vos champignons gourmets. Des idées simples aux créations gastronomiques.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Recipes Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {recipes.map((recipe) => (
                <motion.article
                  key={recipe.id}
                  variants={fadeInUp}
                  className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-medium transition-all"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {recipe.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                      {recipe.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {recipe.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {recipe.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" />
                        {recipe.servings} pers.
                      </span>
                      <span className="flex items-center gap-1">
                        <ChefHat className="w-3.5 h-3.5" />
                        {recipe.difficulty}
                      </span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-accent p-0 h-auto">
                      Voir la recette <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-gradient-hero">
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
                className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4"
              >
                Recevez Nos Nouvelles Recettes
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-primary-foreground/80 mb-8"
              >
                Inscrivez-vous à notre infolettre pour recevoir des recettes exclusives
                et des conseils de nos chefs.
              </motion.p>
              <motion.form
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              >
                <input
                  type="email"
                  placeholder="Votre courriel"
                  className="flex-1 px-4 py-3 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
                />
                <Button variant="secondary" size="lg">
                  S'inscrire
                </Button>
              </motion.form>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Recipes;
