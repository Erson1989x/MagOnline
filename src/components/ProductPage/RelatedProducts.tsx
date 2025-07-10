import { Product } from "@/lib";
import RelatedProductCard from "./RelatedProductCard";


interface RelatedProductsProps {
  products: Product[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    <div className="mt-16">
      <h2 className="text-xl font-medium text-gray-900 mb-6">Produse similare</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <RelatedProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}