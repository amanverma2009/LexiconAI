import React from "react";
import Link from "next/link";
import ModelSelector from "./ModelSelector";

const Navbar = () => {
  const navigate = ["signin", "signup"];
  return (
    <nav className="w-full flex h-16 justify-between items-center p-4 bg-gray-200 dark:bg-gray-800">
      <ModelSelector />
      <div>
        <div className="mx-1.5 gap-2">
          {navigate.map((a) => (
            <Link
              href={`/${a}`}
              key={a}
              className="px-4 py-2 m-1 rounded-2xl transition-all duration-200 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              {a}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
