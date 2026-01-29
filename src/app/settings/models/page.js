"use client";
import dynamic from "next/dynamic";

const page = () => {
  const ApiKeyForm = dynamic(
    () => import("@/app/settings/components/ApiKeyForm"),
    { ssr: false }
  );
  return (
    <div className="p-6">
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold text-white">AI Model Configuration</h3>
          <p className="mt-1 text-sm text-white/60">
            Choose your default model and tune generation behavior.
          </p>
        </div>

        <div className="grid gap-4">
          <section className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <label className="block text-sm font-semibold text-white/80 mb-2">
              Default model
            </label>
            <select className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none transition hover:bg-white/8">
              <option value="gpt-4">GPT-4</option>
              <option value="gpt-3.5">GPT-3.5 Turbo</option>
              <option value="claude-3">Claude-3</option>
              <option value="perplexity">Perplexity</option>
            </select>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <label className="block text-sm font-semibold text-white/80 mb-2">
              API key
            </label>
            <input
              placeholder="Enter your API key"
              className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white/90 placeholder:text-white/40 outline-none transition hover:bg-white/8"
              type="password"
              value=""
            />
            <p className="mt-2 text-xs text-white/50">
              Your key stays local and is used for requests you send.
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <label className="block text-sm font-semibold text-white/80">
                Max tokens
              </label>
              <span className="text-xs font-semibold text-white/60">4096</span>
            </div>
            <input
              min="1000"
              max="8000"
              className="mt-3 w-full h-2 rounded-full appearance-none cursor-pointer bg-white/10"
              type="range"
              value="4096"
            />
            <div className="mt-2 flex justify-between text-xs text-white/45">
              <span>1K</span>
              <span>8K</span>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <label className="block text-sm font-semibold text-white/80">
                Temperature
              </label>
              <span className="text-xs font-semibold text-white/60">0.7</span>
            </div>
            <input
              min="0"
              max="1"
              step="0.1"
              className="mt-3 w-full h-2 rounded-full appearance-none cursor-pointer bg-white/10"
              type="range"
              value="0.7"
            />
            <div className="mt-2 flex justify-between text-xs text-white/45">
              <span>Conservative</span>
              <span>Creative</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default page;
