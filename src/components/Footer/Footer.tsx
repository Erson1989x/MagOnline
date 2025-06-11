"use client";
import Link from "next/link";
import Image from "next/image";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { categories } from "../Navbar/data/categories";
import logo from "../../../public/next.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socials = [
    { Icon: FaFacebookF, href: "https://facebook.com", hoverClass: "hover:bg-blue-600", color: "#1877F2" },
    { Icon: FaInstagram, href: "https://instagram.com", hoverClass: "hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-500", color: "#E4405F" },
    { Icon: FaTiktok, href: "https://tiktok.com", hoverClass: "hover:bg-black", color: "#000000" },
    { Icon: FaYoutube, href: "https://youtube.com", hoverClass: "hover:bg-red-600", color: "#FF0000" },
    { Icon: FaLinkedinIn, href: "https://linkedin.com", hoverClass: "hover:bg-blue-700", color: "#0A66C2" }
  ];
  
  const quickLinks = [
    { label: "Despre noi", href: "/despre-noi" },
    { label: "Contact", href: "/contact" },
    { label: "Cum cumpăr", href: "/cum-cumpar" },
    { label: "Livrare", href: "/livrare" },
    { label: "Returnare", href: "/returnare" }
  ];

  const legalLinks = ["Termeni", "Confidențialitate", "Cookies"];
  
  // Wave divider SVG for modern look
  const WaveDivider = () => (
    <div className="w-full overflow-hidden leading-[0] rotate-180">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[20px]">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
              className="fill-indigo-50/80"></path>
      </svg>
    </div>
  );

  return (
    <footer className="bg-gradient-to-r from-indigo-50 to-blue-50 shadow-inner">
      {/* Wave divider for modern look */}
      <WaveDivider />
      
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-3">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          {/* Company info and branding */}
          <div className="md:col-span-4">
            <div className="flex items-center mb-3 group">
              <div className="h-6 w-6 relative mr-2 bg-white rounded-full shadow-md overflow-hidden group-hover:shadow-lg transition-all duration-300">
                <Image src={logo} alt="BravArt Logo" fill className="object-contain p-1" />
              </div>
              <span className="text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
                BravArt
              </span>
            </div>
            
            <p className="text-xs text-gray-600 mb-2 max-w-xs leading-tight">
              Partenerul tău pentru ordine, ritm și eficiență în papetărie și birotică.
            </p>
            
            {/* Contact info with improved styling */}
            <div className="space-y-1">
              <div className="flex items-center group">
                <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mr-2 group-hover:bg-indigo-200 transition-colors">
                  <FiPhone size={12} className="text-indigo-600" />
                </div>
                <span className="text-xs text-gray-600 group-hover:text-indigo-600 transition-colors">072 123 123</span>
              </div>
              
              <div className="flex items-center group">
                <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mr-2 group-hover:bg-indigo-200 transition-colors">
                  <FiMail size={12} className="text-indigo-600" />
                </div>
                <span className="text-xs text-gray-600 group-hover:text-indigo-600 transition-colors">contact@bravart.ro</span>
              </div>
              
              <div className="flex items-center group">
                <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mr-2 group-hover:bg-indigo-200 transition-colors">
                  <FiMapPin size={12} className="text-indigo-600" />
                </div>
                <span className="text-xs text-gray-600 group-hover:text-indigo-600 transition-colors">București, România</span>
              </div>
            </div>
          </div>

          {/* Quick links with better spacing and hover effects */}
          <div className="md:col-span-5 grid grid-cols-2 gap-2">
            {/* Main categories */}
            <div>
              <h4 className="text-xs font-semibold text-indigo-700 mb-2 pb-1 border-b border-indigo-100">Categorii populare</h4>
              <ul className="space-y-1">
                {categories[0].subcategories.slice(0, 3).map((cat) => (
                  <li key={cat.slug}>
                    <Link 
                      href={`/category/${cat.slug}`} 
                      className="text-sm text-gray-600 hover:text-indigo-600 transition-all flex items-center group"
                    >
                      <span className="w-0 h-[1px] bg-indigo-600 mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                      {cat.name.length > 15 ? `${cat.name.substring(0, 15)}...` : cat.name}
                    </Link>
                  </li>
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
              <h4 className="text-xs font-semibold text-indigo-700 mb-2 pb-1 border-b border-indigo-100">Informații utile</h4>
              <ul className="space-y-1">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-sm text-gray-600 hover:text-indigo-600 transition-all flex items-center group"
                    >
                      <span className="w-0 h-[1px] bg-indigo-600 mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social media - enhanced */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold text-indigo-700 mb-2 pb-1 border-b border-indigo-100">Urmărește-ne</h4>
            <div className="mt-2 bg-gradient-to-r from-indigo-50/50 to-blue-50/50 p-2 rounded-lg border border-indigo-100/50 shadow-inner">
              <p className="text-xs text-gray-500 mb-2">Fii la curent cu noutățile noastre</p>
              <div className="flex flex-wrap gap-2">
                {socials.map((social, idx) => (
                  <a 
                    key={idx}
                    href={social.href}
                    aria-label={`Follow us on ${social.Icon.name}`}
                    className={`w-7 h-7 bg-white ${social.hoverClass} flex items-center justify-center rounded-md transition-all duration-300 shadow-sm hover:shadow hover:scale-105 border border-gray-100 group overflow-hidden relative`}
                    style={{ background: `linear-gradient(135deg, white 50%, ${social.color}20 100%)` }}
                  >
                    <social.Icon 
                      size={14} 
                      className="text-indigo-600 group-hover:text-white transition-colors relative z-10" 
                    />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                         style={{ background: social.color }}></div>
                  </a>
                ))}
              </div>
              <div className="mt-2 text-center">
                <span className="text-[10px] text-gray-400 italic">Alătură-te comunității noastre</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar with copyright and legal links */}
      <div className="border-t border-indigo-100 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 mb-1 md:mb-0">
            © {currentYear} <span className="font-medium text-indigo-600">BravArt</span> • Toate drepturile rezervate
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
