import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Truck, Package, FlaskConical } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import heroImage from '@/assets/hero-mushrooms.jpg';
import forestImage from '@/assets/forest-atmosphere.jpg';
import blueOyster from '@/assets/mushroom-blue-oyster.jpg';
import pinkOyster from '@/assets/mushroom-pink-oyster.jpg';
import kingOyster from '@/assets/mushroom-king-oyster.jpg';
import lionsMane from '@/assets/mushroom-lions-mane.jpg';
import chickenWoods from '@/assets/mushroom-chicken-woods.jpg';

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const } },
} as const;

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cultures = [
  {
    name: 'Pleurote bleue',
    description: 'Chair dense. Saveur délicate. Texture remarquable. Idéale pour une cuisine précise et contemporaine.',
    image: blueOyster,
  },
  {
    name: 'Pleurote rose',
    description: 'Profil aromatique intense. Présence visuelle spectaculaire. Pour des assiettes signatures.',
    image: pinkOyster,
  },
  {
    name: 'Pleurote royale',
    description: 'Texture charnue, saveur umami profonde. Le roi des pleurotes pour les grandes tables.',
    image: kingOyster,
  },
  {
    name: 'Crinière de lion',
    description: 'Texture de homard, bienfaits cognitifs reconnus. Un trésor culinaire et fonctionnel.',
    image: lionsMane,
  },
  {
    name: 'Poulet des bois',
    description: 'Complexité forestière. Umami naturel. Une variété recherchée par les cuisines gastronomiques.',
    image: chickenWoods,
  },
];

const proPoints = [
  { icon: FlaskConical, label: 'Production contrôlée' },
  { icon: Leaf, label: 'Fraîcheur optimale' },
  { icon: Package, label: 'Formats adaptés' },
  { icon: Truck, label: 'Livraison régionale' },
];

