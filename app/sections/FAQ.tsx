"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Do I need a new WhatsApp number?",
    a: "Yes, a dedicated business number is recommended. Once connected to the API, it can't be used on regular WhatsApp.",
  },
  {
    q: "How long does setup take?",
    a: "10 minutes. Connect your number, upload your products, and go live.",
  },
  {
    q: "Can I reply to customers myself?",
    a: "Yes. The AI escalates complex chats to your team instantly. You can jump in anytime from the unified inbox.",
  },
  {
    q: "What channels are supported?",
    a: "WhatsApp, Instagram DM, Facebook Messenger, Email, and Web Chat.",
  },
  {
    q: "Is my customer data safe?",
    a: "Yes. All data is encrypted and stored on AWS. You own your data.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-deep">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-semibold text-brand-deep">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5 text-gray-600">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
