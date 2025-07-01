// types/index.ts

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  isNew: boolean;
  isBestseller: boolean;
}