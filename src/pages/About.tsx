import { motion } from 'framer-motion';
import { Award, Users, Leaf, Heart, Target, Eye, MapPin, Thermometer, Mountain } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
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
    description: 'Culture responsable dans les Laurentides avec un impact environnemental minimal.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Standards de qualité exceptionnels dignes des tables gastronomiques.',
  },
  {
    icon: Users,
    title: 'Communauté',
    description: 'Partenariats avec les restaurateurs et producteurs locaux du Québec.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'Amour inconditionnel pour le monde fascinant des champignons.',
  },
];

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
        title="À Propos | Notre Histoire et Nos Valeurs"
        description="Découvrez Spores Expert, producteur artisanal de champignons gourmets dans les Laurentides. Notre passion, notre savoir-faire et notre engagement envers la qualité."
        url="https://www.sporesexpert.ca/a-propos"
      />
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
                Spores Expert
                <br />
                <span className="text-accent">Laurentides</span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-muted-foreground text-lg leading-relaxed"
              >
                Nichés au cœur des Laurentides à Sainte-Lucie-des-Laurentides, nous cultivons 
                avec passion des champignons gourmets d'exception. Notre mission : offrir aux 
                restaurateurs et gastronomes du Québec des produits d'une fraîcheur et d'une 
                qualité incomparables.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeInUp}
                  className="text-center"
                >
                  <div className="font-serif text-4xl md:text-5xl font-bold text-accent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <span className="inline-block text-accent font-medium mb-4">
                  Notre Parcours
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  Une Passion Née dans les Laurentides
                </h2>
              </motion.div>

              <motion.div variants={fadeInUp} className="prose prose-lg mx-auto text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  Spores Expert est né d'une passion profonde pour la mycologie et d'un désir 
                  de partager les trésors cachés du monde fongique. Installés dans les montagnes 
                  des Laurentides, nous avons créé un environnement de culture idéal, où chaque 
                  champignon bénéficie de soins artisanaux.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Notre expertise scientifique, combinée à un savoir-faire traditionnel, nous 
                  permet de produire des champignons d'une qualité exceptionnelle. De la 
                  sélection rigoureuse des souches à la récolte manuelle, chaque étape est 
                  réalisée avec minutie.
                </p>
                <p className="text-lg leading-relaxed">
                  Aujourd'hui, nous fournissons les tables les plus exigeantes du Québec, 
                  des restaurants gastronomiques aux cuisiniers amateurs passionnés. Notre 
                  gamme s'étend des pleurotes colorées aux produits transformés artisanaux, 
                  tous porteurs de cette excellence qui nous définit.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Location Advantages */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-12"
            >
              <motion.span
                variants={fadeInUp}
                className="inline-block text-accent font-medium mb-4"
              >
                Notre Terroir
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-serif text-3xl md:text-4xl font-bold text-foreground"
              >
                Les Laurentides, Un Écrin Naturel
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8"
            >
              <motion.div variants={fadeInUp} className="p-8 bg-card rounded-3xl border border-border text-center">
                <div className="w-14 h-14 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                  <Mountain className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  Air Pur des Montagnes
                </h3>
                <p className="text-muted-foreground text-sm">
                  L'air frais et pur des Laurentides offre un environnement de croissance optimal, 
                  exempt de pollution.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="p-8 bg-card rounded-3xl border border-border text-center">
                <div className="w-14 h-14 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                  <Thermometer className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  Climat Idéal
                </h3>
                <p className="text-muted-foreground text-sm">
                  Les variations de température naturelles favorisent le développement 
                  de champignons aux saveurs intenses.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="p-8 bg-card rounded-3xl border border-border text-center">
                <div className="w-14 h-14 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                  <MapPin className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  Proximité Montréal
                </h3>
                <p className="text-muted-foreground text-sm">
                  À moins de 2h de Montréal, nous garantissons une livraison express 
                  pour une fraîcheur maximale.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
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
                  Fournir aux chefs et gastronomes du Québec des champignons gourmets 
                  d'exception, cultivés localement avec passion et expertise. Nous nous 
                  engageons à éduquer notre communauté sur les propriétés nutritionnelles 
                  et culinaires extraordinaires de ces trésors de la nature.
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
                  Devenir la référence québécoise des champignons gourmets, reconnus pour 
                  notre excellence, notre innovation et notre engagement envers une 
                  production durable. Nous aspirons à transformer la perception des 
                  champignons et à les placer au cœur de la gastronomie locale.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-secondary">
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
                  className="text-center p-6 rounded-2xl bg-card border border-border"
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
        <section className="py-20 bg-gradient-to-br from-stone-800 via-stone-900 to-slate-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <span className="inline-block text-blue-300 font-medium mb-4">
                  Notre Savoir-Faire
                </span>
                <h2 className="font-serif text-4xl font-bold text-white">
                  Du Substrat à Votre Assiette
                </h2>
              </motion.div>

              <div className="space-y-8">
                {[
                  { step: '01', title: 'Sélection des Souches', desc: 'Nous sélectionnons rigoureusement les meilleures souches pour garantir qualité et saveur exceptionnelles.' },
                  { step: '02', title: 'Culture Contrôlée', desc: 'Nos champignons grandissent dans des conditions optimales, sans pesticides ni additifs, dans notre installation des Laurentides.' },
                  { step: '03', title: 'Récolte Manuelle', desc: 'Chaque champignon est récolté à la main au moment optimal de maturité pour une fraîcheur garantie.' },
                  { step: '04', title: 'Livraison Express', desc: 'Expédition le jour même de la récolte partout au Québec pour une fraîcheur incomparable.' },
                ].map((item) => (
                  <motion.div
                    key={item.step}
                    variants={fadeInUp}
                    className="flex items-start gap-6 p-6 bg-white/10 backdrop-blur-sm rounded-2xl"
                  >
                    <span className="font-serif text-3xl font-bold text-blue-300">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-white/80">
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
