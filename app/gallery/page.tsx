import PageHero from "@/components/PageHero";
import { db } from "@/lib/db";

const TONES: Record<string, string> = {
  "Army Training": "bg-olive",
  "Women Empowerment": "bg-rust",
  "Sports & Fitness": "bg-amber",
};

export default function GalleryPage() {
  const data = db.read();
  return (
    <div>
      <PageHero eyebrow="PHOTO GALLERY" title="Moments from the ground" tone="amber" />
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.gallery.map((g) => (
          <div key={g.id} className="rounded-sm overflow-hidden border border-ink/10">
            <div className={`${TONES[g.category] ?? "bg-olive"} h-48 flex items-center justify-center text-paper/70 text-sm font-mono`}>
              Photo placeholder
            </div>
            <div className="p-4 bg-paper-2">
              <p className="text-sm font-semibold">{g.caption}</p>
              <p className="text-xs text-ink/50 mt-1">{g.category}</p>
            </div>
          </div>
        ))}
      </section>
      <p className="text-center text-sm text-ink/50 pb-16 px-4">
        Upload real batch photos here once handed over — this grid is wired
        to the gallery data and just needs image files.
      </p>
    </div>
  );
}
