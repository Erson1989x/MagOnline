
interface SocialIconProps {
  social: {
    Icon: React.ElementType;
    href: string;
    hoverClass: string;
    color: string;
    name: string;
  };
}

const SocialIcon = ({ social }: SocialIconProps) => {
  const { Icon, href, hoverClass, color, name } = social;
  
  return (
    <a 
      href={href}
      aria-label={`Follow us on ${name}`}
      className={`w-7 h-7 bg-white ${hoverClass} flex items-center justify-center rounded-md transition-all duration-300 shadow-sm hover:shadow hover:scale-105 border border-gray-100 group overflow-hidden relative`}
      style={{ background: `linear-gradient(135deg, white 50%, ${color}20 100%)` }}
    >
      <Icon 
        size={14} 
        className="text-indigo-600 group-hover:text-white transition-colors relative z-10" 
      />
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
        style={{ background: color }}
      ></div>
    </a>
  );
};

export default SocialIcon;