import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 to-slate-900 px-4">
      <div className="grid md:grid-cols-2 max-w-4xl w-full bg-slate-950 rounded-xl shadow-2xl overflow-hidden">
        
        {/* Left Panel */}
        <div className="hidden md:flex flex-col justify-center p-12">
          <h1 className="text-3xl font-bold mb-4">Welcome Back</h1>
          <p className="text-slate-400">
            Sign in to analyze images and uncover hidden information using
            StegaScopeAI.
          </p>
        </div>

        {/* Right Panel (Clerk Form) */}
        <div className="flex items-center justify-center p-8">
          <SignIn
  fallbackRedirectUrl="/dashboard"
  appearance={{
    elements: {
      card: "bg-slate-950 shadow-none border-none",
      headerTitle: "text-white",
      headerSubtitle: "text-slate-400",
      socialButtonsBlockButton:
        "bg-slate-900 border border-slate-700 text-white hover:bg-slate-800",
      formButtonPrimary:
        "bg-gradient-to-r from-sky-400 to-emerald-400 text-black hover:opacity-90",
      formFieldInput:
        "bg-slate-900 border border-slate-700 text-white focus:ring-sky-400",
      footerActionLink: "text-sky-400 hover:text-sky-300",
    },
  }}
/>

        </div>

      </div>
    </main>
  );
}
