import PageHero from "@/components/PageHero";
import { db } from "@/lib/db";

export default function AboutPage() {
  const data = db.read();
  const president = data.management.find((m) => m.role.toLowerCase().includes("president"));

  return (
    <div>
      <PageHero
        eyebrow="ABOUT FOUNDATION"
        title="Who we are"
        subtitle="Mere Vatan Welfare Foundation is a community-run organization based in Lucknow, working across key activities — Army Training, Women Empowerment and Sports & Fitness — to prepare local youth for real opportunity."
      />

      {president && (
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 grid sm:grid-cols-[auto_1fr] gap-8 items-start">
          <div className="w-24 h-24 rounded-full bg-olive/15 flex items-center justify-center text-3xl font-mono text-olive shrink-0">
            {president.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
          </div>
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-rust mb-2">PRESIDENT'S MESSAGE</p>
            <p className="text-lg leading-relaxed text-ink/80 max-w-2xl">
              "We started this foundation with one belief — that discipline, skill
              and fitness can change a family's future in one generation.
              Every batch we run, every certificate we issue, is a step
              toward that."
            </p>
            <p className="mt-3 font-semibold">{president.name}</p>
            <p className="text-sm text-ink/60">{president.role}</p>
          </div>
        </section>
      )}

      <section className="bg-paper-2 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="font-mono text-xs tracking-[0.2em] text-rust mb-3">MANAGEMENT TEAM</p>
          <h2 className="text-3xl mb-8">Who runs Mere Vatan Welfare Foundation</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {data.management.map((m) => (
              <div key={m.id} className="bg-paper p-6 rounded-sm border border-ink/10">
                <h3 className="text-lg font-semibold normal-case">{m.name}</h3>
                <p className="text-sm text-rust mb-2">{m.role}</p>
                <p className="text-sm text-ink/70 leading-relaxed">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <p className="font-mono text-xs tracking-[0.2em] text-rust mb-3">OUR OBJECTIVES</p>
        <ul className="grid sm:grid-cols-2 gap-4">
          {data.objectives.map((o, i) => (
            <li key={i} className="border-l-2 border-olive pl-4 py-1 text-ink/80">{o}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
