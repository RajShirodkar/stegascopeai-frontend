import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-100 mb-4">
          StegaScopeAI
        </h1>

        <p className="text-base md:text-lg text-slate-400 mb-10">
          Detect, analyze, and uncover hidden information inside images using
          advanced AI-powered steganalysis.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/signin"
            className="px-6 py-3 rounded-lg text-sm font-semibold text-slate-200 border border-slate-700 hover:border-sky-400 hover:text-sky-400 transition"
          >
            Sign In
          </Link>

          <Link
            href="/signup"
            className="px-6 py-3 rounded-lg text-sm font-semibold bg-gradient-to-r from-sky-400 to-emerald-400 text-slate-950 hover:opacity-90 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </main>
  );
}
