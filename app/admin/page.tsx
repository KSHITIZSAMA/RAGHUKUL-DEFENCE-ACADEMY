import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import PageHero from "@/components/PageHero";
import SignOutButton from "@/components/SignOutButton";
import AdminNoticeForm from "@/components/AdminNoticeForm";

export default async function AdminDashboard() {
  const session = await auth();
  if (!session?.user) redirect("/login");
  if ((session.user as any).role !== "ADMIN") redirect("/member");

  const data = db.read();

  return (
    <div>
      <PageHero eyebrow="ADMIN LOGIN" title="Admin Dashboard" tone="rust" />
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 space-y-10">
        <div className="grid sm:grid-cols-4 gap-4">
          <Stat label="Membership applications" value={data.membershipApplications.length} />
          <Stat label="Donations recorded" value={data.donations.length} />
          <Stat label="Contact messages" value={data.contactMessages.length} />
          <Stat label="Active members" value={data.members.length} />
        </div>

        <AdminNoticeForm />

        <Table
          title="Membership Applications"
          rows={data.membershipApplications}
          columns={["name", "phone", "program", "status", "date"]}
        />
        <Table
          title="Donations"
          rows={data.donations}
          columns={["donorName", "amount", "purpose", "receiptNo", "date"]}
        />
        <Table
          title="Contact Messages"
          rows={data.contactMessages}
          columns={["name", "email", "message", "date"]}
        />

        <SignOutButton />
      </section>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="border border-ink/10 rounded-sm p-5 bg-paper-2 text-center">
      <div className="text-3xl font-mono text-rust">{value}</div>
      <div className="text-xs text-ink/60 mt-1">{label}</div>
    </div>
  );
}

function Table({ title, rows, columns }: { title: string; rows: any[]; columns: string[] }) {
  return (
    <div>
      <h2 className="text-xl mb-3">{title}</h2>
      {rows.length === 0 ? (
        <p className="text-sm text-ink/50">No records yet.</p>
      ) : (
        <div className="overflow-x-auto border border-ink/10 rounded-sm">
          <table className="w-full text-sm">
            <thead className="bg-ink text-paper">
              <tr>
                {columns.map((c) => (
                  <th key={c} className="text-left px-4 py-2 font-medium capitalize">{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.id ?? i} className={i % 2 ? "bg-paper-2" : "bg-paper"}>
                  {columns.map((c) => (
                    <td key={c} className="px-4 py-2">{String(r[c] ?? "")}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
