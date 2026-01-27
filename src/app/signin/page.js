import React from "react";
// import { signIn } from "next-auth/react";

const signin = () => {
  const InputClass =
    "w-full px-4 py-2 border rounded-lg focus:outline-white focus:ring-2 focus:ring-black";
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white overflow-hidden">
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-500 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-60 w-60 rounded-full bg-blue-500 blur-3xl" />
      </div>
      <div className="relative z-10 w-full max-w-md rounded-xl bg-black/40 backdrop-blur shadow-white/20 shadow-md p-8">
        <h1 className="text-2xl font-bold text-center text-white">LexiconAI</h1>
        <p className="text-center text-slate-300 mt-1">
          Log Back Into Your Account
        </p>
        <form className="mt-6 space-y-4">

          <input type="email" placeholder="Email" className={InputClass} />

          <input
            type="password"
            placeholder="Password"
            className={InputClass}
          />

          <button
            type="submit"
            className="w-full py-2 bg-black text-white rounded-lg hover:opacity-90"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Do not have an account?
          <a href="/signup" className="text-white font-medium ml-1">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default signin;
