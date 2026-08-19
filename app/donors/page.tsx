import PageHero from "@/components/PageHero";
import { db } from "@/lib/db";
import Link from "next/link";

export default function DonorsPage() {
  const data = db.read();
  const sorted = [...data.donors].sort((a, b) => (a.date < b.date ? 1 : -1));
  return (
    <div>
      <PageHero eyebrow="LIST OF DONORS" title="Thank you to our donors" tone="rust" />
      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16">
        <div className="border border-ink/10 rounded-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-ink text-paper">
              <tr>
                <th className="text-left px-5 py-3 font-medium">Donor</th>
                <th className="text-left px-5 py-3 font-medium">Amount</th>
                <th className="text-left px-5 py-3 font-medium">Date</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((d, i) => (
                <tr key={d.id} className={i % 2 ? "bg-paper-2" : "bg-paper"}>
                  <td className="px-5 py-3">{d.name}</td>
                  <td className="px-5 py-3 font-mono">₹{d.amount.toLocaleString("en-IN")}</td>
                  <td className="px-5 py-3 text-ink/60">{d.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-center mt-8">
          <Link href="/donate" className="px-6 py-3 bg-rust text-paper font-semibold rounded-sm inline-block">
            Become a donor
          </Link>
        </div>
      </section>
    </div>
  );
}
