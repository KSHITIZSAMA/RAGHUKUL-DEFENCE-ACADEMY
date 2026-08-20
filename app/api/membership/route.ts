import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { sendCadetNotificationToOwner } from "@/lib/emailService";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, program, message } = body;

    if (!name || !phone || !program) {
      return NextResponse.json({ error: "Name, phone and program are required." }, { status: 400 });
    }

    const record = db.addMembershipApplication({
      name: String(name).trim(),
      phone: String(phone).trim(),
      email: email ? String(email).trim() : "",
      program: String(program).trim(),
      message: message ? String(message).trim() : "",
    });

    // Send instant cadet registration email notification to foundation owner
    await sendCadetNotificationToOwner({
      name: record.name,
      phone: record.phone,
      email: record.email,
      program: record.program,
      message: record.message,
      date: record.date,
    });

    return NextResponse.json({ ok: true, application: record });
  } catch (err: unknown) {
    console.error("Membership registration error:", err);
    return NextResponse.json({ error: "Failed to submit application. Please try again." }, { status: 500 });
  }
}

