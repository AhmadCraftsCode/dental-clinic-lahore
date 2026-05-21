import { marqueeItems } from "@/lib/site";

export default function Marquee() {
  const line = marqueeItems.join(" · ");

  return (
    <div
      className="overflow-hidden border-y border-navy/10 bg-navy py-3.5"
      aria-hidden
    >
      <div className="marquee-track flex w-max gap-12">
        {[0, 1].map((copy) => (
          <p
            key={copy}
            className="flex shrink-0 items-center gap-12 px-6 text-xs font-medium tracking-[0.22em] text-mint uppercase"
          >
            <span>{line}</span>
            <span className="text-coral">✦</span>
            <span>{line}</span>
            <span className="text-coral">✦</span>
          </p>
        ))}
      </div>
    </div>
  );
}
