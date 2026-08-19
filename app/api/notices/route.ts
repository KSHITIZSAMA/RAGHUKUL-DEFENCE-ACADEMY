import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user || (session.user as any).role !== "ADMIN") {
    return NextResponse.json({ error: "Not authorised." }, { status: 403 });
  }

  const body = await req.json();
  const { title, message } = body;
  if (!title || !message) {
    return NextResponse.json({ error: "Title and message are required." }, { status: 400 });
  }

  const record = db.addNotice({ title, body: message, audience: "ALL" });
  return NextResponse.json({ ok: true, notice: record });
}
