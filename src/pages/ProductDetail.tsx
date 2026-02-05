import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingCart, Minus, Plus, Check, Leaf, ChefHat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getProductById } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';
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

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');
  const { addToCart, openCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="pt-32 pb-16 text-center">
        <h1 className="font-serif text-3xl font-bold mb-4">Produit non trouvé</h1>
        <Button asChild>
          <Link to="/boutique">Retour à la boutique</Link>
        </Button>
      </div>
    );
  }

  const imageSrc = imageMap[product.image] || product.image;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    openCart();
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8"
        >
          <Button variant="ghost" asChild>
            <Link to="/boutique" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Retour à la boutique
            </Link>
          </Button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="aspect-square rounded-3xl overflow-hidden bg-muted"
          >
            <img
              src={imageSrc}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Details */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
            className="space-y-8"
          >
            <div>
              <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                {product.category === 'fresh' ? 'Frais' : product.category === 'dried' ? 'Séché' : 'Transformé'}
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Price & Add to Cart */}
            <div className="p-6 bg-card rounded-2xl border border-border space-y-6">
              <div className="flex items-end gap-2">
                <span className="font-serif text-4xl font-bold text-foreground">
                  {product.price.toFixed(2)} $
                </span>
                <span className="text-muted-foreground text-lg mb-1">
                  / {product.unit}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center border border-border rounded-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>

                <Button
                  variant="hero"
                  size="lg"
                  className="flex-1"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="w-5 h-5" />
                  Ajouter au panier
                </Button>
              </div>

              {product.inStock ? (
                <p className="flex items-center gap-2 text-accent text-sm">
                  <Check className="w-4 h-4" />
                  En stock - Expédition sous 24h
                </p>
              ) : (
                <p className="text-destructive text-sm">Actuellement en rupture de stock</p>
              )}
            </div>

            {/* Benefits */}
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Leaf className="w-5 h-5 text-accent" />
                Bienfaits
              </h3>
              <ul className="space-y-2">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <Check className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Culinary Tips */}
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <ChefHat className="w-5 h-5 text-accent" />
                Conseils de Cuisine
              </h3>
              <ul className="space-y-2">
                {product.culinaryTips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center text-accent text-sm flex-shrink-0">
                      {index + 1}
                    </span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* Nutritional Info */}
            <div className="p-6 bg-secondary rounded-2xl">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                Informations Nutritionnelles
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">{product.nutritionalInfo.protein}</p>
                  <p className="text-sm text-muted-foreground">Protéines</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">{product.nutritionalInfo.fiber}</p>
                  <p className="text-sm text-muted-foreground">Fibres</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">{product.nutritionalInfo.vitamins.length}</p>
                  <p className="text-sm text-muted-foreground">Vitamines</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Vitamines: {product.nutritionalInfo.vitamins.join(', ')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
