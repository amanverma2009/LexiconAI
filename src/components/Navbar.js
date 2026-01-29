"use client";
import React, { useState } from "react";
import Link from "next/link";
import ModelSelector from "./ModelSelector";
import { Menu } from "lucide-react";

const Navbar = ({ onToggleSidebar }) => {
  return (
    <nav className="w-full sticky top-0 z-30 flex h-16 items-center justify-between px-4 sm:px-6 border-b border-white/10 bg-white/5 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <button onClick={onToggleSidebar} className="md:hidden p-2 text-white">
          <Menu size={20} />
        </button>
        <ModelSelector />
      </div>
      <div className="flex items-center gap-2">
        <Link
          href="/signin"
          className="inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold text-white/90 border border-white/15 bg-white/5 transition hover:bg-white/10"
        >
          Sign In
        </Link>
        <Link
          href="/signup"
          className="inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold text-white bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-sm transition"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
