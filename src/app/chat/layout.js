"use client";
import { useState } from "react";
import ChatSidebar from "@/components/ChatSidebar";
import Navbar from "@/components/Navbar";

export default function ChatLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex min-h-screen bg-transparent text-white">
      <ChatSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <main
        className={`relative flex flex-1 flex-col items-center w-full overflow-hidden transition-all duration-300 ease-in-out
      ${sidebarOpen ? "md:ml-[30%]" : "md:ml-0"}`}
      >
        <Navbar onToggleSidebar={() => setSidebarOpen(true)} />
        <div className="relative z-10 flex-1 p-3 sm:p-5">
          <div className="h-full rounded-3xl border border-white/10 bg-white/5 shadow-[0_18px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl overflow-hidden">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
