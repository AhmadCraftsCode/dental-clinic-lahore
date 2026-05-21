import Image from "next/image";
import {
  clinic,
  locationLine,
  phoneHref,
  whatsappBookUrl,
} from "@/config/clinic";
import { images } from "@/lib/images";

export default function Hero() {
  return (
    <section className="section-hero relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16 xl:gap-20">
          {/* Copy — first on mobile */}
          <div className="order-1 max-w-xl">
            <p className="mb-4 text-xs tracking-[0.28em] text-coral uppercase sm:mb-5">
              {locationLine}
            </p>
            <h1 className="font-serif text-4xl leading-[1.08] text-navy sm:text-5xl md:text-6xl lg:text-[3.5rem] lg:leading-[1.05]">
              {clinic.tagline}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-navy/75 sm:mt-7 sm:text-lg">
              {clinic.doctorName} ({clinic.pmdc}) {clinic.heroSubtext}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10 sm:gap-5">
              <a
                href={whatsappBookUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book appointment
              </a>
              <a
                href={phoneHref}
                className="text-sm text-navy/75 underline-offset-4 transition hover:text-coral hover:underline"
              >
                {clinic.phone}
              </a>
            </div>
          </div>

          {/* Visual — stacked cleanly, no overlap */}
          <div className="order-2 flex w-full flex-col items-center gap-6 sm:gap-7 lg:items-end lg:gap-0">
            {/* Doctor — main 3:4 portrait */}
            <div className="relative w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[380px]">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-[0_24px_60px_rgba(13,27,62,0.18)]">
                <Image
                  src={images.doctor.src}
                  alt={images.doctor.alt}
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 340px, 380px"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-navy/5 to-transparent" />
                <div className="absolute right-0 bottom-0 left-0 p-5 sm:p-6">
                  <p className="font-serif text-xl text-white sm:text-2xl">
                    {clinic.doctorName}
                  </p>
                  <p className="mt-1 text-[10px] tracking-[0.2em] text-white/80 uppercase">
                    {clinic.pmdc}
                  </p>
                </div>
              </div>
            </div>

            {/* Clinic — smaller card below & left on desktop */}
            <div className="w-full max-w-[220px] sm:max-w-[240px] lg:-mt-10 lg:mr-auto lg:ml-6 lg:self-start xl:ml-10">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border-4 border-white shadow-[0_12px_32px_rgba(13,27,62,0.12)]">
                <Image
                  src={images.clinic.src}
                  alt={images.clinic.alt}
                  fill
                  sizes="240px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-14 flex flex-col gap-5 border-t border-navy/10 pt-10 sm:mt-16 sm:flex-row sm:items-end sm:justify-between md:mt-20 md:pt-12">
          <div>
            <p className="font-serif text-3xl text-navy md:text-4xl">
              {clinic.yearsExperience} years
            </p>
            <p className="mt-1 text-sm text-navy/55">
              {clinic.experienceLabel}
            </p>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-navy/65">
            Transparent pricing in <strong className="text-navy">PKR</strong>.
            Walk-ins welcome when slots are available — WhatsApp is the fastest
            way to secure your visit.
          </p>
        </div>
      </div>
    </section>
  );
}
