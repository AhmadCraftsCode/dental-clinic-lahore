import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { seo } from "@/config/clinic";
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
  title: seo.title,
  description: seo.description,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="grain antialiased overflow-x-hidden">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
