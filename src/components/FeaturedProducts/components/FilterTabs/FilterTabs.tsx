
interface FilterTabsProps {
  tabs: { id: string; label: string }[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const FilterTabs = ({ tabs, activeTab, setActiveTab }: FilterTabsProps) => {
  return (
    <div className="flex justify-center mb-10 relative z-10">
      <div className="inline-flex bg-white rounded-full shadow-lg p-1 border border-gray-100">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === tab.id 
                ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md' 
                : 'text-gray-600 hover:text-indigo-600'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterTabs;