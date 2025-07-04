
import Image from "next/image";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import logo from "../../../../../public/SIGLĂARTIMA.png";

export const CompanyInfo = () => {
  return (
    <>
      <div className="flex items-center mb-3 group">
        <div className="h-6 w-6 relative mr-2 bg-white rounded-full shadow-md overflow-hidden group-hover:shadow-lg transition-all duration-300">
          <Image src={logo} alt="Artima Logo" fill className="object-contain" />
        </div>
        <span className="text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
          Artima
        </span>
      </div>
      
      <p className="text-xs text-gray-600 mb-2 max-w-xs leading-tight">
        Partenerul tău pentru ordine, ritm și eficiență în papetărie și birotică.
      </p>
      
      {/* Contact info with improved styling */}
      <div className="space-y-1">
        <ContactItem 
          Icon={FiPhone} 
          text="072 123 123" 
        />
        
        <ContactItem 
          Icon={FiMail} 
          text="contact@artima.ro" 
        />
        
        <ContactItem 
          Icon={FiMapPin} 
          text="București, România" 
        />
      </div>
    </>
  );
};

interface ContactItemProps {
  Icon: React.ElementType;
  text: string;
}

const ContactItem = ({ Icon, text }: ContactItemProps) => (
  <div className="flex items-center group">
    <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mr-2 group-hover:bg-indigo-200 transition-colors">
      <Icon size={12} className="text-indigo-600" />
    </div>
    <span className="text-xs text-gray-600 group-hover:text-indigo-600 transition-colors">{text}</span>
  </div>
);