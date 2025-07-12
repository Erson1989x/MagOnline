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
  
  // BIROU products
  {
    id: 'birou-1',
    name: 'Biblioraft DELMET A4, 75mm, albastru',
    slug: 'biblioraft-delmet-a4-75mm-albastru',
    description: 'Biblioraft DELMET A4, dimensiune 75mm, culoare albastru, ideal pentru organizarea documentelor.',
    price: 15.99,
    discount: 0,
    image: 'https://placehold.co/400x400/3b82f6/ffffff?text=Biblioraft+DELMET',
    images: ['https://placehold.co/400x400/3b82f6/ffffff?text=Biblioraft+DELMET'],
    brand: 'DELMET',
    category: 'birou',
    subcategory: 'bibliorafturi',
    inStock: true,
    attributes: {
      format: 'A4',
      dimensiune: '75mm',
      culoare: 'Albastru',
      tip: 'Biblioraft',
      brand: 'DELMET'
    }
  },
  {
    id: 'birou-2',
    name: 'Biblioraft DELMET A4, 50mm, verde',
    slug: 'biblioraft-delmet-a4-50mm-verde',
    description: 'Biblioraft DELMET A4, dimensiune 50mm, culoare verde, ideal pentru organizarea documentelor.',
    price: 12.99,
    discount: 0,
    image: 'https://placehold.co/400x400/22c55e/ffffff?text=Biblioraft+DELMET',
    images: ['https://placehold.co/400x400/22c55e/ffffff?text=Biblioraft+DELMET'],
    brand: 'DELMET',
    category: 'birou',
    subcategory: 'bibliorafturi',
    inStock: true,
    attributes: {
      format: 'A4',
      dimensiune: '50mm',
      culoare: 'Verde',
      tip: 'Biblioraft',
      brand: 'DELMET'
    }
  },
  {
    id: 'birou-3',
    name: 'Dosar suspendabil A4, verde, 25 buc/set',
    slug: 'dosar-suspendabil-a4-verde-25-buc',
    description: 'Dosar suspendabil A4, culoare verde, set de 25 bucăți, ideal pentru organizarea documentelor în dulap.',
    price: 45.99,
    discount: 10,
    image: 'https://placehold.co/400x400/22c55e/ffffff?text=Dosar+Suspendabil',
    images: ['https://placehold.co/400x400/22c55e/ffffff?text=Dosar+Suspendabil'],
    brand: 'Office',
    category: 'birou',
    subcategory: 'dosare-suspendabile',
    inStock: true,
    attributes: {
      format: 'A4',
      culoare: 'Verde',
      tip: 'Dosar suspendabil',
      cantitate: 25,
      material: 'Carton'
    }
  },
  {
    id: 'birou-4',
    name: 'Separator plastic A4, 12 pozitii, multicolor',
    slug: 'separator-plastic-a4-12-pozitii-multicolor',
    description: 'Separator plastic A4, 12 poziții, multicolor, ideal pentru organizarea documentelor în biblioraft.',
    price: 8.99,
    discount: 0,
    image: 'https://placehold.co/400x400/f59e0b/ffffff?text=Separator+Plastic',
    images: ['https://placehold.co/400x400/f59e0b/ffffff?text=Separator+Plastic'],
    brand: 'Office',
    category: 'birou',
    subcategory: 'separatoare',
    inStock: true,
    attributes: {
      format: 'A4',
      pozitii: 12,
      culoare: 'Multicolor',
      tip: 'Separator',
      material: 'Plastic'
    }
  },
  {
    id: 'birou-5',
    name: 'Etichete autoadezive A4, 70x42.3mm, 21 buc/foaie',
    slug: 'etichete-autoadezive-a4-70x42mm-21-buc',
    description: 'Etichete autoadezive A4, dimensiuni 70x42.3mm, 21 bucăți per foaie, ideale pentru etichetarea dosarelor.',
    price: 12.50,
    discount: 0,
    image: 'https://placehold.co/400x400/e5e7eb/1f2937?text=Etichete+A4',
    images: ['https://placehold.co/400x400/e5e7eb/1f2937?text=Etichete+A4'],
    brand: 'Office',
    category: 'birou',
    subcategory: 'etichete',
    inStock: true,
    attributes: {
      format: 'A4',
      dimensiuni: '70x42.3mm',
      tip: 'Etichete',
      cantitate: 21,
      adezive: 'Da'
    }
  },
  {
    id: 'birou-6',
    name: 'Cutie arhivare A4, carton, 350x250x100mm',
    slug: 'cutie-arhivare-a4-carton-350x250x100mm',
    description: 'Cutie arhivare A4, din carton, dimensiuni 350x250x100mm, ideală pentru arhivarea documentelor.',
    price: 18.99,
    discount: 0,
    image: 'https://placehold.co/400x400/9ca3af/ffffff?text=Cutie+Arhivare',
    images: ['https://placehold.co/400x400/9ca3af/ffffff?text=Cutie+Arhivare'],
    brand: 'Office',
    category: 'birou',
    subcategory: 'cutii-arhivare',
    inStock: true,
    attributes: {
      format: 'A4',
      dimensiuni: '350x250x100mm',
      tip: 'Cutie arhivare',
      material: 'Carton'
    }
  }
];

