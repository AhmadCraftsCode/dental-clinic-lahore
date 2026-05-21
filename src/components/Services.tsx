import { services, whatsappBookUrl } from "@/lib/site";

export default function Services() {
  return (
    <section
      id="services"
      className="section-pad border-t border-navy/10 bg-white/30"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <p className="text-xs tracking-[0.25em] text-coral uppercase">
              Services
            </p>
            <h2 className="mt-3 font-serif text-4xl text-navy md:text-5xl">
              Care tailored to your smile.
            </h2>
          </div>
          <p className="text-navy/70 lg:col-span-6 lg:col-start-7">
            From routine checkups to cosmetic transformations — every treatment
            plan is explained clearly with PKR estimates before you proceed.
          </p>
        </div>

        <ul className="mt-14 divide-y divide-navy/15 border-t border-navy/15">
          {services.map((service, i) => (
            <li
              key={service.title}
              className="grid gap-4 py-8 md:grid-cols-12 md:items-start md:gap-6"
            >
              <span className="font-serif text-2xl text-navy/30 md:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="md:col-span-5">
                <h3 className="font-serif text-2xl text-navy">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/70">
                  {service.description}
                </p>
              </div>
              <p className="text-sm font-medium tracking-wide text-coral md:col-span-3 md:text-right">
                {service.price}
              </p>
              <div className="md:col-span-3 md:text-right">
                <a
                  href={whatsappBookUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-navy underline-offset-4 hover:text-coral hover:underline"
                >
                  Ask on WhatsApp →
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
