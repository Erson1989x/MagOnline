import Link from "next/link";
import Image from "next/image";
import logo from "../../../../../public/SIGLĂARTIMA.png";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center group">
      <div className="h-12 w-12 relative mr-3 bg-white/50 rounded-full p-1 shadow-sm overflow-hidden transition-all duration-300 group-hover:shadow-md group-hover:scale-105">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-blue-50"></div>
        <Image
          src={logo}
          alt=""
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600 transition-all duration-300 group-hover:from-indigo-500 group-hover:to-blue-500">
        Artima
      </span>
    </Link>
  );
};

export default Logo;