/**
 * Get products by category
 * @param categorySlug The category slug
 * @param subcategorySlug Optional subcategory slug to filter by
 * @returns Array of products in the category and optionally subcategory
 */
import { CategorySlug, SubcategorySlug } from './slugTypes';
import { getProductsByCollection, convertShopifyProduct } from './shopifyApi';

export const getProductsByCategory = async (
  categorySlug: CategorySlug, 
  subcategorySlug?: SubcategorySlug
): Promise<Product[]> => {
  try {
    // First, try to get products from Shopify
    const collectionHandle = subcategorySlug 
      ? `${categorySlug}-${subcategorySlug}`
      : categorySlug;
    
    const shopifyProducts = await getProductsByCollection(collectionHandle);
    
    if (shopifyProducts.length > 0) {
      // Convert Shopify products to our Product type
      const convertedProducts = shopifyProducts.map(convertShopifyProduct);
      return convertedProducts;
    }
    
    // Fallback to local products if Shopify returns no results
    return getLocalProductsByCategory(categorySlug, subcategorySlug);
  } catch (error) {
    console.error('[getProductsByCategory] Error fetching products from Shopify:', error);
    // Fallback to local products on error
    return getLocalProductsByCategory(categorySlug, subcategorySlug);
  }
};

// Local fallback function (your current implementation)
export const getLocalProductsByCategory = (
  categorySlug: CategorySlug, 
  subcategorySlug?: SubcategorySlug
): Product[] => {
  let filteredProducts: Product[];
  
  if (subcategorySlug) {
    filteredProducts = allProducts.filter(product => 
      product.category === categorySlug && product.subcategory === subcategorySlug
    );
  } else {
    filteredProducts = allProducts.filter(product => product.category === categorySlug);
  }
  
  return filteredProducts;
};

/**
 * Get a product by its slug (searches both Shopify and local products)
 * @param slug The product slug
 * @returns The product or undefined if not found
 */
export const getProductBySlugAsync = async (slug: string): Promise<Product | undefined> => {
  try {
    // First, try to find the product in Shopify by searching all collections
    const collections = ['birou', 'birou-bibliorafturi', 'hartie', 'afisare', 'instrumente-scris', 'accesorii-it', 'curatenie', 'rechizite', 'cadouri'];
    
    for (const collectionHandle of collections) {
      try {
        const shopifyProducts = await getProductsByCollection(collectionHandle);
        const convertedProducts = shopifyProducts.map(convertShopifyProduct);
        const product = convertedProducts.find(p => p.slug === slug);
        if (product) {
          return product;
        }
      } catch (error) {
        // Continue to next collection if this one fails
        continue;
      }
    }
    
    // Fallback to local products
    return allProducts.find(product => product.slug === slug);
  } catch (error) {
    console.error('[getProductBySlugAsync] Error:', error);
    // Fallback to local products
    return allProducts.find(product => product.slug === slug);
  }
};

/**
 * Get a product by its slug (local products only - for compatibility)
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
