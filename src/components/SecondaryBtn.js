
const SecondaryBtn = (params) => {
  return (
    <button className={`px-6 py-2 bg-gray-800/80 hover:bg-gray-700/80 border border-gray-700/50 rounded-lg text-white transition-all duration-200 whitespace-nowrap cursor-pointer ${params.className}`}>
      {params.content}
    </button>
  );
};

export default SecondaryBtn;
