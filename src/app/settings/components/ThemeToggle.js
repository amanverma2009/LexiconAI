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
      <p className="text-sm font-semibold text-white/80">Theme</p>

      <div className="flex flex-wrap gap-2 rounded-2xl border border-white/10 bg-white/5 p-2">
        {THEMES.map((theme) => (
          <button
            key={theme}
            onClick={() => select(theme)}
            className={`px-3 py-1.5 rounded-xl text-sm font-semibold capitalize transition motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0
              ${
                active === theme
                  ? "bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-sm"
                  : "text-white/70 hover:bg-white/10"
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
