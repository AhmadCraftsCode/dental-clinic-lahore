import Image from "next/image";
import { images } from "@/lib/images";
import { site, whatsappBookUrl } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden lg:min-h-[95vh]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-14 md:px-10 md:pt-20 lg:grid-cols-12 lg:items-center lg:gap-8 lg:px-16 lg:pb-28 lg:pt-24">
        <div className="relative z-10 lg:col-span-5 lg:pr-4">
          <p className="mb-5 text-xs tracking-[0.28em] text-coral uppercase">
            DHA Phase 5 · Lahore
          </p>
          <h1 className="font-serif text-5xl leading-[1.02] text-navy md:text-6xl lg:text-[4.25rem] lg:leading-[1.05]">
            Thoughtful dental care for confident smiles.
          </h1>
          <p className="mt-7 max-w-md text-base leading-relaxed text-navy/75 md:text-lg">
            {site.doctor} ({site.doctorTitle}) welcomes you to a calm, premium
            clinic — appointments booked directly on WhatsApp.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href={whatsappBookUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book appointment
            </a>
            <a
              href={site.phoneHref}
              className="text-sm text-navy/80 underline-offset-4 transition hover:text-coral hover:underline"
            >
              {site.phone}
            </a>
          </div>
        </div>

        <div className="relative lg:col-span-7 lg:min-h-[640px]">
          {/* Clinic — large feature background */}
          <div className="relative h-[380px] w-full overflow-hidden shadow-[12px_20px_50px_rgba(13,27,62,0.14)] md:h-[480px] lg:absolute lg:inset-0 lg:h-full lg:min-h-[640px]">
            <Image
              src={images.clinic.src}
              alt={images.clinic.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />
            <div className="hero-gradient-overlay absolute inset-0" />
          </div>

          {/* Doctor — primary floating card */}
          <div className="absolute top-6 right-0 z-20 w-[58%] max-w-[280px] -rotate-2 overflow-hidden border border-white/40 shadow-[10px_16px_40px_rgba(13,27,62,0.2)] md:top-10 md:w-[52%] md:max-w-xs lg:top-12 lg:right-6 lg:w-[48%]">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={images.doctor.src}
                alt={images.doctor.alt}
                fill
                priority
                sizes="280px"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />
              <div className="absolute right-0 bottom-0 left-0 p-4">
                <p className="font-serif text-lg text-white md:text-xl">
                  {site.doctor}
                </p>
                <p className="text-[10px] tracking-[0.2em] text-white/75 uppercase">
                  {site.doctorTitle}
                </p>
              </div>
            </div>
          </div>

          {/* Patient — accent floating card */}
          <div className="absolute bottom-6 left-0 z-20 w-36 rotate-3 overflow-hidden border border-white/50 shadow-[8px_12px_30px_rgba(13,27,62,0.15)] md:bottom-10 md:w-44 lg:bottom-14 lg:left-8">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={images.patient.src}
                alt={images.patient.alt}
                fill
                sizes="180px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="absolute -right-1 bottom-0 z-10 hidden h-56 w-px bg-coral/80 lg:block" />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-6 border-t border-navy/10 px-6 pt-12 md:flex-row md:items-end md:justify-between md:px-10 lg:px-16">
        <div>
          <p className="font-serif text-3xl text-navy md:text-4xl">15+ years</p>
          <p className="mt-1 text-sm text-navy/55">Combined clinical experience</p>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-navy/65">
          Transparent pricing in <strong className="text-navy">PKR</strong>. Walk-ins
          welcome when slots are available — WhatsApp is the fastest way to secure
          your visit.
        </p>
      </div>
    </section>
  );
}
