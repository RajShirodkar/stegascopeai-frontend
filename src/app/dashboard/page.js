"use client";

import { useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { isLoaded, userId } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !userId) {
      router.push("/sign-in");
    }
  }, [isLoaded, userId, router]);

  if (!isLoaded || !userId) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 to-slate-900">
        <div className="text-slate-400">Loading...</div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 to-slate-900 px-4">
      <div className="max-w-3xl w-full bg-slate-950 rounded-xl p-10 shadow-2xl">
        
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">
            StegaScopeAI Dashboard
          </h1>
          <p className="text-slate-400">
            Upload an image to detect and analyze hidden information using
            advanced steganalysis techniques.
          </p>
        </header>

        <section className="border-2 border-dashed border-slate-800 rounded-lg p-10 text-center">
          <input type="file" accept="image/*" className="hidden" id="file" />

          <label
            htmlFor="file"
            className="cursor-pointer text-slate-400 block"
          >
            Click to upload or drag & drop an image
          </label>

          <button className="mt-6 px-6 py-3 rounded-md bg-gradient-to-r from-sky-400 to-emerald-400 text-slate-950 font-semibold hover:opacity-90 transition">
            Analyze Image
          </button>
        </section>

      </div>
    </main>
  );
}

