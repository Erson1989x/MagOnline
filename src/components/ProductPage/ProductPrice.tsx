interface ProductPriceProps {
  price: number;
  discount: number;
}

export default function ProductPrice({ price, discount }: ProductPriceProps) {
  return (
    <div className="flex items-center mb-6">
      {discount > 0 ? (
        <>
          <span className="text-3xl font-bold text-gray-900">
            {(price * (1 - discount / 100)).toFixed(2)} lei
          </span>
          <span className="ml-3 text-lg text-gray-500 line-through">
            {price.toFixed(2)} lei
          </span>
        </>
      ) : (
        <span className="text-3xl font-bold text-gray-900">
          {price.toFixed(2)} lei
        </span>
      )}
    </div>
  );
}