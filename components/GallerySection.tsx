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
    caption: "Youth Defence Uniform Cadets Certificate & Medal Honor Ceremony (Matru Bhumi Seva Samman)",
    category: "Army Training",
    src: "/images/gallery-army.png",
    batchDate: "HONORS 2026 // MATRU BHUMI SEVA SAMMAN",
    location: "RDA Betul Training & Honor Center",
  },
  {
    id: "g2",
    caption: "Women Cadets & Athletes National Flag Tricolor Honor Ceremony",
    category: "Women Empowerment",
    src: "/images/gallery-women.png",
    batchDate: "HONORS 2026 // EMPOWERMENT",
    location: "Chhatrapati Shivaji Maharaj Jayanti Grounds, Betul",
  },
  {
    id: "g3",
    caption: "Athletic Sports Cadets Group Conditioning & Pavilion Honors Event",
    category: "Sports & Fitness",
    src: "/images/gallery-sports.png",
    batchDate: "TRIALS 2026 // ATHLETIC CONDITIONING",
    location: "RDA Outdoor Stadium & Pavilion Grounds, Betul",
  },
  {
    id: "g4",
    caption: "Obstacle Course & Push-up Drill Session",
    category: "Army Training",
    src: "/images/hero-cadet.png",
    batchDate: "BATCH 2026 // DRILL 01",
    location: "Obstacle Ground, Lucknow",
  },
  {
    id: "g5",
    caption: "Women Self-Reliance & Athletic Achievement Awards",
    category: "Women Empowerment",
    src: "/images/gallery-women.png",
    batchDate: "BATCH 2026 // SKILL 01",
    location: "RDA Betul Event Center",
  },
  {
    id: "g6",
    caption: "High Jump, Endurance Sprint & Team Physical Coaching Camp",
    category: "Sports & Fitness",
    src: "/images/gallery-sports.png",
    batchDate: "TRIALS 2026 // ATHLETIC TEAM",
    location: "District Pavilion & Sports Stadium",
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
    <section id="gallery" className="py-20 bg-[#E5E7DF] border-b border-[#BDC1B3] scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="font-mono text-xs text-[#3F4632] tracking-widest uppercase mb-2">
              // PHOTO GALLERY & DOCUMENTATION
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#181B15] font-display">
              MOMENTS FROM THE GROUND
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#5E6553] max-w-md mt-3 md:mt-0 uppercase font-semibold">
            Visual records of morning drills, vocational batches, and athletic selection camps.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 border-b border-[#BDC1B3] pb-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-mono font-bold tracking-wider uppercase transition-all tactical-cut-br ${activeCategory === cat
                  ? "bg-[#3F4632] text-white shadow-md"
                  : "bg-[#F4F5F1] text-[#181B15] border border-[#BDC1B3] hover:bg-[#3F4632]/10"
                }`}
            >
              {cat === "ALL" ? "// SHOW ALL" : cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="bg-[#F4F5F1] tactical-cut-br overflow-hidden border border-[#BDC1B3] shadow-md group cursor-pointer hover:border-[#3F4632] hover:shadow-xl transition-all relative"
            >
              {/* Image Thumbnail with Overlay */}
              <div className="relative h-60 w-full overflow-hidden bg-[#1E2318]">
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181B15]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Category Pill Tag */}
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#3F4632]/95 backdrop-blur-md text-[#C98E2A] font-mono text-[10px] font-bold uppercase tracking-widest tactical-cut-br border border-[#586248]">
                  {item.category}
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="p-4 bg-[#F4F5F1]">
                <div className="text-[10px] font-mono text-[#C98E2A] font-bold mb-1">
                  {item.batchDate}
                </div>
                <h3 className="text-sm font-bold uppercase font-mono text-[#181B15] group-hover:text-[#3F4632] transition-colors leading-snug">
                  {item.caption}
                </h3>
                <div className="flex items-center justify-between mt-3 text-[11px] font-mono text-[#5E6553] pt-2 border-t border-[#BDC1B3]/60">
                  <span>📍 {item.location}</span>
                  <span className="text-[#3F4632] font-bold">[ VIEW ]</span>
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
          className="fixed inset-0 z-50 bg-[#181B15]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#F4F5F1] max-w-4xl w-full border-2 border-[#3F4632] tactical-cut-br shadow-2xl overflow-hidden relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-[#3F4632] text-white flex items-center justify-center font-mono font-bold text-lg hover:bg-[#C98E2A] hover:text-[#181B15] transition-colors tactical-cut-br shadow-lg"
            >
              ✕
            </button>

            {/* Expanded Photo */}
            <div className="relative h-[60vh] min-h-[320px] w-full bg-[#1E2318]">
              <Image
                src={activeItem.src}
                alt={activeItem.caption}
                fill
                className="object-contain object-center"
              />
            </div>

            {/* Modal Photo Details */}
            <div className="p-6 bg-[#3F4632] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t-2 border-[#C98E2A]">
              <div>
                <div className="font-mono text-xs text-[#C98E2A] font-bold uppercase tracking-wider mb-1">
                  // {activeItem.category} — {activeItem.batchDate}
                </div>
                <h3 className="text-xl font-bold uppercase font-display text-white">
                  {activeItem.caption}
                </h3>
                <p className="text-xs font-mono text-[#CFD3C7] mt-1">📍 {activeItem.location}</p>
              </div>

              <button
                onClick={() => setActiveItem(null)}
                className="px-6 py-2.5 bg-[#C98E2A] text-[#181B15] font-mono text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors tactical-cut-br shrink-0"
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
