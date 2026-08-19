import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import PageHero from "@/components/PageHero";
import SignOutButton from "@/components/SignOutButton";

export default async function MemberDashboard() {
  const session = await auth();
  if (!session?.user) redirect("/login");

  const role = (session.user as any).role;
  if (role !== "MEMBER") redirect(role === "ADMIN" ? "/admin" : "/login");

  const data = db.read();
  const memberId = (session.user as any).memberId;
  const member = data.members.find((m) => m.id === memberId);

  return (
    <div>
      <PageHero eyebrow="MEMBER LOGIN" title={`Welcome, ${session.user.name}`} tone="olive" />
      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 space-y-8">
        {member && (
          <div className="border border-ink/10 rounded-sm p-6 bg-paper-2">
            <h2 className="text-xl mb-4">Your Profile</h2>
            <dl className="grid sm:grid-cols-2 gap-4 text-sm">
              <div><dt className="text-ink/50">Program</dt><dd className="font-semibold">{member.program}</dd></div>
              <div><dt className="text-ink/50">Joined</dt><dd className="font-semibold">{member.joinedOn}</dd></div>
              <div>
                <dt className="text-ink/50">ID Card</dt>
                <dd className="font-semibold">{member.idCardIssued ? "Issued ✅" : "Pending"}</dd>
              </div>
              <div>
                <dt className="text-ink/50">Appointment Letter</dt>
                <dd className="font-semibold">{member.appointmentLetterIssued ? "Issued ✅" : "Pending"}</dd>
              </div>
            </dl>
          </div>
        )}

        <div className="border border-ink/10 rounded-sm p-6 bg-paper-2">
          <h2 className="text-xl mb-4">Latest Notices</h2>
          <ul className="space-y-3">
            {data.notices.map((n) => (
              <li key={n.id} className="text-sm">
                <span className="font-mono text-xs text-ink/50 mr-2">{n.date}</span>
                <span className="font-semibold">{n.title}</span>
                <p className="text-ink/60">{n.body}</p>
              </li>
            ))}
          </ul>
        </div>

        <SignOutButton />
      </section>
    </div>
  );
}
