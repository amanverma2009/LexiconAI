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
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <div className="flex-1 overflow-y-auto px-4">
        {chatId && (
          <div className="mb-2 text-xs text-zinc-500 dark:text-zinc-400">
            Chat ID: {chatId}
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
