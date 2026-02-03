import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { CartDrawer } from '@/components/cart/CartDrawer';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main-content" className="skip-link">
        Aller au contenu principal
      </a>
      <Header />
      <main id="main-content" className="flex-1" role="main">
        {children}
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
};
