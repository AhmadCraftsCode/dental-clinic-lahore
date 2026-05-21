import { clinic, phoneHref, whatsappBookUrl } from "@/config/clinic";

export default function Footer() {
  return (
    <footer className="footer-premium px-5 sm:px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 border-t border-navy/10 py-10 sm:flex-row sm:items-end sm:justify-between sm:py-12">
          <div>
            <p className="font-serif text-xl text-navy sm:text-2xl">
              {clinic.clinicName}
            </p>
            <p className="mt-2 text-sm text-navy/55">
              {clinic.doctorName} · {clinic.pmdc}
            </p>
            <p className="mt-1 text-sm text-navy/45">
              {clinic.area}, {clinic.city}
            </p>
            <a
              href={whatsappBookUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-medium text-coral transition hover:text-navy"
            >
              Book on WhatsApp →
            </a>
          </div>
          <div className="sm:text-right">
            <a
              href={phoneHref}
              className="text-sm text-navy/70 transition hover:text-coral"
            >
              {clinic.phone}
            </a>
            <p className="mt-4 text-xs tracking-wide text-navy/40">
              © {new Date().getFullYear()} {clinic.clinicName}. All prices in
              PKR.
            </p>
          </div>
        </div>
        <p className="border-t border-navy/6 py-4 text-center text-[10px] tracking-wide text-navy/35">
          {clinic.developerCredit}
        </p>
      </div>
    </footer>
  );
}
