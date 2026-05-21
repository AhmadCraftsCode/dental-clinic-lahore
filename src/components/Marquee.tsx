import { getMarqueeLine } from "@/config/clinic";

export default function Marquee() {
  const line = getMarqueeLine();

  return (
    <div
      className="overflow-hidden border-y border-navy/8 bg-navy py-3"
      aria-hidden
    >
      <div className="marquee-track flex w-max gap-10">
        {[0, 1].map((copy) => (
          <p
            key={copy}
            className="flex shrink-0 items-center gap-10 px-5 text-[10px] font-medium tracking-[0.2em] text-mint/90 uppercase sm:text-[11px]"
          >
            <span>{line}</span>
            <span className="text-coral/80">✦</span>
            <span>{line}</span>
            <span className="text-coral/80">✦</span>
          </p>
        ))}
      </div>
    </div>
  );
}
