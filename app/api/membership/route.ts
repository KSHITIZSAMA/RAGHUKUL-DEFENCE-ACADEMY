import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, phone, email, program, message } = body;

  if (!name || !phone || !program) {
    return NextResponse.json({ error: "Name, phone and program are required." }, { status: 400 });
  }

  const record = db.addMembershipApplication({
    name,
    phone,
    email: email ?? "",
    program,
    message: message ?? "",
  });

  return NextResponse.json({ ok: true, application: record });
}
