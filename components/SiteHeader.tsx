"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

const ACTIVITIES = [
  { id: "army-training", href: "/#army-training", label: "Army Training", code: "ACT // 01", desc: "Physical PT, mock written exams & interview prep" },
  { id: "women-empowerment", href: "/#women-empowerment", label: "Women Empowerment", code: "ACT // 02", desc: "Tailoring, beautician & skill development" },
  { id: "sports-fitness", href: "/#sports-fitness", label: "Sports & Fitness", code: "ACT // 03", desc: "Coaching, trials & district fitness drives" },
];

const NAV_ITEMS = [
  { id: "about", href: "/#about", label: "About" },
  { id: "activities", href: "/#activities", label: "Wings" },
  { id: "gallery", href: "/#gallery", label: "Gallery" },
  { id: "events", href: "/#events", label: "Events" },
  { id: "donors", href: "/#donors", label: "Donors" },
  { id: "contact", href: "/#contact", label: "Contact" },
];

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileActivitiesOpen, setMobileActivitiesOpen] = useState(true);
  const [activeSection, setActiveSection] = useState<string>("hero");
  
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Active Scrollspy Intersection Observer
  useEffect(() => {
    if (pathname !== "/") return;

    const sectionIds = ["hero", "about", "activities", "army-training", "women-empowerment", "sports-fitness", "gallery", "events", "notices", "donors", "contact"];
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    sectionElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    const elem = document.getElementById(sectionId);
    if (elem) {
      e.preventDefault();
      const headerOffset = 90;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + (window.scrollY || window.pageYOffset) - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
    setDropdownOpen(false);
    setMobileOpen(false);
  };

  const isActivityActive = ["activities", "army-training", "women-empowerment", "sports-fitness"].includes(activeSection);

  return (
    <header className="sticky top-0 z-50 bg-[#E5E7DF]/95 backdrop-blur-md border-b border-[#BDC1B3]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo with Tactical Badge styling */}
          <Link
            href="/#hero"
            onClick={(e) => handleNavClick(e, "hero")}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-[#3F4632] text-white flex items-center justify-center font-mono font-bold text-lg tactical-cut-br shadow-sm group-hover:bg-[#1E2318] transition-colors">
              MV
            </div>
            <div className="flex flex-col">
              <div className="display text-lg sm:text-xl font-bold tracking-wider text-[#181B15] leading-none group-hover:text-[#3F4632] transition-colors font-display">
                MERE VATAN
              </div>
              <span className="font-mono text-[10px] tracking-[0.2em] text-[#5E6553] uppercase mt-0.5 font-bold">
                WELFARE FOUNDATION
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-mono font-semibold tracking-wider uppercase">
            <Link
              href="/#about"
              onClick={(e) => handleNavClick(e, "about")}
              className={`py-2 transition-colors relative ${
                activeSection === "about" ? "text-[#3F4632] font-extrabold" : "text-[#181B15] hover:text-[#3F4632]"
              }`}
            >
              ABOUT
              {activeSection === "about" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C98E2A]" />
              )}
            </Link>

            {/* Activities Serving Dropdown */}
            <div className="relative group" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                onMouseEnter={() => setDropdownOpen(true)}
                className={`flex items-center gap-1.5 py-2 transition-colors relative ${
                  isActivityActive ? "text-[#3F4632] font-extrabold" : "text-[#181B15] hover:text-[#3F4632]"
                }`}
                aria-expanded={dropdownOpen}
              >
                <span>ACTIVITIES</span>
                <span className="text-[10px] text-[#5E6553]">[▼]</span>
                {isActivityActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C98E2A]" />
                )}
              </button>

              {/* Dropdown Menu Box */}
              <div
                onMouseLeave={() => setDropdownOpen(false)}
                className={`absolute left-0 top-full pt-2 w-80 transition-all duration-200 ${
                  dropdownOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0"
                }`}
              >
                <div className="bg-[#F4F5F1] border-2 border-[#3F4632] tactical-cut-br shadow-2xl p-3 space-y-1.5">
                  <div className="flex items-center justify-between px-2 py-1 bg-[#3F4632] text-white font-mono text-[10px] uppercase tracking-widest mb-1 tactical-cut-br">
                    <span>ACTIVITIES SERVING</span>
                    <span>3 DEPARTMENTS</span>
                  </div>
                  {ACTIVITIES.map((act) => (
                    <Link
                      key={act.id}
                      href={act.href}
                      onClick={(e) => handleNavClick(e, act.id)}
                      className={`block px-3 py-2.5 rounded-none transition-colors border-l-2 ${
                        activeSection === act.id
                          ? "bg-[#3F4632]/10 border-[#C98E2A] text-[#3F4632] font-bold"
                          : "border-transparent hover:bg-[#3F4632]/10 hover:border-[#3F4632] text-[#181B15]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs uppercase font-mono">{act.label}</span>
                        <span className="text-[10px] text-[#5E6553] font-mono">{act.code}</span>
                      </div>
                      <div className="text-[11px] text-[#5E6553] mt-0.5 leading-snug font-sans">{act.desc}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {NAV_ITEMS.filter((i) => i.id !== "about" && i.id !== "activities").map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`py-2 transition-colors relative ${
                  activeSection === item.id ? "text-[#3F4632] font-extrabold" : "text-[#181B15] hover:text-[#3F4632]"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C98E2A]" />
                )}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/membership"
              className="text-xs font-mono font-bold tracking-wider uppercase px-4 py-2 border-2 border-[#3F4632] text-[#3F4632] hover:bg-[#3F4632] hover:text-white transition-colors tactical-cut-br"
            >
              JOIN
            </Link>
            <Link
              href="/#donors"
              onClick={(e) => handleNavClick(e, "donors")}
              className="text-xs font-mono font-bold tracking-wider uppercase px-4 py-2 bg-[#3F4632] text-white hover:bg-[#1E2318] transition-colors tactical-cut-br shadow-sm"
            >
              DONATE
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden flex flex-col gap-1.5 p-2.5 border border-[#BDC1B3] bg-[#F4F5F1]"
          >
            <span className="w-6 h-0.5 bg-[#181B15]" />
            <span className="w-6 h-0.5 bg-[#181B15]" />
            <span className="w-6 h-0.5 bg-[#181B15]" />
          </button>
        </div>
      </div>

      <div className="tri-band">
        <span />
        <span />
        <span />
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <nav className="lg:hidden bg-[#F4F5F1] border-b-2 border-[#3F4632] px-4 sm:px-6 py-5 flex flex-col gap-3 font-mono text-xs uppercase tracking-wider">
          <Link
            href="/#about"
            onClick={(e) => handleNavClick(e, "about")}
            className={`py-1 ${activeSection === "about" ? "text-[#C98E2A] font-bold" : "text-[#181B15]"}`}
          >
            // ABOUT
          </Link>

          {/* Mobile Activities Column */}
          <div className="border-y border-[#BDC1B3] py-3 my-1">
            <button
              onClick={() => setMobileActivitiesOpen((v) => !v)}
              className="flex items-center justify-between w-full font-mono text-xs font-bold text-[#3F4632]"
            >
              <span>// ACTIVITIES SERVING</span>
              <span>{mobileActivitiesOpen ? "▲" : "▼"}</span>
            </button>
            {mobileActivitiesOpen && (
              <div className="flex flex-col gap-2.5 pl-3 pt-3">
                {ACTIVITIES.map((act) => (
                  <Link
                    key={act.id}
                    href={act.href}
                    onClick={(e) => handleNavClick(e, act.id)}
                    className={`py-1.5 border-l-2 pl-3 ${
                      activeSection === act.id ? "border-[#C98E2A] text-[#3F4632] font-bold" : "border-[#BDC1B3] text-[#181B15]"
                    }`}
                  >
                    <div className="font-bold text-xs">{act.label}</div>
                    <div className="text-[10px] text-[#5E6553]">{act.code}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {NAV_ITEMS.filter((i) => i.id !== "about" && i.id !== "activities").map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`py-1 ${activeSection === item.id ? "text-[#C98E2A] font-bold" : "text-[#181B15]"}`}
            >
              // {item.label}
            </Link>
          ))}

          <div className="flex gap-3 pt-4 border-t border-[#BDC1B3]">
            <Link href="/membership" onClick={() => setMobileOpen(false)} className="px-4 py-2.5 border-2 border-[#3F4632] text-center flex-1 font-bold tactical-cut-br text-[#3F4632]">
              JOIN
            </Link>
            <Link href="/#donors" onClick={(e) => handleNavClick(e, "donors")} className="px-4 py-2.5 bg-[#3F4632] text-white text-center flex-1 font-bold tactical-cut-br">
              DONATE
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
