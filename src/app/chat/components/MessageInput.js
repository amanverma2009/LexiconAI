import React, { useState } from "react";
import { useModel } from "@/app/context/ModelContext";

const MessageInput = ({ onKeyDown, onSend }) => {
  const [value, setValue] = useState("");
  const { model } = useModel();

  const handleSend = () => {
    if (!value.trim()) return;

    onKeyDown = (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    };

    onSend((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        role: "user",
        content: value.trim(),
      },
    ]);

    setValue("");
  };

  return (
    <div className="p-4 border-t flex h-16 w-1/2 mb-4 bg-background/20 backdrop-blur-md z-4 fixed bottom-0 items-center gap-2 border rounded-2xl">
      <input
        type="text"
        name="message"
        id="message"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        placeholder={`Ask ${model} anything...`}
        className="w-full px-4 py-2 rounded-lg outline-none"
      />
    </div>
  );
};

export default MessageInput;
