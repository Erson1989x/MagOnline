import { Product } from './types';

// Mock products data
const allProducts: Product[] = [
  // Paper products (hartie)
  {
    id: 'paper-1',
    name: 'Hârtie copiator Navigator Universal A4, 80g/mp, 500 coli/top',
    slug: 'hartie-copiator-navigator-universal-a4',
    description: 'Hârtie copiator de calitate superioară, ideală pentru imprimante laser și inkjet, copiatoare și faxuri. Gramaj: 80g/mp, format A4, 500 coli/top.',
    price: 29.99,
    discount: 10,
    image: 'https://placehold.co/400x400/e2e8f0/1e40af?text=Navigator+Paper',
    images: ['https://placehold.co/400x400/e2e8f0/1e40af?text=Navigator+Paper', 'https://placehold.co/400x400/e2e8f0/1e40af?text=Navigator+Paper+2'],
    brand: 'Navigator',
    category: 'hartie',
    subcategory: 'hartie-toate-dimensiunile',
    inStock: true,
    attributes: {
      format: 'A4',
      gramaj: 80,
      culoare: 'Alb',
      tip: 'Hârtie copiator',
      ambalare: '500 coli/top'
    }
  },
  {
    id: 'paper-2',
    name: 'Hârtie color Xerox Symphony A4, 80g/mp, 500 coli/top, galben intens',
    slug: 'hartie-color-xerox-symphony-a4-galben',
    description: 'Hârtie color Xerox Symphony, ideală pentru documente color, invitații, flyere. Gramaj: 80g/mp, format A4, 500 coli/top, culoare galben intens.',
    price: 39.99,
    discount: 0,
    image: 'https://placehold.co/400x400/fef08a/1e3a8a?text=Xerox+Yellow+Paper',
    images: ['https://placehold.co/400x400/fef08a/1e3a8a?text=Xerox+Yellow+Paper'],
    brand: 'Xerox',
    category: 'hartie',
    subcategory: 'hartie-colorata',
    inStock: true,
    attributes: {
      format: 'A4',
      gramaj: 80,
      culoare: 'Galben',
      tip: 'Hârtie color',
      ambalare: '500 coli/top'
    }
  },
  {
    id: 'paper-3',
    name: 'Caiet A4 Daco, matematică, 100 file, copertă carton',
    slug: 'caiet-a4-daco-matematica-100-file',
    description: 'Caiet format A4, matematică, 100 file, hârtie offset de calitate superioară, copertă din carton.',
    price: 12.50,
    discount: 0,
    image: 'https://placehold.co/400x400/f1f5f9/1e3a8a?text=Daco+Notebook',
    images: ['https://placehold.co/400x400/f1f5f9/1e3a8a?text=Daco+Notebook', 'https://placehold.co/400x400/f1f5f9/1e3a8a?text=Daco+Notebook+2'],
    brand: 'Daco',
    category: 'hartie',
    subcategory: 'caiete',
    inStock: true,
    attributes: {
      format: 'A4',
      tip: 'Caiet',
      liniatură: 'Matematică',
      nrFile: 100,
      copertă: 'Carton'
    }
  },
  {
    id: 'paper-4',
    name: 'Blocnotes Herlitz A5, dictando, 50 file, spiralat',
    slug: 'blocnotes-herlitz-a5-dictando-50-file',
    description: 'Blocnotes format A5, dictando, 50 file, spiralat, hârtie de calitate superioară.',
    price: 8.99,
    discount: 5,
    image: 'https://placehold.co/400x400/f1f5f9/4338ca?text=Herlitz+Notepad',
    images: ['https://placehold.co/400x400/f1f5f9/4338ca?text=Herlitz+Notepad'],
    brand: 'Herlitz',
    category: 'hartie',
    subcategory: 'caiete',
    inStock: true,
    attributes: {
      format: 'A5',
      tip: 'Blocnotes',
      liniatură: 'Dictando',
      nrFile: 50,
      legare: 'Spiralat'
    }
  },
  {
    id: 'paper-5',
    name: 'Hârtie copiator Double A Premium A4, 80g/mp, 500 coli/top',
    slug: 'hartie-copiator-double-a-premium-a4',
    description: 'Hârtie copiator de calitate superioară, ideală pentru imprimante laser și inkjet, copiatoare și faxuri. Gramaj: 80g/mp, format A4, 500 coli/top.',
    price: 31.99,
    discount: 0,
    image: 'https://placehold.co/400x400/f8fafc/1e3a8a?text=Double+A+Paper',
    images: ['https://placehold.co/400x400/f8fafc/1e3a8a?text=Double+A+Paper'],
    brand: 'Double A',
    category: 'hartie',
    subcategory: 'hartie-toate-dimensiunile',
    inStock: true,
    attributes: {
      format: 'A4',
      gramaj: 80,
      culoare: 'Alb',
      tip: 'Hârtie copiator',
      ambalare: '500 coli/top'
    }
  },
  {
    id: 'paper-6',
    name: 'Set 100 plicuri DL, autoadezive, 110x220 mm',
    slug: 'set-100-plicuri-dl-autoadezive',
    description: 'Set 100 plicuri format DL, autoadezive, dimensiuni 110x220 mm, hârtie albă de 80g/mp.',
    price: 24.99,
    discount: 0,
    image: 'https://placehold.co/400x400/f1f5f9/1e3a8a?text=DL+Envelopes',
    images: ['https://placehold.co/400x400/f1f5f9/1e3a8a?text=DL+Envelopes'],
    brand: 'Daco',
    category: 'hartie',
    subcategory: 'plicuri',
    inStock: true,
    attributes: {
      format: 'DL',
      dimensiuni: '110x220 mm',
      tip: 'Plicuri',
      cantitate: 100,
      inchidere: 'Autoadeziv'
    }
  },
  {
    id: 'paper-7',
    name: 'Registru A4 Daco, matematică, 100 file, copertă carton',
    slug: 'registru-a4-daco-matematica-100-file',
    description: 'Registru format A4, matematică, 100 file, hârtie offset de calitate superioară, copertă din carton.',
    price: 18.50,
    discount: 0,
    image: 'https://placehold.co/400x400/f1f5f9/1e3a8a?text=Daco+Register',
    images: ['https://placehold.co/400x400/f1f5f9/1e3a8a?text=Daco+Register'],
    brand: 'Daco',
    category: 'hartie',
    subcategory: 'registre',
    inStock: false,
    attributes: {
      format: 'A4',
      tip: 'Registru',
      liniatură: 'Matematică',
      nrFile: 100,
      copertă: 'Carton'
    }
  },
  {
    id: 'paper-8',
    name: 'Hârtie color Mondi IQ A4, 80g/mp, 500 coli/top, albastru intens',
    slug: 'hartie-color-mondi-iq-a4-albastru',
    description: 'Hârtie color Mondi IQ, ideală pentru documente color, invitații, flyere. Gramaj: 80g/mp, format A4, 500 coli/top, culoare albastru intens.',
    price: 38.99,
    discount: 5,
    image: 'https://placehold.co/400x400/93c5fd/1e3a8a?text=Mondi+Blue+Paper',
    images: ['https://placehold.co/400x400/93c5fd/1e3a8a?text=Mondi+Blue+Paper'],
    brand: 'Mondi',
    category: 'hartie',
    subcategory: 'hartie-colorata',
    inStock: true,
    attributes: {
      format: 'A4',
      gramaj: 80,
      culoare: 'Albastru',
      tip: 'Hârtie color',
      ambalare: '500 coli/top'
    }
  },
  {
    id: 'paper-9',
    name: 'Agendă datată 2025 Herlitz, A5, 365 file, copertă PU, negru',
    slug: 'agenda-datata-2025-herlitz-a5',
    description: 'Agendă datată 2025, format A5, 365 file, hârtie de calitate superioară, copertă din PU, culoare negru.',
    price: 45.99,
    discount: 0,
    image: 'https://placehold.co/400x400/1e293b/f8fafc?text=Herlitz+Agenda',
    images: ['https://placehold.co/400x400/1e293b/f8fafc?text=Herlitz+Agenda', 'https://placehold.co/400x400/1e293b/f8fafc?text=Herlitz+Agenda+2'],
    brand: 'Herlitz',
    category: 'hartie',
    subcategory: 'agende',
    inStock: true,
    attributes: {
      format: 'A5',
      tip: 'Agendă',
      datată: 'Da',
      an: 2025,
      copertă: 'PU',
      culoare: 'Negru'
    }
  },
  // Add more products for other categories if needed
];

