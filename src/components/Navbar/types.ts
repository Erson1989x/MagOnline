import { CategorySlug, SubcategorySlug } from '../../lib/slugTypes';

export type Subcategory = {
  name: string;
  slug: SubcategorySlug;
  subcategories?: Subcategory[];
};

export type Category = {
  name: string;
  subcategories: Subcategory[];
};