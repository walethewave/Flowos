"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const faqs = [
  {
    q: "Do I need a new WhatsApp number?",
    a: "Yes, a dedicated business number is recommended. Once connected to the API, it can't be used on regular WhatsApp. We'll help you get one set up.",
  },
  {
    q: "How long does setup take?",
    a: "10 minutes. Connect your number, upload your products, and go live. No developer, no wahala.",
  },
  {
    q: "Can I reply to customers myself?",
    a: "Yes. The AI escalates complex chats to your team instantly. You can jump in anytime from the unified inbox — the AI steps aside.",
  },
  {
    q: "What channels are supported?",
    a: "WhatsApp, Instagram DM, Facebook Messenger, Email, and Web Chat. All in one inbox.",
  },
  {
    q: "Is my customer data safe?",
    a: "Yes. All data is encrypted in transit and at rest, stored on AWS. You own your data — we are merely a processor. We never sell or share it.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, visible } = useIntersectionObserver();

  return (
    <section
      id="faq"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-dark"
    >
      <div className="max-w-3xl mx-auto">
        <div className={`text-center mb-16 fade-up ${visible ? "visible" : ""}`}>
          <p className="text-brand-accent text-xs font-bold uppercase tracking-[0.2em] mb-4">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Questions? We&apos;ve got answers.
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-xl border transition-all duration-300 overflow-hidden fade-up ${visible ? "visible" : ""} ${
                  isOpen
                    ? "border-brand-accent/40 bg-white/5"
                    : "border-white/10 bg-white/[0.03]"
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-semibold text-sm sm:text-base transition-colors ${
                      isOpen ? "text-white" : "text-white/80"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <Plus
                    className={`w-5 h-5 shrink-0 ml-4 transition-all duration-300 ${
                      isOpen ? "rotate-45 text-brand-accent" : "text-white/40"
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-5 text-sm text-white/60 leading-relaxed border-l-2 border-brand-accent ml-6">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
