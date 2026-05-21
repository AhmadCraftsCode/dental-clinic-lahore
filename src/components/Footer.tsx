import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-navy/10 px-6 py-10 md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-serif text-xl text-navy">Lahore Smile Center</p>
          <p className="mt-2 text-sm text-navy/60">
            {site.doctor} · {site.location}
          </p>
        </div>
        <p className="text-xs text-navy/50">
          © {new Date().getFullYear()} Lahore Smile Center. All prices in PKR.
        </p>
      </div>
    </footer>
  );
}
