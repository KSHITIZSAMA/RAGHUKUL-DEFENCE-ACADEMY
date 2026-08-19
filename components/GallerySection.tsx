"use client";

import { useState } from "react";
import Image from "next/image";

interface GalleryItem {
  id: string;
  caption: string;
  category: string;
  src: string;
  batchDate: string;
  location: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    caption: "Youth Defence Cadets Honor Ceremony & Matru Bhumi Seva Samman",
    category: "Army Training",
    src: "/images/gallery-cadet-certificates.jpg",
    batchDate: "BATCH 2026 // SELECTION HONORS",
    location: "RDA Betul Training Center",
  },
  {
    id: "g2",
    caption: "Annual Foundation Celebration & Cultural Turbans Honor Event",
    category: "Women Empowerment",
    src: "/images/gallery-turban-celebration.jpg",
    batchDate: "EVENT 2026 // CELEBRATION",
    location: "Betul Academy Ground",
  },
  {
    id: "g3",
    caption: "NGO Keynote Address at Youth Sports & Physical Fitness Conclave",
    category: "Sports & Fitness",
    src: "/images/gallery-stage-address.jpg",
    batchDate: "CONCLAVE 2026 // KEYNOTE",
    location: "R.A. Sports Stadium",
  },
  {
    id: "g4",
    caption: "Morning 1.6km Speed Endurance & Obstacle Physical Drill",
    category: "Army Training",
    src: "/images/gallery-army.png",
    batchDate: "BATCH 2026 // DRILL 04",
    location: "Academy Ground, Lucknow",
  },
  {
    id: "g5",
    caption: "Vocational Skill Training & Tailoring Self-Reliance Workshop",
    category: "Women Empowerment",
    src: "/images/gallery-women.png",
    batchDate: "BATCH 2026 // SKILL 02",
    location: "Women Skill Center, Lucknow",
  },
  {
    id: "g6",
    caption: "400m Athletic Sprint Recruitment Selection Trial Camp",
    category: "Sports & Fitness",
    src: "/images/gallery-sports.png",
    batchDate: "TRIALS 2026 // ATHLETICS",
    location: "District Athletics Ground",
  },
];

const CATEGORIES = ["ALL", "Army Training", "Women Empowerment", "Sports & Fitness"];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeCategory === "ALL"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-[#F4F6F9] border-b border-[#E2E8F0] scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="font-mono text-xs text-[#163B66] font-bold tracking-widest uppercase mb-2">
              • NGO PHOTO GALLERY & FIELD RECORDS
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#0F172A] font-display">
              MOMENTS FROM THE GROUND
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#64748B] max-w-md mt-3 md:mt-0 uppercase font-semibold">
            Real photographic records of cadet selection honors, cultural celebrations, and ground drills.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 border-b border-[#E2E8F0] pb-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-xs font-mono font-bold tracking-wider uppercase transition-all rounded-xl ${
                activeCategory === cat
                  ? "bg-[#163B66] text-white shadow-md border-b-2 border-[#D97706]"
                  : "bg-[#FFFFFF] text-[#0F172A] border border-[#CBD5E1] hover:bg-[#F1F5F9]"
              }`}
            >
              {cat === "ALL" ? "• SHOW ALL" : cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="bg-[#FFFFFF] rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm group cursor-pointer hover:border-[#163B66] hover:shadow-2xl transition-all relative flex flex-col justify-between"
            >
              {/* Image Thumbnail with Overlay */}
              <div className="relative h-64 w-full overflow-hidden bg-[#0D223A]">
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Category Pill Tag */}
                <div className="absolute top-3 left-3 px-3 py-1 bg-[#163B66]/90 backdrop-blur-md text-[#FF9933] font-mono text-[10px] font-bold uppercase tracking-widest rounded-full border border-[#D97706]/40 shadow-md">
                  {item.category}
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="p-5 bg-[#FFFFFF] flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-mono text-[#D97706] font-bold mb-1.5">
                    {item.batchDate}
                  </div>
                  <h3 className="text-sm font-bold uppercase font-mono text-[#0F172A] group-hover:text-[#163B66] transition-colors leading-snug">
                    {item.caption}
                  </h3>
                </div>
                <div className="flex items-center justify-between mt-4 text-[11px] font-mono text-[#64748B] pt-3 border-t border-[#E2E8F0]">
                  <span>📍 {item.location}</span>
                  <span className="text-[#163B66] font-bold hover:underline">[ VIEW ]</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Full-Screen Lightbox Modal */}
      {activeItem && (
        <div
          onClick={() => setActiveItem(null)}
          className="fixed inset-0 z-50 bg-[#0F172A]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#FFFFFF] max-w-4xl w-full border-2 border-[#163B66] rounded-2xl shadow-2xl overflow-hidden relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-[#163B66] text-white flex items-center justify-center font-mono font-bold text-lg hover:bg-[#D97706] transition-colors rounded-xl shadow-lg"
            >
              ✕
            </button>

            {/* Expanded Photo */}
            <div className="relative h-[60vh] min-h-[320px] w-full bg-[#0D223A]">
              <Image
                src={activeItem.src}
                alt={activeItem.caption}
                fill
                className="object-contain object-center"
              />
            </div>

            {/* Modal Photo Details */}
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
    </section>
  );
}
