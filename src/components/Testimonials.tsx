import { testimonials } from "@/lib/site";
import { getInitials } from "@/lib/utils";
import ScrollReveal from "@/components/ScrollReveal";

const avatarColors = ["bg-coral", "bg-navy", "bg-[#3d6b8e]"] as const;

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-pad border-t border-navy/8 bg-mint/30"
    >
      <ScrollReveal>
        <div className="mx-auto max-w-7xl">
          <p className="text-xs tracking-[0.25em] text-coral uppercase">
            Patient voices
          </p>
          <h2 className="mt-3 max-w-2xl font-serif text-4xl text-navy md:text-5xl">
            Lahore families who chose calm, clear care.
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <blockquote
                key={t.name}
                className={`testimonial-card relative flex flex-col justify-between p-8 md:p-9 ${
                  i === 1 ? "md:mt-8" : ""
                }`}
              >
                <span
                  className="quote-mark font-serif text-6xl leading-none text-coral/25"
                  aria-hidden
                >
                  &ldquo;
                </span>
                <p className="relative z-10 mt-2 font-serif text-lg leading-relaxed text-navy md:text-xl">
                  {t.quote}
                </p>
                <footer className="relative z-10 mt-8 flex items-center gap-4">
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-semibold tracking-wide text-white ${avatarColors[i % avatarColors.length]}`}
                  >
                    {getInitials(t.name)}
                  </span>
                  <div>
                    <cite className="not-italic font-semibold text-navy">
                      {t.name}
                    </cite>
                    <span className="block text-sm text-navy/55">{t.area}</span>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
