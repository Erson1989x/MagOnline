import { motion } from 'framer-motion';
import Image from 'next/image';

const CompanyDescription = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 relative z-10">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl group">
          {/* Decorative elements */}
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-200/30 rounded-full blur-xl group-hover:bg-indigo-300/40 transition-all duration-700"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-200/30 rounded-full blur-xl group-hover:bg-blue-300/40 transition-all duration-700"></div>
          <Image 
            src="/HP 1.png" 
            alt="Despre BravArt" 
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent flex items-end">
            <div className="p-6">
              <h3 className="text-white text-2xl font-bold">Povestea Noastră</h3>
            </div>
          </div>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className="text-2xl font-bold mb-4 text-gray-800 relative inline-block">
          <span className="relative z-10">Descrierea Companiei</span>
          <span className="absolute bottom-0 left-0 w-full h-3 bg-indigo-100 -z-10"></span>
        </h3>
        <p className="text-gray-600 mb-6">
          BravArt a fost fondată cu pasiune și dedicare pentru a oferi soluții complete de papetărie și birotică pentru afaceri și persoane fizice. Cu o experiență de peste 10 ani în domeniu, am crescut constant, adaptându-ne la nevoile în schimbare ale clienților noștri.
        </p>
        <p className="text-gray-600 mb-6">
          Astăzi, BravArt este recunoscut ca un furnizor de încredere pentru o gamă largă de produse esențiale, de la articole de papetărie și birotică, până la soluții personalizate pentru cadouri corporate.
        </p>
        
        <div className="border-l-4 border-indigo-600 pl-4 italic text-gray-700 mb-6 bg-gradient-to-r from-indigo-50 to-transparent py-3 rounded-r-lg">
          &ldquo;Ne străduim să oferim nu doar produse, ci soluții complete care aduc ordine, ritm și eficiență în activitatea clienților noștri.&rdquo;
        </div>
      </motion.div>
    </div>
  );
};

export default CompanyDescription;