import { motion } from 'framer-motion';

const BlogHeader = () => {
  return (
    <div className="text-center mb-12">
      <motion.span
        className="inline-block text-sm font-semibold px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Resurse & Articole
      </motion.span>
      <motion.h2 
        className="text-3xl md:text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Blog & <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">Sfaturi</span>
      </motion.h2>
      <motion.p 
        className="text-gray-600 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Articole, sfaturi și recomandări pentru produsele noastre și organizarea eficientă
      </motion.p>
    </div>
  );
};

export default BlogHeader;