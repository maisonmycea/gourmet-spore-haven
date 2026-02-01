export interface Product {
  id: string;
  name: string;
  variety: 'blue-oyster' | 'pink-oyster' | 'yellow-oyster' | 'lions-mane' | 'foliotte';
  category: 'fresh' | 'dried' | 'transformed';
  price: number;
  unit: 'kg' | '100g' | 'piece';
  image: string;
  description: string;
  benefits: string[];
  culinaryTips: string[];
  nutritionalInfo: {
    protein: string;
    fiber: string;
    vitamins: string[];
  };
  inStock: boolean;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: 'blue-oyster-fresh',
    name: 'Pleurote Bleue Fraîche',
    variety: 'blue-oyster',
    category: 'fresh',
    price: 24.90,
    unit: 'kg',
    image: '/mushroom-blue-oyster.jpg',
    description: 'Nos pleurotes bleues sont cultivées avec soin dans nos installations locales. Leur couleur bleu-gris distinctive et leur texture veloutée en font un incontournable de la gastronomie.',
    benefits: [
      'Riche en protéines végétales',
      'Source naturelle de vitamines B',
      'Propriétés antioxydantes',
      'Faible en calories'
    ],
    culinaryTips: [
      'Parfaite sautée avec de l\'ail et du persil',
      'Excellente en risotto',
      'Idéale pour les pâtes crémeuses'
    ],
    nutritionalInfo: {
      protein: '3.3g/100g',
      fiber: '2.3g/100g',
      vitamins: ['B1', 'B2', 'B3', 'D']
    },
    inStock: true,
    featured: true
  },
  {
    id: 'pink-oyster-fresh',
    name: 'Pleurote Rose Fraîche',
    variety: 'pink-oyster',
    category: 'fresh',
    price: 28.90,
    unit: 'kg',
    image: '/mushroom-pink-oyster.jpg',
    description: 'La pleurote rose impressionne par sa couleur corail vibrante et son goût délicat rappelant les fruits de mer. Un champignon d\'exception pour les créations culinaires audacieuses.',
    benefits: [
      'Excellente source de fer',
      'Riche en antioxydants',
      'Booste le système immunitaire',
      'Favorise la santé digestive'
    ],
    culinaryTips: [
      'Sublime grillée au barbecue',
      'Parfaite pour les plats asiatiques',
      'Délicieuse en tempura'
    ],
    nutritionalInfo: {
      protein: '3.0g/100g',
      fiber: '2.5g/100g',
      vitamins: ['B2', 'B5', 'C']
    },
    inStock: true,
    featured: true
  },
  {
    id: 'yellow-oyster-fresh',
    name: 'Pleurote Jaune Fraîche',
    variety: 'yellow-oyster',
    category: 'fresh',
    price: 26.90,
    unit: 'kg',
    image: '/mushroom-yellow-oyster.jpg',
    description: 'Avec sa teinte dorée éclatante et sa saveur de noisette, la pleurote jaune apporte une touche ensoleillée à vos plats. Sa texture croquante la rend idéale pour les sautés.',
    benefits: [
      'Source de potassium',
      'Riche en vitamines B',
      'Propriétés anti-inflammatoires',
      'Soutient la santé cardiaque'
    ],
    culinaryTips: [
      'Excellente en omelette',
      'Parfaite pour les woks',
      'Sublime avec du beurre noisette'
    ],
    nutritionalInfo: {
      protein: '3.1g/100g',
      fiber: '2.4g/100g',
      vitamins: ['B1', 'B6', 'D']
    },
    inStock: true,
    featured: true
  },
  {
    id: 'lions-mane-fresh',
    name: 'Crinière de Lion Fraîche',
    variety: 'lions-mane',
    category: 'fresh',
    price: 42.90,
    unit: 'kg',
    image: '/mushroom-lions-mane.jpg',
    description: 'Le champignon crinière de lion est reconnu pour ses bienfaits cognitifs exceptionnels. Sa texture rappelant le homard et son goût délicat en font un trésor culinaire.',
    benefits: [
      'Stimule la mémoire et la concentration',
      'Soutient la santé neuronale',
      'Propriétés neuroprotectrices',
      'Renforce le système immunitaire'
    ],
    culinaryTips: [
      'Tranchée et poêlée comme un steak',
      'Parfaite en remplacement des fruits de mer',
      'Excellente en bouillon'
    ],
    nutritionalInfo: {
      protein: '2.4g/100g',
      fiber: '1.8g/100g',
      vitamins: ['B1', 'B2', 'B3', 'D', 'E']
    },
    inStock: true,
    featured: true
  },
  {
    id: 'blue-oyster-dried',
    name: 'Pleurote Bleue Séchée',
    variety: 'blue-oyster',
    category: 'dried',
    price: 8.90,
    unit: '100g',
    image: '/mushroom-blue-oyster.jpg',
    description: 'Nos pleurotes bleues séchées conservent toute leur saveur intense. Parfaites pour enrichir vos bouillons, soupes et sauces.',
    benefits: [
      'Conservation longue durée',
      'Saveur concentrée',
      'Facile à réhydrater',
      'Idéal pour les stocks'
    ],
    culinaryTips: [
      'Réhydrater 20 min dans l\'eau tiède',
      'Parfaite pour les risottos',
      'Excellente en poudre pour assaisonnement'
    ],
    nutritionalInfo: {
      protein: '10.5g/100g',
      fiber: '7.3g/100g',
      vitamins: ['B1', 'B2', 'B3', 'D']
    },
    inStock: true
  },
  {
    id: 'mushroom-powder',
    name: 'Poudre 5 Champignons',
    variety: 'lions-mane',
    category: 'transformed',
    price: 18.90,
    unit: 'piece',
    image: '/mushroom-lions-mane.jpg',
    description: 'Notre mélange exclusif de 5 champignons gourmets en poudre fine. Un concentré de saveurs et de bienfaits pour enrichir tous vos plats.',
    benefits: [
      'Mélange synergique',
      'Facile à utiliser',
      'Longue conservation',
      'Saveur umami intense'
    ],
    culinaryTips: [
      'Saupoudrer sur vos plats',
      'Incorporer dans les sauces',
      'Ajouter aux smoothies'
    ],
    nutritionalInfo: {
      protein: '12g/100g',
      fiber: '8g/100g',
      vitamins: ['B1', 'B2', 'B3', 'D', 'E']
    },
    inStock: true
  }
];

export const getProductsByCategory = (category: Product['category']) => 
  products.filter(p => p.category === category);

export const getFeaturedProducts = () => 
  products.filter(p => p.featured);

export const getProductById = (id: string) => 
  products.find(p => p.id === id);
