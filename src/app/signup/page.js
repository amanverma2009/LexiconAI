import React from "react";

const signup = () => {
  const InputClass =
    "w-full px-4 py-3 rounded-2xl border border-white/15 bg-white/5 text-white/90 placeholder:text-white/40 outline-none focus:bg-white/8 transition";
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-transparent text-white overflow-hidden px-4">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <div className="text-center">
          <h1 className="text-2xl font-extrabold tracking-tight bg-linear-to-r from-indigo-300 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
            LexiconAI
          </h1>
          <p className="mt-2 text-sm text-white/70">Create your account in seconds.</p>
        </div>

        <form className="mt-7 space-y-3">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-white/60">Full name</label>
            <input type="text" placeholder="Jane Doe" className={InputClass} />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-white/60">Email</label>
            <input type="email" placeholder="name@company.com" className={InputClass} />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-white/60">Password</label>
            <input type="password" placeholder="••••••••" className={InputClass} />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-white/60">Confirm password</label>
            <input type="password" placeholder="••••••••" className={InputClass} />
          </div>

          <button
            type="submit"
            className="w-full mt-2 py-3 rounded-2xl bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm font-semibold shadow-sm transition"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-sm text-white/55 mt-5">
          Already have an account?
          <a href="/signin" className="text-white font-semibold ml-1 hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default signup;
