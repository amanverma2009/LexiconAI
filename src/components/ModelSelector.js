"use client";
import { useModel } from "@/context/ModelContext";

const ModelSelector = () => {
  const { model, setModel } = useModel();

  return (
    <select
      value={model}
      onChange={(e) => setModel(e.target.value)}
      className="dark:bg-black bg-white text-black dark:text-white p-2 rounded-lg"
    >
      <option value="gpt">GPT</option>
      <option value="claude">Claude</option>
      <option value="perplexity">Perplexity</option>
    </select>
  );
};

export default ModelSelector;
