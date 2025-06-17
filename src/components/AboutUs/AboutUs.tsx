"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-40 left-0 w-72 h-72 rounded-full bg-indigo-100/40 blur-3xl"></div>
      <div className="absolute bottom-40 right-0 w-80 h-80 rounded-full bg-blue-100/40 blur-3xl"></div>
      
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-indigo-500/[0.05] bg-[size:20px_20px]"></div>
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.span
            className="inline-block text-sm font-semibold px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Povestea noastră
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Despre <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">BravArt</span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Partenerul tău de încredere în papetărie, birotică și cadouri business
          </motion.p>
        </div>
        
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
        
        {/* Valori și misiune */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div 
            className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mb-4 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Calitate</h3>
            <p className="text-gray-600">
              Oferim doar produse de cea mai înaltă calitate, selectate cu grijă de la producători de renume.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mb-4 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Promptitudine</h3>
            <p className="text-gray-600">
              Înțelegem importanța timpului în afaceri, de aceea garantăm livrări rapide și servicii prompte.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mb-4 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Inovație</h3>
            <p className="text-gray-600">
              Căutăm constant să inovăm și să aducem cele mai noi soluții și produse pe piața românească.
            </p>
          </motion.div>
        </div>
        
        {/* Istoric */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-200 via-indigo-400 to-blue-300"></div>
          
          <div className="space-y-12">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center">
                <div className="flex-1 text-right pr-8">
                  <h3 className="text-xl font-bold text-gray-800">2013</h3>
                  <p className="text-gray-600">Înființarea BravArt</p>
                </div>
                <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center z-10">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="flex-1 pl-8">
                  <p className="text-gray-600">
                    Am început ca un mic magazin local de papetărie, cu o echipă de 3 persoane și o viziune mare.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center">
                <div className="flex-1 text-right pr-8">
                  <h3 className="text-xl font-bold text-gray-800">2016</h3>
                  <p className="text-gray-600">Extindere Națională</p>
                </div>
                <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center z-10">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="flex-1 pl-8">
                  <p className="text-gray-600">
                    Am lansat magazinul online și am început să livrăm în toată țara, dublându-ne cifra de afaceri.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center">
                <div className="flex-1 text-right pr-8">
                  <h3 className="text-xl font-bold text-gray-800">2020</h3>
                  <p className="text-gray-600">Diversificare Servicii</p>
                </div>
                <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center z-10">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="flex-1 pl-8">
                  <p className="text-gray-600">
                    Am adăugat servicii de personalizare și cadouri corporate, devenind un furnizor complet pentru afaceri.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-center">
                <div className="flex-1 text-right pr-8">
                  <h3 className="text-xl font-bold text-gray-800">2023</h3>
                  <p className="text-gray-600">Inovație AI</p>
                </div>
                <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center z-10">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="flex-1 pl-8">
                  <p className="text-gray-600">
                    Am lansat AI Giftistry, un serviciu revoluționar de recomandare personalizată de cadouri folosind inteligența artificială.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
