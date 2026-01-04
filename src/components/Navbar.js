"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <h2 className="navbar-logo">StegaScopeAI</h2>

        <nav className="navbar-links">
          <Link href="/signin" className="nav-link">
            Sign In
          </Link>
          <Link href="/signup" className="nav-link primary">
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
}
