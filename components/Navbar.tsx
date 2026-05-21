"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-md ${
        scrolled ? "border-b border-gray-200/80 shadow-sm" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="font-mono text-xl font-bold tracking-tight text-brand-text">
            Flow<span className="text-brand-accent">OS</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nav-link text-sm text-brand-muted hover:text-brand-text transition-colors pb-0.5"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#hero"
              className="btn-ripple px-5 py-2 bg-brand-accent text-white text-sm font-semibold rounded-full hover:bg-emerald-500 transition-all"
            >
              Join Waitlist
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-brand-text"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } bg-white/95 backdrop-blur-md border-t border-gray-100`}
      >
        <div className="px-6 py-4 space-y-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-brand-muted hover:text-brand-text transition-colors text-sm"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#hero"
            onClick={() => setOpen(false)}
            className="block mt-3 py-3 px-5 bg-brand-accent text-white text-sm font-semibold rounded-full text-center hover:bg-emerald-500 transition-all"
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </nav>
  );
}
