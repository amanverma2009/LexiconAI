import PrimaryBtn from "@/components/PrimaryBtn";
import SecondaryBtn from "@/components/SecondaryBtn";
import SettingsSidebar from "./components/SettingsSidebar";
export default function SettingsLayout({ children }) {
  return (
    <div className="flex h-screen">
      <SettingsSidebar />
      <main className="flex-5">{children}
        <div className="flex">
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="flex justify-end space-x-3 mt-8 pt-6 border-t border-gray-700/50">
          <SecondaryBtn content = "Cancel" />
          <PrimaryBtn content = "Save Changes" />
        </div>
      </div>
    </div>
      </main>
    </div>
  );
}
