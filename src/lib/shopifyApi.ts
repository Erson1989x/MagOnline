/**
 * Shopify API functions for fetching products and collections
 */
import { CategorySlug, SubcategorySlug } from './slugTypes';
import { Product } from './types';

// Shopify Product type (simplified)
export interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  description: string;
  images: Array<{
    src: string;
    altText: string;
  }>;
  variants: Array<{
    id: string;
    title: string;
    price: string;
    available: boolean;
    compareAtPrice?: string;
  }>;
  productType: string;
  vendor: string;
  tags: string[];
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
    maxVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
}

// Mock Shopify API functions (replace with real implementation)
export const getProductsByCollection = async (handle: string): Promise<ShopifyProduct[]> => {
  try {
    // Try to use real Shopify API if credentials are available
    if (process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN && 
        process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN !== 'your-actual-token-here') {
      
      const { getProductsByCollectionReal } = await import('./shopifyReal');
      return await getProductsByCollectionReal(handle);
    }
    
    // Fallback to mock data for testing
    console.log(`Fetching products for collection: ${handle}`);
    
    // Return empty array for now - will use local products as fallback
    return [];
  } catch (error) {
    console.error('Error in getProductsByCollection:', error);
    return [];
  }
};

export const getProductByHandle = async (handle: string): Promise<ShopifyProduct | null> => {
  try {
    // Try to use real Shopify API if credentials are available
    if (process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN && 
        process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN !== 'your-actual-token-here') {
      
      const { getProductByHandleReal } = await import('./shopifyReal');
      return await getProductByHandleReal(handle);
    }
    
    // Fallback to mock data for testing
    console.log(`Fetching product: ${handle}`);
    return null;
  } catch (error) {
    console.error('Error in getProductByHandle:', error);
    return null;
  }
};

export const getAllCollections = async (): Promise<any[]> => {
  // For now, return mock data
  console.log('Fetching all collections');
  
  // Mock data for testing
  return [];
};

// Convert Shopify product to our Product type
export const convertShopifyProduct = (shopifyProduct: ShopifyProduct): Product => {
  const mainVariant = shopifyProduct.variants[0];
  const price = parseFloat(mainVariant.price);
  const compareAtPrice = mainVariant.compareAtPrice ? parseFloat(mainVariant.compareAtPrice) : 0;
  const discount = compareAtPrice > price ? Math.round(((compareAtPrice - price) / compareAtPrice) * 100) : 0;

  return {
    id: shopifyProduct.id,
    name: shopifyProduct.title,
    slug: shopifyProduct.handle,
    description: shopifyProduct.description,
    price: price,
    discount: discount,
    image: shopifyProduct.images[0]?.src || '',
    images: shopifyProduct.images.map(img => img.src),
    brand: shopifyProduct.vendor,
    category: extractCategoryFromTags(shopifyProduct.tags),
    subcategory: extractSubcategoryFromTags(shopifyProduct.tags),
    inStock: mainVariant.available,
    attributes: extractAttributesFromTags(shopifyProduct.tags)
  };
};

// Helper functions to extract category/subcategory from tags
function extractCategoryFromTags(tags: string[] | string | undefined): CategorySlug {
  // Ensure tags is an array
  const tagArray = Array.isArray(tags) ? tags : (tags ? [tags] : []);
  
  const categoryMap: Record<string, CategorySlug> = {
    'hartie': 'hartie',
    'birou': 'birou',
    'afisare': 'afisare',
    'instrumente-scris': 'instrumente-scris',
    'accesorii-it': 'accesorii-it',
    'curatenie': 'curatenie',
    'rechizite': 'rechizite',
    'cadouri': 'cadouri',
    'parker': 'parker',
    'daco': 'daco',
    'herlitz': 'herlitz'
  };

  for (const tag of tagArray) {
    const normalizedTag = tag.toLowerCase().replace(/\s+/g, '-');
    if (categoryMap[normalizedTag]) {
      return categoryMap[normalizedTag];
    }
  }

  return 'hartie'; // Default fallback
}

function extractSubcategoryFromTags(tags: string[] | string | undefined): SubcategorySlug | undefined {
  // Ensure tags is an array
  const tagArray = Array.isArray(tags) ? tags : (tags ? [tags] : []);
  
  // Define subcategory mapping
  const subcategoryMap: Record<string, SubcategorySlug> = {
    'bibliorafturi': 'bibliorafturi',
    'separatoare': 'separatoare',
    'cutii-arhivare': 'cutii-arhivare',
    'dosare-plastic': 'dosare-plastic',
    'dosare-carton': 'dosare-carton',
    'folii': 'folii',
    'mape-cu-butoni': 'mape-cu-butoni',
    'serviete': 'serviete',
    'clipboard': 'clipboard',
    'capsatoare': 'capsatoare',
    'agrafe-si-clipsuri': 'agrafe-si-clipsuri',
    'banda-adeziva': 'banda-adeziva',
    'lipici': 'lipici',
    'foarfece': 'foarfece',
    'ace': 'ace',
    'pionieze': 'pionieze',
    'rigle': 'rigle',
    'baterii': 'baterii',
    'accesorii-indosariere': 'accesorii-indosariere',
    // Paper subcategories
    'hartie-toate-dimensiunile': 'hartie-toate-dimensiunile',
    'hartie-colorata': 'hartie-colorata',
    'hartie-foto': 'hartie-foto',
    'registre': 'registre',
    'tipizate': 'tipizate',
    'plicuri': 'plicuri',
    'etichete': 'etichete',
    'caiete': 'caiete',
    'agende': 'agende'
  };

  for (const tag of tagArray) {
    const normalizedTag = tag.toLowerCase().replace(/\s+/g, '-');
    if (subcategoryMap[normalizedTag]) {
      return subcategoryMap[normalizedTag];
    }
  }

  return undefined;
}

function extractAttributesFromTags(tags: string[] | string | undefined): Record<string, any> {
  const attributes: Record<string, any> = {};
  
  // Ensure tags is an array
  const tagArray = Array.isArray(tags) ? tags : (tags ? [tags] : []);
  
  // Extract attributes from tags
  // This is a simplified example - you can expand this based on your tagging strategy
  tagArray.forEach(tag => {
    if (tag.startsWith('format:')) {
      attributes.format = tag.replace('format:', '');
    }
    if (tag.startsWith('culoare:')) {
      attributes.culoare = tag.replace('culoare:', '');
    }
    if (tag.startsWith('brand:')) {
      attributes.brand = tag.replace('brand:', '');
    }
  });

  return attributes;
}
