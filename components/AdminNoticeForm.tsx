"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminNoticeForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = new FormData(e.currentTarget);
    const res = await fetch("/api/notices", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: form.get("title"), message: form.get("message") }),
    });
    if (!res.ok) {
      setStatus("error");
      return;
    }
    setStatus("done");
    e.currentTarget.reset();
    router.refresh();
  }

  return (
    <div className="border border-ink/10 rounded-sm p-6 bg-paper-2">
      <h2 className="text-xl mb-4">Post a Notice</h2>
      <form onSubmit={handleSubmit} className="grid sm:grid-cols-[1fr_1fr_auto] gap-3 items-start">
        <input name="title" placeholder="Notice title" required className="border border-ink/20 rounded-sm px-3 py-2 bg-paper text-sm" />
        <input name="message" placeholder="Notice details" required className="border border-ink/20 rounded-sm px-3 py-2 bg-paper text-sm" />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-5 py-2 bg-rust text-paper text-sm font-semibold rounded-sm disabled:opacity-60"
        >
          {status === "loading" ? "Posting…" : "Post"}
        </button>
      </form>
      {status === "error" && <p className="text-xs text-rust mt-2">Something went wrong.</p>}
      {status === "done" && <p className="text-xs text-olive mt-2">Notice posted.</p>}
    </div>
  );
}
