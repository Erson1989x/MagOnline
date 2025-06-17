import { FC } from 'react';

type CategoryFilterProps = {
  categories: {
    id: string;
    name: string;
  }[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
};

const CategoryFilter: FC<CategoryFilterProps> = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap justify-center mb-10 gap-2 relative z-10">
      {categories.map(category => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-4 py-2 rounded-full transition-all ${
            activeCategory === category.id
              ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md'
              : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-indigo-200'
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;