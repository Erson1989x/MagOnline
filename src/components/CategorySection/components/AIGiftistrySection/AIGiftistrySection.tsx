import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const AIGiftistrySection = () => {
  return (
    <motion.div 
      className="mt-16 relative overflow-hidden rounded-2xl shadow-xl border border-indigo-100"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-8 md:p-12 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-white/5 rounded-full"></div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-3xl font-bold text-white mb-4">AI Giftistry</h3>
            <p className="text-white/90 mb-6 max-w-lg">
              Descoperă noua noastră colecție de produse personalizate cu ajutorul inteligenței artificiale. 
              De la agende și felicitări, până la căni și tricouri - toate cu design unic, generat special pentru tine.
            </p>
            <Link 
              href="/ai-giftistry"
              className="inline-flex items-center px-6 py-3 rounded-full bg-white text-indigo-600 font-medium transition-all hover:scale-105 hover:shadow-lg relative overflow-hidden group"
            >
              <span className="absolute inset-0 w-0 bg-indigo-50 transition-all duration-500 ease-out group-hover:w-full"></span>
              <span className="relative">
                Descoperă colecția
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </Link>
          </div>
          <div className="w-full md:w-1/2 relative h-60 md:h-80">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                <div className="relative h-32 md:h-40 rounded-lg overflow-hidden shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300 border border-white/20">
                  <Image src="/HP 4.png" alt="AI Generated Product" fill className="object-cover" />
                </div>
                <div className="relative h-32 md:h-40 rounded-lg overflow-hidden shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300 border border-white/20">
                  <Image src="/HP 5.png" alt="AI Generated Product" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
    </motion.div>
  );
};

export default AIGiftistrySection;