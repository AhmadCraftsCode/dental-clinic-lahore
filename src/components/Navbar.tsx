import Link from "next/link";
import { navLinks, site, whatsappBookUrl } from "@/lib/site";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-mint/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-16">
        <Link
          href="/"
          className="font-serif text-xl tracking-tight text-navy md:text-2xl"
        >
          Lahore Smile Center
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-navy/80 transition hover:text-coral"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappBookUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-navy bg-navy px-4 py-2 text-xs font-medium tracking-widest text-mint uppercase transition hover:border-coral hover:bg-coral md:text-sm"
        >
          Book on WhatsApp
        </a>
      </div>
      <p className="sr-only">{site.location}</p>
    </header>
  );
}
