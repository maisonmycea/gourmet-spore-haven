import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Accueil' },
  {
    label: 'Cultures',
    children: [
      { href: '/champignons/frais', label: 'Frais' },
      { href: '/champignons/seches', label: 'Séchés' },
      { href: '/champignons/transformes', label: 'Transformés' },
    ],
  },
  { href: '/bienfaits', label: 'Bienfaits' },
  { href: '/recettes', label: 'Recettes' },
  { href: '/a-propos', label: 'La Maison' },
  { href: '/boutique', label: 'Boutique' },
  { href: '/contact', label: 'Contact' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { toggleCart, totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-soft border-b border-border/50'
          : 'bg-black/20 backdrop-blur-sm'
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo — Typographic */}
          <Link to="/" className="flex items-center gap-0 group">
            <span className={cn(
              "font-serif text-2xl tracking-[0.35em] uppercase transition-colors",
              isScrolled ? "text-foreground" : "text-white drop-shadow-md"
            )}>
              M Y C É A
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {link.children ? (
                  <button
                    className={cn(
                      'flex items-center gap-1 px-4 py-2 text-xs tracking-[0.15em] uppercase font-medium transition-colors',
                      isScrolled 
                        ? 'text-foreground/70 hover:text-foreground'
                        : 'text-white/80 hover:text-white'
                    )}
                  >
                    {link.label}
                    <ChevronDown className="w-3 h-3" />
                  </button>
                ) : (
                  <Link
                    to={link.href!}
                    className={cn(
                      'px-4 py-2 text-xs tracking-[0.15em] uppercase font-medium transition-colors',
                      isScrolled
                        ? location.pathname === link.href
                          ? 'text-accent'
                          : 'text-foreground/70 hover:text-foreground'
                        : location.pathname === link.href
                          ? 'text-white'
                          : 'text-white/80 hover:text-white'
                    )}
                  >
                    {link.label}
                  </Link>
                )}

                {/* Dropdown */}
                <AnimatePresence>
                  {link.children && openDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 bg-card border border-border shadow-medium min-w-48"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="block px-5 py-3 text-xs tracking-[0.1em] uppercase text-foreground/70 hover:text-foreground hover:bg-secondary/50 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "relative",
                !isScrolled && "text-white hover:text-white hover:bg-white/10"
              )}
              onClick={toggleCart}
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-accent-foreground text-[10px] font-bold rounded-full flex items-center justify-center"
                >
                  {totalItems}
                </motion.span>
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "lg:hidden",
                !isScrolled && "text-white hover:text-white hover:bg-white/10"
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border"
          >
            <div className="container mx-auto px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.children ? (
                    <>
                      <button
                        onClick={() =>
                          setOpenDropdown(openDropdown === link.label ? null : link.label)
                        }
                        className="flex items-center justify-between w-full px-4 py-3 text-xs tracking-[0.15em] uppercase text-foreground font-medium"
                      >
                        {link.label}
                        <ChevronDown
                          className={cn(
                            'w-3 h-3 transition-transform',
                            openDropdown === link.label && 'rotate-180'
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {openDropdown === link.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 space-y-1"
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                to={child.href}
                                className="block px-4 py-2 text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={link.href!}
                      className={cn(
                        'block px-4 py-3 text-xs tracking-[0.15em] uppercase font-medium transition-colors',
                        location.pathname === link.href
                          ? 'text-accent'
                          : 'text-foreground hover:text-accent'
                      )}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};