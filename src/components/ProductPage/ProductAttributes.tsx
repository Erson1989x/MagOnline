interface ProductAttributesProps {
  attributes: {
    [key: string]: string | string[] | number;
  };
}

export default function ProductAttributes({ attributes }: ProductAttributesProps) {
  return (
    <div className="mb-6">
      <h3 className="text-sm font-medium text-gray-900 mb-3">Specificații:</h3>
      <div className="grid grid-cols-2 gap-y-2 text-sm">
        {Object.entries(attributes).map(([key, value]) => (
          <div key={key} className="flex items-start">
            <span className="text-gray-500 mr-2">{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
            <span className="text-gray-900">{value.toString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}