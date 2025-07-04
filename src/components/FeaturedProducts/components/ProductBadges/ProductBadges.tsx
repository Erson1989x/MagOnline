
interface Product {
  isNew: boolean;
  isBestseller: boolean;
}

interface ProductBadgesProps {
  product: Product;
}

const ProductBadges = ({ product }: ProductBadgesProps) => {
  return (
    <div className="absolute top-2 left-2 flex flex-col gap-2">
      {product.isNew && (
        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow-sm">
          Nou
        </span>
      )}
      {product.isBestseller && (
        <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-sm">
          Bestseller
        </span>
      )}
    </div>
  );
};

export default ProductBadges;