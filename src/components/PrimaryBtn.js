const PrimaryBtn = (params) => {
  return (
    <div>
      <button className="px-6 py-2 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg text-white font-medium transition-all duration-200 whitespace-nowrap cursor-pointer">
        {params.content}
      </button>
    </div>
  );
};

export default PrimaryBtn;
