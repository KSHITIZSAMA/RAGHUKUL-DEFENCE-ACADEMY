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
      {/* ------------------------------------------------------------------------- */}
      {/* 1. HERO SECTION (id="hero") — Modern NGO Prestige Hero Layout */}
      {/* ------------------------------------------------------------------------- */}
      <section id="hero" className="relative bg-gradient-to-b from-[#F4F6F9] via-[#E2E8F0] to-[#F4F6F9] text-[#0F172A] overflow-hidden border-b-2 border-[#163B66]/20 py-10 lg:py-16 scroll-mt-24">
        
        {/* Background Ambient Radiance & Tri-Color Strip */}
        <div className="absolute top-0 inset-x-0 h-1.5 flex z-30">
          <span className="w-1/3 bg-[#FF9933]" />
          <span className="w-1/3 bg-[#163B66]" />
          <span className="w-1/3 bg-[#10B981]" />
        </div>
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#163B66]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#D97706]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          
          {/* Top Live Trust Pill */}
          <div className="mb-6 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FFFFFF] border border-[#163B66]/20 shadow-md">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#163B66] uppercase">
              REGISTERED NGO #12A/80G • GOVT DARPAN ID: RJ/2024/0488921
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Mission, Title & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Saffron Pill */}
              <div className="inline-block px-3.5 py-1 bg-[#D97706]/15 border border-[#D97706]/40 text-[#B45309] font-mono text-xs font-bold tracking-widest uppercase rounded-lg">
                🇮🇳 NATION FIRST • COMMUNITY ALWAYS
              </div>

              {/* High-Impact Dual Tone Heading */}
              <div className="space-y-1">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#163B66] leading-[1.05] font-display">
                  MERE VATAN
                </h1>
                <div className="text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-[#D97706] leading-tight font-display">
                  WELFARE FOUNDATION
                </div>
              </div>

              {/* Subtext */}
              <p className="text-sm sm:text-base font-body text-[#334155] tracking-wide max-w-2xl leading-relaxed font-medium">
                Dedicated to free physical defence entrance training, women self-reliance & vocational empowerment, youth sports excellence, and community environmental welfare across India.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/membership"
                  className="px-7 py-4 bg-[#D97706] text-white font-mono text-xs font-bold tracking-widest uppercase hover:bg-[#B45309] transition-all shadow-xl hover:shadow-2xl rounded-xl flex items-center gap-2 border-b-4 border-[#B45309] group"
                >
                  <span>JOIN AS VOLUNTEER / CADET</span>
                  <span className="text-[#FF9933] group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <Link
                  href="/donate"
                  className="px-7 py-4 bg-[#163B66] text-white font-mono text-xs font-bold tracking-widest uppercase hover:bg-[#0D223A] transition-all shadow-xl rounded-xl flex items-center gap-2 border-b-4 border-[#0D223A]"
                >
                  <span>❤ DONATE (80G TAX EXEMPT)</span>
                </Link>
                <ScrollButton
                  targetId="about"
                  className="px-6 py-4 bg-white border-2 border-[#163B66]/30 text-[#163B66] font-mono text-xs font-bold tracking-widest uppercase hover:bg-[#163B66] hover:text-white transition-all rounded-xl shadow-sm"
                >
                  OUR IMPACT ↓
                </ScrollButton>
              </div>

              {/* Impact Stat Banner */}
              <div className="mt-8 bg-[#163B66] text-white p-5 sm:p-6 shadow-2xl flex items-center gap-5 border-l-8 border-[#D97706] rounded-2xl border border-[#205493]/60 relative overflow-hidden">
                <div className="text-4xl sm:text-5xl font-mono font-extrabold text-[#FF9933] shrink-0">
                  <StatCounter end={98} suffix="+" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-[#FF9933] uppercase tracking-widest">
                    DEFENCE SELECTIONS & QUALIFIED CADETS
                  </div>
                  <div className="text-xs font-mono text-[#E2E8F0] leading-relaxed uppercase mt-0.5 font-medium">
                    Young men & women successfully recruited into Army, Police & Athletic Teams.
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Officer Frame Showcase */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-none">
                
                {/* Glow ring */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#163B66] via-[#D97706] to-[#10B981] opacity-30 blur-lg animate-pulse" />
                
                {/* Main Card */}
                <div className="relative bg-[#0D223A] border-4 border-[#163B66] rounded-3xl overflow-hidden shadow-2xl p-2.5">
                  <div className="relative h-[480px] sm:h-[540px] w-full rounded-2xl overflow-hidden bg-[#071526]">
                    <Image
                      src="/images/hero-officer.png"
                      alt="Mere Vatan Welfare Foundation Leadership & Defence Mentorship"
                      fill
                      priority
                      className="object-cover object-top filter contrast-105 brightness-100 transform hover:scale-105 transition-transform duration-700"
                    />

                    {/* Top Floating Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <div className="px-3.5 py-1.5 bg-[#163B66]/90 backdrop-blur-md border border-[#D97706]/60 text-white font-mono text-[10px] uppercase font-bold tracking-widest rounded-xl shadow-lg flex items-center gap-2">
                        <span className="text-[#FF9933]">🎖️</span>
                        <span>DEFENCE MENTORSHIP</span>
                      </div>
                    </div>

                    {/* Bottom Floating Card */}
                    <div className="absolute bottom-4 inset-x-4 z-20">
                      <div className="p-4 bg-[#163B66]/90 backdrop-blur-md border border-[#D97706]/50 rounded-xl text-white shadow-xl">
                        <div className="flex items-center justify-between font-mono text-[11px] font-bold text-[#FF9933] uppercase tracking-wider mb-1">
                          <span>FOUNDATION LEADERSHIP</span>
                          <span className="bg-[#D97706] text-white px-2 py-0.5 rounded text-[9px]">OFFICER MENTOR</span>
                        </div>
                        <p className="text-xs font-mono text-gray-200 leading-snug font-semibold">
                          Guiding youth towards national service, discipline, physical agility & moral integrity.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Bottom 4-Item Quick Trust Metrics Bar */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-white/80 backdrop-blur-sm border border-[#163B66]/15 rounded-2xl shadow-sm text-center">
              <div className="text-2xl font-black font-mono text-[#163B66]">98+</div>
              <div className="text-[11px] font-mono font-bold text-[#64748B] uppercase mt-0.5">Defence Selections</div>
            </div>
            <div className="p-4 bg-white/80 backdrop-blur-sm border border-[#163B66]/15 rounded-2xl shadow-sm text-center">
              <div className="text-2xl font-black font-mono text-[#D97706]">100%</div>
              <div className="text-[11px] font-mono font-bold text-[#64748B] uppercase mt-0.5">80G Tax Exempt</div>
            </div>
            <div className="p-4 bg-white/80 backdrop-blur-sm border border-[#163B66]/15 rounded-2xl shadow-sm text-center">
              <div className="text-2xl font-black font-mono text-[#10B981]">500+</div>
              <div className="text-[11px] font-mono font-bold text-[#64748B] uppercase mt-0.5">Trees Planted</div>
            </div>
            <div className="p-4 bg-white/80 backdrop-blur-sm border border-[#163B66]/15 rounded-2xl shadow-sm text-center">
              <div className="text-2xl font-black font-mono text-[#163B66]">340+</div>
              <div className="text-[11px] font-mono font-bold text-[#64748B] uppercase mt-0.5">Youth Empowered</div>
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
