import { motion } from 'framer-motion';
import { SEOHead } from '@/components/seo/SEOHead';
import heroImage from '@/assets/hero-mushrooms.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
} as const;

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const stats = [
  { value: '6', label: 'Variétés cultivées' },
  { value: '100%', label: 'Production locale' },
  { value: '48h', label: 'Livraison fraîcheur' },
  { value: '2024', label: 'Année de fondation' },
];

const About = () => {
  return (
    <>
      <SEOHead 
        title="La Maison | MYCÉA"
        description="Maison MYCÉA — Culture mycélienne de haute précision dans les Laurentides. Précision, patience, science maîtrisée, respect du vivant."
        url="https://www.mycea.ca/a-propos"
      />
      <div className="pt-24 pb-16">
        {/* Hero */}
        <section className="relative py-28 overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroImage} alt="Maison MYCÉA" className="w-full h-full object-cover opacity-15" />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.span variants={fadeInUp} className="inline-block text-xs tracking-[0.3em] uppercase text-accent mb-6">
                La Maison
              </motion.span>
              <motion.h1 variants={fadeInUp} className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-foreground mb-8">
                Maison MYCÉA
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                Nichée au cœur des Laurentides, Maison MYCÉA est un laboratoire naturel 
                où la science rencontre le vivant. Chaque culture est une œuvre de précision.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 border-y border-border">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat) => (
                <motion.div key={stat.label} variants={fadeInUp} className="text-center">
                  <div className="font-serif text-4xl md:text-5xl font-normal text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs tracking-[0.15em] uppercase text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Story */}
        <section className="py-28">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-3xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <span className="inline-block text-xs tracking-[0.3em] uppercase text-accent mb-4">
                  Notre Parcours
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-normal text-foreground">
                  L'artisanat scientifique
                </h2>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-8 text-muted-foreground text-lg leading-relaxed">
                <p>
                  MYCÉA est née d'une conviction : la mycologie est un art de précision. 
                  Pas une ferme. Une maison de culture fine, où chaque variable — température, 
                  humidité, substrat — est maîtrisée avec une rigueur quasi horlogère.
                </p>
                <p>
                  Installée dans la pureté de l'air des Laurentides, notre maison de culture 
                  conjugue expertise scientifique et respect profond du vivant. De la sélection 
                  des souches à la récolte manuelle, chaque étape est un acte de patience.
                </p>
                <p>
                  Aujourd'hui, les tables les plus exigeantes du Québec nous font confiance. 
                  Parce que l'excellence n'est pas un choix. C'est une discipline.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Process */}
        <section className="py-28 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-3xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <span className="inline-block text-xs tracking-[0.3em] uppercase text-primary-foreground/40 mb-4">
                  Processus
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-normal text-primary-foreground">
                  Du substrat à votre assiette
                </h2>
              </motion.div>

              <div className="space-y-6">
                {[
                  { step: '01', title: 'Sélection des Souches', desc: 'Sélection rigoureuse des meilleures souches pour garantir qualité et saveur exceptionnelles.' },
                  { step: '02', title: 'Culture Contrôlée', desc: 'Conditions optimales maîtrisées avec précision. Sans pesticides, sans compromis.' },
                  { step: '03', title: 'Récolte Manuelle', desc: 'Chaque champignon est récolté à la main, au moment exact de maturité.' },
                  { step: '04', title: 'Livraison Express', desc: 'Expédition le jour même. La fraîcheur n\'attend pas.' },
                ].map((item) => (
                  <motion.div
                    key={item.step}
                    variants={fadeInUp}
                    className="flex items-start gap-8 p-8 border border-primary-foreground/10"
                  >
                    <span className="font-serif text-3xl text-primary-foreground/20">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl text-primary-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-primary-foreground/50 text-sm">
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
    </>
  );
};

export default About;