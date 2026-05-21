import { testimonials } from "@/lib/site";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad border-t border-navy/10">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs tracking-[0.25em] text-coral uppercase">
          Patient voices
        </p>
        <h2 className="mt-3 max-w-xl font-serif text-4xl text-navy md:text-5xl">
          Lahore families who chose calm, clear care.
        </h2>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <blockquote
              key={t.name}
              className={`flex flex-col justify-between border-t-2 border-navy pt-6 ${
                i === 1 ? "md:mt-10" : ""
              }`}
            >
              <p className="font-serif text-lg leading-relaxed text-navy">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-6 text-sm text-navy/60">
                <cite className="not-italic font-medium text-navy">
                  {t.name}
                </cite>
                <span className="block">{t.area}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
