"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
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
        setStatus("error");
        return;
      }
      setStatus("done");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div>
      <PageHero eyebrow="CONTACT / ENQUIRY FORM" title="Get in touch" tone="amber" />
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl mb-4">Send us a message</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold mb-1">Name</label>
              <input name="name" required className="w-full border border-ink/20 rounded-sm px-4 py-2.5 bg-paper" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input name="email" type="email" className="w-full border border-ink/20 rounded-sm px-4 py-2.5 bg-paper" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Message</label>
              <textarea name="message" rows={5} required className="w-full border border-ink/20 rounded-sm px-4 py-2.5 bg-paper" />
            </div>
            {status === "error" && <p className="text-sm text-rust">Something went wrong. Please try again.</p>}
            {status === "done" && <p className="text-sm text-olive">Message sent — we'll get back to you soon.</p>}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3 bg-rust text-paper font-semibold rounded-sm hover:bg-olive transition-colors disabled:opacity-60"
            >
              {status === "loading" ? "Sending…" : "Send Message"}
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl mb-4">Reach us directly</h2>
          <ul className="space-y-3 text-ink/80 mb-8">
            <li>📍 Lucknow, Uttar Pradesh</li>
            <li>📞 +91 97976 33077 (Call / WhatsApp)</li>
            <li>✉️ raghuwanshiashok34@gmail.com</li>
          </ul>
          {/* GOOGLE MAP LOCATION — replace the src with the client's real
              Google Maps embed link once they share their exact address. */}
          <div className="aspect-video w-full rounded-sm overflow-hidden border border-ink/10">
            <iframe
              title="Location map"
              className="w-full h-full"
              loading="lazy"
              src="https://www.google.com/maps?q=Lucknow,Uttar+Pradesh&output=embed"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
