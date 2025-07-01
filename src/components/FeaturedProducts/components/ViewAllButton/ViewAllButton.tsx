// components/ViewAllButton.tsx
import Link from 'next/link';

const ViewAllButton = () => {
  return (
    <div className="text-center mt-12">
      <Link 
        href="/products"
        className="inline-flex items-center px-6 py-3 rounded-full border-2 border-indigo-600 text-indigo-600 font-medium transition-all hover:bg-indigo-600 hover:text-white hover:shadow-lg hover:shadow-indigo-100 relative overflow-hidden group"
      >
        <span className="absolute inset-0 w-0 bg-indigo-600 transition-all duration-500 ease-out group-hover:w-full opacity-80"></span>
        <span className="relative flex items-center">
          Vezi toate produsele
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </span>
      </Link>
    </div>
  );
};

export default ViewAllButton;