/**
 * ═══════════════════════════════════════════════════════════════════
 *  CLINIC CONFIG — Edit this file to rebrand the entire website
 * ═══════════════════════════════════════════════════════════════════
 */

export const clinic = {
  clinicName: "Smile Studio",
  doctorName: "Dr. Ahmed Raza",
  phone: "+92 300 1234567",
  whatsappNumber: "923001234567",
  email: "hello@smilestudio.pk",
  address: "Commercial Block, Street 12",
  area: "DHA Phase 5",
  city: "Lahore",
  country: "Pakistan",
  pmdc: "PMDC Registered",
  tagline: "Thoughtful dental care for confident smiles.",
  heroSubtext:
    "welcomes you to a calm, premium clinic — appointments booked directly on WhatsApp.",
  yearsExperience: "15+",
  experienceLabel: "Combined clinical experience",
  developerCredit: "Website by Ahmad",
  mapLink: "https://maps.google.com/?q=DHA+Phase+5+Lahore",
} as const;

export const services = [
  {
    name: "General Dentistry",
    description:
      "Checkups, fillings, and preventive care for the whole family.",
    price: "From PKR 2,500",
  },
  {
    name: "Teeth Whitening",
    description:
      "Professional whitening for a brighter, natural-looking smile.",
    price: "From PKR 15,000",
  },
  {
    name: "Dental Implants",
    description:
      "Long-lasting replacement teeth with modern implant systems.",
    price: "From PKR 85,000",
  },
  {
    name: "Orthodontics",
    description: "Braces and aligners tailored for teens and adults.",
    price: "From PKR 120,000",
  },
  {
    name: "Root Canal",
    description: "Pain relief and tooth preservation with gentle techniques.",
    price: "From PKR 12,000",
  },
  {
    name: "Cosmetic Dentistry",
    description: "Veneers, shaping, and smile design for confident results.",
    price: "From PKR 25,000",
  },
] as const;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
] as const;

export const whyChooseUs = [
  {
    title: "PMDC-registered care",
    body: `Treatment led by ${clinic.doctorName} with transparent, ethical practice standards.`,
  },
  {
    title: "Modern equipment",
    body:
      "Digital imaging and up-to-date tools for accurate diagnosis and comfort.",
  },
  {
    title: "Clear PKR pricing",
    body: "No hidden fees — estimates discussed before treatment begins.",
  },
  {
    title: "Convenient location",
    body: `Easy access in ${clinic.area} with appointment booking via WhatsApp.`,
  },
] as const;

export const testimonials = [
  {
    quote:
      "Very professional and calm. My root canal was much easier than I expected.",
    name: "Sana K.",
    area: "DHA, Lahore",
  },
  {
    quote:
      "Whitening results looked natural, not overdone. Staff explained every step.",
    name: "Hassan M.",
    area: "Gulberg",
  },
  {
    quote:
      "Booked on WhatsApp and got a same-week slot. Clean clinic and fair pricing.",
    name: "Ayesha R.",
    area: "Bahria Town",
  },
] as const;

/** Builds the marquee strip from live clinic config */
export function getMarqueeLine() {
  return [
    clinic.pmdc,
    clinic.area,
    "WhatsApp Booking",
    "Transparent Pricing",
    `${clinic.yearsExperience} Years Experience`,
    `${clinic.city}'s Trusted Clinic`,
  ].join(" · ");
}

export const images = {
  doctor: "/doctor.jpg",
  clinic: "/clinic.jpg",
  patient: "/patient.jpg",
} as const;

export const seo = {
  title: `${clinic.clinicName} | Premium Dental Clinic in ${clinic.area}, ${clinic.city}`,
  description: `${clinic.pmdc} dental care by ${clinic.doctorName} at ${clinic.clinicName}, ${clinic.area}, ${clinic.city}. Book appointments via WhatsApp.`,
} as const;

/** Derived values — update clinic config above, not these */
export const phoneHref = `tel:${clinic.phone.replace(/\s/g, "")}`;
export const whatsappUrl = `https://wa.me/${clinic.whatsappNumber}`;
export const whatsappMessage = encodeURIComponent(
  `Hello, I would like to book an appointment at ${clinic.clinicName}.`
);
export const fullAddress = `${clinic.address}, ${clinic.area}, ${clinic.city}`;
export const locationLine = `${clinic.area}, ${clinic.city}`;

export function whatsappBookUrl() {
  return `${whatsappUrl}?text=${whatsappMessage}`;
}
