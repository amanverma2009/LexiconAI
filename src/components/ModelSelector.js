"use client";
import { useModel } from "@/context/ModelContext";

const ModelSelector = () => {
  const { model, setModel } = useModel();

  return (
    <select
      value={model}
      onChange={(e) => setModel(e.target.value)}
      className="w-full rounded-xl border border-zinc-300 bg-white p-2 text-zinc-900 outline-none transition hover:bg-zinc-100 focus-visible:ring-2 focus-visible:ring-blue-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/8 dark:focus-visible:ring-offset-zinc-950 hover:cursor-pointer"
    >
      <option
        className="bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white"
        value="gpt"
      >
        GPT
      </option>
      <option
        className="bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white"
        value="claude"
      >
        Claude
      </option>
      <option
        className="bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white"
        value="perplexity"
      >
        Perplexity
      </option>
    </select>
  );
};

export default ModelSelector;
