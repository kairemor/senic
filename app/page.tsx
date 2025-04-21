"use client";

import {
  heroSection,
  servicesSection,
  aboutSection,
  footerSection,
  navigationLinks,
  contactSection,
  testimonialsSection,
} from "@/lib/data";

import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";
import ContactUs from "@/components/sections/ContactUs";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <Hero data={heroSection} />

      {/* Services Section */}

      <Services data={servicesSection} />

      {/* About Section */}
      <About data={aboutSection} />

      {/* Testimonial Services Section */}
      <Testimonials data={testimonialsSection} />

      {/* Contact Us Section */}
      <ContactUs data={contactSection} />

      {/* Footer Section */}
      <Footer
        data={footerSection}
        links={navigationLinks}
        contact={contactSection}
      />
    </main>
  );
}
