interface AddToCartButtonProps {
  inStock: boolean;
}

export default function AddToCartButton({ inStock }: AddToCartButtonProps) {
  return (
    <button 
      className={`w-full py-3 px-6 rounded-lg text-white font-medium transition-colors ${
        inStock 
          ? 'bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600' 
          : 'bg-gray-400 cursor-not-allowed'
      }`}
      disabled={!inStock}
    >
      {inStock ? 'Adaugă în coș' : 'Indisponibil'}
    </button>
  );
}