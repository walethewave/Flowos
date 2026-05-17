"use client";

import { useState } from "react";

export default function EmailCapture({ variant = "default" }: { variant?: "default" | "compact" }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const stored = JSON.parse(localStorage.getItem("flowos_emails") || "[]");
    stored.push({ email, date: new Date().toISOString() });
    localStorage.setItem("flowos_emails", JSON.stringify(stored));
    setSubmitted(true);
    setEmail("");
  };

  if (submitted) {
    return (
      <p className="text-brand-accent font-semibold py-3">
        Thanks! We&apos;ll contact you soon. 🎉
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex ${variant === "compact" ? "flex-col sm:flex-row" : "flex-col sm:flex-row"} gap-3 w-full max-w-md`}>
      <input
        type="email"
        required
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-accent text-gray-900"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-brand-accent text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors whitespace-nowrap"
      >
        Get Early Access
      </button>
    </form>
  );
}
