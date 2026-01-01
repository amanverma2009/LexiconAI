
const LanguageSelector = () => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">
        Language
      </label>
      <select className="w-full bg-gray-800/80 border border-gray-700/50 rounded-lg px-4 py-3 text-white focus:border-blue-500/50 outline-none transition-all duration-200 pr-8">
        <option value="english">English</option>
        <option value="spanish">Spanish</option>
        <option value="french">French</option>
        <option value="german">German</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
