// src/components/Testimonials/components/SectionHeader/SectionHeader.tsx
import { motion } from 'framer-motion';

const SectionHeader = () => {
  return (
    <div className="text-center mb-12">
      <motion.span
        className="inline-block text-sm font-semibold px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Experiențe Reale
      </motion.span>
      <motion.h2 
        className="text-3xl md:text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Ce Spun <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">Clienții Noștri</span>
      </motion.h2>
      <motion.p 
        className="text-gray-600 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Descoperă experiențele clienților noștri cu produsele și serviciile Artima
      </motion.p>
    </div>
  );
};

export default SectionHeader;