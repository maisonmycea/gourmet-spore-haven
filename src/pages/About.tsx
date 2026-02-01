import { motion } from 'framer-motion';
import { Award, Users, Leaf, Heart, Target, Eye } from 'lucide-react';
import heroImage from '@/assets/hero-mushrooms.jpg';

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

const values = [
  {
    icon: Leaf,
    title: 'Durabilité',
    description: 'Culture responsable avec un impact environnemental minimal.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Standards de qualité exceptionnels à chaque étape.',
  },
  {
    icon: Users,
    title: 'Communauté',
    description: 'Partenariats locaux et soutien aux producteurs.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'Amour inconditionnel pour le monde des champignons.',
  },
];

const About = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Notre histoire"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block text-accent font-medium mb-4"
            >
              Notre Histoire
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Experts en Champignons
              <br />
              <span className="text-accent">Gourmets</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              Depuis notre création, nous cultivons avec passion des champignons d'exception.
              Notre mission : faire découvrir au plus grand nombre les saveurs uniques
              et les bienfaits extraordinaires de ces trésors de la nature.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12"
          >
            <motion.div variants={fadeInUp} className="p-8 bg-card rounded-3xl border border-border">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Notre Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Démocratiser l'accès aux champignons gourmets de haute qualité tout en
                éduquant le public sur leurs incroyables propriétés nutritionnelles et
                culinaires. Nous croyons que chacun mérite de découvrir ces saveurs
                exceptionnelles.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="p-8 bg-card rounded-3xl border border-border">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Notre Vision
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Devenir la référence française des champignons gourmets, reconnus pour
                notre excellence, notre innovation et notre engagement envers une
                production durable et responsable.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
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
              Ce Qui Nous Anime
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="font-serif text-4xl font-bold text-foreground"
            >
              Nos Valeurs
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                className="text-center p-6 rounded-2xl hover:bg-secondary transition-colors"
              >
                <div className="w-16 h-16 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <span className="inline-block text-primary-foreground/70 font-medium mb-4">
                Notre Savoir-Faire
              </span>
              <h2 className="font-serif text-4xl font-bold text-primary-foreground">
                Du Substrat à Votre Assiette
              </h2>
            </motion.div>

            <div className="space-y-8">
              {[
                { step: '01', title: 'Sélection des Souches', desc: 'Nous sélectionnons rigoureusement les meilleures souches pour garantir qualité et saveur.' },
                { step: '02', title: 'Culture Contrôlée', desc: 'Nos champignons grandissent dans des conditions optimales, sans pesticides ni additifs.' },
                { step: '03', title: 'Récolte Manuelle', desc: 'Chaque champignon est récolté à la main au moment optimal de maturité.' },
                { step: '04', title: 'Livraison Express', desc: 'Expédition le jour même de la récolte pour une fraîcheur garantie.' },
              ].map((item) => (
                <motion.div
                  key={item.step}
                  variants={fadeInUp}
                  className="flex items-start gap-6 p-6 bg-primary-foreground/5 backdrop-blur-sm rounded-2xl"
                >
                  <span className="font-serif text-3xl font-bold text-accent">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-primary-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-primary-foreground/70">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
