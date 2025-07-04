
import Link from "next/link";

interface FooterBottomProps {
  currentYear: number;
}

export const FooterBottom = ({ currentYear }: FooterBottomProps) => {
  const legalLinks = ["Termeni", "Confidențialitate", "Cookies"];
  
  return (
    <div className="border-t border-indigo-100 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center">
        <p className="text-xs text-gray-500 mb-1 md:mb-0">
          © {currentYear} <span className="font-medium text-indigo-600">Artima</span> • Toate drepturile rezervate
        </p>
        
        <div className="flex items-center gap-x-4">
          {legalLinks.map((item) => (
            <Link 
              key={item} 
              href={`/${item.toLowerCase()}`} 
              className="text-xs text-gray-500 hover:text-indigo-600 transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};