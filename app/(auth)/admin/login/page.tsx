"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { DEMO_ADMIN, setDemoUser } from "../../../../lib/demo-auth";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState(DEMO_ADMIN.email);
  const [password, setPassword] = useState(DEMO_ADMIN.password);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDemoUser({
      role: "admin",
      name: DEMO_ADMIN.name,
      email: email || DEMO_ADMIN.email,
    });
    router.push("/admin/dashboard");
  }

  return (
    <div className="auth-card">
      <div className="auth-logo-row">
        <img className="auth-logo" alt="Logo" src="/home/image-2@2x.png" />
      </div>

      <h1 className="auth-heading">Admin Login</h1>
      <p className="auth-sub">Sign in to the admin console.</p>

      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="auth-field">
          <label htmlFor="admin-email">Email</label>
          <input
            id="admin-email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@example.com"
          />
        </div>
        <div className="auth-field">
          <label htmlFor="admin-password">Password</label>
          <input
            id="admin-password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
          />
        </div>

        <div className="auth-row">
          <Link href="/login">Student? Log in here</Link>
        </div>

        <button type="submit" className="auth-submit">
          Sign in to console
        </button>
      </form>

      <div className="auth-divider"></div>
      <div className="auth-back">
        <Link href="/">&larr; Back to homepage</Link>
      </div>
    </div>
  );
}
