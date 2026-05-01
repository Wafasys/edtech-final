"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { DEMO_STUDENT, setDemoUser } from "../../../lib/demo-auth";

export default function StudentSignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDemoUser({
      role: "student",
      name: name || DEMO_STUDENT.name,
      email: email || DEMO_STUDENT.email,
    });
    router.push("/student/dashboard");
  }

  return (
    <div className="auth-card">
      <div className="auth-logo-row">
        <img className="auth-logo" alt="Logo" src="/home/image-2@2x.png" />
      </div>

      <h1 className="auth-heading">Create your account</h1>
      <p className="auth-sub">Start learning in under a minute.</p>

      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="auth-field">
          <label htmlFor="signup-name">Full name</label>
          <input
            id="signup-name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Cooper"
          />
        </div>
        <div className="auth-field">
          <label htmlFor="signup-email">Email</label>
          <input
            id="signup-email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </div>
        <div className="auth-field">
          <label htmlFor="signup-password">Password</label>
          <input
            id="signup-password"
            type="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="At least 8 characters"
          />
        </div>

        <button type="submit" className="auth-submit">
          Create account
        </button>
      </form>

      <div className="auth-divider"></div>
      <div className="auth-footer">
        Already have an account? <Link href="/login">Sign in</Link>
      </div>
      <div className="auth-back">
        <Link href="/">&larr; Back to homepage</Link>
      </div>
    </div>
  );
}
