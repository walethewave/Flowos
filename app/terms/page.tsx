import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/app/sections/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — FlowOS",
  description:
    "The terms and conditions governing your use of the FlowOS platform.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing or using the FlowOS platform ('Service'), you agree to be bound by these Terms of Service ('Terms'). If you do not agree to these Terms, do not use the Service. These Terms apply to all users, including businesses and individuals who access FlowOS in any capacity. FlowOS Technologies reserves the right to update these Terms at any time with reasonable notice.",
  },
  {
    title: "2. Service Description",
    content:
      "FlowOS provides AI-powered customer engagement automation for Nigerian SMEs. The Service enables businesses to automate customer conversations across WhatsApp, Instagram DM, Facebook Messenger, and email. Features include AI auto-reply, order collection, appointment booking, human handoff to live agents, and a unified inbox. FlowOS operates as a third-party service provider on the WhatsApp Business API and is subject to Meta's platform policies.",
  },
  {
    title: "3. User Responsibilities",
    content:
      "As a FlowOS user, you agree to: (a) Provide accurate and complete business information during onboarding and keep it up to date. (b) Obtain proper opt-in consent from all customers before initiating or automating messages to them, in compliance with applicable Nigerian law and Meta's messaging policies. (c) Comply fully with the WhatsApp Business API Terms of Service, Meta's Platform Policies, and all applicable Nigerian laws and regulations. (d) Not use FlowOS to send unsolicited messages, spam, or any content that violates the rights of others. You are solely responsible for the content of messages sent through your FlowOS account.",
  },
  {
    title: "4. Data Ownership",
    content:
      "You retain full ownership of all customer data processed through your FlowOS account. FlowOS acts solely as a data processor on your behalf — you are the data controller. We will never sell, share, or use your customer data for any purpose other than delivering the Service to you. Upon termination of your account, all your data will be permanently deleted within 30 days, unless retention is required by law.",
  },
  {
    title: "5. Acceptable Use",
    content:
      "You may not use FlowOS to: send spam, bulk unsolicited messages, or phishing content; harass, threaten, or abuse any individual; distribute illegal, defamatory, or harmful content; violate any applicable law or regulation; attempt to reverse-engineer, hack, or disrupt the platform. FlowOS Technologies reserves the right to suspend or permanently terminate any account found to be in violation of these rules, without prior notice and without refund.",
  },
  {
    title: "6. Payment Terms",
    content:
      "Subscriptions are billed monthly in Nigerian Naira (₦) at the rates displayed on our pricing page. Payment is due at the start of each billing cycle. We accept payment via Paystack (card, bank transfer, USSD). Subscriptions auto-renew unless cancelled before the next billing date. No refunds are issued for partial months or unused portions of a subscription period. FlowOS reserves the right to adjust pricing with 30 days' written notice.",
  },
  {
    title: "7. Limitations of Liability",
    content:
      "FlowOS Technologies shall not be liable for: message delivery failures caused by WhatsApp, Meta, or any third-party infrastructure; service interruptions resulting from third-party outages, network failures, or force majeure events; any indirect, incidental, or consequential damages arising from your use of the Service. Our total liability to you for any claim arising from these Terms shall not exceed the amount you paid to FlowOS in the 3 months preceding the claim.",
  },
  {
    title: "8. Termination",
    content:
      "Either party may terminate the Service agreement with 30 days' written notice. You may cancel your subscription at any time from your account dashboard — cancellation takes effect at the end of the current billing period. FlowOS may terminate your account immediately and without notice if you violate these Terms, engage in fraudulent activity, or if required to do so by law. Upon termination, your access to the Service will cease and your data will be deleted within 30 days.",
  },
  {
    title: "9. Governing Law",
    content:
      "These Terms of Service are governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any disputes arising from or relating to these Terms shall be subject to the exclusive jurisdiction of the courts of Lagos State, Nigeria. If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.",
  },
  {
    title: "10. Contact Us",
    content:
      "For questions about these Terms, please contact us at: Email: hello@flowos.africa | Address: FlowOS Technologies, Lagos, Nigeria. We aim to respond to all legal inquiries within 5 business days.",
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />

      {/* Dark hero */}
      <section className="bg-[#0d1117] pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-[#10b981] text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
            Effective date: January 2026
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Terms of Service
          </h1>
          <p className="mt-4 text-[#10b981] text-lg font-medium">
            Straightforward terms. No legal maze.
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
              Questions about these terms?{" "}
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
