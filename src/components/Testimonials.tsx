import Image from "next/image";
import { clinic, testimonials } from "@/config/clinic";
import { images } from "@/lib/images";
import { getInitials } from "@/lib/utils";
import ScrollReveal from "@/components/ScrollReveal";

const avatarColors = ["bg-coral", "bg-navy", "bg-[#3d6b8e]"] as const;

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-pad border-t border-navy/8 bg-mint/25"
    >
      <ScrollReveal>
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
            <div className="lg:col-span-4">
              <p className="text-xs tracking-[0.25em] text-coral uppercase">
                Patient voices
              </p>
              <h2 className="mt-3 font-serif text-3xl text-navy sm:text-4xl md:text-5xl">
                Families in {clinic.city} who trust {clinic.clinicName}
              </h2>
              <div className="relative mt-8 aspect-[4/5] w-full max-w-xs overflow-hidden rounded-xl shadow-md sm:max-w-sm">
                <Image
                  src={images.patient.src}
                  alt={images.patient.alt}
                  fill
                  sizes="(max-width: 1024px) 280px, 320px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid gap-6 sm:gap-8 lg:col-span-8 lg:grid-cols-2 xl:grid-cols-3">
              {testimonials.map((t, i) => (
                <blockquote
                  key={t.name}
                  className={`testimonial-card relative flex flex-col justify-between p-6 sm:p-7 ${
                    i === 2 ? "lg:col-span-2 xl:col-span-1" : ""
                  }`}
                >
                  <span
                    className="quote-mark font-serif text-5xl leading-none text-coral/20 sm:text-6xl"
                    aria-hidden
                  >
                    &ldquo;
                  </span>
                  <p className="relative z-10 mt-1 font-serif text-base leading-relaxed text-navy sm:text-lg">
                    {t.quote}
                  </p>
                  <footer className="relative z-10 mt-6 flex items-center gap-3 sm:mt-8">
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white sm:h-12 sm:w-12 sm:text-sm ${avatarColors[i % avatarColors.length]}`}
                    >
                      {getInitials(t.name)}
                    </span>
                    <div>
                      <cite className="not-italic font-semibold text-navy">
                        {t.name}
                      </cite>
                      <span className="block text-sm text-navy/50">
                        {t.area}
                      </span>
                    </div>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