/**
 * Get products by category
 * @param categorySlug The category slug
 * @param subcategorySlug Optional subcategory slug to filter by
 * @returns Array of products in the category and optionally subcategory
 */
import { CategorySlug, SubcategorySlug } from './slugTypes';

export const getProductsByCategory = (categorySlug: CategorySlug, subcategorySlug?: SubcategorySlug): Product[] => {
  if (subcategorySlug) {
    return allProducts.filter(product => 
      product.category === categorySlug && product.subcategory === subcategorySlug
    );
  }
  return allProducts.filter(product => product.category === categorySlug);
};

/**
 * Get a product by its slug
 * @param slug The product slug
 * @returns The product or undefined if not found
 */
export const getProductBySlug = (slug: string): Product | undefined => {
  return allProducts.find(product => product.slug === slug);
};

/**
 * Get featured products
 * @param limit Number of products to return
 * @returns Array of featured products
 */
export const getFeaturedProducts = (limit: number = 4): Product[] => {
  // For demo purposes, just return some products with a discount
  return allProducts
    .filter(product => product.discount > 0)
    .slice(0, limit);
};

/**
 * Get related products
 * @param productId Current product ID to exclude
 * @param categorySlug Category to get related products from
 * @param limit Number of products to return
 * @returns Array of related products
 */
export const getRelatedProducts = (productId: string, categorySlug: CategorySlug, limit: number = 4): Product[] => {
  return allProducts
    .filter(product => product.category === categorySlug && product.id !== productId)
    .slice(0, limit);
};
