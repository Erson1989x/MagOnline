export type Subcategory = {
  name: string;
  slug: string;
};

export type Category = {
  name: string;
  subcategories: Subcategory[];
};