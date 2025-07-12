import { notFound } from 'next/navigation';
import { getProductBySlugAsync, getRelatedProducts } from '@/lib';
import Breadcrumbs from '@/components/ProductPage/Breadcrumbs';
import ProductDetails from '@/components/ProductPage/ProductDetails';
import RelatedProducts from '@/components/ProductPage/RelatedProducts';

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductBySlugAsync(slug);
  
  if (!product) {
    notFound();
  }
  
  const relatedProducts = getRelatedProducts(product.id, product.category, 4);
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <Breadcrumbs product={product} />
        <ProductDetails product={product} />
        {relatedProducts.length > 0 && (
          <RelatedProducts products={relatedProducts} />
        )}
      </div>
    </div>
  );
}