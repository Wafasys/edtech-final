"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { DEMO_STUDENT, setDemoUser } from "../../../lib/demo-auth";

export default function StudentLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState(DEMO_STUDENT.email);
  const [password, setPassword] = useState(DEMO_STUDENT.password);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDemoUser({
      role: "student",
      name: DEMO_STUDENT.name,
      email: email || DEMO_STUDENT.email,
    });
    router.push("/student/dashboard");
  }

  return (
    <div className="auth-card">
      <div className="auth-logo-row">
        <img className="auth-logo" alt="Logo" src="/home/image-2@2x.png" />
      </div>

      <h1 className="auth-heading">Student Login</h1>
      <p className="auth-sub">Welcome back. Sign in to continue learning.</p>

      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="auth-field">
          <label htmlFor="login-email">Email</label>
          <input
            id="login-email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </div>
        <div className="auth-field">
          <label htmlFor="login-password">Password</label>
          <input
            id="login-password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
          />
        </div>

        <div className="auth-row">
          <Link href="/admin/login">Admin? Log in here</Link>
        </div>

        <button type="submit" className="auth-submit">
          Sign in
        </button>
      </form>

      <div className="auth-divider"></div>
      <div className="auth-footer">
        Don&apos;t have an account? <Link href="/signup">Sign up</Link>
      </div>
      <div className="auth-back">
        <Link href="/">&larr; Back to homepage</Link>
      </div>
    </div>
  );
}
