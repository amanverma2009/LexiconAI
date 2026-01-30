"use client";
import { useState } from "react";
import dynamic from "next/dynamic";

const Page = () => {
  const ApiKeyForm = dynamic(
    () => import("@/app/settings/components/ApiKeyForm"),
    { ssr: false },
  );
  const [defaultModel, setDefaultModel] = useState("gpt-4");
  const [apiKey, setApiKey] = useState("");
  const [maxTokens, setMaxTokens] = useState(4096);
  const [temperature, setTemperature] = useState(0.7);
  return (
    <div className="p-6">
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
            AI Model Configuration
          </h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-white/60">
            Choose your default model and tune generation behavior.
          </p>
        </div>

        <div className="grid gap-4">
          <section className="rounded-3xl border border-slate-200/70 bg-white/80 p-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
            <label className="block text-sm font-semibold text-slate-700 mb-2 dark:text-white/80">
              Default model
            </label>
            <select
              className="w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none transition hover:bg-zinc-100 focus-visible:ring-2 focus-visible:ring-blue-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/8 dark:focus-visible:ring-offset-zinc-950 hover:cursor-pointer"
              value={defaultModel}
              onChange={(e) => setDefaultModel(e.target.value)}
            >
              <option
                className="bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white"
                value="gpt-4"
              >
                GPT-4
              </option>
              <option
                className="bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white"
                value="gpt-3.5"
              >
                GPT-3.5 Turbo
              </option>
              <option
                className="bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white"
                value="claude-3"
              >
                Claude-3
              </option>
              <option
                className="bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white"
                value="perplexity"
              >
                Perplexity
              </option>
            </select>
          </section>

          <section className="rounded-3xl border border-slate-200/70 bg-white/80 p-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
            <label className="block text-sm font-semibold text-slate-700 mb-2 dark:text-white/80">
              API key
            </label>
            <input
              placeholder="Enter your API key"
              className="w-full rounded-2xl border border-slate-200/80 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition hover:bg-slate-100 dark:border-white/15 dark:bg-white/5 dark:text-white/90 dark:placeholder:text-white/40 dark:hover:bg-white/8"
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
            <p className="mt-2 text-xs text-slate-500 dark:text-white/50">
              Your key stays local and is used for requests you send.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200/70 bg-white/80 p-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
            <div className="flex items-center justify-between">
              <label className="block text-sm font-semibold text-slate-700 dark:text-white/80">
                Max tokens
              </label>
              <span className="text-xs font-semibold text-slate-500 dark:text-white/60">
                {maxTokens}
              </span>
            </div>
            <input
              min="1000"
              max="8000"
              className="mt-3 w-full h-2 rounded-full appearance-none cursor-pointer bg-slate-200/80 dark:bg-white/10"
              type="range"
              value={maxTokens}
              onChange={(e) => setMaxTokens(Number(e.target.value))}
            />
            <div className="mt-2 flex justify-between text-xs text-slate-500 dark:text-white/45">
              <span>1K</span>
              <span>8K</span>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200/70 bg-white/80 p-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
            <div className="flex items-center justify-between">
              <label className="block text-sm font-semibold text-slate-700 dark:text-white/80">
                Temperature
              </label>
              <span className="text-xs font-semibold text-slate-500 dark:text-white/60">
                {temperature}
              </span>
            </div>
            <input
              min="0"
              max="1"
              step="0.1"
              className="mt-3 w-full h-2 rounded-full appearance-none cursor-pointer bg-slate-200/80 dark:bg-white/10"
              type="range"
              value={temperature}
              onChange={(e) => setTemperature(Number(e.target.value))}
            />
            <div className="mt-2 flex justify-between text-xs text-slate-500 dark:text-white/45">
              <span>Conservative</span>
              <span>Creative</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Page;
