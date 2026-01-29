
const LanguageSelector = () => {
  return (
    <div>
      <label className="block text-sm font-semibold text-white/80 mb-2">
        Language
      </label>
      <select className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none transition hover:bg-white/8">
        <option value="english">English</option>
        <option value="spanish">Spanish</option>
        <option value="french">French</option>
        <option value="german">German</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
