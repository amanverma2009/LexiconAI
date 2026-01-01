"use client";
import dynamic from "next/dynamic";

const page = () => {
  const ApiKeyForm = dynamic(
    () => import("@/app/settings/components/ApiKeyForm"),
    { ssr: false }
  );
  return (
    <div className="p-6">
      <div className="space-y-6 ">
        <h3 className="text-lg font-semibold text-white mb-4">
          AI Model Configuration
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Default Model
            </label>
            <select className="w-full bg-gray-800/80 border border-gray-700/50 rounded-lg px-4 py-3 text-white focus:border-blue-500/50 outline-none transition-all duration-200 pr-8">
              <option value="gpt-4">GPT-4</option>
              <option value="gpt-3.5">GPT-3.5 Turbo</option>
              <option value="claude-3">Claude-3</option>
              <option value="perplexity">Perplexity</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              API Key
            </label>
            <input
              placeholder="Enter your API key"
              className="w-full bg-gray-800/80 border border-gray-700/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500/50 outline-none transition-all duration-200"
              type="password"
              value=""
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Max Tokens: 4096
            </label>
            <input
              min="1000"
              max="8000"
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              type="range"
              value="4096"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1" />
            <span>1K</span>
            <span>8K</span>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Temperature: 0.7
          </label>
          <input
            min="0"
            max="1"
            step="0.1"
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
            type="range"
            value="0.7"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>Conservative</span>
            <span>Creative</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
