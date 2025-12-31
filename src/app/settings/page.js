"use client";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

const ApiKeyForm = dynamic(
  () => import("@/app/settings/components/ApiKeyForm"),
  { ssr: false }
);

export default function SettingsPage() {
  redirect("/settings/general");
  return (
    <div className="flex min-h-screen">
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="flex justify-end space-x-3 mt-8 pt-6 border-t border-gray-700/50">
          <button className="px-6 py-2 bg-gray-800/80 hover:bg-gray-700/80 border border-gray-700/50 rounded-lg text-white transition-all duration-200 whitespace-nowrap">
            Cancel
          </button>
          <button className="px-6 py-2 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg text-white font-medium transition-all duration-200 whitespace-nowrap">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
