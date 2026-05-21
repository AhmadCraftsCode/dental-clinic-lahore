import { site, whatsappBookUrl } from "@/lib/site";
import HeroVisual from "@/components/HeroVisual";

export default function Hero() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:items-center lg:gap-6">
        <div className="relative z-10 lg:col-span-5 lg:pr-6">
          <p className="mb-4 text-xs tracking-[0.25em] text-coral uppercase">
            DHA Phase 5 · Lahore
          </p>
          <h1 className="font-serif text-5xl leading-[1.05] text-navy md:text-6xl lg:text-7xl">
            Thoughtful dental care for confident smiles.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-navy/75 md:text-lg">
            {site.doctor} ({site.doctorTitle}) welcomes you to a calm, modern
            clinic — appointments booked directly on WhatsApp.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={whatsappBookUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-coral px-6 py-3 text-sm font-medium tracking-widest text-white uppercase transition hover:bg-navy"
            >
              Book appointment
            </a>
            <a
              href={site.phoneHref}
              className="text-sm text-navy/80 underline-offset-4 hover:text-coral hover:underline"
            >
              {site.phone}
            </a>
          </div>
        </div>

        <div className="relative lg:col-span-7 lg:min-h-[520px]">
          <HeroVisual
            variant="doctor"
            className="relative z-10 ml-auto h-[340px] w-[78%] max-w-md rotate-1 md:h-[420px] lg:absolute lg:right-0 lg:top-8 lg:h-[460px] lg:w-[72%]"
          />

          <HeroVisual
            variant="clinic"
            compact
            className="absolute top-0 left-0 z-20 h-28 w-36 -rotate-6 md:h-32 md:w-44"
          />

          <HeroVisual
            variant="smile"
            compact
            className="absolute top-6 right-4 z-20 h-24 w-28 rotate-3 md:right-8 md:h-28 md:w-32"
          />

          <HeroVisual
            variant="treatment"
            compact
            className="absolute bottom-8 left-4 z-20 h-28 w-32 rotate-2 md:bottom-12 md:left-8 md:h-32 md:w-40"
          />

          <div className="absolute -right-2 bottom-0 hidden h-48 w-px bg-coral lg:block" />
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col gap-6 border-t border-navy/15 pt-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-serif text-3xl text-navy">15+ years</p>
          <p className="text-sm text-navy/60">Combined clinical experience</p>
        </div>
        <div className="max-w-sm text-sm leading-relaxed text-navy/70">
          Transparent pricing in <strong>PKR</strong>. Walk-ins welcome when
          slots are available — WhatsApp is the fastest way to secure your visit.
        </div>
      </div>
    </section>
  );
}
