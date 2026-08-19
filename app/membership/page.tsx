"use client";

import { useState } from "react";
import Link from "next/link";

export default function MembershipPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name"),
      phone: form.get("phone"),
      email: form.get("email"),
      program: form.get("program"),
      message: form.get("message"),
    };

    try {
      const res = await fetch("/api/membership", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
        return;
      }
      setStatus("done");
      e.currentTarget.reset();
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-[#161912] text-white selection:bg-[#C98E2A] selection:text-black pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#738062] hover:text-[#C98E2A] transition-colors uppercase"
          >
            <span>←</span> Back to Academy Home
          </Link>
        </div>

        {/* Header Hero Banner */}
        <div className="border-l-4 border-[#C98E2A] pl-6 md:pl-8 py-2 mb-12 bg-[#3F4632]/10 rounded-r-2xl border-t border-b border-r border-[#586248]/30">
          <span className="inline-block px-3 py-1 rounded-full bg-[#C98E2A]/20 border border-[#C98E2A]/40 text-[#C98E2A] font-mono text-[11px] font-bold tracking-widest uppercase mb-3">
            OFFICIAL CADET REGISTRATION PORTAL
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-display uppercase tracking-tight text-white mb-3">
            Join Raghukul Defence Academy
          </h1>
          <p className="text-[#CFD3C7] text-sm md:text-base font-sans max-w-2xl leading-relaxed">
            Apply for any of our three specialized wings: Army & Defence Entrance Training, Women Empowerment Workshops, or Sports & Physical Fitness Coaching.
          </p>
        </div>

        {/* Application Form Card */}
        <div className="bg-[#1E2319]/90 border border-[#586248]/50 rounded-2xl p-6 sm:p-10 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 font-bold mb-2">
                  Full Name <span className="text-[#C98E2A]">*</span>
                </label>
                <input
                  name="name"
                  required
                  placeholder="e.g. Vikram Singh"
                  className="w-full bg-[#161912] border border-[#586248]/60 rounded-xl px-4 py-3 text-white placeholder-gray-500 font-sans focus:outline-none focus:border-[#C98E2A] transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 font-bold mb-2">
                  Phone Number <span className="text-[#C98E2A]">*</span>
                </label>
                <input
                  name="phone"
                  required
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full bg-[#161912] border border-[#586248]/60 rounded-xl px-4 py-3 text-white placeholder-gray-500 font-sans focus:outline-none focus:border-[#C98E2A] transition-colors text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 font-bold mb-2">
                  Email Address <span className="text-gray-500">(Optional)</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="cadet@example.com"
                  className="w-full bg-[#161912] border border-[#586248]/60 rounded-xl px-4 py-3 text-white placeholder-gray-500 font-sans focus:outline-none focus:border-[#C98E2A] transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 font-bold mb-2">
                  Select Wing / Program <span className="text-[#C98E2A]">*</span>
                </label>
                <select
                  name="program"
                  required
                  className="w-full bg-[#161912] border border-[#586248]/60 rounded-xl px-4 py-3 text-white font-sans focus:outline-none focus:border-[#C98E2A] transition-colors text-sm cursor-pointer"
                >
                  <option value="Army Training">Army & Defence Physical & Written Prep</option>
                  <option value="Women Empowerment">Women Empowerment & Self-Defense Wing</option>
                  <option value="Sports & Fitness">Sports Coaching & Athletics Wing</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 font-bold mb-2">
                Additional Note / Experience <span className="text-gray-500">(Optional)</span>
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Mention any prior physical training, educational background, or specific goals..."
                className="w-full bg-[#161912] border border-[#586248]/60 rounded-xl px-4 py-3 text-white placeholder-gray-500 font-sans focus:outline-none focus:border-[#C98E2A] transition-colors text-sm"
              />
            </div>

            {status === "error" && (
              <div className="p-4 rounded-xl bg-red-900/30 border border-red-500/50 text-red-300 font-mono text-xs">
                ⚠️ {errorMsg}
              </div>
            )}

            {status === "done" && (
              <div className="p-4 rounded-xl bg-emerald-900/30 border border-emerald-500/50 text-emerald-300 font-mono text-xs">
                ✔ Application received! Our drill coordinator will contact you via phone within 24 hours.
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-4 bg-[#C98E2A] text-black font-mono font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-white transition-all shadow-lg shadow-[#C98E2A]/20 disabled:opacity-60 cursor-pointer"
            >
              {status === "loading" ? "Submitting Application..." : "Submit Cadet Application"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
