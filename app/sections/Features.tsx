"use client";

import { MessageSquare, ShoppingCart, Users } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const features = [
  {
    icon: MessageSquare,
    title: "AI Auto-Reply",
    description:
      "Handles FAQs, product questions, and chit-chat automatically. Your customers get instant responses — you don't lift a finger.",
    preview: (
      <div className="mt-4 space-y-2">
        {["Do you deliver to VI?", "What time do you close?", "Is the ankara still available?"].map(
          (q, i) => (
            <div key={i} className="flex items-start gap-2">
              <div className="text-[10px] text-white/40 mt-0.5 shrink-0">Q</div>
              <div className="text-[11px] text-white/60 bg-white/5 rounded-lg px-2.5 py-1.5 flex-1">
                {q}
              </div>
              <div className="w-2 h-2 bg-brand-accent rounded-full mt-1.5 shrink-0 animate-pulse" />
            </div>
          )
        )}
      </div>
    ),
  },
  {
    icon: ShoppingCart,
    title: "Order Collection",
    description:
      "Customers place orders via chat. AI captures items, delivery address, and confirms — no human needed.",
    preview: (
      <div className="mt-4 bg-white/5 rounded-xl p-3 border border-white/10">
        <p className="text-[10px] text-brand-accent font-semibold mb-2 uppercase tracking-wide">New Order #2847</p>
        <div className="space-y-1">
          {["2× Jollof Rice — ₦5,000", "1× Chicken — ₦2,500", "Delivery: Lekki Phase 1"].map((line, i) => (
            <p key={i} className="text-[11px] text-white/60">{line}</p>
          ))}
        </div>
        <div className="mt-2 pt-2 border-t border-white/10 flex justify-between">
          <span className="text-[10px] text-white/40">Total</span>
          <span className="text-[11px] text-brand-accent font-semibold">₦7,500</span>
        </div>
      </div>
    ),
  },
  {
    icon: Users,
    title: "Human Handoff",
    description:
      "Complex issues auto-escalate to your team in a unified inbox. Never miss an important conversation.",
    preview: (
      <div className="mt-4 flex items-center gap-3 bg-white/5 rounded-xl p-3 border border-white/10">
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-brand-accent/20 flex items-center justify-center">
            <Users className="w-5 h-5 text-brand-accent" />
          </div>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-brand-accent rounded-full animate-ping-slow" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-brand-accent rounded-full" />
        </div>
        <div>
          <p className="text-xs font-semibold text-white">LIVE AGENT</p>
          <p className="text-[11px] text-white/50">Tunde joined the chat</p>
        </div>
      </div>
    ),
  },
];

export default function Features() {
  const { ref, visible } = useIntersectionObserver();

  return (
    <section
      id="features"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-dark"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 fade-up ${visible ? "visible" : ""}`}>
          <p className="text-brand-accent text-xs font-bold uppercase tracking-[0.2em] mb-4">
            What FlowOS Does
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto">
            Your AI employee that never sleeps, never takes lunch, and never
            misses a message.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`glass rounded-2xl p-6 border-t-2 border-t-brand-accent hover:translate-y-[-4px] hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300 group fade-up ${visible ? "visible" : ""}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center mb-5 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all">
                <f.icon className="w-6 h-6 text-brand-accent group-hover:rotate-6 transition-transform duration-300" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{f.description}</p>
              {f.preview}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
