import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getProductBySlug, getRelatedProducts } from '@/lib';

// Define the props for the page component
interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;
  
  // Get the product data
  const product = getProductBySlug(slug);
  
  // If product doesn't exist, return 404
  if (!product) {
    notFound();
  }
  
  // Get related products
  const relatedProducts = getRelatedProducts(product.id, product.category, 4);
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="flex items-center text-sm mb-8">
          <Link href="/" className="text-gray-500 hover:text-indigo-600 transition-colors">
            Acasă
          </Link>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <Link href={`/category/${product.category}`} className="text-gray-500 hover:text-indigo-600 transition-colors">
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </Link>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-900 font-medium">
            {product.name}
          </span>
        </div>
        
        {/* Product Details */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Product Image */}
            <div className="relative h-80 md:h-96 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-4"
              />
              {product.discount > 0 && (
                <div className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-md">
                  -{product.discount}%
                </div>
              )}
            </div>
            
            {/* Product Info */}
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h1>
              
              <div className="text-sm text-gray-500 mb-4">
                Brand: <span className="font-medium text-gray-700">{product.brand}</span>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-700">{product.description}</p>
              </div>
              
              <div className="flex items-center mb-6">
                {product.discount > 0 ? (
                  <>
                    <span className="text-3xl font-bold text-gray-900">
                      {(product.price * (1 - product.discount / 100)).toFixed(2)} lei
                    </span>
                    <span className="ml-3 text-lg text-gray-500 line-through">
                      {product.price.toFixed(2)} lei
                    </span>
                  </>
                ) : (
                  <span className="text-3xl font-bold text-gray-900">
                    {product.price.toFixed(2)} lei
                  </span>
                )}
              </div>
              
              {/* Stock Status */}
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-6 ${
                product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                <span className={`w-2 h-2 rounded-full mr-2 ${
                  product.inStock ? 'bg-green-500' : 'bg-red-500'
                }`}></span>
                {product.inStock ? 'În stoc' : 'Stoc epuizat'}
              </div>
              
              {/* Product Attributes */}
              {product.attributes && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Specificații:</h3>
                  <div className="grid grid-cols-2 gap-y-2 text-sm">
                    {Object.entries(product.attributes).map(([key, value]) => (
                      <div key={key} className="flex items-start">
                        <span className="text-gray-500 mr-2">{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                        <span className="text-gray-900">{value.toString()}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Add to Cart Button */}
              <div className="mt-auto">
                <button 
                  className={`w-full py-3 px-6 rounded-lg text-white font-medium transition-colors ${
                    product.inStock 
                      ? 'bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600' 
                      : 'bg-gray-400 cursor-not-allowed'
                  }`}
                  disabled={!product.inStock}
                >
                  {product.inStock ? 'Adaugă în coș' : 'Indisponibil'}
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-xl font-medium text-gray-900 mb-6">Produse similare</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link 
                  key={relatedProduct.id} 
                  href={`/product/${relatedProduct.slug}`}
                  className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 overflow-hidden"
                >
                  <div className="relative h-48 bg-gray-100">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                    />
                    {relatedProduct.discount > 0 && (
                      <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
                        -{relatedProduct.discount}%
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
                      {relatedProduct.name}
                    </h3>
                    
                    <div className="text-sm text-gray-500 mb-2">
                      {relatedProduct.brand}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {relatedProduct.discount > 0 ? (
                          <>
                            <span className="text-lg font-bold text-gray-900">
                              {(relatedProduct.price * (1 - relatedProduct.discount / 100)).toFixed(2)} lei
                            </span>
                            <span className="ml-2 text-sm text-gray-500 line-through">
                              {relatedProduct.price.toFixed(2)} lei
                            </span>
                          </>
                        ) : (
                          <span className="text-lg font-bold text-gray-900">
                            {relatedProduct.price.toFixed(2)} lei
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
