import {
  clinic,
  fullAddress,
  phoneHref,
  whatsappBookUrl,
} from "@/config/clinic";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactCTA() {
  return (
    <section id="contact" className="section-pad bg-navy text-mint">
      <ScrollReveal>
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="lg:col-span-7">
            <p className="text-xs tracking-[0.25em] text-coral uppercase">
              Visit us
            </p>
            <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
              Ready for your next appointment?
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-mint/80 sm:text-base">
              No online forms — message us on WhatsApp and our team will
              confirm your slot at {clinic.clinicName}, {clinic.area}.
            </p>
          </div>

          <div className="space-y-5 text-sm sm:text-base lg:col-span-5 lg:text-right">
            <p>
              <span className="text-mint/45">Doctor</span>
              <br />
              <strong>{clinic.doctorName}</strong> · {clinic.pmdc}
            </p>
            <p>
              <span className="text-mint/45">Address</span>
              <br />
              {fullAddress}
            </p>
            <p>
              <span className="text-mint/45">Phone</span>
              <br />
              <a href={phoneHref} className="transition hover:text-coral">
                {clinic.phone}
              </a>
            </p>
            <p>
              <span className="text-mint/45">Email</span>
              <br />
              <a
                href={`mailto:${clinic.email}`}
                className="transition hover:text-coral"
              >
                {clinic.email}
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
