"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { clinic, navLinks, phoneHref } from "@/config/clinic";

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-3.5 w-3.5 shrink-0"
      aria-hidden
    >
      <path
        d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "border-b border-navy/8 bg-mint/80 shadow-[0_4px_24px_rgba(13,27,62,0.05)] backdrop-blur-xl"
          : "border-b border-transparent bg-mint/50 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-6 md:px-10 lg:px-16">
        <Link
          href="/"
          className="font-serif text-lg tracking-tight text-navy transition hover:text-coral sm:text-xl md:text-2xl"
        >
          {clinic.clinicName}
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] tracking-wide text-navy/70 transition hover:text-coral"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href={phoneHref}
            className="flex items-center gap-2 text-sm text-navy/80 transition hover:text-coral"
          >
            <PhoneIcon />
            <span>{clinic.phone}</span>
          </a>
          <a href="#contact" className="nav-book-link">
            Book Appointment
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 bg-navy transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-navy transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-navy transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav className="border-t border-navy/8 bg-mint/95 px-5 py-6 backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm tracking-wide text-navy"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="border-t border-navy/10 pt-4">
              <a
                href={phoneHref}
                className="flex items-center gap-2 text-sm text-navy"
              >
                <PhoneIcon />
                {clinic.phone}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="nav-book-link inline-block"
              >
                Book Appointment
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
