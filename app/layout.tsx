import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FlowOS — AI Sales Agent for Nigerian Businesses",
  description:
    "Automate WhatsApp, Instagram, and email with AI. Capture orders, answer FAQs, and manage customer conversations 24/7.",
  keywords:
    "WhatsApp automation, AI chatbot Nigeria, business automation, SME tools Nigeria",
  openGraph: {
    title: "FlowOS — AI Sales Agent for Nigerian Businesses",
    description:
      "Automate WhatsApp, Instagram, and email with AI. Capture orders, answer FAQs, and manage customer conversations 24/7.",
    url: "https://flowos.vercel.app",
    siteName: "FlowOS",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
