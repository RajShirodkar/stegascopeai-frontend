import AuthForm from "@/components/AuthForm";

export default function SignIn() {
  return (
    <main className="auth-page">
      <div className="auth-container">
        <div className="auth-left">
          <h1>Welcome Back</h1>
          <p>
            Sign in to analyze images and uncover hidden information using
            StegaScopeAI.
          </p>
        </div>

        <div className="auth-right">
          <AuthForm type="signin" />
        </div>
      </div>
    </main>
  );
}
