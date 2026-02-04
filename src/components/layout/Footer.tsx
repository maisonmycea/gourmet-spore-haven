import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

const footerLinks = {
  navigation: [
    { label: 'Accueil', href: '/' },
    { label: 'Boutique', href: '/boutique' },
    { label: 'À Propos', href: '/a-propos' },
    { label: 'Contact', href: '/contact' },
  ],
  products: [
    { label: 'Champignons Frais', href: '/champignons/frais' },
    { label: 'Champignons Séchés', href: '/champignons/seches' },
    { label: 'Produits Transformés', href: '/champignons/transformes' },
  ],
  resources: [
    { label: 'Bienfaits & Usages', href: '/bienfaits' },
    { label: 'Recettes', href: '/recettes' },
    { label: 'Blog', href: '/blog' },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Spores Expert" 
                className="w-14 h-14 object-contain drop-shadow-lg"
              />
              <span className="font-serif text-2xl font-semibold">
                Spores Expert
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Experts en culture et vente de champignons gourmets. Qualité artisanale, 
              fraîcheur garantie, bienfaits exceptionnels.
            </p>
            <p className="text-primary-foreground/70 text-sm">
              <a href="https://www.sporesexpert.ca" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                www.sporesexpert.ca
              </a>
            </p>
            <div className="flex items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Nos Produits</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-primary-foreground/50" />
                <span className="text-primary-foreground/70 text-sm">
                  2022 Chemin de Ste Lucie<br />
                  Sainte-Lucie-des-Laurentides, QC J0T 2J0
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-foreground/50" />
                <a
                  href="tel:+18193276786"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  819-327-6786
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-foreground/50" />
                <a
                  href="mailto:info@sporesexpert.ca"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  info@sporesexpert.ca
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Spores Expert. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/mentions-legales"
              className="text-primary-foreground/50 hover:text-primary-foreground transition-colors text-sm"
            >
              Mentions légales
            </Link>
            <Link
              to="/confidentialite"
              className="text-primary-foreground/50 hover:text-primary-foreground transition-colors text-sm"
            >
              Politique de confidentialité
            </Link>
            <Link
              to="/cgv"
              className="text-primary-foreground/50 hover:text-primary-foreground transition-colors text-sm"
            >
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
