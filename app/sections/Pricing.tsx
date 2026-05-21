"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { useEmailCapture } from "@/hooks/useEmailCapture";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const plans = [
  {
    name: "Starter",
    monthly: 30000,
    annual: 24000,
    features: [
      "WhatsApp only",
      "500 AI conversations/month",
      "1 team member",
      "Basic analytics",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Pro",
    monthly: 80000,
    annual: 64000,
    features: [
      "All channels (WhatsApp + Instagram + Email)",
      "Unlimited AI conversations",
      "5 team members",
      "Paystack integration",
      "Advanced analytics",
      "Priority support",
    ],
    popular: true,
  },
];

function PlanCTA({ planName }: { planName: string }) {
  const { email, setEmail, status, submit } = useEmailCapture();

  if (status === "done") {
    return (
      <p className="text-brand-accent text-sm font-semibold py-2">
        🎉 You&apos;re on the list!
      </p>
    );
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-2 mt-6">
      <input
        type="email"
        required
        placeholder="your@business.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-3 rounded-full border border-white/20 bg-white/10 text-white placeholder:text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-ripple w-full py-3 bg-brand-accent text-white font-semibold rounded-full hover:bg-emerald-500 transition-all text-sm disabled:opacity-70"
      >
        {status === "sending" ? "Joining..." : `Join Waitlist — ${planName}`}
      </button>
    </form>
  );
}

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  const { ref, visible } = useIntersectionObserver();

  return (
    <section
      id="pricing"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-dark"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 fade-up ${visible ? "visible" : ""}`}>
          <p className="text-brand-accent text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Simple pricing.{" "}
            <em className="text-brand-muted font-normal not-italic text-3xl">No wahala.</em>
          </h2>

          {/* Annual toggle */}
          <div className="mt-8 inline-flex items-center gap-4 bg-white/5 border border-white/10 rounded-full px-2 py-1.5">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                !annual ? "bg-brand-accent text-white" : "text-white/50 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                annual ? "bg-brand-accent text-white" : "text-white/50 hover:text-white"
              }`}
            >
              Annual
              <span className="ml-2 text-xs bg-brand-accent/20 text-brand-accent px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`fade-up ${visible ? "visible" : ""} ${plan.popular ? "gradient-border" : ""}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className={`rounded-2xl p-8 h-full ${
                  plan.popular
                    ? "bg-brand-dark"
                    : "bg-white/5 border border-white/10"
                }`}
              >
                {plan.popular && (
                  <span className="inline-block mb-4 text-xs font-bold text-brand-accent bg-brand-accent/10 border border-brand-accent/20 px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                <div className="mt-4 flex items-end gap-1">
                  <span className="font-mono text-4xl font-bold text-white transition-all duration-500">
                    ₦{(annual ? plan.annual : plan.monthly).toLocaleString()}
                  </span>
                  <span className="text-white/40 mb-1">/month</span>
                </div>
                {annual && (
                  <p className="text-xs text-brand-accent mt-1">
                    Billed annually — save ₦{((plan.monthly - plan.annual) * 12).toLocaleString()}/year
                  </p>
                )}

                <ul className="mt-8 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-white/70">{f}</span>
                    </li>
                  ))}
                </ul>

                <PlanCTA planName={plan.name} />

                <p className="mt-3 text-xs text-white/30 text-center">
                  Includes 14-day free trial. No credit card required.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
