"use client";
import { ArrowLeftIcon } from "@/components/Icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const SettingsSidebar = () => {
  const router = useRouter();
  const linkclass =
    "w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200";
  const links = ["general", "models", "account"];
  const pathname = usePathname();
  const active = pathname.split("/").pop();
  return (
    <nav className="flex flex-1">
      <div className="w-full min-h-screen bg-gray-800/50 border-r border-gray-700/50 p-6">
        <div className="flex items-center justify-evenly mb-6">
          <button
            onClick={() => router.back()}
            className="px-2 py-2 rounded-lg hover:bg-gray-700/50 text-gray-400 hover:text-white transition-all duration-200 cursor-pointer"
          >
            <ArrowLeftIcon />
          </button>
          <h2 className="text-xl font-semibold text-white">Settings</h2>
          <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all duration-200">
            <i className="ri-close-line text-lg"></i>
          </button>
        </div>
        <div className="space-y-2">
          {links.map((a) => (
            <Link
              href={`/settings/${a}`}
              key={a}
              className={`${linkclass} capitalize
        ${
          active === a
            ? "bg-linear-to-r from-blue-600 to-purple-600 text-white"
            : "text-gray-300 hover:text-white hover:bg-gray-700/50"
        }`}
            >
              {a}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default SettingsSidebar;
