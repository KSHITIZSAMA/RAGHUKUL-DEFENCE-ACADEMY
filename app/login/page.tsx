"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import PageHero from "@/components/PageHero";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = new FormData(e.currentTarget);
    const email = String(form.get("email"));
    const password = String(form.get("password"));

    const res = await signIn("credentials", { email, password, redirect: false });
    setLoading(false);

    if (res?.error) {
      setError("Invalid email or password.");
      return;
    }
    // role-based redirect happens on the dashboard pages themselves
    router.push(email.includes("admin") ? "/admin" : "/member");
    router.refresh();
  }

  return (
    <div>
      <PageHero eyebrow="ADMIN LOGIN / MEMBER LOGIN" title="Log in" tone="olive" />
      <section className="mx-auto max-w-sm px-4 sm:px-6 py-16">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input name="email" type="email" required className="w-full border border-ink/20 rounded-sm px-4 py-2.5 bg-paper" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Password</label>
            <input name="password" type="password" required className="w-full border border-ink/20 rounded-sm px-4 py-2.5 bg-paper" />
          </div>
          {error && <p className="text-sm text-rust">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-olive text-paper font-semibold rounded-sm hover:bg-ink transition-colors disabled:opacity-60"
          >
            {loading ? "Logging in…" : "Log In"}
          </button>
        </form>
        <div className="mt-6 text-xs text-ink/50 border-t border-ink/10 pt-4">
          <p className="font-semibold mb-1">Demo credentials</p>
          <p>Admin — admin@shaktisena.org / admin123</p>
          <p>Member — member@shaktisena.org / member123</p>
        </div>
      </section>
    </div>
  );
}
