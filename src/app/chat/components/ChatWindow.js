"use client";
import { useState, useRef, useEffect, useMemo } from "react";
import { useParams } from "next/navigation";
import { sampleChatMessages } from "@/hooks/useChat";
import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";

const ChatWindow = () => {
  const params = useParams();
  const chatId = params?.chatId;
  const initialMessages = useMemo(() => {
    if (!chatId) return [];
    return sampleChatMessages[chatId] ?? [];
  }, [chatId]);

  const [messages, setMessages] = useState(initialMessages);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    setMessages(initialMessages);
  }, [initialMessages]);

  return (
    <div className="flex flex-1 flex-col h-[calc(100vh-4rem-2.5rem)] w-full">
      <div className="flex-1 overflow-y-auto px-2 sm:px-4 pt-3 pb-28">
        {messages.length === 0 && (
          <div className="mx-auto mt-10 max-w-lg rounded-3xl border border-slate-200/70 bg-white/80 p-8 text-center shadow-[0_18px_60px_rgba(0,0,0,0.15)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_18px_60px_rgba(0,0,0,0.25)]">
            <h3 className=" text-lg font-semibold text-slate-900 dark:text-white">
              Start your first conversation
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-white/60">
              Ask anything — brainstorm ideas, refactor code, or get answers
              fast.
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
