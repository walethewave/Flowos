import EmailCapture from "@/components/EmailCapture";

export default function Hero() {
  return (
    <section id="hero" className="gradient-bg pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Automate Your WhatsApp, Instagram &amp; Email with{" "}
            <span className="text-brand-accent">AI</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
            FlowOS handles customer inquiries, captures orders, and escalates to your team — 24/7. Built for Nigerian restaurants, salons, fashion stores, and clinics.
          </p>
          <div className="mt-8 flex justify-center lg:justify-start">
            <EmailCapture />
          </div>
          <p className="mt-4 text-sm text-gray-400">Join 200+ businesses on the waitlist</p>
        </div>

        {/* Phone Mockup */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-[280px] h-[560px] bg-gray-900 rounded-[3rem] border-4 border-gray-700 shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl" />
            <div className="mt-8 mx-3 h-full bg-white rounded-t-2xl overflow-hidden">
              {/* WhatsApp Header */}
              <div className="bg-[#075e54] px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-accent flex items-center justify-center text-white text-xs font-bold">F</div>
                <div>
                  <p className="text-white text-sm font-semibold">FlowOS Bot</p>
                  <p className="text-green-200 text-xs">online</p>
                </div>
              </div>
              {/* Chat Messages */}
              <div className="p-3 space-y-3 bg-[#ece5dd] h-full">
                <div className="bg-white rounded-lg p-2 max-w-[80%] shadow-sm">
                  <p className="text-xs text-gray-800">Hi! Do you have jollof rice available?</p>
                  <p className="text-[10px] text-gray-400 text-right">10:30 AM</p>
                </div>
                <div className="bg-[#dcf8c6] rounded-lg p-2 max-w-[80%] ml-auto shadow-sm">
                  <p className="text-xs text-gray-800">Yes! 🍚 Jollof rice is ₦2,500. Would you like to place an order? I can take your delivery address too.</p>
                  <p className="text-[10px] text-gray-400 text-right">10:30 AM ✓✓</p>
                </div>
                <div className="bg-white rounded-lg p-2 max-w-[80%] shadow-sm">
                  <p className="text-xs text-gray-800">Yes please! 2 plates to Lekki Phase 1</p>
                  <p className="text-[10px] text-gray-400 text-right">10:31 AM</p>
                </div>
                <div className="bg-[#dcf8c6] rounded-lg p-2 max-w-[80%] ml-auto shadow-sm">
                  <p className="text-xs text-gray-800">Order confirmed! ✅ 2x Jollof Rice — ₦5,000. Delivery to Lekki Phase 1. ETA: 45 mins. Pay on delivery or via Paystack link?</p>
                  <p className="text-[10px] text-gray-400 text-right">10:31 AM ✓✓</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
