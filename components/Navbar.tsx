"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-2xl font-bold text-brand-deep">
            Flow<span className="text-brand-accent">OS</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-brand-deep transition-colors">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-brand-deep transition-colors">Pricing</a>
            <a href="#faq" className="text-gray-600 hover:text-brand-deep transition-colors">FAQ</a>
            <a href="#hero" className="px-5 py-2 bg-brand-accent text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors">
              Join Waitlist
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <a href="#features" onClick={() => setOpen(false)} className="block py-3 text-gray-600">Features</a>
          <a href="#pricing" onClick={() => setOpen(false)} className="block py-3 text-gray-600">Pricing</a>
          <a href="#faq" onClick={() => setOpen(false)} className="block py-3 text-gray-600">FAQ</a>
          <a href="#hero" onClick={() => setOpen(false)} className="block py-3 text-brand-accent font-semibold">Join Waitlist</a>
        </div>
      )}
    </nav>
  );
}
