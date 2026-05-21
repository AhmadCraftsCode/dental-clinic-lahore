"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, site, whatsappBookUrl } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "border-b border-navy/10 bg-mint/75 shadow-[0_8px_32px_rgba(13,27,62,0.06)] backdrop-blur-xl"
          : "border-b border-transparent bg-mint/40 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-16">
        <Link
          href="/"
          className="font-serif text-xl tracking-tight text-navy transition hover:text-coral md:text-2xl"
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-navy/75 transition hover:text-coral"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappBookUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-navy bg-navy px-4 py-2.5 text-xs font-medium tracking-widest text-mint uppercase transition hover:border-coral hover:bg-coral md:text-sm"
        >
          Book on WhatsApp
        </a>
      </div>
    </header>
  );
}
