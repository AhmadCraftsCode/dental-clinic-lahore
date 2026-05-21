import { services, whatsappBookUrl } from "@/lib/site";
import ScrollReveal from "@/components/ScrollReveal";

export default function Services() {
  return (
    <section
      id="services"
      className="section-pad border-t border-navy/8 bg-white/50"
    >
      <ScrollReveal>
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-5">
              <p className="text-xs tracking-[0.25em] text-coral uppercase">
                Services
              </p>
              <h2 className="mt-3 font-serif text-4xl text-navy md:text-5xl lg:text-[3.25rem]">
                Care tailored to your smile.
              </h2>
            </div>
            <p className="text-base leading-relaxed text-navy/70 lg:col-span-6 lg:col-start-7">
              From routine checkups to cosmetic transformations — every treatment
              plan is explained clearly with PKR estimates before you proceed.
            </p>
          </div>

          <ul className="mt-14 space-y-0">
            {services.map((service, i) => (
              <li
                key={service.title}
                className="service-item group grid gap-4 border-t border-navy/10 py-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-coral/30 hover:bg-white/80 md:grid-cols-12 md:items-start md:gap-6 md:px-4 md:py-9"
              >
                <span className="font-serif text-2xl text-navy/25 transition-colors group-hover:text-coral/50 md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="md:col-span-5">
                  <h3 className="font-serif text-2xl text-navy transition-colors group-hover:text-coral md:text-[1.65rem]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/65 transition-colors group-hover:text-navy/80">
                    {service.description}
                  </p>
                </div>
                <p className="price-tag md:col-span-3 md:text-right">
                  {service.price}
                </p>
                <div className="md:col-span-3 md:text-right">
                  <a
                    href={whatsappBookUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex text-sm font-medium text-navy/70 underline-offset-4 transition hover:text-coral hover:underline"
                  >
                    Ask on WhatsApp →
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </ScrollReveal>
    </section>
  );
}
