"use client";
import { useState } from "react";
import { THEMES, getStoredTheme, setTheme } from "@/utils/theme";

export default function ThemeToggle() {
  const [active, setActive] = useState(getStoredTheme());

  const select = (theme) => {
    setActive(theme);
    setTheme(theme);
  };

  return (
    <div className="space-y-2">
      <p className="text-sm font-medium text-gray-300">Theme</p>

      <div className="w-full capitalize bg-gray-800/80 border border-gray-700/50 rounded-lg px-4 py-3 text-white focus:border-blue-500/50 outline-none transition-all duration-200 pr-8">
        {THEMES.map((theme) => (
          <button
            key={theme}
            onClick={() => select(theme)}
            className={`px-3 py-1 rounded border text-sm 
              ${
                active === theme
                  ? "bg-black text-gray-300 dark:bg-white dark:text-black"
                  : "bg-transparent"
              }`}
            value={theme}
          >
            {theme}
          </button>
        ))}
      </div>
    </div>
  );
}
