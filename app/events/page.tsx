import PageHero from "@/components/PageHero";
import { db } from "@/lib/db";

export default function EventsPage() {
  const data = db.read();
  return (
    <div>
      <PageHero eyebrow="UPCOMING EVENT" title="Events & activities" tone="olive" />
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 space-y-6">
        {data.events.map((e) => (
          <div key={e.id} className="flex gap-6 border border-ink/10 rounded-sm p-6 bg-paper-2">
            <div className="font-mono text-center shrink-0 w-20">
              <div className="text-3xl leading-none text-rust">{new Date(e.date).getDate()}</div>
              <div className="text-xs uppercase text-ink/50 mt-1">
                {new Date(e.date).toLocaleString("default", { month: "short", year: "numeric" })}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold normal-case">{e.title}</h3>
              <p className="text-sm text-ink/50 mb-2">{e.location}</p>
              <p className="text-sm text-ink/70 leading-relaxed">{e.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
