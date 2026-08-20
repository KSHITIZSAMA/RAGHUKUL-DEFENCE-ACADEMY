"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ArchivePhoto {
  id: string;
  caption: string;
  category: string;
  src: string;
  batchDate: string;
  location: string;
  tag: string;
}

const ALL_PHOTOS: ArchivePhoto[] = [
  {
    id: "p1",
    caption: "Youth Defence Uniform Cadets Certificate & Medal Honor Ceremony (Matru Bhumi Seva Samman)",
    category: "Army Training",
    src: "/images/real-army-certificates.jpg",
    batchDate: "HONORS 2026 // MATRU BHUMI SEVA SAMMAN",
    location: "RDA Betul Training & Honor Center",
    tag: "AWARDS & SELECTIONS",
  },
  {
    id: "p2",
    caption: "Women Cadets & Athletes National Flag Tricolor Honor Ceremony",
    category: "Women Empowerment",
    src: "/images/real-women-tricolor.jpg",
    batchDate: "HONORS 2026 // EMPOWERMENT",
    location: "Chhatrapati Shivaji Maharaj Jayanti Grounds, Betul",
    tag: "WOMEN EMPOWERMENT",
  },
  {
    id: "p3",
    caption: "Athletic Sports Cadets Group Conditioning & Pavilion Honors Event",
    category: "Sports & Fitness",
    src: "/images/real-sports-pavilion.jpg",
    batchDate: "TRIALS 2026 // ATHLETIC CONDITIONING",
    location: "RDA Outdoor Stadium & Pavilion Grounds, Betul",
    tag: "SPORTS ATHLETICS",
  },
  {
    id: "p4",
    caption: "Army Cadets Track Briefing & Physical Obstacle Drill Training",
    category: "Army Training",
    src: "/images/real-army-obstacle.jpg",
    batchDate: "BATCH 2026 // DRILL 01 BRIEFING",
    location: "RDA Track & Field Drill Ground, Betul",
    tag: "PHYSICAL DRILLS",
  },
  {
    id: "p5",
    caption: "Youth Tree Plantation Drive & Environmental Awareness Activity",
    category: "Environment & Plantation",
    src: "/images/real-plantation.jpg",
    batchDate: "DRIVE 2026 // TREE PLANTATION",
    location: "District Sweep Complex Grounds, Betul",
    tag: "ENVIRONMENT DRIVE",
  },
  {
    id: "p6",
    caption: "Fauji Cup BPL Cricket Tournament Man of the Match & Trophy Presentation",
    category: "Sports & Fitness",
    src: "/images/real-fauji-cup.jpg",
    batchDate: "TOURNAMENT 2026 // FAUJI CUP BPL",
    location: "Betul Premier League Sports Arena",
    tag: "TOURNAMENT AWARDS",
  },
  {
    id: "p7",
    caption: "Annual Foundation Celebration & Cultural Turbans Honor Event",
    category: "Honor & Ceremonies",
    src: "/images/real-turban-event.jpg",
    batchDate: "EVENT 2026 // CELEBRATION",
    location: "Betul Academy Ground",
    tag: "CULTURAL CELEBRATION",
  },
  {
    id: "p8",
    caption: "NGO President Keynote Address at Youth Sports & Physical Fitness Conclave",
    category: "Honor & Ceremonies",
    src: "/images/real-keynote-address.jpg",
    batchDate: "CONCLAVE 2026 // KEYNOTE",
    location: "R.A. Sports Stadium",
    tag: "LEADERSHIP ADDRESS",
  },
];

const CATEGORIES = [
  "ALL ARCHIVE PHOTOS",
  "Army Training",
  "Women Empowerment",
  "Sports & Fitness",
  "Environment & Plantation",
  "Honor & Ceremonies",
];

