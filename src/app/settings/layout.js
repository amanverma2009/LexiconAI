"use client";
import PrimaryBtn from "@/components/PrimaryBtn";
import SecondaryBtn from "@/components/SecondaryBtn";
import SettingsSidebar from "./components/SettingsSidebar";
import { useState } from "react";
import { Menu } from "lucide-react";
export default function SettingsLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div
      className={`"flex min-h-screen bg-transparent text-white transition-all duration-300 ease-in-out
      ${sidebarOpen ? "md:ml-[30%]" : "md:ml-0"}"`}
    >
      <SettingsSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <main className="relative flex flex-5 flex-col w-full overflow-hidden">
        <div className="relative z-10 flex-1 p-3 sm:p-5">
          <div className="h-full rounded-3xl border border-white/10 bg-white/5 shadow-[0_18px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl overflow-hidden">
            <div className="flex-1 p-6 overflow-y-auto">
              <button
                onClick={() => setSidebarOpen(true)}
                className="md:hidden p-2 text-white absolute top-4 left-4"
              >
                <Menu size={20} />
              </button>
              {children}
              <div className="flex justify-end gap-3 mt-10 pt-6 border-t border-white/10">
                <SecondaryBtn content="Cancel" />
                <PrimaryBtn content="Save Changes" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
