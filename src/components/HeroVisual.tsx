type HeroVisualVariant = "doctor" | "clinic" | "smile" | "treatment";

const variants: Record<
  HeroVisualVariant,
  {
    label: string;
    subtitle: string;
    gradient: string;
    pattern: string;
    iconBg: string;
    iconColor: string;
  }
> = {
  doctor: {
    label: "Dr. Ahmed Raza",
    subtitle: "PMDC Registered",
    gradient: "from-navy via-[#152a5c] to-[#2d4a7c]",
    pattern: "visual-pattern-dots",
    iconBg: "bg-coral/20",
    iconColor: "text-coral",
  },
  clinic: {
    label: "Modern clinic",
    subtitle: "DHA Phase 5",
    gradient: "from-[#b8dce8] via-[#d4ebf2] to-mint",
    pattern: "visual-pattern-grid",
    iconBg: "bg-navy/10",
    iconColor: "text-navy",
  },
  smile: {
    label: "Healthy smiles",
    subtitle: "Cosmetic care",
    gradient: "from-coral/90 via-[#f49a7a] to-[#fbd4c8]",
    pattern: "visual-pattern-waves",
    iconBg: "bg-white/25",
    iconColor: "text-white",
  },
  treatment: {
    label: "Treatment suite",
    subtitle: "Comfort-first care",
    gradient: "from-mint via-white to-[#c5e8f0]",
    pattern: "visual-pattern-cross",
    iconBg: "bg-navy/8",
    iconColor: "text-navy",
  },
};

function ToothIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 56"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M24 4c-8 0-14 6-14 14 0 5 2 10 4 16 2 5 3 12 3 18 0 2 1.5 4 3.5 4h1c2 0 3.5-2 3.5-4 0-2 1-4 3-4s3 2 3 4c0 2 1.5 4 3.5 4h1c2 0 3.5-2 3.5-4 0-6 1-13 3-18 2-6 4-11 4-16C38 10 32 4 24 4z" />
    </svg>
  );
}

function ClinicIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
      aria-hidden
    >
      <path d="M8 44V18l16-12 16 12v26" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="18" y="26" width="12" height="18" rx="1" />
      <path d="M24 14v6M21 17h6" strokeLinecap="round" />
    </svg>
  );
}

function SmileIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
      aria-hidden
    >
      <circle cx="24" cy="24" r="20" />
      <path d="M14 28c2.5 6 7 9 10 9s7.5-3 10-9" strokeLinecap="round" />
      <path d="M16 20h.01M32 20h.01" strokeLinecap="round" strokeWidth="3" />
      <path d="M14 18h4M30 18h4" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

function ChairIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
      aria-hidden
    >
      <path
        d="M12 38V22a8 8 0 0116 0v16M10 38h20M28 22h8a4 4 0 014 4v6a4 4 0 01-4 4h-4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="14" r="6" />
      <path d="M8 44h32" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

const icons: Record<HeroVisualVariant, typeof ToothIcon> = {
  doctor: ToothIcon,
  clinic: ClinicIcon,
  smile: SmileIcon,
  treatment: ChairIcon,
};

export default function HeroVisual({
  variant,
  className = "",
  compact = false,
}: {
  variant: HeroVisualVariant;
  className?: string;
  compact?: boolean;
}) {
  const config = variants[variant];
  const Icon = icons[variant];
  const lightText = variant === "doctor" || variant === "smile";

  return (
    <div
      className={`relative overflow-hidden border border-navy/10 shadow-[8px_12px_0_0_rgba(13,27,62,0.08)] ${className}`}
      role="img"
      aria-label={`${config.label} — ${config.subtitle}`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${config.gradient}`}
      />
      <div className={`absolute inset-0 ${config.pattern} opacity-60`} />

      {/* Decorative secondary icon watermark */}
      <div className="pointer-events-none absolute -right-4 -bottom-4 opacity-[0.07]">
        <Icon className="h-32 w-32 text-navy" />
      </div>

      <div
        className={`relative flex h-full flex-col justify-between ${compact ? "p-3" : "p-5 md:p-6"}`}
      >
        <div
          className={`flex items-center justify-center rounded-full ${config.iconBg} ${compact ? "h-10 w-10 self-start" : "h-14 w-14 md:h-16 md:w-16"}`}
        >
          <Icon
            className={`${config.iconColor} ${compact ? "h-5 w-5" : "h-7 w-7 md:h-8 md:w-8"}`}
          />
        </div>

        <div className={compact ? "mt-2" : "mt-auto"}>
          <p
            className={`font-serif leading-tight ${
              compact
                ? `text-sm ${lightText ? "text-white" : "text-navy"}`
                : lightText
                  ? "text-xl text-white md:text-2xl"
                  : "text-lg text-navy md:text-xl"
            }`}
          >
            {config.label}
          </p>
          <p
            className={`mt-0.5 tracking-widest uppercase ${
              compact
                ? `text-[10px] ${lightText ? "text-white/75" : "text-navy/50"}`
                : lightText
                  ? "text-xs text-white/75"
                  : "text-xs text-navy/55"
            }`}
          >
            {config.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
