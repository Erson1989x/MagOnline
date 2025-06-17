import { motion } from 'framer-motion';

interface ITimelineEvent {
    year: string;
    title: string;
    description: string;
    delay: number;
}

// Define timeline events to make them more maintainable
const timelineEvents = [
  {
    year: "2013",
    title: "Înființarea BravArt",
    description: "Am început ca un mic magazin local de papetărie, cu o echipă de 3 persoane și o viziune mare."
  },
  {
    year: "2016",
    title: "Extindere Națională",
    description: "Am lansat magazinul online și am început să livrăm în toată țara, dublându-ne cifra de afaceri."
  },
  {
    year: "2020",
    title: "Diversificare Servicii",
    description: "Am adăugat servicii de personalizare și cadouri corporate, devenind un furnizor complet pentru afaceri."
  },
  {
    year: "2023",
    title: "Inovație AI",
    description: "Am lansat AI Giftistry, un serviciu revoluționar de recomandare personalizată de cadouri folosind inteligența artificială."
  }
];

const TimelineEvent: React.FC<ITimelineEvent> = ({ year, title, description, delay }) => {
  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex items-center">
        <div className="flex-1 text-right pr-8">
          <h3 className="text-xl font-bold text-gray-800">{year}</h3>
          <p className="text-gray-600">{title}</p>
        </div>
        <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center z-10">
          <div className="w-4 h-4 bg-white rounded-full"></div>
        </div>
        <div className="flex-1 pl-8">
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const CompanyHistory = () => {
  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-200 via-indigo-400 to-blue-300"></div>
      
      <div className="space-y-12">
        {timelineEvents.map((event, index) => (
          <TimelineEvent
            key={event.year}
            year={event.year}
            title={event.title}
            description={event.description}
            delay={0.2 * index}
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyHistory;