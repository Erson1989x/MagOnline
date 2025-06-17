const ViewMoreButton = () => {
  return (
    <div className="text-center mt-12">
      <button className="relative overflow-hidden bg-white text-indigo-600 border-2 border-indigo-600 font-medium px-8 py-3 rounded-lg hover:shadow-md transition-all group">
        <span className="absolute inset-0 w-0 bg-indigo-600 transition-all duration-300 ease-out group-hover:w-full"></span>
        <span className="relative group-hover:text-white transition-colors duration-300">Vezi toate articolele</span>
      </button>
    </div>
  );
};

export default ViewMoreButton;