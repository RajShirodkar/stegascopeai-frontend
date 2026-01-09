"use client";

import Link from "next/link";
import { SignedIn, SignedOut, UserButton, useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { signOut } = useClerk();
  const router = useRouter();

  return (
    <header className="w-full border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          StegaScopeAI
        </Link>

        <div className="flex items-center gap-4">
          <SignedOut>
            <Link href="/sign-in" className="hover:text-sky-400 transition">
              Sign In
            </Link>
            <Link href="/sign-up" className="hover:text-sky-400 transition">
              Sign Up
            </Link>
          </SignedOut>

          <SignedIn>
            <UserButton />
            <button
              onClick={() => signOut(() => router.push("/"))}
              className="text-sm text-slate-400 hover:text-red-400 transition"
            >
              Logout
            </button>
          </SignedIn>
        </div>
      </div>
    </header>
  );
}

