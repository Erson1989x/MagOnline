/**
 * Test page to verify Shopify API connection
 */
import { getProductsByCollection } from '@/lib/shopifyApi';
import shopifyClient from '@/lib/shopify';

export default async function TestShopifyPage() {
  try {
    // Test the basic connection by fetching all collections
    const collections = await shopifyClient.collection.fetchAll();
    
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Shopify API Test</h1>
        
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          <strong>Success!</strong> API connection is working.
        </div>
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Test Results:</h2>
          <p>Collections found: {collections.length}</p>
          <p>Store URL: {process.env.NEXT_PUBLIC_SHOPIFY_STORE_URL}</p>
        </div>
        
        {collections.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Collections:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {collections.map((collection) => (
                <div key={collection.id} className="border rounded-lg p-4">
                  <h3 className="font-semibold">{collection.title}</h3>
                  <p className="text-sm text-gray-600">Handle: {collection.handle}</p>
                  <p className="text-sm">Products: {collection.products.length}</p>
                  <p className="text-xs text-gray-500">ID: {collection.id}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {collections.length === 0 && (
          <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
            <p>No collections found in your Shopify store.</p>
            <p>You need to create collections first in Shopify admin.</p>
          </div>
        )}
      </div>
    );
  } catch (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Shopify API Test</h1>
        
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <strong>Error!</strong> API connection failed.
          <pre className="mt-2 text-sm">{error instanceof Error ? error.message : 'Unknown error'}</pre>
          <div className="mt-4 text-sm">
            <p>Check the following:</p>
            <ul className="list-disc list-inside mt-2">
              <li>Store URL: {process.env.NEXT_PUBLIC_SHOPIFY_STORE_URL}</li>
              <li>Access token is valid</li>
              <li>Storefront API permissions are enabled</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
