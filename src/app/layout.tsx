import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lahore Smile Center | Dental Clinic in DHA Phase 5",
  description:
    "PMDC-registered dental care by Dr. Ahmed Raza in DHA Phase 5, Lahore. Book appointments via WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="grain antialiased">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
