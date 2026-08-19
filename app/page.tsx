import Link from "next/link";
import Image from "next/image";
import { db } from "@/lib/db";
import ContactSection from "@/components/ContactSection";
import ScrollButton from "@/components/ScrollButton";
import GallerySection from "@/components/GallerySection";
import StatCounter from "@/components/StatCounter";

export default function Home() {
  const data = db.read();
  const recentActivity = [...data.notices].slice(0, 4);
  const upcomingEvents = [...data.events];
  const sortedDonors = [...data.donors].sort((a, b) => (a.date < b.date ? 1 : -1));
  const president = data.management.find((m) => m.role.toLowerCase().includes("president"));

  return (
    <div className="bg-[#E5E7DF] text-[#181B15]">
      
      {/* ------------------------------------------------------------------------- */}
      {/* 1. HERO SECTION (id="hero") — MILIDECK "X" Framed Photo & 98+ Recruitment Stats */}
      {/* ------------------------------------------------------------------------- */}
      <section id="hero" className="relative bg-[#E5E7DF] text-[#181B15] overflow-hidden border-b border-[#BDC1B3] py-6 sm:py-10 scroll-mt-24">
        
        {/* Bottom Theme Color Area (Dark Military Olive #3F4632) */}
        <div className="absolute inset-x-0 bottom-0 h-[140px] sm:h-[160px] lg:h-[175px] bg-[#3F4632] z-0 pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[500px]">
            
            {/* Left Column: MILIDECK Style Boxed Title + Subtitle + Action Buttons */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div className="space-y-6 pt-2">
                
                {/* Title Highlight Box */}
                <div className="space-y-2">
                  <div className="milideck-title-box">
                    <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-wider text-[#181B15] leading-none font-display">
                      MERE VATAN
                    </h1>
                  </div>
                  <div className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#3F4632] leading-tight font-display">
                    WELFARE FOUNDATION
                  </div>
                  {/* Theme Accent Tri-Color Line Strip */}
                  <div className="w-36 h-1 flex my-3">
                    <span className="w-1/3 bg-[#3F4632]" />
                    <span className="w-1/3 bg-[#738062]" />
                    <span className="w-1/3 bg-[#C98E2A]" />
                  </div>
                </div>

                {/* Subtitle */}
                <p className="text-xs sm:text-sm font-body text-[#5E6553] tracking-wide uppercase max-w-md leading-relaxed font-semibold">
                  Evolution of Defence Strategy, Youth Physical Endurance & Vocational Empowerment.
                </p>

                {/* Action CTA Buttons */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    href="/membership"
                    className="px-6 py-3 bg-[#3F4632] text-white font-mono text-xs font-bold tracking-widest uppercase hover:bg-[#1E2318] transition-all shadow-md tactical-cut-br"
                  >
                    BECOME A CADET
                  </Link>
                  <ScrollButton
                    targetId="about"
                    className="px-6 py-3 border-2 border-[#3F4632] text-[#3F4632] font-mono text-xs font-bold tracking-widest uppercase hover:bg-[#3F4632] hover:text-white transition-all tactical-cut-br"
                  >
                    EXPLORE FOUNDATION ↓
                  </ScrollButton>
                </div>
              </div>

              {/* Bottom Left Dark Tactical Olive Box */}
              <div className="bg-[#2E3424] text-white p-5 sm:p-6 shadow-xl flex items-center gap-6 border-l-4 border-[#C98E2A] max-w-xl tactical-cut-br border-t border-b border-r border-[#4A543A]">
                <div className="text-4xl sm:text-5xl font-mono font-extrabold text-white shrink-0">
                  <StatCounter end={98} suffix="+" />
                </div>
                <div className="text-[11px] font-mono tracking-wider text-[#CFD3C7] leading-relaxed uppercase">
                  QUALIFIED CANDIDATES & SUCCESSFUL DEFENCE RECRUITMENT SELECTIONS ACROSS ARMY, POLICE & ATHLETIC TRIALS.
                </div>
              </div>

            </div>

            {/* Right Column: Hero Section "X" Shaped Image Frame */}
            <div className="lg:col-span-6 relative min-h-[380px] sm:min-h-[480px] lg:min-h-[520px] flex items-center justify-center">
              
              {/* Outer X-Framed Image Container */}
              <div className="w-full h-full relative min-h-[380px] sm:min-h-[480px] hero-x-frame shadow-2xl bg-[#1E2318] border-2 border-[#3F4632]">
                
                <div className="absolute inset-0 tech-grid-dark opacity-30 z-10 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E2318]/70 via-transparent to-[#1E2318]/30 z-10 pointer-events-none" />

                <Image
                  src="/images/hero-cadet.png"
                  alt="Mere Vatan Welfare Foundation Cadet in Training"
                  fill
                  priority
                  className="object-cover object-center filter contrast-105 brightness-95"
                />

                <div className="absolute bottom-6 right-8 z-20 hidden sm:block">
                  <div className="px-3 py-1.5 bg-[#3F4632]/90 backdrop-blur-sm border border-[#CFD3C7]/40 text-[#CFD3C7] font-mono text-[10px] uppercase tracking-widest tactical-cut-br shadow-lg">
                    MERE VATAN FOUNDATION // CADET HERO FRAME
                  </div>
                </div>

                <div 
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-16 bg-[#E5E7DF] z-20 pointer-events-none"
                  style={{ clipPath: "polygon(100% 0, 0 50%, 100% 100%)" }}
                />

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------------- */}
      {/* 2. ABOUT SECTION (id="about") — Leadership, Bio, Objectives */}
      {/* ------------------------------------------------------------------------- */}
      <section id="about" className="py-20 border-b border-[#BDC1B3] bg-[#F4F5F1] scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="font-mono text-xs text-[#3F4632] tracking-widest uppercase mb-2">
                // ABOUT THE ACADEMY
              </div>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#181B15] font-display">
                WHO WE ARE & OUR MISSION
              </h2>
            </div>
            <p className="text-sm font-mono text-[#5E6553] max-w-md mt-3 md:mt-0 leading-relaxed uppercase">
              A community-run organization based in Lucknow, preparing youth for the armed forces and fostering self-reliance.
            </p>
          </div>

          {/* President's Message */}
          {president && (
            <div className="bg-[#3F4632] text-white p-8 sm:p-10 tactical-cut-br shadow-2xl mb-12 border-l-4 border-[#C98E2A] grid md:grid-cols-[auto_1fr] gap-8 items-center">
              <div className="w-24 h-24 bg-[#1E2318] text-[#C98E2A] flex items-center justify-center text-3xl font-mono font-bold tactical-cut-br border border-[#586248] shrink-0">
                {president.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
              </div>
              <div>
                <div className="font-mono text-xs text-[#C98E2A] tracking-widest uppercase mb-2">
                  // PRESIDENT'S MESSAGE
                </div>
                <p className="text-base sm:text-lg italic font-sans leading-relaxed text-[#CFD3C7] max-w-3xl">
                  "We started this academy with one belief — that discipline, skill and physical fitness can change a family's future in one generation. Every batch we run, every certificate we issue, is a step toward that vision."
                </p>
                <div className="mt-4 font-mono text-sm font-bold text-white uppercase">
                  {president.name} — <span className="text-[#C98E2A]">{president.role}</span>
                </div>
              </div>
            </div>
          )}

          {/* Management Team Grid */}
          <div className="space-y-6 mb-16">
            <div className="font-mono text-xs text-[#3F4632] tracking-widest uppercase">
              // ACADEMY LEADERSHIP
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {data.management.map((m) => (
                <div key={m.id} className="bg-[#E5E7DF] p-6 tactical-cut-br border border-[#BDC1B3] shadow-sm">
                  <div className="font-mono text-xs text-[#C98E2A] mb-1 font-bold">LEAD // {m.id}</div>
                  <h3 className="text-xl font-bold uppercase font-display text-[#181B15] mb-1">{m.name}</h3>
                  <div className="text-xs font-mono text-[#3F4632] font-semibold mb-3">{m.role}</div>
                  <p className="text-xs font-sans text-[#5E6553] leading-relaxed">{m.bio}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Objectives */}
          <div className="bg-[#1E2318] text-white p-8 tactical-cut-br border-t-4 border-[#3F4632]">
            <div className="font-mono text-xs text-[#C98E2A] tracking-widest uppercase mb-4">
              // CORE OBJECTIVES & VALUES
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {data.objectives.map((obj, i) => (
                <div key={i} className="bg-[#3F4632]/80 border-l-4 border-[#C98E2A] p-4 text-xs font-mono leading-relaxed text-[#CFD3C7] tactical-cut-br">
                  <span className="text-[#C98E2A] font-bold mr-2">[ 0{i + 1} ]</span>
                  {obj}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------------- */}
      {/* 3. BRANCHES & WINGS OVERVIEW (id="activities") */}
      {/* ------------------------------------------------------------------------- */}
      <section id="activities" className="py-20 border-b border-[#BDC1B3] bg-[#E5E7DF] scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="font-mono text-xs text-[#3F4632] tracking-widest uppercase mb-2">
                // ACTIVITIES SERVING
              </div>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#181B15] font-display">
                BRANCHES OF THE ACADEMY
              </h2>
            </div>
            <p className="text-sm font-mono text-[#5E6553] max-w-md mt-3 md:mt-0 leading-relaxed uppercase">
              Three specialized departments providing physical, vocational, and athletic training to local youth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Army Training */}
            <div className="bg-[#3F4632] text-white p-7 tactical-cut-br shadow-xl border-t-4 border-[#C98E2A] flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-[#CFD3C7] mb-4">
                  <span>WING // 01</span>
                  <span className="px-2 py-0.5 bg-[#1E2318] text-[#C98E2A] text-[10px] uppercase font-bold">DEFENCE</span>
                </div>
                <h3 className="text-2xl font-extrabold uppercase mb-3 tracking-wide text-white font-display">
                  ARMY TRAINING
                </h3>
                <p className="text-xs text-[#CFD3C7] leading-relaxed mb-6 font-sans">
                  Rigorous physical endurance sessions, 1.6 km speed runs, mock written examinations, and SSB interview guidance for Indian Armed Forces aspirants.
                </p>
              </div>

              <div>
                <div className="bg-[#1E2318] p-3 text-xs font-mono mb-5 border border-[#586248]">
                  <div className="text-[#C98E2A]">KEY FOCUS:</div>
                  <div className="text-white">Physical Standards & Written Tests</div>
                </div>
                <ScrollButton
                  targetId="army-training"
                  className="w-full py-2.5 bg-[#586248] hover:bg-[#1E2318] text-white text-center font-mono text-xs font-bold uppercase tracking-wider transition-colors tactical-cut-br"
                >
                  VIEW WING DETAILS ↓
                </ScrollButton>
              </div>
            </div>

            {/* Card 2: Women Empowerment */}
            <div className="bg-[#586248] text-white p-7 tactical-cut-br shadow-xl border-t-4 border-[#3F4632] flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-[#CFD3C7] mb-4">
                  <span>WING // 02</span>
                  <span className="px-2 py-0.5 bg-[#1E2318] text-white text-[10px] uppercase font-bold">VOCATIONAL</span>
                </div>
                <h3 className="text-2xl font-extrabold uppercase mb-3 tracking-wide text-white font-display">
                  WOMEN EMPOWERMENT
                </h3>
                <p className="text-xs text-[#CFD3C7] leading-relaxed mb-6 font-sans">
                  Market-ready skill development batches in tailoring, stitching, beautician training, and food processing to enable financial independence.
                </p>
              </div>

              <div>
                <div className="bg-[#3F4632] p-3 text-xs font-mono mb-5 border border-[#738062]">
                  <div className="text-[#C98E2A]">KEY FOCUS:</div>
                  <div className="text-white">Self-Reliance & Skill Certificates</div>
                </div>
                <ScrollButton
                  targetId="women-empowerment"
                  className="w-full py-2.5 bg-[#3F4632] hover:bg-[#1E2318] text-white text-center font-mono text-xs font-bold uppercase tracking-wider transition-colors tactical-cut-br"
                >
                  VIEW WING DETAILS ↓
                </ScrollButton>
              </div>
            </div>

            {/* Card 3: Sports & Fitness */}
            <div className="bg-[#1E2318] text-[#FFFFFF] p-7 tactical-cut-br shadow-xl border-t-4 border-[#738062] flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-[#CFD3C7] mb-4">
                  <span>WING // 03</span>
                  <span className="px-2 py-0.5 bg-[#3F4632] text-[#C98E2A] text-[10px] uppercase font-bold">ATHLETICS</span>
                </div>
                <h3 className="text-2xl font-extrabold uppercase mb-3 tracking-wide text-white font-display">
                  SPORTS & FITNESS
                </h3>
                <p className="text-xs text-[#CFD3C7] leading-relaxed mb-6 font-sans">
                  Professional coaching, district-level recruitment trials, marathon training, and community wellness drives for youth and athletes.
                </p>
              </div>

              <div>
                <div className="bg-[#3F4632] p-3 text-xs font-mono mb-5 border border-[#586248]">
                  <div className="text-[#C98E2A]">KEY FOCUS:</div>
                  <div className="text-white">District Trials & Athletic Excellence</div>
                </div>
                <ScrollButton
                  targetId="sports-fitness"
                  className="w-full py-2.5 bg-[#738062] hover:bg-[#3F4632] text-white text-center font-mono text-xs font-bold uppercase tracking-wider transition-colors tactical-cut-br"
                >
                  VIEW WING DETAILS ↓
                </ScrollButton>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------------- */}
      {/* 4. DETAILED WING 01: ARMY TRAINING (id="army-training") */}
      {/* ------------------------------------------------------------------------- */}
      <section id="army-training" className="py-20 bg-[#F4F5F1] border-b border-[#BDC1B3] scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#3F4632] text-[#C98E2A] font-mono text-xs uppercase tracking-widest mb-3 tactical-cut-br border border-[#586248]">
            <span>// WING 01</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-[#181B15] mb-4 font-display">
            ARMY TRAINING WING
          </h2>
          <p className="text-sm font-mono text-[#5E6553] max-w-2xl uppercase leading-relaxed mb-10">
            Physical training, mock written exams and interview preparation for candidates aiming for Indian Army, Navy, Air Force and paramilitary recruitment.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Physical Training (PT)", body: "Daily morning drills — running, push-ups, sit-ups and obstacle practice — built around official recruitment standards." },
              { title: "Written Exam Coaching", body: "General knowledge, reasoning and mathematics classes aligned to Army/Navy/Air Force entrance papers." },
              { title: "Interview & SSB Prep", body: "Mock interviews, group discussions and personality development sessions led by retired defence personnel." },
            ].map((c) => (
              <div key={c.title} className="border-l-4 border-[#C98E2A] p-6 bg-[#E5E7DF] tactical-cut-br shadow-sm">
                <h3 className="text-xl font-bold uppercase font-display text-[#181B15] mb-2">{c.title}</h3>
                <p className="text-xs font-sans text-[#5E6553] leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#1E2318] text-white p-8 tactical-cut-br grid sm:grid-cols-3 gap-6 text-center border-t-4 border-[#3F4632]">
            <div>
              <div className="text-4xl font-mono font-extrabold text-[#C98E2A]">
                <StatCounter end={340} suffix="+" />
              </div>
              <p className="text-xs font-mono text-[#CFD3C7] mt-1 uppercase">YOUTH TRAINED</p>
            </div>
            <div>
              <div className="text-4xl font-mono font-extrabold text-white">
                <StatCounter end={58} />
              </div>
              <p className="text-xs font-mono text-[#CFD3C7] mt-1 uppercase">RECRUITED SO FAR</p>
            </div>
            <div>
              <div className="text-4xl font-mono font-extrabold text-[#C98E2A]">12 WEEKS</div>
              <p className="text-xs font-mono text-[#CFD3C7] mt-1 uppercase">PER TRAINING BATCH</p>
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------------- */}
      {/* 5. DETAILED WING 02: WOMEN EMPOWERMENT (id="women-empowerment") */}
      {/* ------------------------------------------------------------------------- */}
      <section id="women-empowerment" className="py-20 bg-[#E5E7DF] border-b border-[#BDC1B3] scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#586248] text-white font-mono text-xs uppercase tracking-widest mb-3 tactical-cut-br border border-[#738062]">
            <span>// WING 02</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-[#181B15] mb-4 font-display">
            WOMEN EMPOWERMENT WING
          </h2>
          <p className="text-sm font-mono text-[#5E6553] max-w-2xl uppercase leading-relaxed mb-10">
            Vocational training batches in tailoring, beautician courses and handicrafts aimed at financial independence and self-reliance for local women.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Tailoring & Stitching", body: "Practical training in cutting, pattern making and machine operation for everyday garments." },
              { title: "Beautician Course", body: "Skilling in skin care, hair styling, bridal makeup and salon management for self-employment." },
              { title: "Self-Defence & Health", body: "Basic martial-arts self-defence sessions paired with personal hygiene and health awareness." },
            ].map((c) => (
              <div key={c.title} className="border-l-4 border-[#3F4632] p-6 bg-[#F4F5F1] tactical-cut-br shadow-sm">
                <h3 className="text-xl font-bold uppercase font-display text-[#181B15] mb-2">{c.title}</h3>
                <p className="text-xs font-sans text-[#5E6553] leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#3F4632] text-white p-8 tactical-cut-br grid sm:grid-cols-3 gap-6 text-center border-t-4 border-[#C98E2A]">
            <div>
              <div className="text-4xl font-mono font-extrabold text-white">
                <StatCounter end={220} suffix="+" />
              </div>
              <p className="text-xs font-mono text-[#CFD3C7] mt-1 uppercase">WOMEN SKILLED</p>
            </div>
            <div>
              <div className="text-4xl font-mono font-extrabold text-[#C98E2A]">
                <StatCounter end={45} suffix="+" />
              </div>
              <p className="text-xs font-mono text-[#CFD3C7] mt-1 uppercase">MICRO-ENTERPRISES STARTED</p>
            </div>
            <div>
              <div className="text-4xl font-mono font-extrabold text-white">8 WEEKS</div>
              <p className="text-xs font-mono text-[#CFD3C7] mt-1 uppercase">COURSE DURATION</p>
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------------- */}
      {/* 6. DETAILED WING 03: SPORTS & FITNESS (id="sports-fitness") */}
      {/* ------------------------------------------------------------------------- */}
      <section id="sports-fitness" className="py-20 bg-[#F4F5F1] border-b border-[#BDC1B3] scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1E2318] text-[#C98E2A] font-mono text-xs uppercase tracking-widest mb-3 tactical-cut-br border border-[#3F4632]">
            <span>// WING 03</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-[#181B15] mb-4 font-display">
            SPORTS & FITNESS WING
          </h2>
          <p className="text-sm font-mono text-[#5E6553] max-w-2xl uppercase leading-relaxed mb-10">
            Athletic coaching, district-level recruitment trials, marathon preparation, and community fitness drives for youth.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Athletic Coaching", body: "100m/400m sprint training, long jump and high jump techniques led by certified physical trainers." },
              { title: "District Trial Events", body: "Organizing competitive trial runs and physical assessment camps for state and district sports trials." },
              { title: "Community Fitness", body: "Open morning workout sessions and marathon fitness drives encouraging a healthy lifestyle." },
            ].map((c) => (
              <div key={c.title} className="border-l-4 border-[#738062] p-6 bg-[#E5E7DF] tactical-cut-br shadow-sm">
                <h3 className="text-xl font-bold uppercase font-display text-[#181B15] mb-2">{c.title}</h3>
                <p className="text-xs font-sans text-[#5E6553] leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#1E2318] text-white p-8 tactical-cut-br grid sm:grid-cols-3 gap-6 text-center border-t-4 border-[#738062]">
            <div>
              <div className="text-4xl font-mono font-extrabold text-[#C98E2A]">
                <StatCounter end={500} suffix="+" />
              </div>
              <p className="text-xs font-mono text-[#CFD3C7] mt-1 uppercase">ATHLETES COACHED</p>
            </div>
            <div>
              <div className="text-4xl font-mono font-extrabold text-white">
                <StatCounter end={18} />
              </div>
              <p className="text-xs font-mono text-[#CFD3C7] mt-1 uppercase">DISTRICT MEDALS WON</p>
            </div>
            <div>
              <div className="text-4xl font-mono font-extrabold text-[#C98E2A]">YEAR-ROUND</div>
              <p className="text-xs font-mono text-[#CFD3C7] mt-1 uppercase">ACTIVE COACHING</p>
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------------- */}
      {/* 7. PHOTO GALLERY SECTION (id="gallery") */}
      {/* ------------------------------------------------------------------------- */}
      <GallerySection />

      {/* ------------------------------------------------------------------------- */}
      {/* 8. EVENTS SECTION (id="events") */}
      {/* ------------------------------------------------------------------------- */}
      <section id="events" className="py-20 bg-[#F4F5F1] border-b border-[#BDC1B3] scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="font-mono text-xs text-[#3F4632] tracking-widest uppercase mb-2">
                // UPCOMING EVENTS & TRIALS
              </div>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#181B15] font-display">
                SCHEDULED ACTIVITIES
              </h2>
            </div>
            <p className="text-sm font-mono text-[#5E6553] max-w-md mt-3 md:mt-0 uppercase">
              Join upcoming physical fitness trials, written exam batches, and community drives.
            </p>
          </div>

          <div className="space-y-4">
            {upcomingEvents.map((e) => (
              <div key={e.id} className="bg-[#E5E7DF] p-6 tactical-cut-br border border-[#BDC1B3] shadow-sm flex flex-col sm:flex-row items-start gap-6">
                <div className="bg-[#3F4632] text-white p-4 text-center font-mono shrink-0 tactical-cut-br w-20 border-l-4 border-[#C98E2A]">
                  <div className="text-3xl font-extrabold text-[#C98E2A] leading-none">{new Date(e.date).getDate()}</div>
                  <div className="text-[11px] uppercase mt-1 text-[#CFD3C7]">
                    {new Date(e.date).toLocaleString("default", { month: "short", year: "numeric" })}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-[#181B15] uppercase text-lg font-mono mb-1">{e.title}</h3>
                  <div className="text-xs font-mono text-[#C98E2A] font-bold mb-2">📍 LOCATION: {e.location}</div>
                  <p className="text-xs text-[#5E6553] leading-relaxed font-sans max-w-3xl">{e.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------------- */}
      {/* 9. NOTICES & ANNOUNCEMENTS (id="notices") */}
      {/* ------------------------------------------------------------------------- */}
      <section id="notices" className="py-20 bg-[#E5E7DF] border-b border-[#BDC1B3] scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="font-mono text-xs text-[#3F4632] tracking-widest uppercase mb-1">
                // ANNOUNCEMENTS
              </div>
              <h2 className="text-2xl sm:text-4xl font-black uppercase text-[#181B15] font-display">
                LATEST NOTICES & BULLETINS
              </h2>
            </div>
            <span className="font-mono text-xs text-[#3F4632] hidden sm:inline-block">[ ACTIVE BOARD ]</span>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {recentActivity.map((n) => (
              <div key={n.id} className="bg-[#F4F5F1] p-6 tactical-cut-br border border-[#BDC1B3] shadow-sm">
                <div className="flex items-center justify-between font-mono text-xs text-[#5E6553] mb-3">
                  <span className="px-2 py-0.5 bg-[#3F4632] text-white font-bold">NOTICE // {n.id}</span>
                  <span>{n.date}</span>
                </div>
                <h3 className="text-base font-bold text-[#181B15] uppercase mb-2 font-mono">{n.title}</h3>
                <p className="text-xs text-[#5E6553] leading-relaxed font-sans">{n.body}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------------- */}
      {/* 10. DONORS ROLL SECTION (id="donors") */}
      {/* ------------------------------------------------------------------------- */}
      <section id="donors" className="py-20 bg-[#F4F5F1] border-b border-[#BDC1B3] scroll-mt-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          
          <div className="text-center mb-12">
            <div className="font-mono text-xs text-[#C98E2A] tracking-widest uppercase mb-2">
              // TRANSPARENCY & ROLL OF HONOR
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#181B15] font-display">
              THANK YOU TO OUR DONORS
            </h2>
            <p className="text-xs sm:text-sm font-mono text-[#5E6553] max-w-xl mx-auto mt-2 uppercase">
              Every contribution supports training kits, physical equipment, and skill certifications.
            </p>
          </div>

          <div className="bg-[#E5E7DF] tactical-cut-br overflow-hidden border border-[#BDC1B3] shadow-lg mb-8">
            <table className="w-full text-xs font-mono">
              <thead className="bg-[#3F4632] text-white">
                <tr>
                  <th className="text-left px-6 py-3.5 uppercase font-bold tracking-wider">DONOR NAME</th>
                  <th className="text-left px-6 py-3.5 uppercase font-bold tracking-wider">CONTRIBUTION</th>
                  <th className="text-left px-6 py-3.5 uppercase font-bold tracking-wider">DATE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#BDC1B3]">
                {sortedDonors.map((d, i) => (
                  <tr key={d.id} className={i % 2 ? "bg-[#F4F5F1]" : "bg-[#E5E7DF]"}>
                    <td className="px-6 py-4 font-bold text-[#181B15]">{d.name}</td>
                    <td className="px-6 py-4 text-[#C98E2A] font-bold">₹{d.amount.toLocaleString("en-IN")}</td>
                    <td className="px-6 py-4 text-[#5E6553]">{d.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center">
            <Link href="/donate" className="px-8 py-3.5 bg-[#3F4632] text-[#FFFFFF] font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#1E2318] transition-colors tactical-cut-br inline-block shadow-md">
              BECOME A DONOR →
            </Link>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------------- */}
      {/* 11. CONTACT & HEADQUARTERS SECTION (id="contact") */}
      {/* ------------------------------------------------------------------------- */}
      <section id="contact" className="py-20 bg-[#E5E7DF] scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          
          <div className="mb-12">
            <div className="font-mono text-xs text-[#3F4632] tracking-widest uppercase mb-2">
              // REACH OUT TO US
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#181B15] font-display">
              GET IN TOUCH & LOCATION
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Interactive Contact Form (Client Component) */}
            <ContactSection />

            {/* Headquarters & Map */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-[#3F4632] text-white p-6 tactical-cut-br shadow-md border-l-4 border-[#C98E2A]">
                <h3 className="text-lg font-bold uppercase font-mono mb-3 text-[#C98E2A]">HEADQUARTERS CONTACT</h3>
                <ul className="space-y-2.5 font-mono text-xs text-[#CFD3C7]">
                  <li>📍 LUCKNOW, UTTAR PRADESH, INDIA</li>
                  <li>📞 +91 97976 33077 (CALL / WHATSAPP)</li>
                  <li>✉️ RAGHUWANSHIASHOK34@GMAIL.COM</li>
                  <li>⏰ 05:30 AM - 07:00 PM IST</li>
                </ul>
              </div>

              {/* Map Embed */}
              <div className="aspect-video w-full tactical-cut-br overflow-hidden border-2 border-[#3F4632] shadow-md">
                <iframe
                  title="Academy location map"
                  className="w-full h-full"
                  loading="lazy"
                  src="https://www.google.com/maps?q=Lucknow,Uttar+Pradesh&output=embed"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
