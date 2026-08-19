"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";

export default function DonatePage() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = new FormData(e.currentTarget);
    const payload = {
      donorName: form.get("donorName"),
      email: form.get("email"),
      amount: form.get("amount"),
      purpose: form.get("purpose"),
    };

    try {
      const res = await fetch("/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "donation-receipt.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);

      setStatus("done");
      e.currentTarget.reset();
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <div>
      <PageHero
        eyebrow="CASH DONATION RECEIPT"
        title="Support Shakti Sena"
        subtitle="Every rupee goes toward running batches, issuing ID cards and appointment letters, and keeping the grounds and classrooms open."
        tone="rust"
      />
      <section className="mx-auto max-w-xl px-4 sm:px-6 py-16">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold mb-1">Your Name</label>
            <input name="donorName" required className="w-full border border-ink/20 rounded-sm px-4 py-2.5 bg-paper" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Email (optional)</label>
            <input name="email" type="email" className="w-full border border-ink/20 rounded-sm px-4 py-2.5 bg-paper" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Amount (₹)</label>
            <input name="amount" type="number" min="1" required className="w-full border border-ink/20 rounded-sm px-4 py-2.5 bg-paper" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Purpose</label>
            <select name="purpose" className="w-full border border-ink/20 rounded-sm px-4 py-2.5 bg-paper">
              <option>General Fund</option>
              <option>Army Training Wing</option>
              <option>Women Empowerment Wing</option>
              <option>Sports & Fitness Wing</option>
            </select>
          </div>

          {status === "error" && <p className="text-sm text-rust">{errorMsg}</p>}
          {status === "done" && (
            <p className="text-sm text-olive">
              Thank you! Your receipt has downloaded automatically.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-3 bg-rust text-paper font-semibold rounded-sm hover:bg-olive transition-colors disabled:opacity-60"
          >
            {status === "loading" ? "Generating receipt…" : "Donate & Get Receipt"}
          </button>
        </form>
      </section>
    </div>
  );
}
