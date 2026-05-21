"use client";

import { Star } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const testimonials = [
  {
    quote:
      "FlowOS handles 80% of our order DMs. I just confirm and cook. My customers think I have a full team.",
    name: "Amaka Okonkwo",
    business: "Mama Put Kitchen",
    location: "Yaba, Lagos",
    initials: "AO",
    bg: "bg-orange-500",
  },
  {
    quote:
      "Booking appointments used to take all morning. Now the AI does it while I sleep. My revenue went up 40%.",
    name: "Chisom Eze",
    business: "Glow Spa",
    location: "Wuse, Abuja",
    initials: "CE",
    bg: "bg-purple-500",
  },
  {
    quote:
      "Customers ask about sizes and prices at midnight. FlowOS replies instantly. I wake up to confirmed orders.",
    name: "Tunde Adeyemi",
    business: "Lekki Fashion Hub",
    location: "Lekki, Lagos",
    initials: "TA",
    bg: "bg-blue-500",
  },
];

export default function Testimonials() {
  const { ref, visible } = useIntersectionObserver();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-warm"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 fade-up ${visible ? "visible" : ""}`}>
          <p className="text-brand-accent text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-text">
            Loved by Nigerian businesses
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`bg-white rounded-2xl p-8 border-l-4 border-brand-accent shadow-sm hover:shadow-md hover:rotate-1 transition-all duration-300 cursor-default fade-up ${visible ? "visible" : ""}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="text-6xl text-brand-accent/20 font-serif leading-none block -mt-2 mb-2">
                &ldquo;
              </span>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-brand-text leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${t.bg} flex items-center justify-center text-white text-xs font-bold shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-brand-text text-sm">{t.name}</p>
                  <p className="text-xs text-brand-muted">
                    {t.business} · {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
