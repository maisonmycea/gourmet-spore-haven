import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-serif text-xl tracking-[0.4em] uppercase">
                M Y C É A
              </span>
            </Link>
            <p className="text-primary-foreground/40 text-sm tracking-wide">
              Cultures mycéliennes boréales
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4 md:text-right">
            <h4 className="text-xs tracking-[0.2em] uppercase text-primary-foreground/30 mb-4">Contact</h4>
            <a
              href="mailto:info@mycea.ca"
              className="block text-primary-foreground/50 hover:text-primary-foreground transition-colors text-sm"
            >
              info@mycea.ca
            </a>
            <a
              href="tel:+18193276786"
              className="block text-primary-foreground/50 hover:text-primary-foreground transition-colors text-sm"
            >
              819-327-6786
            </a>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-primary-foreground/10">
          <p className="text-primary-foreground/20 text-xs tracking-[0.1em]">
            © {new Date().getFullYear()} Maison MYCÉA
          </p>
        </div>
      </div>
    </footer>
  );
};
