"use client";

import { useState } from "react";

export default function ContactSection() {
  const [contactStatus, setContactStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function handleContactSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setContactStatus("loading");
    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        setContactStatus("error");
        return;
      }
      setContactStatus("done");
      e.currentTarget.reset();
    } catch {
      setContactStatus("error");
    }
  }

  return (
    <div className="lg:col-span-6 bg-[#F4F5F1] p-8 tactical-cut-br border border-[#BDC1B3] shadow-lg">
      <h3 className="text-xl font-bold uppercase font-mono mb-4 text-[#181B15]">SEND A DIRECT MESSAGE</h3>
      <form onSubmit={handleContactSubmit} className="space-y-4 font-mono text-xs">
        <div>
          <label className="block text-xs font-bold uppercase mb-1 text-[#3F4632]">YOUR NAME</label>
          <input name="name" required className="w-full border border-[#BDC1B3] px-4 py-3 bg-[#E5E7DF] text-[#181B15] focus:outline-none focus:border-[#3F4632]" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase mb-1 text-[#3F4632]">EMAIL ADDRESS</label>
          <input name="email" type="email" required className="w-full border border-[#BDC1B3] px-4 py-3 bg-[#E5E7DF] text-[#181B15] focus:outline-none focus:border-[#3F4632]" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase mb-1 text-[#3F4632]">MESSAGE DETAILS</label>
          <textarea name="message" rows={4} required className="w-full border border-[#BDC1B3] px-4 py-3 bg-[#E5E7DF] text-[#181B15] focus:outline-none focus:border-[#3F4632]" />
        </div>
        {contactStatus === "error" && <p className="text-xs text-red-600 font-bold">Something went wrong. Please try again.</p>}
        {contactStatus === "done" && <p className="text-xs text-[#3F4632] font-bold">Message sent successfully — we will get back to you soon.</p>}
        <button
          type="submit"
          disabled={contactStatus === "loading"}
          className="w-full py-3.5 bg-[#3F4632] text-white font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#1E2318] transition-colors disabled:opacity-60 tactical-cut-br"
        >
          {contactStatus === "loading" ? "SENDING MESSAGE…" : "SEND MESSAGE"}
        </button>
      </form>
    </div>
  );
}
