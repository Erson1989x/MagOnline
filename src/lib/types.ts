import { AllSlugs, CategorySlug, SubcategorySlug } from './slugTypes';

// Product interface
export interface Product {
  id: string;
  name: string;
  slug: string; // Product slugs are still strings as they're unique
  description: string;
  price: number;
  discount: number;
  image: string;
  images: string[];
  brand: string;
  category: CategorySlug;
  subcategory?: SubcategorySlug;
  inStock: boolean;
  attributes?: {
    [key: string]: string | string[] | number;
  };
}

// Subcategory interface (already defined in Navbar/types.ts but included here for reference)
export interface Subcategory {
  name: string;
  slug: SubcategorySlug;
  subcategories?: Subcategory[];
}

// Category group interface
export interface CategoryGroup {
  name: string;
  subcategories: Subcategory[];
}

export type TCategory = 
  | Subcategory
  | {
      name: string;
      slug: CategorySlug;
      subcategories?: Subcategory[];
    };

export type TSubcategory = Subcategory;
