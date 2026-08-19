import PageHero from "@/components/PageHero";

export default function SportsFitnessPage() {
  return (
    <div>
      <PageHero
        eyebrow="WING 03"
        title="Sports & Fitness"
        subtitle="Coaching, selection trials and community fitness drives — building discipline and health through sport, from the ground up."
        tone="amber"
      />
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 grid md:grid-cols-3 gap-8">
        {[
          { title: "Athletics Coaching", body: "Structured running, strength and agility coaching for school and district-level athletes." },
          { title: "Team Sport Trials", body: "Kabaddi, kho-kho and volleyball selection camps feeding into district and state-level teams." },
          { title: "Community Fitness Drives", body: "Open morning fitness sessions for all ages — walking, yoga and light conditioning." },
        ].map((c) => (
          <div key={c.title} className="border border-ink/10 p-6 rounded-sm bg-paper-2">
            <h3 className="text-xl mb-2">{c.title}</h3>
            <p className="text-sm text-ink/70 leading-relaxed">{c.body}</p>
          </div>
        ))}
      </section>
      <section className="bg-paper-2 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid sm:grid-cols-3 gap-6 text-center">
          <div><div className="text-4xl font-mono text-rust">210+</div><p className="text-sm text-ink/60 mt-1">Athletes coached</p></div>
          <div><div className="text-4xl font-mono text-rust">15</div><p className="text-sm text-ink/60 mt-1">District selections</p></div>
          <div><div className="text-4xl font-mono text-rust">4</div><p className="text-sm text-ink/60 mt-1">Sports covered</p></div>
        </div>
      </section>
    </div>
  );
}
