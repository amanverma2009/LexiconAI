"use client";
import Navbar from "@/components/Navbar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/server/lib/auth";
import { redirect } from "next/navigation";
import ChatSidebar from "@/components/ChatSidebar";
import Link from "next/link";
import { useState } from "react";

const Home = () => {
  // const session = await getServerSession(authOptions);
  // if (!session) redirect("/login");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex min-h-screen bg-transparent text-white">
      <ChatSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <main
        className={`relative flex flex-1 flex-col items-center w-full overflow-hidden transition-all duration-300 ease-in-out
      ${sidebarOpen ? "md:ml-[30%]" : "md:ml-0"}`}
      >
        <Navbar onToggleSidebar={() => setSidebarOpen(true)} />
        <section className="relative z-10 flex flex-1 w-full items-center justify-center px-4">
          <div className="w-full max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-10">
            <h2 className="mb-3 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-linear-to-r from-indigo-300 via-sky-300 to-emerald-300 bg-clip-text text-transparent drop-shadow-lg">
              Welcome to LexiconAI
            </h2>
            <p className="mx-auto max-w-2xl text-center text-sm sm:text-base text-slate-200/80">
              Select a chat from the sidebar or start a new conversation to get
              started. LexiconAI helps you explore ideas, refactor code, and
              ship faster with an elegant, distraction-free interface.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:hidden">
              <Link
                href="/chat"
                className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 px-6 py-2.5 text-sm font-semibold shadow-lg shadow-slate-900/40 transition hover:-translate-y-0.5 hover:shadow-xl hover:bg-slate-100"
              >
                Start a new chat
              </Link>

              <Link
                href="/settings"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white/90 shadow-sm transition hover:bg-white/10"
              >
                Customize settings
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
