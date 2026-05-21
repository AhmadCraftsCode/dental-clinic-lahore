export const site = {
  name: "Lahore Smile Center",
  doctor: "Dr. Ahmed Raza",
  doctorTitle: "PMDC Registered",
  location: "DHA Phase 5, Lahore",
  phone: "+92 300 1234567",
  phoneHref: "tel:+923001234567",
  whatsappNumber: "923001234567",
  whatsappUrl: "https://wa.me/923001234567",
  whatsappMessage: encodeURIComponent(
    "Hello, I would like to book an appointment at Lahore Smile Center."
  ),
} as const;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
] as const;

export const services = [
  {
    title: "General Dentistry",
    description: "Checkups, fillings, and preventive care for the whole family.",
    price: "From PKR 2,500",
  },
  {
    title: "Teeth Whitening",
    description: "Professional whitening for a brighter, natural-looking smile.",
    price: "From PKR 15,000",
  },
  {
    title: "Dental Implants",
    description: "Long-lasting replacement teeth with modern implant systems.",
    price: "From PKR 85,000",
  },
  {
    title: "Orthodontics",
    description: "Braces and aligners tailored for teens and adults.",
    price: "From PKR 120,000",
  },
  {
    title: "Root Canal",
    description: "Pain relief and tooth preservation with gentle techniques.",
    price: "From PKR 12,000",
  },
  {
    title: "Cosmetic Dentistry",
    description: "Veneers, shaping, and smile design for confident results.",
    price: "From PKR 25,000",
  },
] as const;

export const whyChooseUs = [
  {
    title: "PMDC-registered care",
    body: "Treatment led by Dr. Ahmed Raza with transparent, ethical practice standards.",
  },
  {
    title: "Modern equipment",
    body: "Digital imaging and up-to-date tools for accurate diagnosis and comfort.",
  },
  {
    title: "Clear PKR pricing",
    body: "No hidden fees — estimates discussed before treatment begins.",
  },
  {
    title: "Convenient DHA location",
    body: "Easy access in DHA Phase 5 with appointment booking via WhatsApp.",
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

export function whatsappBookUrl() {
  return `${site.whatsappUrl}?text=${site.whatsappMessage}`;
}
