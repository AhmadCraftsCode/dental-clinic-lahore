import Image from "next/image";
import { images } from "@/lib/images";
import { whyChooseUs } from "@/lib/site";
import ScrollReveal from "@/components/ScrollReveal";

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-pad">
      <ScrollReveal>
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className="relative lg:col-span-5">
              <div className="relative aspect-[4/5] max-h-[560px] w-full overflow-hidden shadow-[12px_24px_48px_rgba(13,27,62,0.12)]">
                <Image
                  src={images.patient.src}
                  alt={images.patient.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
                <p className="absolute bottom-5 left-5 font-serif text-xl text-white md:text-2xl">
                  Patients who trust us
                </p>
              </div>
              <div className="absolute -right-4 -bottom-4 -z-10 h-full w-full border border-coral/30" />
            </div>

            <div className="lg:col-span-7">
              <p className="text-xs tracking-[0.25em] text-coral uppercase">
                Why choose us
              </p>
              <h2 className="mt-3 font-serif text-4xl leading-tight text-navy md:text-5xl">
                A premium clinic built on trust.
              </h2>

              <div className="mt-12 grid gap-8 sm:grid-cols-2">
                {whyChooseUs.map((item, i) => (
                  <article
                    key={item.title}
                    className={`rounded-sm border border-navy/8 bg-white/60 p-6 transition hover:border-coral/25 hover:shadow-md ${i % 2 === 1 ? "sm:mt-6" : ""}`}
                  >
                    <h3 className="font-serif text-xl text-navy">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-navy/65">
                      {item.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
