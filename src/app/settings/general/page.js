"use client";
import { useState } from "react";
import ThemeToggle from "../components/ThemeToggle";
import LanguageSelector from "../components/LanguageSelector";

const GeneralPage = () => {
  const [autoSave, setAutoSave] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);

  return (
    <div className="space-y-8 p-6">
      <div>
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
          General
        </h3>
        <p className="mt-1 text-sm text-slate-600 dark:text-white/60">
          Customize the way LexiconAI looks and behaves.
        </p>
      </div>

      <section className="rounded-3xl border border-slate-200/70 bg-white/80 p-5 backdrop-blur-xl space-y-4 dark:border-white/10 dark:bg-white/5">
        <ThemeToggle />
        <LanguageSelector />
      </section>

      <section className="rounded-3xl border border-slate-200/70 bg-white/80 p-5 backdrop-blur-xl space-y-4 dark:border-white/10 dark:bg-white/5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <label className="text-sm font-semibold text-slate-700 dark:text-white/80">
              Auto-save conversations
            </label>
            <p className="text-xs text-slate-500 mt-1 dark:text-white/50">
              Automatically save your chat history
            </p>
          </div>
          <button
            onClick={() => setAutoSave((prev) => !prev)}
            className={`relative w-12 h-6 hover:cursor-pointer rounded-full transition-all duration-200 motion-safe:hover:scale-[1.03] motion-safe:active:scale-[0.98] ${
              autoSave
                ? "bg-linear-to-r from-blue-600 to-purple-600 shadow-[0_0_12px_rgba(124,58,237,0.45)]"
                : "bg-slate-200/80 dark:bg-white/10"
            }`}
          >
            <div
              className={`absolute w-5 h-5 bg-white rounded-full top-0.5 transition-all duration-200 ease-out ${
                autoSave ? "left-6" : "left-1"
              }`}
            ></div>
          </button>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div>
            <label className="text-sm font-semibold text-slate-700 dark:text-white/80">
              Push notifications
            </label>
            <p className="text-xs text-slate-500 mt-1 dark:text-white/50">
              Receive notifications for important updates
            </p>
          </div>
          <button
            onClick={() => setPushNotifications((prev) => !prev)}
            className={`relative w-12 h-6 hover:cursor-pointer rounded-full transition-all duration-200 motion-safe:hover:scale-[1.03] motion-safe:active:scale-[0.98] ${
              pushNotifications
                ? "bg-linear-to-r from-blue-600 to-purple-600 shadow-[0_0_12px_rgba(124,58,237,0.45)]"
                : "bg-slate-200/80 dark:bg-white/10"
            }`}
          >
            <div
              className={`absolute w-5 h-5 bg-white rounded-full top-0.5 transition-all duration-200 ease-out ${
                pushNotifications ? "left-6" : "left-1"
              }`}
            ></div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default GeneralPage;
