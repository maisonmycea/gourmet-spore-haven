import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';
import blueOyster from '@/assets/mushroom-blue-oyster.jpg';
import pinkOyster from '@/assets/mushroom-pink-oyster.jpg';
import yellowOyster from '@/assets/mushroom-yellow-oyster.jpg';
import lionsMane from '@/assets/mushroom-lions-mane.jpg';
import kingOyster from '@/assets/mushroom-king-oyster.jpg';
import chickenWoods from '@/assets/mushroom-chicken-woods.jpg';
import forestBlend from '@/assets/mushroom-forest-blend.jpg';
import duxelles from '@/assets/duxelles-truffee.jpg';
import marinade from '@/assets/marinade-forestiere.jpg';

const imageMap: Record<string, string> = {
  '/mushroom-blue-oyster.jpg': blueOyster,
  '/mushroom-pink-oyster.jpg': pinkOyster,
  '/mushroom-yellow-oyster.jpg': yellowOyster,
  '/mushroom-lions-mane.jpg': lionsMane,
  '/mushroom-king-oyster.jpg': kingOyster,
  '/mushroom-chicken-woods.jpg': chickenWoods,
  '/mushroom-forest-blend.jpg': forestBlend,
  '/duxelles-truffee.jpg': duxelles,
  '/marinade-forestiere.jpg': marinade,
};

interface ProductCardProps {
  product: Product;
}

const categoryLabels: Record<string, string> = {
  fresh: 'Frais',
  dried: 'Séché',
  transformed: 'Transformé',
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart, openCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    openCart();
  };

  const imageSrc = imageMap[product.image] || product.image;

  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="group bg-card border border-border overflow-hidden hover:border-accent/30 transition-all duration-300"
    >
      <Link to={`/produit/${product.id}`}>
        <div className="relative aspect-square overflow-hidden">
          <img
            src={imageSrc}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          
          <span className="absolute top-4 left-4 px-2 py-0.5 bg-background/90 backdrop-blur-sm text-[10px] tracking-[0.15em] uppercase text-foreground">
            {categoryLabels[product.category]}
          </span>

          <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button variant="hero" size="sm" className="w-full" onClick={handleAddToCart}>
              <ShoppingCart className="w-4 h-4" />
              Ajouter
            </Button>
          </div>
        </div>

        <div className="p-5">
          <h3 className="font-serif text-lg text-foreground mb-2 group-hover:text-accent transition-colors">
            {product.name}
          </h3>
          
          <p className="text-muted-foreground text-xs mb-4 line-clamp-2">
            {product.description}
          </p>

          <div className="flex items-center justify-between">
            <div>
              <span className="font-serif text-lg text-foreground">
                {product.price.toFixed(2)} $
              </span>
              <span className="text-muted-foreground text-xs ml-1">/ {product.unit}</span>
            </div>
            
            {product.inStock ? (
              <span className="text-accent text-[10px] tracking-[0.1em] uppercase">En stock</span>
            ) : (
              <span className="text-destructive text-[10px] tracking-[0.1em] uppercase">Rupture</span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};