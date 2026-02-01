import { motion } from 'framer-motion';
import { Brain, Heart, Shield, Zap, Sparkles, Dumbbell } from 'lucide-react';
import blueOyster from '@/assets/mushroom-blue-oyster.jpg';
import pinkOyster from '@/assets/mushroom-pink-oyster.jpg';
import lionsMane from '@/assets/mushroom-lions-mane.jpg';
import yellowOyster from '@/assets/mushroom-yellow-oyster.jpg';

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

const benefits = [
  {
    icon: Brain,
    title: 'Santé Cognitive',
    description: 'Les champignons comme la crinière de lion stimulent la production de facteurs de croissance nerveuse, améliorant mémoire et concentration.',
  },
  {
    icon: Shield,
    title: 'Système Immunitaire',
    description: 'Riches en bêta-glucanes, nos champignons renforcent naturellement vos défenses immunitaires.',
  },
  {
    icon: Heart,
    title: 'Santé Cardiovasculaire',
    description: 'Les pleurotes contribuent à réguler le cholestérol et favorisent une bonne santé cardiaque.',
  },
  {
    icon: Zap,
    title: 'Énergie Naturelle',
    description: 'Source de vitamines B, ils aident à maintenir un niveau d\'énergie optimal tout au long de la journée.',
  },
  {
    icon: Sparkles,
    title: 'Antioxydants',
    description: 'Leurs composés antioxydants protègent vos cellules contre le stress oxydatif et le vieillissement.',
  },
  {
    icon: Dumbbell,
    title: 'Protéines Végétales',
    description: 'Alternative excellente aux protéines animales, idéale pour les régimes végétariens et végans.',
  },
];

const mushrooms = [
  {
    name: 'Crinière de Lion',
    image: lionsMane,
    benefits: ['Améliore la mémoire', 'Soutient la concentration', 'Protège les neurones'],
    uses: 'Bouillons, sautés, remplaçant de fruits de mer',
  },
  {
    name: 'Pleurote Bleue',
    image: blueOyster,
    benefits: ['Riche en antioxydants', 'Booste l\'immunité', 'Faible en calories'],
    uses: 'Risottos, pâtes, poêlées',
  },
  {
    name: 'Pleurote Rose',
    image: pinkOyster,
    benefits: ['Source de fer', 'Favorise la digestion', 'Anti-inflammatoire'],
    uses: 'Grillades, woks, tempuras',
  },
  {
    name: 'Pleurote Jaune',
    image: yellowOyster,
    benefits: ['Riche en potassium', 'Vitamines B', 'Santé cardiaque'],
    uses: 'Omelettes, sautés au beurre',
  },
];

const Benefits = () => {
  return (
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
              Nutrition & Santé
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6"
            >
              Bienfaits & Usages
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground text-lg"
            >
              Découvrez les incroyables propriétés de nos champignons gourmets.
              De véritables superaliments pour votre santé et votre bien-être.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={fadeInUp}
                className="p-8 bg-card rounded-2xl border border-border hover:shadow-medium transition-all"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mushroom Details */}
      <section className="py-20 bg-organic-pattern">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block text-accent font-medium mb-4"
            >
              Guide des Variétés
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="font-serif text-4xl font-bold text-foreground"
            >
              Chaque Champignon, Ses Bienfaits
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {mushrooms.map((mushroom) => (
              <motion.div
                key={mushroom.name}
                variants={fadeInUp}
                className="flex flex-col md:flex-row gap-6 p-6 bg-card rounded-2xl border border-border"
              >
                <div className="w-full md:w-40 h-40 rounded-xl overflow-hidden flex-shrink-0">
                  <img
                    src={mushroom.image}
                    alt={mushroom.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    {mushroom.name}
                  </h3>
                  <ul className="space-y-1 mb-4">
                    {mushroom.benefits.map((benefit, index) => (
                      <li key={index} className="text-muted-foreground text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm">
                    <span className="font-medium text-foreground">Usages: </span>
                    <span className="text-muted-foreground">{mushroom.uses}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Benefits;
