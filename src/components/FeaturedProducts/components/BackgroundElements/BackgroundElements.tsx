
const BackgroundElements = () => {
  return (
    <>
      {/* Decorative background elements */}
      <div className="absolute top-40 right-0 w-80 h-80 rounded-full bg-indigo-100/40 blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 rounded-full bg-blue-100/40 blur-3xl"></div>
      
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-indigo-500/[0.05] bg-[size:20px_20px]"></div>
      </div>
    </>
  );
};

export default BackgroundElements;