"use client";

import { useEffect } from "react";
import { useEmailCapture } from "@/hooks/useEmailCapture";

export default function EmailCapture({ dark = false }: { dark?: boolean }) {
  const { email, setEmail, status, submit } = useEmailCapture();

  useEffect(() => {
    if (status === "done") {
      // Dynamically load canvas-confetti from CDN
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.browser.min.js";
      script.onload = () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const confetti = (window as any).confetti;
        if (confetti) {
          confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
        }
      };
      document.head.appendChild(script);
    }
  }, [status]);

  if (status === "done") {
    return (
      <p className="text-brand-accent font-semibold text-lg py-3 animate-fade-up">
        🎉 You&apos;re on the list! We&apos;ll be in touch.
      </p>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
    >
      <input
        type="email"
        required
        placeholder="your@business.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`flex-1 px-5 py-3.5 rounded-full border text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all ${
          dark
            ? "bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:bg-white/15"
            : "bg-white border-gray-200 text-brand-text placeholder:text-gray-400"
        }`}
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-ripple px-6 py-3.5 bg-brand-accent text-white font-semibold rounded-full hover:bg-emerald-500 transition-all whitespace-nowrap text-sm disabled:opacity-70"
      >
        {status === "sending" ? "Sending..." : "Get Early Access →"}
      </button>
    </form>
  );
}
