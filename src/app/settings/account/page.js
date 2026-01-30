import { User } from "@/components/Icons";
import SecondaryBtn from "@/components/SecondaryBtn";

const page = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    plan: "Pro Plan",
    joined: "March 2024",
  };
  return (
    <div className="space-y-8 p-6">
      <div>
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
          Account
        </h3>
        <p className="mt-1 text-sm text-slate-600 dark:text-white/60">
          Manage your profile, security, and personal data.
        </p>
      </div>

      <section className="rounded-3xl border border-slate-200/70 bg-white/80 p-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-sm">
            <User color="white" />
          </div>
          <div className="min-w-0">
            <h4 className="text-slate-900 font-semibold truncate dark:text-white">
              {user.name}
            </h4>
            <p className="text-slate-600 text-sm truncate dark:text-white/55">
              {user.email}
            </p>
            <p className="text-slate-500 text-xs mt-0.5 dark:text-white/45">
              {user.plan} • Joined {user.joined}
            </p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <section className="rounded-3xl border border-slate-200/70 bg-white/80 p-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
          <div className="text-2xl font-extrabold text-slate-900 dark:text-white">
            1,247
          </div>
          <div className="text-sm text-slate-600 dark:text-white/55">
            Messages sent
          </div>
        </section>
        <section className="rounded-3xl border border-slate-200/70 bg-white/80 p-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
          <div className="text-2xl font-extrabold text-slate-900 dark:text-white">
            89
          </div>
          <div className="text-sm text-slate-600 dark:text-white/55">
            Conversations
          </div>
        </section>
      </div>

      <section className="rounded-3xl border border-slate-200/70 bg-white/80 p-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
        <div className="space-y-3">
          <SecondaryBtn content="Change Password" className="w-full" />
          <SecondaryBtn content="Export Data" className="w-full" />
          <button className="w-full rounded-2xl bg-red-500/10 hover:bg-red-500/15 border border-red-400/25 px-4 py-3 text-red-600 text-sm font-semibold transition-all duration-200 whitespace-nowrap dark:text-red-200/90 hover:cursor-pointer">
            Delete Account
          </button>
        </div>
      </section>
    </div>
  );
};

export default page;
