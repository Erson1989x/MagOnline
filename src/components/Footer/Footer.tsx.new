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
    { Icon: FaFacebookF, href: "https://facebook.com", hoverClass: "hover:bg-blue-700" },
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
  
  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-blue-900 text-white pt-6 pb-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between gap-y-6">
          {/* Company info - more compact */}
          <div className="w-full md:w-1/3 pr-4">
            <div className="flex items-center mb-3">
              <div className="h-8 w-8 relative mr-2 bg-white/90 rounded-full shadow-sm overflow-hidden">
                <Image src={logo} alt="Logo" fill className="object-contain p-1" />
              </div>
              <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200">
                BravArt
              </span>
            </div>
            
            <div className="flex items-center gap-2 text-xs text-gray-300 mb-1.5">
              <FiPhone size={12} className="text-indigo-300" />
              <span>072 123 123</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-300 mb-3">
              <FiMail size={12} className="text-indigo-300" />
              <span>contact@bravart.ro</span>
            </div>
            
            {/* Social icons - horizontal */}
            <div className="flex space-x-2">
              {socials.map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href}
                  className={`w-6 h-6 bg-indigo-800/80 ${social.hoverClass} flex items-center justify-center rounded-full transition-all duration-200`}
                >
                  <social.Icon size={12} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links - combined */}
          <div className="w-full md:w-1/3 flex flex-wrap">
            {/* Main categories */}
            <div className="w-1/2">
              <h4 className="text-xs uppercase font-semibold text-indigo-300 mb-2">Produse</h4>
              <ul className="space-y-1">
                {categories[0].subcategories.slice(0, 4).map((cat) => (
                  <li key={cat.slug} className="flex items-center">
                    <FiChevronRight size={10} className="text-indigo-400 mr-1" />
                    <Link href={`/category/${cat.slug}`} className="text-xs text-gray-300 hover:text-white transition-colors">
                      {cat.name.length > 15 ? `${cat.name.substring(0, 15)}...` : cat.name}
                    </Link>
                  </li>
                ))}
                <li className="flex items-center">
                  <FiChevronRight size={10} className="text-indigo-400 mr-1" />
                  <Link href="/categories" className="text-xs font-medium text-indigo-300 hover:text-white transition-colors">
                    Vezi toate
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Company and support links */}
            <div className="w-1/2">
              <h4 className="text-xs uppercase font-semibold text-indigo-300 mb-2">Link-uri</h4>
              <ul className="space-y-1">
                {quickLinks.map((link) => (
                  <li key={link.href} className="flex items-center">
                    <FiChevronRight size={10} className="text-indigo-400 mr-1" />
                    <Link href={link.href} className="text-xs text-gray-300 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter subscription - simplified */}
          <div className="w-full md:w-1/3">
            <h4 className="text-xs uppercase font-semibold text-indigo-300 mb-2">Newsletter</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-2 py-1.5 text-xs rounded-l-sm focus:outline-none bg-indigo-800/30 text-white placeholder:text-indigo-400 border border-indigo-700"
              />
              <button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white text-xs px-3 py-1.5 rounded-r-sm hover:from-indigo-600 hover:to-blue-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Minimalist copyright */}
        <div className="border-t border-indigo-800/40 mt-5 pt-3 text-center">
          <div className="flex justify-center gap-x-4 mb-1 flex-wrap">
            {["Termeni", "Confidențialitate", "Cookies"].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="text-[10px] text-gray-400 hover:text-white transition-colors">
                {item}
              </Link>
            ))}
          </div>
          <p className="text-[10px] text-gray-500">
            © {currentYear} BravArt • Toate drepturile rezervate
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
