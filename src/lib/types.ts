// Product interface
export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  discount: number;
  image: string;
  images: string[];
  brand: string;
  category: string;
  subcategory?: string;
  inStock: boolean;
  attributes?: {
    [key: string]: string | string[] | number;
  };
}

// Subcategory interface (already defined in Navbar/types.ts but included here for reference)
export interface Subcategory {
  name: string;
  slug: string;
  subcategories?: Subcategory[];
}

// Category group interface
export interface CategoryGroup {
  name: string;
  subcategories: Subcategory[];
}
