interface StockStatusProps {
  inStock: boolean;
}

export default function StockStatus({ inStock }: StockStatusProps) {
  return (
    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-6 ${
      inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
    }`}>
      <span className={`w-2 h-2 rounded-full mr-2 ${
        inStock ? 'bg-green-500' : 'bg-red-500'
      }`}></span>
      {inStock ? 'În stoc' : 'Stoc epuizat'}
    </div>
  );
}