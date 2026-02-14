import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  maison: [
    { label: 'La Maison', href: '/a-propos' },
    { label: 'Boutique', href: '/boutique' },
    { label: 'Contact', href: '/contact' },
  ],
  cultures: [
    { label: 'Frais', href: '/champignons/frais' },
    { label: 'Séchés', href: '/champignons/seches' },
    { label: 'Transformés', href: '/champignons/transformes' },
  ],
  savoir: [
    { label: 'Bienfaits', href: '/bienfaits' },
    { label: 'Recettes', href: '/recettes' },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="inline-block">
              <span className="font-serif text-2xl tracking-[0.35em] uppercase">
                M Y C É A
              </span>
            </Link>
            <p className="text-primary-foreground/50 text-sm leading-relaxed max-w-xs tracking-wide">
              Culture fine du vivant
            </p>
            <p className="text-primary-foreground/30 text-xs tracking-[0.1em] uppercase">
              Maison de culture mycélienne boréale
            </p>
          </div>

          {/* Maison */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-primary-foreground/40 mb-6">La Maison</h4>
            <ul className="space-y-3">
              {footerLinks.maison.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cultures */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-primary-foreground/40 mb-6">Cultures</h4>
            <ul className="space-y-3">
              {footerLinks.cultures.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-primary-foreground/40 mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-primary-foreground/30" />
                <span className="text-primary-foreground/60 text-sm">
                  Sainte-Lucie-des-Laurentides<br />
                  Québec, Canada
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary-foreground/30" />
                <a
                  href="tel:+18193276786"
                  className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm"
                >
                  819-327-6786
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary-foreground/30" />
                <a
                  href="mailto:info@mycea.ca"
                  className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm"
                >
                  info@mycea.ca
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom — Minimal */}
        <div className="mt-20 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/30 text-xs tracking-[0.1em]">
            © {new Date().getFullYear()} Maison MYCÉA. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/mentions-legales"
              className="text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors text-xs tracking-[0.05em]"
            >
              Mentions légales
            </Link>
            <Link
              to="/confidentialite"
              className="text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors text-xs tracking-[0.05em]"
            >
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};