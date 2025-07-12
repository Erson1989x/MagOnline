/**
 * Real Shopify API implementation (replace mock functions)
 */
import shopifyClient from './shopify';
import { ShopifyProduct } from './shopifyApi';

// Real implementation to replace mock functions
export const getProductsByCollectionReal = async (handle: string): Promise<ShopifyProduct[]> => {
  try {
    // First fetch all collections to find the one with matching handle
    const collections = await shopifyClient.collection.fetchAllWithProducts();
    
    const targetCollection = collections.find(col => col.handle === handle);
    
    if (!targetCollection) {
      return [];
    }
    
    return targetCollection.products.map(product => {
      
      // Handle price range - it might be undefined in some cases
      const priceRange = product.priceRange ? {
        minVariantPrice: {
          amount: product.priceRange.minVariantPrice?.amount?.toString() || product.variants[0]?.price?.amount?.toString() || '0',
          currencyCode: product.priceRange.minVariantPrice?.currencyCode || product.variants[0]?.price?.currencyCode || 'RON'
        },
        maxVariantPrice: {
          amount: product.priceRange.maxVariantPrice?.amount?.toString() || product.variants[0]?.price?.amount?.toString() || '0',
          currencyCode: product.priceRange.maxVariantPrice?.currencyCode || product.variants[0]?.price?.currencyCode || 'RON'
        }
      } : {
        minVariantPrice: {
          amount: product.variants[0]?.price?.amount?.toString() || '0',
          currencyCode: product.variants[0]?.price?.currencyCode || 'RON'
        },
        maxVariantPrice: {
          amount: product.variants[0]?.price?.amount?.toString() || '0',
          currencyCode: product.variants[0]?.price?.currencyCode || 'RON'
        }
      };
      
      return {
        id: product.id.toString(),
        title: product.title,
        handle: product.handle,
        description: product.description,
        images: product.images.map(img => ({
          src: img.src,
          altText: img.altText || ''
        })),
        variants: product.variants.map(variant => ({
          id: variant.id.toString(),
          title: variant.title,
          price: variant.price?.amount?.toString() || '0',
          available: variant.availableForSale,
          compareAtPrice: variant.compareAtPrice?.amount?.toString()
        })),
        productType: product.productType,
        vendor: product.vendor,
        tags: product.tags,
        priceRange: priceRange
      };
    });
  } catch (error) {
    console.error('[DEBUG] Error fetching products from Shopify:', error);
    return [];
  }
};

export const getProductByHandleReal = async (handle: string): Promise<ShopifyProduct | null> => {
  try {
    const product = await shopifyClient.product.fetchByHandle(handle);
    if (!product) return null;
    
    return {
      id: product.id.toString(),
      title: product.title,
      handle: product.handle,
      description: product.description,
      images: product.images.map(img => ({
        src: img.src,
        altText: img.altText || ''
      })),
      variants: product.variants.map(variant => ({
        id: variant.id.toString(),
        title: variant.title,
        price: variant.price.amount.toString(),
        available: variant.availableForSale,
        compareAtPrice: variant.compareAtPrice?.amount.toString()
      })),
      productType: product.productType,
      vendor: product.vendor,
      tags: product.tags,
      priceRange: {
        minVariantPrice: {
          amount: product.priceRange.minVariantPrice.amount.toString(),
          currencyCode: product.priceRange.minVariantPrice.currencyCode
        },
        maxVariantPrice: {
          amount: product.priceRange.maxVariantPrice.amount.toString(),
          currencyCode: product.priceRange.maxVariantPrice.currencyCode
        }
      }
    };
  } catch (error) {
    console.error('Error fetching product from Shopify:', error);
    return null;
  }
};
