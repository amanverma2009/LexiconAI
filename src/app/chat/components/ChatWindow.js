"use client";
import { useState, useRef, useEffect } from "react";
import { useParams } from "next/navigation";
import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";

const ChatWindow = () => {
  const { chatId } = useParams();
  const [messages, setMessages] = useState([]);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-[calc(100vh-4rem-2.5rem)]">
      <div className="flex-1 overflow-y-auto px-2 sm:px-4 pt-3 pb-28">
        {chatId && (
          <div className="mb-3 px-4 text-xs text-white/50">
            Chat ID: {chatId}
          </div>
        )}
        {messages.length === 0 && (
          <div className="mx-auto mt-10 max-w-lg rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-[0_18px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl">
            <div className="mx-auto h-12 w-12 rounded-2xl bg-linear-to-br from-blue-600 to-purple-600 opacity-80" />
            <h3 className="mt-4 text-lg font-semibold text-white">
              Start your first conversation
            </h3>
            <p className="mt-2 text-sm text-white/60">
              Ask anything — brainstorm ideas, refactor code, or get answers fast.
            </p>
          </div>
        )}
        {messages.map((msg) => (
          <MessageBubble key={msg.id} role={msg.role} content={msg.content} />
        ))}
        <div ref={bottomRef} />
      </div>
      <div className="flex justify-center">
        <MessageInput onSend={setMessages} />
      </div>
    </div>
  );
};

export default ChatWindow;
