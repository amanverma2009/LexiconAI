import React from "react";

const signup = () => {
  const InputClass =
    "w-full px-4 py-3 rounded-2xl border border-slate-200/80 bg-white text-slate-900 placeholder:text-slate-400 outline-none transition focus:bg-slate-100 dark:border-white/15 dark:bg-white/5 dark:text-white/90 dark:placeholder:text-white/40 dark:focus:bg-white/8";
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-transparent text-slate-900 dark:text-white overflow-hidden px-4">
      <div className="w-full max-w-md rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-[0_18px_60px_rgba(0,0,0,0.15)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
        <div className="text-center">
          <h1 className="text-2xl font-extrabold tracking-tight bg-linear-to-r from-indigo-300 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
            LexiconAI
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-white/70">
            Create your account in seconds.
          </p>
        </div>

        <form className="mt-7 space-y-3">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-600 dark:text-white/60">Full name</label>
            <input type="text" placeholder="Jane Doe" className={InputClass} />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-600 dark:text-white/60">Email</label>
            <input type="email" placeholder="name@company.com" className={InputClass} />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-600 dark:text-white/60">Password</label>
            <input type="password" placeholder="••••••••" className={InputClass} />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-600 dark:text-white/60">
              Confirm password
            </label>
            <input type="password" placeholder="••••••••" className={InputClass} />
          </div>

          <button
            type="submit"
            className="w-full mt-2 py-3 rounded-2xl bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm font-semibold shadow-sm transition"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-sm text-slate-600 mt-5 dark:text-white/55">
          Already have an account?
          <a href="/signin" className="text-slate-900 font-semibold ml-1 hover:underline dark:text-white">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default signup;
