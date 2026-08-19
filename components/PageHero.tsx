export default function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  tone?: "olive" | "rust" | "amber";
}) {
  return (
    <section className="bg-[#1E2318] text-white px-4 sm:px-6 py-14 sm:py-16 border-b-4 border-[#3F4632] tech-grid-dark relative overflow-hidden">
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#3F4632] text-[#C98E2A] font-mono text-[11px] uppercase tracking-widest mb-3 tactical-cut-br border border-[#586248]">
          <span>// {eyebrow}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-3 font-display">
          {title}
        </h1>
        {subtitle && (
          <p className="max-w-2xl text-xs sm:text-sm text-[#CFD3C7] leading-relaxed font-sans">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
