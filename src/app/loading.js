export default function Loading() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-white/20 border-t-white" />
        <h2 className="mt-5 text-lg font-semibold text-white">Loading</h2>
        <p className="mt-1 text-sm text-white/60">
          Getting things ready for you…
        </p>
      </div>
    </div>
  );
}
