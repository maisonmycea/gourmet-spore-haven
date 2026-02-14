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
} as const;

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const recipes = [
  { id: 1, title: 'Risotto aux Pleurotes Bleues', image: blueOyster, time: '45 min', servings: 4, difficulty: 'Moyen', description: 'Risotto crémeux, parmesan et vin blanc.', tags: ['Italien', 'Végétarien'] },
  { id: 2, title: 'Wok de Pleurotes Roses', image: pinkOyster, time: '25 min', servings: 2, difficulty: 'Facile', description: 'Saveurs asiatiques, gingembre et sésame.', tags: ['Asiatique', 'Rapide'] },
  { id: 3, title: 'Steak de Crinière de Lion', image: lionsMane, time: '30 min', servings: 2, difficulty: 'Facile', description: 'Poêlé au beurre noisette et herbes fraîches.', tags: ['Gastronomique'] },
  { id: 4, title: 'Pâtes aux Pleurotes Jaunes', image: yellowOyster, time: '20 min', servings: 4, difficulty: 'Facile', description: 'Sauce crémeuse, parmesan et basilic.', tags: ['Italien', 'Rapide'] },
  { id: 5, title: 'Médaillons Royaux', image: kingOyster, time: '35 min', servings: 2, difficulty: 'Moyen', description: 'Saisies au vin rouge et échalotes.', tags: ['Gastronomique', 'Français'] },
  { id: 6, title: 'Tacos au Poulet des Bois', image: chickenWoods, time: '40 min', servings: 4, difficulty: 'Facile', description: 'Épicé, avocat et salsa fraîche.', tags: ['Mexicain'] },
  { id: 7, title: 'Velouté Forestier', image: forestBlend, time: '35 min', servings: 6, difficulty: 'Facile', description: 'Onctueux, crème d\'érable et croûtons.', tags: ['Soupe'] },
  { id: 8, title: 'Feuilletés Duxelles Truffée', image: duxelles, time: '50 min', servings: 6, difficulty: 'Avancé', description: 'Croustillants, duxelles truffée artisanale.', tags: ['Français', 'Gastronomique'] },
];

const Recipes = () => {
  return (
    <>
      <SEOHead 
        title="Recettes | MYCÉA"
        description="Inspirations culinaires par Maison MYCÉA. Recettes créatives pour sublimer nos champignons d'exception."
        url="https://www.mycea.ca/recettes"
      />
      <div className="pt-24 pb-16">
        <section className="py-20 border-b border-border">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center max-w-2xl mx-auto">
              <motion.span variants={fadeInUp} className="inline-block text-xs tracking-[0.3em] uppercase text-accent mb-4">
                Inspirations
              </motion.span>
              <motion.h1 variants={fadeInUp} className="font-serif text-4xl md:text-5xl font-normal text-foreground mb-6">
                Recettes
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-muted-foreground">
                Des créations simples aux compositions gastronomiques.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recipes.map((recipe) => (
                <motion.article
                  key={recipe.id}
                  variants={fadeInUp}
                  className="group bg-card border border-border overflow-hidden hover:border-accent/30 transition-colors"
                >
                  <div className="aspect-video overflow-hidden">
                    <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {recipe.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 border border-border text-xs tracking-[0.1em] uppercase text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-serif text-lg text-foreground mb-2 group-hover:text-accent transition-colors">{recipe.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{recipe.description}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{recipe.time}</span>
                      <span className="flex items-center gap-1"><Users className="w-3 h-3" />{recipe.servings} pers.</span>
                      <span className="flex items-center gap-1"><ChefHat className="w-3 h-3" />{recipe.difficulty}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-accent p-0 h-auto text-xs tracking-[0.1em] uppercase">
                      Voir la recette <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-xl mx-auto text-center">
              <motion.h2 variants={fadeInUp} className="font-serif text-3xl font-normal text-primary-foreground mb-4">
                Nouvelles recettes
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-primary-foreground/50 text-sm mb-8">
                Inscrivez-vous pour recevoir nos inspirations culinaires.
              </motion.p>
              <motion.form variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Votre courriel"
                  className="flex-1 px-4 py-3 bg-primary-foreground/5 border border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:ring-1 focus:ring-accent text-sm"
                />
                <Button variant="accent" size="lg">S'inscrire</Button>
              </motion.form>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Recipes;