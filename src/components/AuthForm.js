"use client";
import { useRouter } from "next/navigation";

export default function AuthForm({ type }) {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock auth success
    router.push("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>{type === "signin" ? "Sign In" : "Sign Up"}</h2>

      {type === "signup" && (
        <input type="text" placeholder="Full Name" required />
      )}

      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />

      <button type="submit">
        {type === "signin" ? "Login" : "Create Account"}
      </button>
    </form>
  );
}
