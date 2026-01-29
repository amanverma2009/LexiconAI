"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import SearchPopup from "./SearchPopup";
import { MessageCircle, Search, Settings, User } from "./Icons";

const ChatSidebar = ({ open, setOpen }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const params = useParams();
  const chatId = params?.chatId;
  const user = {
    name: "John Doe",
  };
  return (
    <aside
      className={`
    fixed md:static
    top-0 left-0
    h-screen w-full md:w-[25%]
    border-r border-white/10 bg-white/5 backdrop-blur-xl
    transition-all duration-300 ease-in-out
    flex flex-col
    ${open ? "translate-x-0" : "-translate-x-full"}
    md:translate-x-0
    z-50
  `}
    >
      <button
        onClick={() => setOpen(false)}
        className="md:hidden absolute top-4 right-4 text-white/70"
      >
        ✕
      </button>

      <div className="px-4 pt-5 pb-4 border-b border-white/10">
        <Link href="/" className="flex w-max items-center gap-3">
          <Image
            src="/icons/logo.svg"
            alt="LexiconAI Logo"
            width={42}
            height={42}
          />
          <div className="flex flex-col leading-tight">
            <h1 className="text-lg font-bold text-white">LexiconAI</h1>
            <span className="text-xs text-white/60">Your AI workspace</span>
          </div>
        </Link>
      </div>

      <div className="px-4 mt-4 flex flex-col gap-2">
        <Link
          href="/chat"
          className="rounded-2xl bg-linear-to-r from-blue-600 to-purple-600 px-3 py-2.5 transition cursor-pointer text-sm font-semibold flex gap-2 items-center hover:from-blue-700 hover:to-purple-700 text-white shadow-sm"
        >
          <MessageCircle />
          New Chat
        </Link>

        <button
          className="rounded-2xl border border-white/15 bg-white/5 px-3 py-2.5 hover:bg-white/10 text-sm font-semibold text-white/90 transition flex cursor-pointer gap-2 items-center"
          onClick={() => setSearchOpen(true)}
        >
          <Search />
          Search
        </button>
        <SearchPopup open={searchOpen} onClose={() => setSearchOpen(false)} />
      </div>

      <div className="mt-6 flex-1 overflow-y-auto px-3">
        <h2 className="mb-2 px-1 text-sm font-semibold tracking-wide text-white/70">
          History
        </h2>

        <div className="flex flex-col gap-2 text-sm">
          <Link
            href={chatId ? `/chat/${chatId}` : "/chat/1"}
            className="truncate rounded-2xl px-3 py-2.5 transition hover:bg-white/10 text-white/90 border border-transparent"
          >
            Chat about AI advancements
          </Link>

          <Link
            href="/chat/2"
            className="truncate rounded-2xl px-3 py-2.5 transition hover:bg-white/10 text-white/90 border border-transparent"
          >
            Discussing climate change solutions
          </Link>

          <Link
            href="/chat/3"
            className="truncate rounded-2xl px-3 py-2.5 transition hover:bg-white/10 text-white/90 border border-transparent"
          >
            Exploring space travel possibilities
          </Link>
        </div>
      </div>

      <div className="p-4 border-t border-white/10">
        <Link
          href="/settings"
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-2xl transition-all duration-200 text-white/70 hover:text-white hover:bg-white/10 border border-transparent"
        >
          <Settings />
          <span className="text-sm font-medium">Settings</span>
        </Link>
        <div className="mt-3 flex items-center gap-3 p-2 rounded-xl transition-colors cursor-pointer text-zinc-400 hover:text-zinc-100 hover:bg-white/5 border border-transparent">
          <div className="w-10 h-10 rounded-full bg-linear-to-tr from-zinc-700 to-zinc-600 border border-white/10 overflow-hidden flex items-center justify-center">
            <User />
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="text-md font-medium truncate text-white">{`${user.name}`}</div>
            <div className="text-xs text-white/50 truncate">Free plan</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ChatSidebar;