export default function GalleryArchivePage() {
  const [activeCategory, setActiveCategory] = useState("ALL ARCHIVE PHOTOS");
  const [activeItem, setActiveItem] = useState<ArchivePhoto | null>(null);

  const filteredPhotos =
    activeCategory === "ALL ARCHIVE PHOTOS"
      ? ALL_PHOTOS
      : ALL_PHOTOS.filter((photo) => photo.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#161912] text-white selection:bg-[#D97706] selection:text-black pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#738062] hover:text-[#D97706] transition-colors uppercase"
          >
            <span>←</span> Back to Foundation Home
          </Link>
        </div>

        {/* Hero Header */}
        <div className="relative border-l-4 border-[#D97706] pl-6 md:pl-10 py-4 mb-14 bg-[#163B66]/20 rounded-r-2xl border-t border-b border-r border-[#205493]/40">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D97706]/20 border border-[#D97706]/50 text-[#FF9933] font-mono text-[11px] font-bold tracking-widest uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-[#D97706] animate-ping" />
            Complete Photographic Archive
          </div>
          <h1 className="text-3xl md:text-5xl font-black font-display tracking-tight text-white mb-3 uppercase">
            Mere Vatan Photo & Activity Archive
          </h1>
          <p className="text-[#CFD3C7] max-w-3xl text-sm md:text-base leading-relaxed font-sans">
            Explore the complete photographic record of our ground drills, athletic tournaments, tree plantation drives, women empowerment honors, and leadership conclaves.
          </p>

          {/* Quick Counter Badges */}
          <div className="mt-8 flex flex-wrap gap-4 text-xs font-mono">
            <div className="bg-[#0D223A] border border-[#205493] px-4 py-2 rounded-xl flex items-center gap-2">
              <span className="text-[#FF9933]">📸</span>
              <span className="text-gray-300">Total Ground Photos:</span>
              <span className="text-white font-bold">{ALL_PHOTOS.length} Records</span>
            </div>
            <div className="bg-[#0D223A] border border-[#205493] px-4 py-2 rounded-xl flex items-center gap-2">
              <span className="text-[#10B981]">✔</span>
              <span className="text-gray-300">Verification:</span>
              <span className="text-white font-bold">100% Real Ground Events</span>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-10 border-b border-[#205493]/50 pb-5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-xs font-mono font-bold tracking-wider uppercase transition-all rounded-xl ${
                activeCategory === cat
                  ? "bg-[#D97706] text-white shadow-lg border-b-2 border-white"
                  : "bg-[#0D223A] text-[#CFD3C7] border border-[#205493] hover:bg-[#163B66] hover:text-white"
              }`}
            >
              {cat === "ALL ARCHIVE PHOTOS" ? "• SHOW ALL ARCHIVE" : cat}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActiveItem(photo)}
              className="bg-[#0D223A] rounded-2xl overflow-hidden border border-[#205493] shadow-md group cursor-pointer hover:border-[#D97706] hover:shadow-2xl transition-all relative flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden bg-[#071526]">
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071526]/80 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />
                
                {/* Category Tag */}
                <div className="absolute top-3 left-3 px-3 py-1 bg-[#163B66]/90 backdrop-blur-md text-[#FF9933] font-mono text-[10px] font-bold uppercase tracking-widest rounded-full border border-[#D97706]/40 shadow-md">
                  {photo.category}
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="p-5 bg-[#0D223A] flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-mono text-[#D97706] font-bold mb-1.5">
                    {photo.batchDate}
                  </div>
                  <h3 className="text-sm font-bold uppercase font-mono text-white group-hover:text-[#FF9933] transition-colors leading-snug">
                    {photo.caption}
                  </h3>
                </div>
                <div className="flex items-center justify-between mt-4 text-[11px] font-mono text-[#CFD3C7] pt-3 border-t border-[#205493]/60">
                  <span>📍 {photo.location}</span>
                  <span className="text-[#FF9933] font-bold hover:underline">[ PREVIEW ]</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Preview Modal */}
      {activeItem && (
        <div
          onClick={() => setActiveItem(null)}
          className="fixed inset-0 z-50 bg-[#071526]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#0D223A] max-w-4xl w-full border-2 border-[#D97706] rounded-2xl shadow-2xl overflow-hidden relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-[#D97706] text-white flex items-center justify-center font-mono font-bold text-lg hover:bg-[#B45309] transition-colors rounded-xl shadow-lg"
            >
              ✕
            </button>

            {/* Expanded Photo */}
            <div className="relative h-[65vh] min-h-[350px] w-full bg-[#071526]">
              <Image
                src={activeItem.src}
                alt={activeItem.caption}
                fill
                className="object-contain object-center"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-[#163B66] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t-2 border-[#D97706]">
              <div>
                <div className="font-mono text-xs text-[#FF9933] font-bold uppercase tracking-wider mb-1">
                  • {activeItem.category} — {activeItem.batchDate}
                </div>
                <h3 className="text-xl font-bold uppercase font-display text-white">
                  {activeItem.caption}
                </h3>
                <p className="text-xs font-mono text-[#E2E8F0] mt-1">📍 {activeItem.location}</p>
              </div>

              <button
                onClick={() => setActiveItem(null)}
                className="px-6 py-2.5 bg-[#D97706] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#B45309] transition-colors rounded-xl shrink-0 shadow-md"
              >
                CLOSE PREVIEW
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
