"use client";

import { Check } from "lucide-react";
import EmailCapture from "@/components/EmailCapture";

const plans = [
  {
    name: "Starter",
    price: "₦30,000",
    period: "/month",
    features: ["WhatsApp only", "500 AI conversations/month", "1 team member", "Basic analytics", "Email support"],
    popular: false,
  },
  {
    name: "Pro",
    price: "₦80,000",
    period: "/month",
    features: ["All channels (WhatsApp + Instagram + Email)", "Unlimited AI conversations", "5 team members", "Paystack integration", "Advanced analytics", "Priority support"],
    popular: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-deep">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-gray-600">Start small, scale as you grow. No hidden fees.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-2xl p-8 border-2 ${plan.popular ? "border-brand-accent shadow-lg scale-[1.02]" : "border-gray-100"} relative`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-accent text-white text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold text-brand-deep">{plan.name}</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-brand-deep">{plan.price}</span>
                <span className="text-gray-500">{plan.period}</span>
              </div>
              <ul className="mt-8 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <EmailCapture variant="compact" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
