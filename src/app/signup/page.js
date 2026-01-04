import AuthForm from "@/components/AuthForm";

export default function SignUp() {
  return (
    <main className="auth-page">
      <div className="auth-container">
        <div className="auth-left">
          <h1>Create Your Account</h1>
          <p>
            Join StegaScopeAI to explore, analyze, and detect hidden information
            within digital images using advanced AI techniques.
          </p>
        </div>

        <div className="auth-right">
          <AuthForm type="signup" />
        </div>
      </div>
    </main>
  );
}
