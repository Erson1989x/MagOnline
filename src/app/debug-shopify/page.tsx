/**
 * Debug Shopify Collections
 */
import shopifyClient from '@/lib/shopify';

export default async function DebugShopifyPage() {
  try {
    // Get all collections
    const collections = await shopifyClient.collection.fetchAll();
    
    // Get all products  
    const products = await shopifyClient.product.fetchAll();
    
    // Handle potential undefined results
    const collectionsArray = Array.isArray(collections) ? collections : [];
    const productsArray = Array.isArray(products) ? products : [];
    
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Debug Shopify Store</h1>
        
        <div className="mb-4 p-4 bg-gray-100 rounded-lg">
          <h3 className="font-semibold mb-2">Connection Status:</h3>
          <p>✅ Successfully connected to Shopify</p>
          <p>Store: {process.env.NEXT_PUBLIC_SHOPIFY_STORE_URL}</p>
          <p>Collections found: {collectionsArray.length}</p>
          <p>Products found: {productsArray.length}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Collections ({collectionsArray.length})</h2>
            {collectionsArray.length > 0 ? (
              <div className="space-y-4">
                {collectionsArray.map((collection) => (
                  <div key={collection.id} className="border rounded-lg p-4">
                    <h3 className="font-semibold text-lg">{collection.title}</h3>
                    <p className="text-gray-600">Handle: <code>{collection.handle}</code></p>
                    <p className="text-sm">Products: {collection.products?.length || 0}</p>
                    <p className="text-xs text-gray-500">ID: {collection.id}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
                <p><strong>No collections found!</strong></p>
                <p>You need to create collections in Shopify admin:</p>
                <ol className="list-decimal list-inside mt-2 text-sm">
                  <li>Go to Products → Collections in Shopify admin</li>
                  <li>Create collection with handle: <code>birou</code></li>
                  <li>Set it as Smart collection</li>
                  <li>Add condition: Product tag equals "birou"</li>
                </ol>
              </div>
            )}
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Products ({productsArray.length})</h2>
            {productsArray.length > 0 ? (
              <div className="space-y-4">
                {productsArray.map((product) => (
                  <div key={product.id} className="border rounded-lg p-4">
                    <h3 className="font-semibold">{product.title}</h3>
                    <p className="text-gray-600">Handle: <code>{product.handle}</code></p>
                    <p className="text-sm">Tags: {product.tags?.join(', ') || 'No tags'}</p>
                    <p className="text-sm">Type: {product.productType || 'No type'}</p>
                    <p className="text-sm">Vendor: {product.vendor || 'No vendor'}</p>
                    <p className="text-lg font-bold text-green-600">
                      {product.variants?.[0]?.price?.amount || 'No price'} {product.variants?.[0]?.price?.currencyCode || ''}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
                <p><strong>No products found!</strong></p>
                <p>Add products to your Shopify store first.</p>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-blue-100 rounded-lg">
          <h3 className="font-semibold mb-2">Next Steps:</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li>Create collections in Shopify admin with the exact handles from our documentation</li>
            <li>Make sure products have the correct tags (birou, bibliorafturi, etc.)</li>
            <li>Smart collections will automatically include products with matching tags</li>
          </ol>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Debug Shopify Store</h1>
        
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <strong>Error connecting to Shopify:</strong>
          <pre className="mt-2 text-sm">{error instanceof Error ? error.message : 'Unknown error'}</pre>
        </div>
      </div>
    );
  }
}
