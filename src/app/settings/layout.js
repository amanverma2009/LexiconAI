import SettingsSidebar from "./components/SettingsSidebar";
export default function SettingsLayout({ children }) {
  return (
    <div className="flex h-screen">
      <SettingsSidebar />
      <main className="flex-1">{children}</main>
    </div>
  );
}
