// components/Footer/components/FooterLinks/FooterLinks.tsx
import Link from "next/link";
import { quickLinksData } from "./../../data/quickLinks";

export const FooterLinks = () => {

  // Local categories data
  const popularCategories = [
    { name: "HÂRTIE, PRODUSE DIN HÂRTIE", slug: "hartie" },
    { name: "BIROU, ORGANIZARE ȘI ARHIVARE", slug: "birou" },
    { name: "AFIȘARE ȘI PREZENTARE", slug: "afisare" },
  ];


  return (
    <div className="grid grid-cols-2 gap-2">
      {/* Main categories */}
      <div>
        <h4 className="text-xs font-semibold text-indigo-700 mb-2 pb-1 border-b border-indigo-100">
          Categorii populare
        </h4>
        <ul className="space-y-1">
          {popularCategories.map((cat) => (
            <FooterLink 
              key={cat.slug}
              href={`/category/${cat.slug}`}
              label={cat.name.length > 15 ? `${cat.name.substring(0, 15)}...` : cat.name}
            />
          ))}
          <li>
            <Link 
              href="/categories" 
              className="text-xs font-medium text-indigo-600 hover:text-indigo-800 transition-all flex items-center group"
            >
              <span className="w-0 h-[1px] bg-indigo-600 mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
              Vezi toate
            </Link>
          </li>
        </ul>
      </div>
      
      {/* Company and support links */}
      <div>
        <h4 className="text-xs font-semibold text-indigo-700 mb-2 pb-1 border-b border-indigo-100">
          Informații utile
        </h4>
        <ul className="space-y-1">
          {quickLinksData.map((link) => (
            <FooterLink 
              key={link.href}
              href={link.href}
              label={link.label}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

interface FooterLinkProps {
  href: string;
  label: string;
}

const FooterLink = ({ href, label }: FooterLinkProps) => (
  <li>
    <Link 
      href={href} 
      className="text-sm text-gray-600 hover:text-indigo-600 transition-all flex items-center group"
    >
      <span className="w-0 h-[1px] bg-indigo-600 mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
      {label}
    </Link>
  </li>
);