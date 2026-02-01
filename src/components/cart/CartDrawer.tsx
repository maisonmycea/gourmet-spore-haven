import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export const CartDrawer = () => {
  const { state, closeCart, removeFromCart, updateQuantity, totalItems, totalPrice } = useCart();

  return (
    <AnimatePresence>
      {state.isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-background shadow-strong z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6 text-accent" />
                <h2 className="font-serif text-xl font-semibold">Votre Panier</h2>
                {totalItems > 0 && (
                  <span className="bg-accent text-accent-foreground text-sm font-bold px-2 py-0.5 rounded-full">
                    {totalItems}
                  </span>
                )}
              </div>
              <Button variant="ghost" size="icon" onClick={closeCart}>
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {state.items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-6">
                    <ShoppingBag className="w-12 h-12 text-muted-foreground" />
                  </div>
                  <h3 className="font-serif text-lg font-medium mb-2">
                    Votre panier est vide
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    Découvrez nos champignons gourmets d'exception
                  </p>
                  <Button variant="hero" onClick={closeCart} asChild>
                    <Link to="/boutique">Voir la boutique</Link>
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {state.items.map((item) => (
                    <motion.div
                      key={item.product.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      className="flex gap-4 p-4 bg-card rounded-xl border border-border"
                    >
                      <div className="w-20 h-20 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm truncate">
                          {item.product.name}
                        </h4>
                        <p className="text-muted-foreground text-xs mt-1">
                          {item.product.price.toFixed(2)} € / {item.product.unit}
                        </p>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-7 w-7"
                              onClick={() =>
                                updateQuantity(item.product.id, item.quantity - 1)
                              }
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <span className="w-8 text-center text-sm font-medium">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-7 w-7"
                              onClick={() =>
                                updateQuantity(item.product.id, item.quantity + 1)
                              }
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7 text-destructive hover:text-destructive"
                            onClick={() => removeFromCart(item.product.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {state.items.length > 0 && (
              <div className="border-t border-border p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Sous-total</span>
                  <span className="font-serif text-xl font-semibold">
                    {totalPrice.toFixed(2)} €
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Frais de livraison calculés à l'étape suivante
                </p>
                <Button variant="hero" size="lg" className="w-full">
                  Passer commande
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full"
                  onClick={closeCart}
                >
                  Continuer mes achats
                </Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
