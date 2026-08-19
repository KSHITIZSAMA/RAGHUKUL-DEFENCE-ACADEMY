import PageHero from "@/components/PageHero";

export default function WomenEmpowermentPage() {
  return (
    <div>
      <PageHero
        eyebrow="WING 02"
        title="Women Empowerment"
        subtitle="Vocational skill-development batches that give women a path to financial independence — from the sewing machine to their own small business."
        tone="rust"
      />
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 grid md:grid-cols-3 gap-8">
        {[
          { title: "Tailoring & Stitching", body: "6-week certificate batches covering hand and machine stitching, pattern-cutting and boutique-level finishing." },
          { title: "Beautician Training", body: "Basic to advanced beauty and salon skills, preparing women to work locally or start their own parlour." },
          { title: "Food Processing & Pickling", body: "Hygienic food processing, packaging and small-batch production for home-based food businesses." },
        ].map((c) => (
          <div key={c.title} className="border border-ink/10 p-6 rounded-sm bg-paper-2">
            <h3 className="text-xl mb-2">{c.title}</h3>
            <p className="text-sm text-ink/70 leading-relaxed">{c.body}</p>
          </div>
        ))}
      </section>
      <section className="bg-paper-2 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid sm:grid-cols-3 gap-6 text-center">
          <div><div className="text-4xl font-mono text-rust">500+</div><p className="text-sm text-ink/60 mt-1">Women trained</p></div>
          <div><div className="text-4xl font-mono text-rust">120</div><p className="text-sm text-ink/60 mt-1">Now self-employed</p></div>
          <div><div className="text-4xl font-mono text-rust">6</div><p className="text-sm text-ink/60 mt-1">Weeks per batch</p></div>
        </div>
      </section>
    </div>
  );
}
