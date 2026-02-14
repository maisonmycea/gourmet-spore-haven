import { motion } from 'framer-motion';
import { Brain, Heart, Shield, Zap, Sparkles, Dumbbell } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import blueOyster from '@/assets/mushroom-blue-oyster.jpg';
import pinkOyster from '@/assets/mushroom-pink-oyster.jpg';
import lionsMane from '@/assets/mushroom-lions-mane.jpg';
import yellowOyster from '@/assets/mushroom-yellow-oyster.jpg';
import kingOyster from '@/assets/mushroom-king-oyster.jpg';
import chickenWoods from '@/assets/mushroom-chicken-woods.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
} as const;

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const benefits = [
  { icon: Brain, title: 'Santé Cognitive', description: 'La crinière de lion stimule les facteurs de croissance nerveuse, améliorant mémoire et concentration.' },
  { icon: Shield, title: 'Système Immunitaire', description: 'Riches en bêta-glucanes, nos champignons renforcent naturellement vos défenses.' },
  { icon: Heart, title: 'Santé Cardiovasculaire', description: 'Les pleurotes régulent le cholestérol et favorisent une bonne santé cardiaque.' },
  { icon: Zap, title: 'Énergie Naturelle', description: 'Source de vitamines B pour un niveau d\'énergie optimal tout au long de la journée.' },
  { icon: Sparkles, title: 'Antioxydants', description: 'Composés antioxydants protégeant vos cellules contre le stress oxydatif.' },
  { icon: Dumbbell, title: 'Protéines Végétales', description: 'Alternative excellente aux protéines animales, idéale pour les régimes végétariens.' },
];

const mushrooms = [
  { name: 'Crinière de Lion', image: lionsMane, benefits: ['Mémoire', 'Concentration', 'Neuroprotection'], uses: 'Bouillons, sautés, remplaçant de fruits de mer' },
  { name: 'Pleurote Bleue', image: blueOyster, benefits: ['Antioxydants', 'Immunité', 'Faible en calories'], uses: 'Risottos, pâtes, poêlées' },
  { name: 'Pleurote Rose', image: pinkOyster, benefits: ['Source de fer', 'Digestion', 'Anti-inflammatoire'], uses: 'Grillades, woks, tempuras' },
  { name: 'Pleurote Jaune', image: yellowOyster, benefits: ['Potassium', 'Vitamines B', 'Santé cardiaque'], uses: 'Omelettes, sautés au beurre' },
  { name: 'Pleurote Royale', image: kingOyster, benefits: ['Ergothionéine', 'Vitamine D', 'Texture charnue'], uses: 'Médaillons grillés, rôti au four' },
  { name: 'Poulet des Bois', image: chickenWoods, benefits: ['Protéines', 'Bêta-glucanes', 'Antimicrobien'], uses: 'Nuggets, ragoûts, tacos' },
];

const Benefits = () => {
  return (
    <>
      <SEOHead 
        title="Bienfaits | MYCÉA"
        description="Découvrez les propriétés exceptionnelles des champignons MYCÉA. Santé cognitive, immunité, énergie naturelle."
        url="https://www.mycea.ca/bienfaits"
      />
      <div className="pt-24 pb-16">
        <section className="py-20 border-b border-border">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center max-w-2xl mx-auto">
              <motion.span variants={fadeInUp} className="inline-block text-xs tracking-[0.3em] uppercase text-accent mb-4">
                Bienfaits
              </motion.span>
              <motion.h1 variants={fadeInUp} className="font-serif text-4xl md:text-5xl font-normal text-foreground mb-6">
                Le pouvoir du mycélium
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-muted-foreground">
                Chaque variété recèle des propriétés nutritionnelles remarquables.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b) => (
                <motion.div key={b.title} variants={fadeInUp} className="p-8 border border-border hover:border-accent/30 transition-colors">
                  <b.icon className="w-6 h-6 text-accent mb-6" />
                  <h3 className="font-serif text-xl text-foreground mb-3">{b.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{b.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-16">
              <motion.span variants={fadeInUp} className="inline-block text-xs tracking-[0.3em] uppercase text-accent mb-4">Guide</motion.span>
              <motion.h2 variants={fadeInUp} className="font-serif text-3xl md:text-4xl font-normal text-foreground">
                Chaque variété, ses vertus
              </motion.h2>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mushrooms.map((m) => (
                <motion.div key={m.name} variants={fadeInUp} className="flex flex-col md:flex-row gap-6 p-6 bg-card border border-border">
                  <div className="w-full md:w-36 h-36 overflow-hidden flex-shrink-0">
                    <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg text-foreground mb-3">{m.name}</h3>
                    <ul className="space-y-1 mb-3">
                      {m.benefits.map((b, i) => (
                        <li key={i} className="text-muted-foreground text-xs flex items-center gap-2">
                          <span className="w-1 h-1 bg-accent rounded-full" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs">
                      <span className="text-foreground">Usages : </span>
                      <span className="text-muted-foreground">{m.uses}</span>
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Benefits;