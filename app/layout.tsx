import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
