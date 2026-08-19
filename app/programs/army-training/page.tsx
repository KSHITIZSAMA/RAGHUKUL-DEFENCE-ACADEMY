import PageHero from "@/components/PageHero";

export default function ArmyTrainingPage() {
  return (
    <div>
      <PageHero
        eyebrow="WING 01"
        title="Army Training"
        subtitle="Physical training, mock written exams and interview preparation for candidates aiming for Indian Army, Navy, Air Force and paramilitary recruitment."
        tone="olive"
      />
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 grid md:grid-cols-3 gap-8">
        {[
          { title: "Physical Training (PT)", body: "Daily morning drills — running, push-ups, sit-ups and obstacle practice — built around official recruitment standards." },
          { title: "Written Exam Coaching", body: "General knowledge, reasoning and mathematics classes aligned to Army/Navy/Air Force entrance papers." },
          { title: "Interview & SSB Prep", body: "Mock interviews, group discussions and personality development sessions led by retired defence personnel." },
        ].map((c) => (
          <div key={c.title} className="border border-ink/10 p-6 rounded-sm bg-paper-2">
            <h3 className="text-xl mb-2">{c.title}</h3>
            <p className="text-sm text-ink/70 leading-relaxed">{c.body}</p>
          </div>
        ))}
      </section>
      <section className="bg-paper-2 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid sm:grid-cols-3 gap-6 text-center">
          <div><div className="text-4xl font-mono text-olive">340+</div><p className="text-sm text-ink/60 mt-1">Youth trained</p></div>
          <div><div className="text-4xl font-mono text-olive">58</div><p className="text-sm text-ink/60 mt-1">Recruited so far</p></div>
          <div><div className="text-4xl font-mono text-olive">12</div><p className="text-sm text-ink/60 mt-1">Weeks per batch</p></div>
        </div>
      </section>
    </div>
  );
}
