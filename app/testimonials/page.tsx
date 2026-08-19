import PageHero from "@/components/PageHero";
import { db } from "@/lib/db";

export default function TestimonialsPage() {
  const data = db.read();
  return (
    <div>
      <PageHero eyebrow="TESTIMONIALS" title="In their words" tone="rust" />
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 grid sm:grid-cols-2 gap-8">
        {data.testimonials.map((t) => (
          <blockquote key={t.id} className="bg-paper-2 p-8 rounded-sm border border-ink/10">
            <p className="text-lg leading-relaxed text-ink/85">"{t.quote}"</p>
            <footer className="mt-4 text-sm">
              <span className="font-semibold">{t.name}</span>
              <span className="text-ink/50"> — {t.program}, {t.year}</span>
            </footer>
          </blockquote>
        ))}
      </section>
    </div>
  );
}
