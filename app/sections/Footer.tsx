"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, X } from "lucide-react";

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          {/* Col 1 */}
          <div>
            <a href="#" className="font-mono text-2xl font-bold">
              Flow<span className="text-brand-accent">OS</span>
            </a>
            <p className="mt-3 text-sm text-white/50 leading-relaxed max-w-xs">
              AI-powered customer engagement platform for Nigerian SMEs. Your customers are waiting.
            </p>
            <div className="mt-6 flex gap-4">
              {[
                { href: "https://twitter.com/flowos_ng", icon: <TwitterIcon />, label: "Twitter" },
                { href: "https://instagram.com/flowos.ng", icon: <InstagramIcon />, label: "Instagram" },
                { href: "https://linkedin.com/company/flowos", icon: <LinkedInIcon />, label: "LinkedIn" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white/50 hover:text-brand-accent hover:border-brand-accent/30 transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5">Links</h4>
            <ul className="space-y-3 text-sm text-white/50">
              {[
                { href: "#features", label: "Features" },
                { href: "#pricing", label: "Pricing" },
                { href: "#faq", label: "FAQ" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-brand-accent transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-brand-accent transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-brand-accent transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li>
                <a
                  href="https://wa.me/2348084415996"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-brand-accent transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  +234 808 441 5996
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@flowos.ng"
                  className="flex items-center gap-2 hover:text-brand-accent transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  hello@flowos.ng
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0" />
                Lagos, Nigeria
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <p>© 2026 FlowOS Technologies. Built with ❤️ in Lagos, Nigeria.</p>
          <p>FlowOS Technologies · RC: 0000000</p>
        </div>
      </div>

      {/* Privacy Policy — slide-up bottom sheet */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          showPrivacy ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setShowPrivacy(false)}
        />
        <div
          className={`absolute bottom-0 left-0 right-0 bg-[#111827] rounded-t-3xl max-h-[80vh] overflow-y-auto transition-transform duration-300 ${
            showPrivacy ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="sticky top-0 bg-[#111827] px-6 pt-6 pb-4 flex items-center justify-between border-b border-white/10">
            <h2 className="text-xl font-bold text-white">Privacy Policy</h2>
            <button
              onClick={() => setShowPrivacy(false)}
              className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>
          <div className="px-6 py-6 space-y-5 text-sm text-white/60 leading-relaxed max-w-3xl">
            <p>
              FlowOS Technologies (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information.
            </p>
            {[
              {
                title: "Information We Collect",
                body: "We collect email addresses provided voluntarily through our waitlist forms. When you use our platform, we process customer conversation data on your behalf to provide AI-powered responses.",
              },
              {
                title: "How We Use Your Information",
                body: "Your email is used solely to communicate product updates and launch information. Customer conversation data is processed to deliver our AI services and is never shared with third parties.",
              },
              {
                title: "Data Storage & Security",
                body: "All data is encrypted in transit and at rest, stored on AWS infrastructure in the eu-west-1 region. We implement industry-standard security measures to protect your information.",
              },
              {
                title: "Your Rights",
                body: "You may request deletion of your data at any time by contacting hello@flowos.ng. You own all your customer data — we are merely a processor.",
              },
              {
                title: "Contact",
                body: "For privacy inquiries, contact us at hello@flowos.ng or +234 808 441 5996. FlowOS Technologies, Lagos, Nigeria.",
              },
            ].map((s) => (
              <div key={s.title}>
                <h3 className="font-semibold text-white mb-1">{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
