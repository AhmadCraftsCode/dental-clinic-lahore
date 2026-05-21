import { services, whatsappBookUrl } from "@/config/clinic";
import ScrollReveal from "@/components/ScrollReveal";

export default function Services() {
  return (
    <section
      id="services"
      className="section-pad border-t border-navy/8 bg-white/40"
    >
      <ScrollReveal>
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-5">
              <p className="text-xs tracking-[0.25em] text-coral uppercase">
                Services
              </p>
              <h2 className="mt-3 font-serif text-3xl text-navy sm:text-4xl md:text-5xl">
                Care tailored to your smile.
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-navy/70 sm:text-base lg:col-span-6 lg:col-start-7">
              From routine checkups to cosmetic transformations — every
              treatment plan is explained clearly with PKR estimates before you
              proceed.
            </p>
          </div>

          <ul className="mt-12 space-y-0 sm:mt-14">
            {services.map((service, i) => (
              <li
                key={service.name}
                className="service-item group grid gap-3 border-t border-navy/10 py-7 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-coral/25 hover:bg-[#fafbfc] sm:grid-cols-12 sm:items-start sm:gap-5 sm:py-8 md:px-3 md:py-9"
              >
                <span className="font-serif text-xl text-navy/25 transition-colors duration-300 group-hover:text-coral/45 sm:col-span-1 sm:text-2xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="sm:col-span-6">
                  <h3 className="font-serif text-xl text-navy transition-colors duration-300 group-hover:text-coral sm:text-2xl">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/65">
                    {service.description}
                  </p>
                </div>
                <p className="price-tag sm:col-span-2 sm:text-right">
                  {service.price}
                </p>
                <div className="sm:col-span-3 sm:text-right">
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
