import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import PDFDocument from "pdfkit";

export async function POST(req: Request) {
  const body = await req.json();
  const { donorName, email, amount, purpose } = body;

  const amountNum = Number(amount);
  if (!donorName || !amountNum || amountNum <= 0) {
    return NextResponse.json({ error: "Donor name and a valid amount are required." }, { status: 400 });
  }

  const record = db.addDonation({
    donorName,
    email: email ?? "",
    amount: amountNum,
    purpose: purpose || "General Fund",
  });

  const chunks: Uint8Array[] = [];
  const doc = new PDFDocument({ size: "A5", margin: 40 });
  doc.on("data", (c) => chunks.push(c));

  const pdfBuffer: Buffer = await new Promise((resolve) => {
    doc.on("end", () => resolve(Buffer.concat(chunks)));

    doc.fontSize(16).fillColor("#163B66").text("MERE VATAN WELFARE FOUNDATION", { align: "left" });
    doc.fontSize(9).fillColor("#475569").text("Betul, Madhya Pradesh · Ph: +91 9797633077 · Email: raghuwanshiashok34@gmail.com", { align: "left" });
    doc.fontSize(8).fillColor("#D97706").text("Govt. Darpan Reg # RJ/2024/0488921 · Section 80G & 12A Tax Exempted", { align: "left" });
    doc.moveDown(0.8);
    doc.moveTo(40, doc.y).lineTo(400, doc.y).strokeColor("#D97706").lineWidth(2).stroke();
    doc.moveDown(1);

    doc.fontSize(14).fillColor("#1C1B18").text("Donation Receipt", { underline: false });
    doc.moveDown(0.8);

    doc.fontSize(11).fillColor("#1C1B18");
    doc.text(`Receipt No: ${record.receiptNo}`);
    doc.text(`Date: ${record.date}`);
    doc.moveDown(0.5);
    doc.text(`Received from: ${record.donorName}`);
    if (record.email) doc.text(`Email: ${record.email}`);
    doc.text(`Purpose: ${record.purpose}`);
    doc.moveDown(0.5);
    doc.fontSize(16).fillColor("#8C3B2E").text(`Amount: Rs. ${record.amount.toLocaleString("en-IN")}/-`);
    doc.moveDown(1.5);

    doc.fontSize(9).fillColor("#777").text(
      "This receipt is generated for record-keeping. Please retain it for your reference.",
      { width: 350 }
    );
    doc.moveDown(2);
    doc.fontSize(10).fillColor("#1C1B18").text("Authorised Signatory", { align: "right" });

    doc.end();
  });

  return new NextResponse(new Uint8Array(pdfBuffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${record.receiptNo}.pdf"`,
    },
  });
}
