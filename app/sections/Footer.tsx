"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <footer className="bg-brand-deep text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-bold">Flow<span className="text-brand-accent">OS</span></h3>
            <p className="mt-3 text-gray-300 text-sm">
              AI-powered customer engagement platform for Nigerian SMEs.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> hello@flowos.ng</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +234 808 441 5996</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Lagos, Nigeria</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#features" className="hover:text-brand-accent transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-brand-accent transition-colors">Pricing</a></li>
              <li><a href="#faq" className="hover:text-brand-accent transition-colors">FAQ</a></li>
              <li><button onClick={() => setShowPrivacy(true)} className="hover:text-brand-accent transition-colors">Privacy Policy</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="https://twitter.com/flowos_ng" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors">Twitter / X</a></li>
              <li><a href="https://instagram.com/flowos.ng" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors">Instagram</a></li>
              <li><a href="https://linkedin.com/company/flowos" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2026 FlowOS Technologies. All rights reserved.</p>
          <p>FlowOS Technologies • Lagos, Nigeria</p>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={() => setShowPrivacy(false)}>
          <div className="bg-white text-gray-900 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-bold text-brand-deep mb-4">Privacy Policy</h2>
            <div className="space-y-4 text-sm text-gray-600">
              <p>FlowOS Technologies (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information.</p>
              <h3 className="font-bold text-brand-deep">Information We Collect</h3>
              <p>We collect email addresses provided voluntarily through our waitlist forms. When you use our platform, we process customer conversation data on your behalf to provide AI-powered responses.</p>
              <h3 className="font-bold text-brand-deep">How We Use Your Information</h3>
              <p>Your email is used solely to communicate product updates and launch information. Customer conversation data is processed to deliver our AI services and is never shared with third parties.</p>
              <h3 className="font-bold text-brand-deep">Data Storage &amp; Security</h3>
              <p>All data is encrypted in transit and at rest, stored on AWS infrastructure. We implement industry-standard security measures to protect your information.</p>
              <h3 className="font-bold text-brand-deep">Your Rights</h3>
              <p>You may request deletion of your data at any time by contacting hello@flowos.ng. You own all your customer data — we are merely a processor.</p>
              <h3 className="font-bold text-brand-deep">Contact</h3>
              <p>For privacy inquiries, contact us at hello@flowos.ng or +234 808 441 5996.</p>
            </div>
            <button onClick={() => setShowPrivacy(false)} className="mt-6 px-6 py-2 bg-brand-deep text-white rounded-lg hover:bg-brand-deep/90 transition-colors">
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
