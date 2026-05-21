"use client";

import { useState } from "react";
import { Link2, Upload, Bot, CheckCircle, Play, X } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const steps = [
  {
    icon: Link2,
    number: "01",
    title: "Connect WhatsApp",
    description:
      "Link your business number in 2 minutes. No technical skills needed — just scan a QR code and you're live.",
    detail: "Works with any Nigerian number. MTN, Airtel, Glo, 9mobile.",
  },
  {
    icon: Upload,
    number: "02",
    title: "Upload Your Products",
    description:
      "Add your menu or catalog via Excel, text, or just paste a list. FlowOS learns your business instantly.",
    detail: "Supports images, prices, variants, and availability.",
  },
  {
    icon: Bot,
    number: "03",
    title: "AI Takes Over",
    description:
      "Your bot starts answering customers immediately. FAQs, orders, bookings — handled without you.",
    detail: "Responds in English, Pidgin, and Yoruba.",
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Confirm & Collect",
    description:
      "You get a tap-to-confirm alert for every order. AI notifies the customer and tracks delivery.",
    detail: "Paystack integration for instant payment collection.",
  },
];

export default function HowItWorks() {
  const [showVideo, setShowVideo] = useState(false);
  const { ref, visible } = useIntersectionObserver();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-warm"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-20 fade-up ${visible ? "visible" : ""}`}>
          <p className="text-brand-accent text-xs font-bold uppercase tracking-[0.2em] mb-4">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-text leading-tight">
            Go live in 10 minutes.
            <br />
            <span className="text-brand-muted font-normal">No developer needed.</span>
          </h2>
          <button
            onClick={() => setShowVideo(true)}
            className="btn-ripple mt-8 inline-flex items-center gap-3 px-6 py-3 border-2 border-brand-deep/20 text-brand-text rounded-full hover:border-brand-accent hover:text-brand-accent transition-all text-sm font-semibold"
          >
            <div className="w-8 h-8 bg-brand-accent rounded-full flex items-center justify-center">
              <Play className="w-3.5 h-3.5 text-white fill-white ml-0.5" />
            </div>
            Watch how it works
          </button>
        </div>

        <div className="space-y-20">
          {steps.map((step, i) => {
            const isEven = i % 2 === 1;
            return (
              <div
                key={step.number}
                className={`flex flex-col ${isEven ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 fade-up ${visible ? "visible" : ""}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Text */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-mono text-5xl font-bold text-brand-accent/20">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 bg-brand-accent rounded-full flex items-center justify-center shrink-0">
                      <step.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-brand-text mb-3">{step.title}</h3>
                  <p className="text-brand-muted leading-relaxed mb-3">{step.description}</p>
                  <p className="text-sm text-brand-accent font-medium">{step.detail}</p>
                </div>

                {/* Visual */}
                <div className="flex-1 flex justify-center">
                  <div className="w-full max-w-sm h-48 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-brand-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                        <step.icon className="w-8 h-8 text-brand-accent" />
                      </div>
                      <p className="text-sm font-semibold text-brand-text">{step.title}</p>
                      <p className="text-xs text-brand-muted mt-1">Step {step.number}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="relative w-full max-w-3xl bg-brand-dark rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X className="w-4 h-4 text-white" />
            </button>
            <div className="aspect-video bg-brand-dark flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-brand-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-8 h-8 text-brand-accent fill-brand-accent ml-1" />
                </div>
                <p className="text-white font-semibold">FlowOS Demo Video</p>
                <p className="text-white/50 text-sm mt-1">Coming soon — join the waitlist for early access</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
