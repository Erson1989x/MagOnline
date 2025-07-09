import { categories } from '@/components/Navbar/data/categories';
import { getProductsByCategory } from '@/lib';

export function useCategoryData(slug: string, subcategorySlug?: string) {
  // Find the category from our categories data
  const category = categories.flatMap(group => group.subcategories)
    .find(cat => cat.slug === slug);
  
  // Find the subcategory if a subcategory slug is provided
  const subcategory = subcategorySlug && category?.subcategories ? 
    category.subcategories.find(subcat => subcat.slug === subcategorySlug) : 
    undefined;
  
  // Get products
  const products = getProductsByCategory(slug, subcategorySlug);
  
  return { category, subcategory, products };
}