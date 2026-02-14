import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { SEOHead } from '@/components/seo/SEOHead';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
} as const;

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const contactInfo = [
  { icon: MapPin, title: 'Adresse', details: ['Sainte-Lucie-des-Laurentides', 'Québec, Canada'] },
  { icon: Phone, title: 'Téléphone', details: ['819-327-6786'] },
  { icon: Mail, title: 'Courriel', details: ['info@mycea.ca'] },
  { icon: Clock, title: 'Horaires', details: ['Lun – Ven : 9h – 18h', 'Sam : 10h – 14h'] },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <SEOHead 
        title="Contact | MYCÉA"
        description="Contactez Maison MYCÉA pour vos questions, commandes ou partenariats professionnels."
        url="https://www.mycea.ca/contact"
      />
      <div className="pt-24 pb-16">
        <section className="py-20 border-b border-border">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-center max-w-2xl mx-auto"
            >
              <motion.span variants={fadeInUp} className="inline-block text-xs tracking-[0.3em] uppercase text-accent mb-4">
                Contact
              </motion.span>
              <motion.h1 variants={fadeInUp} className="font-serif text-4xl md:text-5xl font-normal text-foreground mb-6">
                Nous écrire
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-muted-foreground">
                Pour toute question, commande ou partenariat professionnel.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-4"
              >
                {contactInfo.map((info) => (
                  <motion.div
                    key={info.title}
                    variants={fadeInUp}
                    className="flex items-start gap-4 p-6 border border-border"
                  >
                    <info.icon className="w-5 h-5 text-accent mt-0.5" />
                    <div>
                      <h3 className="text-xs tracking-[0.15em] uppercase text-foreground mb-1">{info.title}</h3>
                      {info.details.map((detail, index) => (
                        <p key={index} className="text-muted-foreground text-sm">{detail}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="lg:col-span-2"
              >
                <form onSubmit={handleSubmit} className="p-8 border border-border">
                  <h2 className="font-serif text-2xl text-foreground mb-8">Envoyez-nous un message</h2>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-xs tracking-[0.1em] uppercase text-foreground mb-2">Nom</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-border text-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                        placeholder="Votre nom"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs tracking-[0.1em] uppercase text-foreground mb-2">Courriel</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-border text-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                        placeholder="votre@courriel.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-xs tracking-[0.1em] uppercase text-foreground mb-2">Sujet</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border text-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                      required
                    >
                      <option value="">Sélectionnez</option>
                      <option value="order">Commande</option>
                      <option value="product">Produit</option>
                      <option value="partnership">Partenariat professionnel</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>

                  <div className="mb-8">
                    <label className="block text-xs tracking-[0.1em] uppercase text-foreground mb-2">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      className="w-full px-4 py-3 bg-background border border-border text-foreground focus:outline-none focus:ring-1 focus:ring-accent resize-none"
                      placeholder="Votre message..."
                      required
                    />
                  </div>

                  <Button variant="hero" size="lg" type="submit">
                    <Send className="w-4 h-4" />
                    Envoyer
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;