/**
 * Test page to debug Shopify API connection
 */
import { getProductsByCollection } from '@/lib/shopifyApi';
import { getProductsByCollectionReal } from '@/lib/shopifyReal';
import shopifyClient from '@/lib/shopify';

export default async function TestShopifyApiPage() {
  const results = {
    environment: {
      storeUrl: process.env.NEXT_PUBLIC_SHOPIFY_STORE_URL || 'NOT_SET',
      hasToken: !!process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
      tokenLength: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN?.length || 0,
      token: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN || 'NOT_SET',
    },
    tests: [] as any[]
  };

  try {
    // Test 1: Direct shopify client connection
    console.log('[TEST] Testing direct Shopify client connection...');
    const collections = await shopifyClient.collection.fetchAll();
    results.tests.push({
      name: 'Direct Shopify Client - Collections',
      success: true,
      data: collections.map(c => ({ id: c.id, title: c.title, handle: c.handle }))
    });
  } catch (error) {
    results.tests.push({
      name: 'Direct Shopify Client - Collections',
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }

  try {
    // Test 2: Direct shopify client with products
    console.log('[TEST] Testing direct Shopify client with products...');
    const collectionsWithProducts = await shopifyClient.collection.fetchAllWithProducts();
    results.tests.push({
      name: 'Direct Shopify Client - Collections with Products',
      success: true,
      data: collectionsWithProducts.map(c => ({ 
        id: c.id, 
        title: c.title, 
        handle: c.handle, 
        productCount: c.products.length,
        products: c.products.map(p => ({ id: p.id, title: p.title, handle: p.handle, tags: p.tags }))
      }))
    });
  } catch (error) {
    results.tests.push({
      name: 'Direct Shopify Client - Collections with Products',
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }

  try {
    // Test 3: Real API function - birou collection
    console.log('[TEST] Testing getProductsByCollectionReal for birou...');
    const birouProducts = await getProductsByCollectionReal('birou');
    results.tests.push({
      name: 'getProductsByCollectionReal - birou',
      success: true,
      data: birouProducts
    });
  } catch (error) {
    results.tests.push({
      name: 'getProductsByCollectionReal - birou',
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }

  try {
    // Test 4: Real API function - birou-bibliorafturi collection
    console.log('[TEST] Testing getProductsByCollectionReal for birou-bibliorafturi...');
    const birouBibliorafturiProducts = await getProductsByCollectionReal('birou-bibliorafturi');
    results.tests.push({
      name: 'getProductsByCollectionReal - birou-bibliorafturi',
      success: true,
      data: birouBibliorafturiProducts
    });
  } catch (error) {
    results.tests.push({
      name: 'getProductsByCollectionReal - birou-bibliorafturi',
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }

  try {
    // Test 5: Wrapper API function
    console.log('[TEST] Testing getProductsByCollection wrapper...');
    const wrapperProducts = await getProductsByCollection('birou');
    results.tests.push({
      name: 'getProductsByCollection wrapper - birou',
      success: true,
      data: wrapperProducts
    });
  } catch (error) {
    results.tests.push({
      name: 'getProductsByCollection wrapper - birou',
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Shopify API Test Results</h1>
      
      <div className="mb-6 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Environment</h2>
        <pre className="text-sm">{JSON.stringify(results.environment, null, 2)}</pre>
      </div>

      <div className="space-y-4">
        {results.tests.map((test, index) => (
          <div key={index} className={`p-4 rounded-lg border ${test.success ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
            <h3 className="font-semibold text-lg mb-2">
              {test.success ? '✅' : '❌'} {test.name}
            </h3>
            {test.success ? (
              <div>
                <p className="text-green-700 mb-2">Success!</p>
                <details>
                  <summary className="cursor-pointer text-sm text-gray-600">View Data</summary>
                  <pre className="mt-2 text-xs bg-white p-2 rounded border overflow-auto max-h-96">
                    {JSON.stringify(test.data, null, 2)}
                  </pre>
                </details>
              </div>
            ) : (
              <div>
                <p className="text-red-700 mb-2">Failed</p>
                <p className="text-sm text-red-600">{test.error}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
