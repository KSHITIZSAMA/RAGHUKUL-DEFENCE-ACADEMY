import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, message } = body;

  if (!name || !message) {
    return NextResponse.json({ error: "Name and message are required." }, { status: 400 });
  }

  const record = db.addContactMessage({ name, email: email ?? "", message });
  return NextResponse.json({ ok: true, message: record });
}
