"use client";

import Link from "next/link";

export default function MobileDock() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-[#181B15]/95 backdrop-blur-md border-t-2 border-[#3F4632] px-3 py-2.5 shadow-2xl">
      <div className="flex items-center justify-between gap-2 text-center font-mono text-[11px] uppercase tracking-wider font-bold">
        <a
          href="tel:+918115626005"
          className="flex-1 py-2.5 bg-[#3F4632] text-white hover:bg-[#1E2318] transition-colors tactical-cut-br border border-[#586248] flex items-center justify-center gap-1.5"
        >
          <span>📞</span>
          <span>CALL</span>
        </a>
        <Link
          href="/membership"
          className="flex-1 py-2.5 bg-[#C98E2A] text-[#181B15] hover:bg-white transition-colors tactical-cut-br flex items-center justify-center gap-1.5 shadow-md"
        >
          <span>🪖</span>
          <span>JOIN CADET</span>
        </Link>
        <Link
          href="/#donors"
          className="flex-1 py-2.5 bg-[#586248] text-white hover:bg-[#1E2318] transition-colors tactical-cut-br border border-[#738062] flex items-center justify-center gap-1.5"
        >
          <span>🤝</span>
          <span>DONATE</span>
        </Link>
      </div>
    </div>
  );
}
