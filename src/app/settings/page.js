"use client";
import dynamic from "next/dynamic";
const ApiKeyForm = dynamic(() => import("@/app/settings/api-key-form/component"), { ssr: false });

export default function SettingsPage() {
  return (
    <section className="mt-8 flex flex-col items-center ">
      <h2 className="text-2xl font-semibold mb-2">Settings</h2>
      <p className="text-gray-600 mb-6">
        Paste your OpenAI API key below. We will encrypt it and use it server-side to make requests.
        You pay for usage with your key.
      </p>

      <div className="max-w-2xl">
        <ApiKeyForm />
      </div>
    </section>
  );
}
