
const MinimalFooter = () => {
  return (
    <footer className="bg-[#f9fafc] text-[#004e98] py-8 px-4 text-center font-ubuntu border-t border-gray-300 mt-20">
     
      <p className="mt-6 text-sm opacity-75">
        &copy; {new Date().getFullYear()} Ayush Paudel
      </p>
    </footer>
  );
};

export default MinimalFooter;
