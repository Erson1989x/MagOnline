"use client";
import Link from "next/link";
import Image from "next/image";
import { FiPhone, FiMail, FiChevronRight } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { categories } from "../Navbar/data/categories";
import logo from "../../../public/next.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socials = [
    { Icon: FaFacebookF, href: "https://facebook.com", hoverClass: "hover:bg-blue-600" },
    { Icon: FaInstagram, href: "https://instagram.com", hoverClass: "hover:bg-pink-600" },
    { Icon: FaTiktok, href: "https://tiktok.com", hoverClass: "hover:bg-black" }
  ];
  
  const quickLinks = [
    { label: "Despre noi", href: "/despre-noi" },
    { label: "Contact", href: "/contact" },
    { label: "Cum cumpăr", href: "/cum-cumpar" },
    { label: "Livrare", href: "/livrare" },
    { label: "Returnare", href: "/returnare" }
  ];

  const legalLinks = ["Termeni", "Confidențialitate", "Cookies"];
  
  return (
    <footer className="bg-gradient-to-r from-indigo-50 to-blue-50 shadow-inner border-t border-indigo-100">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap justify-between gap-4">
          {/* Company info and branding - more compact */}
          <div className="w-full md:w-1/4">
            <div className="flex items-center mb-2">
              <div className="h-6 w-6 relative mr-2 bg-white rounded-full shadow-sm overflow-hidden">
                <Image src={logo} alt="BravArt Logo" fill className="object-contain p-1" />
              </div>
              <span className="text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
                BravArt
              </span>
            </div>
            
            <p className="text-xs text-gray-600 mb-2 max-w-xs leading-tight">
              Partenerul tău pentru ordine, ritm și eficiență în papetărie și birotică.
            </p>
            
            {/* Contact info - inline for space saving */}
            <div className="flex items-center gap-4 text-xs text-gray-600">
              <div className="flex items-center">
                <FiPhone size={12} className="text-indigo-500 mr-1" />
                <span>072 123 123</span>
              </div>
              <div className="flex items-center">
                <FiMail size={12} className="text-indigo-500 mr-1" />
                <span>contact@bravart.ro</span>
              </div>
            </div>
          </div>

          {/* Quick links - two columns with less spacing */}
          <div className="w-full md:w-2/5 flex flex-wrap">
            {/* Main categories */}
            <div className="w-1/2">
              <h4 className="text-xs font-semibold text-indigo-700 mb-2">Categorii populare</h4>
              <ul className="space-y-1">
                {categories[0].subcategories.slice(0, 3).map((cat) => (
                  <li key={cat.slug}>
                    <Link 
                      href={`/category/${cat.slug}`} 
                      className="text-xs text-gray-600 hover:text-indigo-600 transition-colors flex items-center"
                    >
                      <FiChevronRight size={10} className="text-indigo-400 mr-1" />
                      {cat.name.length > 15 ? `${cat.name.substring(0, 15)}...` : cat.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link 
                    href="/categories" 
                    className="text-xs font-medium text-indigo-600 hover:text-indigo-800 transition-colors flex items-center"
                  >
                    <FiChevronRight size={10} className="mr-1" />
                    Vezi toate
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Company and support links */}
            <div className="w-1/2">
              <h4 className="text-xs font-semibold text-indigo-700 mb-2">Informații utile</h4>
              <ul className="space-y-1">
                {quickLinks.slice(0, 4).map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-xs text-gray-600 hover:text-indigo-600 transition-colors flex items-center"
                    >
                      <FiChevronRight size={10} className="text-indigo-400 mr-1" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social media - more compact */}
          <div className="w-full md:w-1/4">
            <h4 className="text-xs font-semibold text-indigo-700 mb-2">Urmărește-ne</h4>
            <div className="flex space-x-2">
              {socials.map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href}
                  aria-label={`Follow us on ${social.Icon.name}`}
                  className={`w-7 h-7 bg-white ${social.hoverClass} flex items-center justify-center rounded-full transition-all duration-200 shadow-sm hover:shadow-md border border-gray-100`}
                >
                  <social.Icon size={14} className="text-indigo-600 hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar with copyright - more compact */}
      <div className="border-t border-indigo-100 bg-white/80">
        <div className="container mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 mb-1 md:mb-0">
            © {currentYear} BravArt • Toate drepturile rezervate
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
    </footer>
  );
};

export default Footer;
