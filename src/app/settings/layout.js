import PrimaryBtn from "@/components/PrimaryBtn";
import SecondaryBtn from "@/components/SecondaryBtn";
import SettingsSidebar from "./components/SettingsSidebar";
export default function SettingsLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white">
      <SettingsSidebar />
      <main className="relative flex flex-5 flex-col w-full overflow-hidden">
        {/* Decorative background glow */}
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-500 blur-3xl" />
          <div className="absolute bottom-0 right-10 h-60 w-60 rounded-full bg-blue-500 blur-3xl" />
        </div>
        <div className="relative z-10">
          {children}
          <div className="flex">
            <div className="flex-1 p-6 overflow-y-auto">
              <div className="flex justify-end space-x-3 mt-8 pt-6 border-t border-gray-700/50">
                <SecondaryBtn content = "Cancel" />
                <PrimaryBtn content = "Save Changes" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
