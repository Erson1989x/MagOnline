const BackgroundElements = () => {
  return (
    <>
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-indigo-100/40 blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-blue-100/40 blur-3xl"></div>
      
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-indigo-500/[0.05] bg-[size:20px_20px]"></div>
      </div>
    </>
  );
};

export default BackgroundElements;