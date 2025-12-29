import ChatSidebar from "@/components/ChatSidebar";
import Navbar from "@/components/Navbar";

export default function ChatLayout({ children }) {
  return (
    <div className="flex h-screen">
      <ChatSidebar />
      <main className="flex-1">
        <Navbar />
        {children}
      </main>
    </div>
  );
}
