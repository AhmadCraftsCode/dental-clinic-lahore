import { site, whatsappBookUrl } from "@/lib/site";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactCTA() {
  return (
    <section id="contact" className="section-pad bg-navy text-mint">
      <ScrollReveal>
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="text-xs tracking-[0.25em] text-coral uppercase">
              Visit us
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl lg:text-[3.25rem]">
              Ready for your next appointment?
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-mint/80">
              No online forms — message us on WhatsApp and our team will confirm
              your slot at {site.location}.
            </p>
          </div>

          <div className="space-y-5 text-sm lg:col-span-5 lg:text-right">
            <p>
              <span className="text-mint/45">Doctor</span>
              <br />
              <strong className="text-base">{site.doctor}</strong> ·{" "}
              {site.doctorTitle}
            </p>
            <p>
              <span className="text-mint/45">Location</span>
              <br />
              {site.location}
            </p>
            <p>
              <span className="text-mint/45">Phone</span>
              <br />
              <a
                href={site.phoneHref}
                className="transition hover:text-coral"
              >
                {site.phone}
              </a>
            </p>
            <a
              href={whatsappBookUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-2 inline-block !bg-coral hover:!bg-mint hover:!text-navy"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
