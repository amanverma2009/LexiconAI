
const LanguageSelector = () => {
  return (
    <div>
      <label className="block text-sm font-semibold text-zinc-700 dark:text-white/80 mb-2">
        Language
      </label>
      <select className="w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none transition hover:bg-zinc-100 focus-visible:ring-2 focus-visible:ring-blue-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/8 dark:focus-visible:ring-offset-zinc-950 hover:cursor-pointer">
        <option className="bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white" value="english">
          English
        </option>
        <option className="bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white" value="spanish">
          Spanish
        </option>
        <option className="bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white" value="french">
          French
        </option>
        <option className="bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white" value="german">
          German
        </option>
      </select>
    </div>
  );
};

export default LanguageSelector;
