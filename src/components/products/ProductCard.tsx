import { motion } from 'framer-motion';
import { ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';
import blueOyster from '@/assets/mushroom-blue-oyster.jpg';
import pinkOyster from '@/assets/mushroom-pink-oyster.jpg';
import yellowOyster from '@/assets/mushroom-yellow-oyster.jpg';
import lionsMane from '@/assets/mushroom-lions-mane.jpg';

const imageMap: Record<string, string> = {
  '/mushroom-blue-oyster.jpg': blueOyster,
  '/mushroom-pink-oyster.jpg': pinkOyster,
  '/mushroom-yellow-oyster.jpg': yellowOyster,
  '/mushroom-lions-mane.jpg': lionsMane,
};

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart, openCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    openCart();
  };

  const imageSrc = imageMap[product.image] || product.image;

  const categoryColors: Record<string, string> = {
    fresh: 'bg-green-100 text-green-800',
    dried: 'bg-amber-100 text-amber-800',
    transformed: 'bg-blue-100 text-blue-800',
  };

  const categoryLabels: Record<string, string> = {
    fresh: 'Frais',
    dried: 'Séché',
    transformed: 'Transformé',
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group bg-card rounded-2xl overflow-hidden border border-border shadow-soft hover:shadow-medium transition-all duration-300"
    >
      <Link to={`/produit/${product.id}`}>
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={imageSrc}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          
          {/* Category Badge */}
          <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${categoryColors[product.category]}`}>
            {categoryLabels[product.category]}
          </span>

          {/* Wishlist Button */}
          <button className="absolute top-4 right-4 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background">
            <Heart className="w-4 h-4 text-foreground" />
          </button>

          {/* Quick Add */}
          <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              variant="hero"
              size="sm"
              className="w-full"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="w-4 h-4" />
              Ajouter au panier
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
            {product.name}
          </h3>
          
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {product.description}
          </p>

          <div className="flex items-center justify-between">
            <div>
              <span className="font-serif text-xl font-bold text-foreground">
                {product.price.toFixed(2)} €
              </span>
              <span className="text-muted-foreground text-sm ml-1">
                / {product.unit}
              </span>
            </div>
            
            {product.inStock ? (
              <span className="text-green-600 text-xs font-medium">En stock</span>
            ) : (
              <span className="text-red-600 text-xs font-medium">Rupture</span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
