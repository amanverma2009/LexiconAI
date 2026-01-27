import Navbar from "@/components/Navbar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/server/lib/auth";
import { redirect } from "next/navigation";
import ChatSidebar from "@/components/ChatSidebar";
import Link from "next/link";

const Home = async () => {
  // const session = await getServerSession(authOptions);
  // if (!session) redirect("/login");
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white">
      <ChatSidebar />
      <main className="relative flex flex-1 flex-col items-center w-full overflow-hidden">
        {/* Decorative background glow */}
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-500 blur-3xl" />
          <div className="absolute bottom-0 right-10 h-60 w-60 rounded-full bg-blue-500 blur-3xl" />
        </div>
        <Navbar />

        <div className="relative z-10 text-center flex flex-1 justify-center flex-col items-center px-4">
          <h2 className="mb-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300 bg-clip-text text-transparent drop-shadow-lg">
            Welcome to LexiconAI
          </h2>
          <p className="max-w-xl text-sm sm:text-base text-slate-200/80">
            Select a chat from the sidebar or start a new conversation to get
            started. LexiconAI helps you explore ideas, refactor code, and ship
            faster with an elegant, distraction-free interface.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button className="rounded-full bg-white text-slate-900 px-6 py-2 text-sm font-semibold shadow-lg shadow-slate-900/40 transition hover:-translate-y-0.5 hover:shadow-xl hover:bg-slate-100">
              <Link href="/chat" className="rounded-full bg-white text-slate-900 px-6 py-2 text-sm font-semibold shadow-lg shadow-slate-900/40 transition hover:-translate-y-0.5 hover:shadow-xl hover:bg-slate-100">
                Start a new chat
              </Link>
            </button>  
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
