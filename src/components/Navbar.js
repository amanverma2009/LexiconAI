import React from "react";
import Link from "next/link";
import ModelSelector from "./ModelSelector";

const Navbar = () => {
  return (
    <nav className="w-full flex h-16 justify-between items-center p-4 bg-gray-200 dark:bg-gray-800">
      <ModelSelector />
      <div>
        <div className="mx-1.5 gap-2">
          <Link
            href={`/signin`}
            className="px-4 py-2 m-1 rounded-2xl transition-all duration-200 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 capitalize z-2"
          >
            Sign In
          </Link>
          <Link
            href={`/signup`}
            className="px-4 py-2 m-1 rounded-2xl transition-all duration-200 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 capitalize"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
