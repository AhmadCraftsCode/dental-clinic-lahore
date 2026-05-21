import { clinic, whyChooseUs } from "@/config/clinic";
import ScrollReveal from "@/components/ScrollReveal";

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-pad">
      <ScrollReveal>
        <div className="mx-auto max-w-7xl">
          <p className="text-xs tracking-[0.25em] text-coral uppercase">
            Why choose us
          </p>
          <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-navy sm:text-4xl md:text-5xl">
            A premium clinic built on trust.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-navy/65 sm:text-base">
            {clinic.clinicName} combines {clinic.pmdc.toLowerCase()} expertise
            under {clinic.doctorName} with modern technology in {clinic.area},{" "}
            {clinic.city}.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 sm:gap-8 lg:mt-14 lg:grid-cols-4">
            {whyChooseUs.map((item, i) => (
              <article
                key={item.title}
                className={`rounded-lg border border-navy/8 bg-white/70 p-6 shadow-sm transition duration-300 hover:border-coral/20 hover:shadow-md sm:p-7 ${i % 2 === 1 ? "sm:mt-4 lg:mt-0" : ""}`}
              >
                <h3 className="font-serif text-lg text-navy sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/65">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
