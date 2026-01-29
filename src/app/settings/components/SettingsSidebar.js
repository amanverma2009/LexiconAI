"use client";
import { ArrowLeftIcon } from "@/components/Icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const SettingsSidebar = ({ open, setOpen }) => {
  const router = useRouter();
  const linkclass =
    "w-full flex items-center space-x-3 px-4 py-3 rounded-2xl transition-all duration-200";
  const links = ["general", "models", "account"];
  const pathname = usePathname();
  const active = pathname.split("/").pop();
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
      <div className="w-full min-h-screen border-r border-white/10 bg-white/5 backdrop-blur-xl p-5">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => router.back()}
            className="px-2 py-2 rounded-xl hover:bg-white/10 text-white/70 hover:text-white transition-all duration-200 cursor-pointer"
          >
            <ArrowLeftIcon />
          </button>
          <div className="flex flex-col items-center justify-center w-full">
            <h2 className="text-lg font-semibold text-white">Settings</h2>
            <span className="text-xs text-white/50">Personalize LexiconAI</span>
          </div>
        </div>
        <div className="space-y-2">
          {links.map((a) => (
            <Link
              href={`/settings/${a}`}
              key={a}
              className={`${linkclass} capitalize
        ${
          active === a
            ? "bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-sm"
            : "text-white/70 hover:text-white hover:bg-white/10"
        }`}
            >
              {a}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default SettingsSidebar;
