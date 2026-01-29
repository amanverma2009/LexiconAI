import { useState } from "react";
import { useModel } from "@/context/ModelContext";

const MessageInput = ({ onKeyDown, onSend }) => {
  const [value, setValue] = useState("");
  const { model } = useModel();

  const handleSend = () => {
    const trimmed = value.trim();
    if (!trimmed) return;

    onSend((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        role: "user",
        content: trimmed,
      },
    ]);

    setValue("");
  };

  return (
    <div className="fixed bottom-4 left-0 right-0 z-40 flex justify-center px-3">
      <div className="flex w-full max-w-2xl items-center gap-2 rounded-3xl border border-white/10 bg-white/5 px-3 py-2 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <input
          type="text"
          name="message"
          id="message"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSend();
            }
          }}
          placeholder={`Ask ${model} anything...`}
          className="w-full bg-transparent px-3 py-2 text-sm text-white/90 placeholder:text-white/40 outline-none"
        />

        <button
          type="button"
          onClick={handleSend}
          className="shrink-0 rounded-2xl bg-linear-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:from-blue-700 hover:to-purple-700 hover:cursor-pointer motion-safe:hover:scale-[1.03] motion-safe:active:scale-[0.98]"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
