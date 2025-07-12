/**
 * Shopify configuration and client setup
 */
import Client from 'shopify-buy';

// Shopify store configuration
const shopifyConfig = {
  domain: process.env.NEXT_PUBLIC_SHOPIFY_STORE_URL || 'your-store.myshopify.com',
  storefrontAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN || 'your-storefront-access-token'
};

// Create Shopify client
const shopifyClient = Client.buildClient({
  domain: shopifyConfig.domain,
  storefrontAccessToken: shopifyConfig.storefrontAccessToken,
  apiVersion: '2023-10'
});

export default shopifyClient;
export { shopifyConfig };
