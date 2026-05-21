import { site, whatsappBookUrl } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer-premium px-6 py-12 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 border-t border-navy/12 pt-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-serif text-2xl text-navy">{site.name}</p>
            <p className="mt-2 text-sm text-navy/55">
              {site.doctor} · {site.doctorTitle}
            </p>
            <p className="mt-1 text-sm text-navy/45">{site.location}</p>
            <a
              href={whatsappBookUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-medium text-coral transition hover:text-navy"
            >
              Book on WhatsApp →
            </a>
          </div>
          <div className="text-right">
            <a
              href={site.phoneHref}
              className="text-sm text-navy/70 transition hover:text-coral"
            >
              {site.phone}
            </a>
            <p className="mt-4 text-xs tracking-wide text-navy/40">
              © {new Date().getFullYear()} {site.name}. All prices in PKR.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
