"use client";

import { useEffect, useState } from "react";
import EmailCapture from "@/components/EmailCapture";

const HEADLINE_WORDS = [
  "Automate",
  "Your",
  "WhatsApp,",
  "Instagram",
  "&",
  "Email",
  "with",
];

const MESSAGES = [
  {
    from: "customer",
    text: "Hi, do you have the red dress in size 12?",
    time: "10:42 AM",
  },
  {
    from: "bot",
    text: "Yes! We have it in sizes 10, 12, and 14. It's ₦45,000. Want me to reserve one for you? 🛍️",
    time: "10:42 AM",
  },
  { from: "customer", text: "Yes please, for Blessing", time: "10:43 AM" },
  {
    from: "bot",
    text: "Done! Reserved for Blessing ✅ Pay here: pay.flowos.ng/order/2847",
    time: "10:43 AM",
  },
];

function PhoneMockup() {
  const [visibleMessages, setVisibleMessages] = useState<number>(0);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let msgIndex = 0;

    const showNextMessage = () => {
      if (msgIndex >= MESSAGES.length) return;
      const msg = MESSAGES[msgIndex];
      if (msg.from === "bot") {
        setIsTyping(true);
        let charIndex = 0;
        setTypedText("");
        const typeInterval = setInterval(() => {
          charIndex++;
          setTypedText(msg.text.slice(0, charIndex));
          if (charIndex >= msg.text.length) {
            clearInterval(typeInterval);
            setIsTyping(false);
            setVisibleMessages((v) => v + 1);
            msgIndex++;
            setTimeout(showNextMessage, 1200);
          }
        }, 28);
      } else {
        setVisibleMessages((v) => v + 1);
        msgIndex++;
        setTimeout(showNextMessage, 900);
      }
    };

    const timer = setTimeout(showNextMessage, 800);
    return () => clearTimeout(timer);
  }, []);

  const displayMessages = MESSAGES.slice(0, visibleMessages);
  const currentBotMsg =
    isTyping &&
    visibleMessages < MESSAGES.length &&
    MESSAGES[visibleMessages]?.from === "bot"
      ? typedText
      : null;

  return (
    <div className="relative flex justify-center">
      {/* Glow behind phone */}
      <div className="absolute inset-0 bg-brand-accent/20 blur-3xl rounded-full scale-75" />

      {/* Phone frame */}
      <div className="relative w-[270px] h-[540px] bg-[#1a1a1a] rounded-[2.8rem] border-[6px] border-[#2a2a2a] shadow-2xl overflow-hidden">
        {/* Side buttons */}
        <div className="absolute right-[-8px] top-24 w-1.5 h-10 bg-[#2a2a2a] rounded-r-sm" />
        <div className="absolute left-[-8px] top-20 w-1.5 h-8 bg-[#2a2a2a] rounded-l-sm" />
        <div className="absolute left-[-8px] top-32 w-1.5 h-8 bg-[#2a2a2a] rounded-l-sm" />

        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#1a1a1a] rounded-b-2xl z-10" />

        {/* Screen */}
        <div className="h-full flex flex-col bg-white">
          {/* WhatsApp header */}
          <div className="bg-[#075e54] px-4 pt-8 pb-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-brand-accent flex items-center justify-center text-white text-xs font-bold shrink-0">
              LF
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-semibold truncate">Lekki Fashion Hub</p>
              <p className="text-green-200 text-[11px]">FlowOS AI • online</p>
            </div>
          </div>

          {/* Chat area */}
          <div className="flex-1 overflow-hidden bg-[#ece5dd] p-3 space-y-2.5">
            {displayMessages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.from === "bot" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[82%] rounded-xl px-3 py-2 shadow-sm ${
                    msg.from === "bot"
                      ? "bg-[#dcf8c6] rounded-br-sm"
                      : "bg-white rounded-bl-sm"
                  }`}
                >
                  <p className="text-[11px] text-gray-800 leading-relaxed">{msg.text}</p>
                  <p className="text-[9px] text-gray-400 text-right mt-0.5">
                    {msg.time} {msg.from === "bot" && "✓✓"}
                  </p>
                </div>
              </div>
            ))}

            {/* Typing bubble */}
            {currentBotMsg !== null && (
              <div className="flex justify-end">
                <div className="max-w-[82%] bg-[#dcf8c6] rounded-xl rounded-br-sm px-3 py-2 shadow-sm">
                  <p className="text-[11px] text-gray-800 leading-relaxed typewriter-cursor">
                    {currentBotMsg}
                  </p>
                </div>
              </div>
            )}

            {/* Typing indicator */}
            {isTyping && currentBotMsg === "" && (
              <div className="flex justify-end">
                <div className="bg-[#dcf8c6] rounded-xl px-4 py-3 shadow-sm flex gap-1 items-center">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Input bar */}
          <div className="bg-[#f0f0f0] px-3 py-2 flex items-center gap-2">
            <div className="flex-1 bg-white rounded-full px-4 py-1.5 text-[11px] text-gray-400">
              Message
            </div>
            <div className="w-8 h-8 bg-[#075e54] rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const AVATARS = [
  { initials: "AO", bg: "bg-purple-500" },
  { initials: "TK", bg: "bg-blue-500" },
  { initials: "CB", bg: "bg-orange-500" },
  { initials: "NN", bg: "bg-pink-500" },
  { initials: "YA", bg: "bg-teal-500" },
];

export default function Hero() {
  const [wordCount, setWordCount] = useState(0);

  useEffect(() => {
    if (wordCount >= HEADLINE_WORDS.length) return;
    const t = setTimeout(() => setWordCount((c) => c + 1), 80);
    return () => clearTimeout(t);
  }, [wordCount]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-brand-warm"
    >
      {/* Background blobs */}
      <div className="absolute top-20 left-[-10%] w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-[-5%] w-80 h-80 bg-brand-deep/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-hero-radial pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-accent/10 border border-brand-accent/20 rounded-full text-brand-accent text-xs font-semibold mb-8 tracking-wide">
            <span className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-pulse" />
            NOW IN EARLY ACCESS
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold leading-[1.05] tracking-tight text-brand-text">
            {HEADLINE_WORDS.map((word, i) => (
              <span
                key={i}
                className={`inline-block mr-3 transition-all duration-500 ${
                  i < wordCount
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                {word}
              </span>
            ))}
            <span
              className={`inline-block transition-all duration-500 animate-pulse-glow text-brand-accent ${
                wordCount >= HEADLINE_WORDS.length
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              AI
            </span>
          </h1>

          <p className="mt-6 text-lg text-brand-muted leading-relaxed italic max-w-lg">
            FlowOS handles customer inquiries, captures orders, and escalates to
            your team — 24/7. Built for Nigerian restaurants, salons, fashion
            stores, and clinics.
          </p>

          <div className="mt-10">
            <EmailCapture />
          </div>

          {/* Social proof */}
          <div className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-2">
              {AVATARS.map((a) => (
                <div
                  key={a.initials}
                  className={`w-9 h-9 rounded-full ${a.bg} border-2 border-brand-warm flex items-center justify-center text-white text-xs font-bold`}
                >
                  {a.initials}
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-muted">
              <span className="font-semibold text-brand-text">200+</span>{" "}
              Nigerian businesses on the waitlist
            </p>
          </div>
        </div>

        {/* Right — Phone */}
        <div className="flex justify-center lg:justify-end">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
