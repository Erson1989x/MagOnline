import SubcategoryPage from "@/app/category/[slug]/[subcategory]/page";

/**
 * Union type for main category slugs
 */
export type CategorySlug = 
  | "hartie"
  | "birou"
  | "afisare"
  | "instrumente-scris"
  | "accesorii-it"
  | "curatenie"
  | "rechizite"
  | "cadouri"
  | "parker"
  | "daco"
  | "herlitz";

/**
 * Union type for paper subcategory slugs
 */
export type PaperSubcategorySlug =
  | "hartie-toate-dimensiunile"
  | "hartie-colorata"
  | "hartie-foto"
  | "registre"
  | "tipizate"
  | "plicuri"
  | "etichete"
  | "caiete"
  | "agende";

export type BirouSubcategorySlug =
  | "bibliorafturi"
  | "separatoare"
  | "cutii-arhivare"
  | "dosare-plastic"
  | "dosare-carton"
  | "dosare-suspendabile"
  | "folii"
  | "mape-cu-butoni"
  | "serviete"
  | "clipboard"
  | "capsatoare"
  | "agrafe-si-clipsuri"
  | "banda-adeziva"
  | "lipici"
  | "foarfece"
  | "ace"
  | "pionieze"
  | "rigle"
  | "baterii"
  | "accesorii-indosariere"
  | "etichete";

/**
 * Union type for all subcategory slugs
 * As more subcategories are added to other categories, they should be added here
 */
export type SubcategorySlug = PaperSubcategorySlug | BirouSubcategorySlug;

/**
 * Combined type for all possible slugs
 */
export type AllSlugs = CategorySlug | SubcategorySlug;
