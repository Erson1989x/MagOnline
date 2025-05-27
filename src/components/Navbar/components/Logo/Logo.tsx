import Link from "next/link";
import Image from "next/image";
import logo from "../../../../../public/next.svg";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center group">
      <div className="h-12 w-12 relative mr-3 bg-white/50 rounded-full p-1 shadow-sm overflow-hidden transition-all duration-300 group-hover:shadow-md group-hover:scale-105">
        <Image
          src={logo}
          alt=""
          fill
          className="object-contain p-1"
        />
      </div>
      <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600 transition-all duration-300 group-hover:from-indigo-500 group-hover:to-blue-500">
        BravArt
      </span>
    </Link>
  );
};

export default Logo;