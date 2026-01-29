
const SecondaryBtn = (params) => {
  return (
    <button className={`px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/15 rounded-2xl text-white/90 text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer shadow-sm active:translate-y-px ${params.className || ""}`}>
      {params.content}
    </button>
  );
};

export default SecondaryBtn;
