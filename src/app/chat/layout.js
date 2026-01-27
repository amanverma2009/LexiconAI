import ChatSidebar from "@/components/ChatSidebar";
import Navbar from "@/components/Navbar";

export default function ChatLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white">
      <ChatSidebar />
      <main className="relative flex flex-1 flex-col w-full overflow-hidden">
        {/* Decorative background glow */}
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-500 blur-3xl" />
          <div className="absolute bottom-0 right-10 h-60 w-60 rounded-full bg-blue-500 blur-3xl" />
        </div>
        <Navbar />
        <div className="relative z-10">
          {children}
        </div>
      </main>
    </div>
  );
}