const Index = () => {
  return (
    <>
      <SEOHead
        title="MYCÉA | Champignons boréaux d'exception"
        description="Maison de culture mycélienne boréale. Champignons gastronomiques d'exception cultivés avec précision. Partenaire des cuisines exigeantes."
        url="https://www.mycea.ca/"
      />
      <div className="overflow-hidden">

        {/* ═══════════ HERO ═══════════ */}
        <section className="relative min-h-screen flex items-center justify-center">
          <div className="absolute inset-0">
            <img src={heroImage} alt="Champignons gastronomiques MYCÉA" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="relative z-10 text-center px-6 max-w-3xl">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.p
                variants={fadeIn}
                className="text-[11px] tracking-[0.4em] uppercase text-white/40 mb-8"
              >
                Maison de culture mycélienne boréale
              </motion.p>

              <motion.h1
                variants={fadeIn}
                className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal text-white leading-[1.05] mb-6"
              >
                MAISON MYCÉA
              </motion.h1>

              <motion.p
                variants={fadeIn}
                className="font-serif text-xl md:text-2xl text-white/70 italic mb-12"
              >
                Champignons boréaux d'exception
              </motion.p>

              <motion.div variants={fadeIn} className="space-y-3 text-white/50 text-sm md:text-base mb-14">
                <p>Cultivés avec précision.</p>
                <p>Inspirés par la forêt.</p>
                <p>Pensés pour la gastronomie.</p>
              </motion.div>

              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-foreground text-xs tracking-[0.15em] uppercase font-medium hover:bg-white/90 transition-colors"
                >
                  Approvisionnement pour chefs
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/boutique"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-white/25 text-white text-xs tracking-[0.15em] uppercase font-medium hover:bg-white/10 transition-colors"
                >
                  Découvrir nos cultures
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
              className="w-px h-16 bg-gradient-to-b from-white/30 to-transparent"
            />
          </motion.div>
        </section>

        {/* ═══════════ POSITIONNEMENT ═══════════ */}
        <section className="py-32 lg:py-40">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="max-w-3xl mx-auto"
            >
              <motion.h2
                variants={fadeIn}
                className="font-serif text-3xl md:text-5xl lg:text-6xl font-normal text-foreground leading-tight mb-12 text-center"
              >
                La culture mycélienne<br />élevée au rang d'art.
              </motion.h2>

              <motion.div variants={fadeIn} className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed text-center">
                <p>
                  MYCÉA est une maison de culture spécialisée dans les champignons gastronomiques boréaux.
                </p>
                <p>
                  À la rencontre de la science, du vivant et du territoire nordique, nous cultivons des variétés d'exception destinées aux chefs, artisans et épiceries fines recherchant une qualité irréprochable.
                </p>
                <p>
                  Chaque culture est menée avec rigueur afin d'offrir constance, fraîcheur et profondeur aromatique.
                </p>
                <p className="text-foreground font-medium pt-4">
                  Aucun compromis.<br />Seulement l'essentiel.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ NOS CULTURES ═══════════ */}
        <section className="py-32 lg:py-40 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={stagger}
              className="mb-20"
            >
              <motion.p variants={fadeIn} className="text-[11px] tracking-[0.3em] uppercase text-accent mb-4 text-center">
                Nos Cultures
              </motion.p>
              <motion.h2 variants={fadeIn} className="font-serif text-3xl md:text-5xl font-normal text-foreground text-center">
                Variétés d'exception
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={stagger}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {cultures.map((culture) => (
                <motion.div
                  key={culture.name}
                  variants={fadeIn}
                  className="group"
                >
                  <div className="aspect-[4/5] overflow-hidden mb-6">
                    <img
                      src={culture.image}
                      alt={culture.name}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    />
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">{culture.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{culture.description}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-xs tracking-[0.15em] uppercase font-medium hover:bg-primary/90 transition-colors"
              >
                Recevoir notre disponibilité
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ POUR LES PROFESSIONNELS ═══════════ */}
        <section className="py-32 lg:py-40 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={stagger}
              className="max-w-4xl mx-auto"
            >
              <motion.p variants={fadeIn} className="text-[11px] tracking-[0.3em] uppercase text-primary-foreground/30 mb-4 text-center">
                Professionnels
              </motion.p>
              <motion.h2 variants={fadeIn} className="font-serif text-3xl md:text-5xl font-normal text-primary-foreground text-center mb-8">
                Partenaire des cuisines exigeantes
              </motion.h2>
              <motion.p variants={fadeIn} className="text-primary-foreground/50 text-base md:text-lg leading-relaxed text-center max-w-2xl mx-auto mb-16">
                MYCÉA accompagne les professionnels de la gastronomie avec un approvisionnement fiable, une qualité constante et une attention absolue portée au produit. Nous privilégions des relations directes avec les chefs et les acheteurs afin d'assurer une expérience simple, fluide et personnalisée.
              </motion.p>

              <motion.div variants={fadeIn} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                {proPoints.map((point) => (
                  <div key={point.label} className="text-center">
                    <point.icon className="w-6 h-6 text-accent mx-auto mb-4" strokeWidth={1.5} />
                    <p className="text-xs tracking-[0.1em] uppercase text-primary-foreground/60">{point.label}</p>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeIn} className="text-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-foreground text-xs tracking-[0.15em] uppercase font-medium hover:bg-white/90 transition-colors"
                >
                  Ouvrir un compte professionnel
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ PHILOSOPHIE ═══════════ */}
        <section className="relative py-32 lg:py-40">
          <div className="absolute inset-0">
            <img src={forestImage} alt="Forêt boréale" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/65" />
          </div>

          <div className="relative z-10 container mx-auto px-6 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.h2 variants={fadeIn} className="font-serif text-3xl md:text-5xl lg:text-6xl font-normal text-white leading-tight mb-10">
                Né de la forêt.<br />Guidé par la science.
              </motion.h2>
              <motion.div variants={fadeIn} className="space-y-6 text-white/60 text-base md:text-lg leading-relaxed">
                <p>
                  Nous croyons en une agriculture précise, responsable et tournée vers l'avenir.
                </p>
                <p>
                  Notre approche unit innovation et respect des cycles naturels pour produire des champignons d'une qualité rare.
                </p>
                <p>
                  MYCÉA incarne une vision contemporaine de la culture : plus propre, plus intelligente, plus durable.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ SIGNATURE ═══════════ */}
        <section className="py-32 lg:py-44">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.h2
                variants={fadeIn}
                className="font-serif text-5xl md:text-7xl lg:text-9xl font-normal text-foreground leading-[1.05] mb-8"
              >
                Culture fine<br />du vivant
              </motion.h2>
              <motion.p
                variants={fadeIn}
                className="text-xs tracking-[0.3em] uppercase text-muted-foreground"
              >
                Maison MYCÉA
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ CTA FINAL ═══════════ */}
        <section className="py-32 lg:py-40 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="max-w-2xl mx-auto text-center"
            >
              <motion.h2 variants={fadeIn} className="font-serif text-3xl md:text-5xl font-normal text-foreground mb-6">
                Travailler avec MYCÉA
              </motion.h2>
              <motion.p variants={fadeIn} className="text-muted-foreground text-base leading-relaxed mb-12">
                Pour connaître nos disponibilités ou initier une collaboration, notre équipe vous répond avec attention.
              </motion.p>
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-xs tracking-[0.15em] uppercase font-medium hover:bg-primary/90 transition-colors"
                >
                  Demande d'approvisionnement
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-border text-foreground text-xs tracking-[0.15em] uppercase font-medium hover:bg-secondary transition-colors"
                >
                  Nous contacter
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Index;
