import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { generateDonationReceiptPDF } from "@/lib/generatePdf";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { donorName, email, amount, purpose } = body;

    const amountNum = Number(amount);
    if (!donorName || !amountNum || amountNum <= 0) {
      return NextResponse.json({ error: "Donor name and a valid amount are required." }, { status: 400 });
    }

    const record = db.addDonation({
      donorName: String(donorName).trim(),
      email: email ? String(email).trim() : "",
      amount: amountNum,
      purpose: purpose || "General Fund",
    });

    const pdfBuffer = generateDonationReceiptPDF({
      receiptNo: record.receiptNo,
      date: record.date,
      donorName: record.donorName,
      email: record.email,
      amount: record.amount,
      purpose: record.purpose,
    });

    return new NextResponse(new Uint8Array(pdfBuffer), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${record.receiptNo}.pdf"`,
      },
    });
  } catch (err: unknown) {
    console.error("Donation receipt error:", err);
    return NextResponse.json({ error: "Failed to generate receipt. Please try again." }, { status: 500 });
  }
}

