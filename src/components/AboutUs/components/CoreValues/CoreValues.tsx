{/* CoreValues.tsx
import { motion } from 'framer-motion';

interface IValueCardProps {
  title: string;
    description: string;
    icon: React.ReactNode;
    delay: number;
}

// Define value cards to make them more maintainable
const valueCards = [
  {
    title: "Calitate",
    description: "Oferim doar produse de cea mai înaltă calitate, selectate cu grijă de la producători de renume.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Promptitudine",
    description: "Înțelegem importanța timpului în afaceri, de aceea garantăm livrări rapide și servicii prompte.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Inovație",
    description: "Căutăm constant să inovăm și să aducem cele mai noi soluții și produse pe piața românească.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];

const ValueCard: React.FC<IValueCardProps> = ({ title, description, icon, delay }) => {
  return (
    <motion.div 
      className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl shadow-md"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mb-4 text-white">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const CoreValues = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {valueCards.map((card, index) => (
        <ValueCard
          key={card.title}
          title={card.title}
          description={card.description}
          icon={card.icon}
          delay={0.2 * index}
        />
      ))}
    </div>
  );
};

export default CoreValues;
// */}