import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
