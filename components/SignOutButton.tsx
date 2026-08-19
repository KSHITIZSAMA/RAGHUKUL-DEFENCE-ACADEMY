"use client";

import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="text-sm font-semibold px-5 py-2.5 border border-ink/20 rounded-sm hover:border-rust hover:text-rust transition-colors"
    >
      Log Out
    </button>
  );
}
