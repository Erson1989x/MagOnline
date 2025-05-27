import Link from "next/link";
import CategoryDropdown from "../CategoryDropdown/CategoryDropdown";

type Subcategory = {
  name: string;
  slug: string;
};

type Category = {
  name: string;
  subcategories: Subcategory[];
};

type DesktopNavigationProps = {
  categories: Category[];
  categoryDropdown: string;
  toggleDropdown: (category: string) => void;
  setCategoryDropdown: (category: string) => void;
};

const DesktopNavigation = ({
  categories,
  categoryDropdown,
  toggleDropdown,
  setCategoryDropdown
}: DesktopNavigationProps) => {
  return (
    <nav className="hidden md:flex space-x-8">
      <Link
        href="/"
        className="text-gray-700 hover:text-indigo-600 font-medium"
      >
        Acasă
      </Link>
      
      {categories.map((category) => (
        <CategoryDropdown
          key={category.name}
          category={category}
          categoryDropdown={categoryDropdown}
          toggleDropdown={toggleDropdown}
          setCategoryDropdown={setCategoryDropdown}
        />
      ))}
      
      <Link
        href="/ai-giftistry"
        className="text-indigo-600 hover:text-indigo-800 font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-indigo-800 after:transition-all after:duration-300 hover:after:w-full"
      >
        AI Giftistry
      </Link>

      <Link
        href="/despre-noi"
        className="text-gray-700 hover:text-indigo-600 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full"
      >
        Despre Noi
      </Link>

      <Link
        href="/contact"
        className="text-gray-700 hover:text-indigo-600 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full"
      >
        Contact
      </Link>
    </nav>
  );
};

export default DesktopNavigation;