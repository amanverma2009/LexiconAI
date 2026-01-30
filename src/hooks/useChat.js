import { useCallback, useEffect, useState } from "react";

const sampleChats = [
  { id: "1", title: "Chat about AI advancements" },
  { id: "2", title: "Discussing climate change solutions" },
  { id: "3", title: "Exploring space travel possibilities" },
];

export const sampleChatMessages = {
  "1": [
    {
      id: "1-1",
      role: "user",
      content: "What are the biggest AI breakthroughs this year?",
    },
    {
      id: "1-2",
      role: "assistant",
      content:
        "Multimodal assistants, faster model training, and better reasoning are leading the pack. We can also dig into real-world examples if you want.",
    },
  ],
  "2": [
    {
      id: "2-1",
      role: "user",
      content: "What are the most scalable climate change solutions?",
    },
    {
      id: "2-2",
      role: "assistant",
      content:
        "Clean energy, grid modernization, and nature-based carbon capture rank high. Want a quick comparison table?",
    },
  ],
  "3": [
    {
      id: "3-1",
      role: "user",
      content: "How close are we to commercial space travel?",
    },
    {
      id: "3-2",
      role: "assistant",
      content:
        "Short trips are already happening. The next leap is lowering cost and improving safety for broader access.",
    },
  ],
};

const useChat = () => {
  const [chats, setChats] = useState(sampleChats);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchChats = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/chats/list", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        throw new Error(payload?.error || "Unable to load chats.");
      }

      const payload = await response.json();
      const nextChats = payload?.chats ?? [];
      setChats(nextChats.length > 0 ? nextChats : sampleChats);
    } catch (err) {
      setError(err?.message || "Unable to load chats.");
      setChats(sampleChats);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchChats();
  }, [fetchChats]);

  return {
    chats,
    isLoading,
    error,
    refresh: fetchChats,
  };
};

export default useChat;
