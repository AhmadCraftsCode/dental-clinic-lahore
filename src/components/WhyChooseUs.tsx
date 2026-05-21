import { whyChooseUs } from "@/lib/site";

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-pad">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <p className="text-xs tracking-[0.25em] text-coral uppercase">
              Why choose us
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-navy md:text-5xl">
              A clinic built on trust, not templates.
            </h2>
          </div>

          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:mt-0">
            {whyChooseUs.map((item, i) => (
              <article
                key={item.title}
                className={`border-l-2 border-coral pl-6 ${i % 2 === 1 ? "lg:mt-12" : ""}`}
              >
                <h3 className="font-serif text-xl text-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/70">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
