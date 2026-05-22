import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/app/sections/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — FlowOS",
  description:
    "How FlowOS Technologies collects, uses, and protects your data.",
};

const sections = [
  {
    title: "1. Introduction",
    content:
      "FlowOS Technologies ('we', 'our', 'us') is a company incorporated in Lagos, Nigeria. We are committed to protecting your privacy and handling your data with full transparency. This Privacy Policy explains what information we collect, how we use it, and the rights you have over it. By using FlowOS, you agree to the practices described in this policy.",
  },
  {
    title: "2. Information We Collect",
    content:
      "We collect the following categories of information: (a) Email addresses submitted voluntarily through our waitlist and onboarding forms. (b) Customer conversation data — messages sent and received through WhatsApp, Instagram, and other connected channels — processed on behalf of your business to deliver AI-powered responses. (c) Business information you upload to the platform, including product catalogs, menus, FAQs, pricing, and operational details. (d) Basic usage data such as session logs and feature interactions, used solely to improve platform performance.",
  },
  {
    title: "3. How We Use Your Information",
    content:
      "Your information is used to: provide and operate the FlowOS AI-powered customer engagement platform; send you product updates, launch announcements, and service notifications (you may opt out at any time); improve and train our AI models using anonymised, aggregated data; respond to support requests and troubleshoot issues. We do not sell your personal data to any third party, ever.",
  },
  {
    title: "4. Data Storage & Security",
    content:
      "All data is encrypted in transit using TLS 1.2+ and encrypted at rest using AES-256. Your data is stored on AWS infrastructure (eu-west-1 region). We apply industry-standard security controls including access logging, role-based permissions, and regular security audits. In the event of a data breach that affects your personal information, we will notify you within 72 hours.",
  },
  {
    title: "5. WhatsApp & Meta Data",
    content:
      "FlowOS processes messages through the WhatsApp Business API in full accordance with Meta's Platform Terms and WhatsApp Business Policy. We act as a data processor on behalf of your business (the data controller). We do not use WhatsApp conversation data for advertising purposes, and we do not sell or share this data with Meta or any third party beyond what is required to deliver the service.",
  },
  {
    title: "6. Your Rights",
    content:
      "You have the right to: access the personal data we hold about you; request correction of inaccurate data; request deletion of your data at any time by emailing hello@flowos.africa; withdraw consent for marketing communications. You retain full ownership of all customer data processed through your FlowOS account. FlowOS acts solely as a data processor — you are the data controller. Upon account termination, your data is deleted within 30 days.",
  },
  {
    title: "7. Cookies",
    content:
      "We use minimal, strictly necessary cookies for session management and authentication only. We do not use tracking cookies, advertising cookies, or third-party analytics cookies. You can disable cookies in your browser settings, though this may affect platform functionality.",
  },
  {
    title: "8. Changes to This Policy",
    content:
      "We may update this Privacy Policy from time to time. For material changes — those that significantly affect your rights or how we use your data — we will notify you via email at least 14 days before the change takes effect. The 'Last Updated' date at the top of this page will always reflect the most recent revision. Continued use of FlowOS after changes take effect constitutes acceptance of the updated policy.",
  },
  {
    title: "9. Contact Us",
    content:
      "For any privacy-related questions, data requests, or concerns, please contact us at: Email: hello@flowos.africa | Phone: +234 808 441 5996 | Address: FlowOS Technologies, Lagos, Nigeria. We aim to respond to all privacy inquiries within 5 business days.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      {/* Dark hero */}
      <section className="bg-[#0d1117] pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-[#10b981] text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
            Last updated: January 2026
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-[#10b981] text-lg font-medium">
            We keep it simple: your data is yours. Always.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#f8f7f4] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-12">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-xl font-semibold text-[#1e3a5f] border-l-4 border-[#10b981] pl-4 mb-4">
                {s.title}
              </h2>
              <p
                className="text-[#374151] leading-[1.8]"
                style={{ fontSize: "17px" }}
              >
                {s.content}
              </p>
            </div>
          ))}

          <div className="pt-8 border-t border-gray-200 text-sm text-[#374151]">
            <p>
              Questions?{" "}
              <a
                href="mailto:hello@flowos.africa"
                className="text-[#10b981] underline hover:text-emerald-600 transition-colors"
              >
                hello@flowos.africa
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
