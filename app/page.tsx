"use client";

import {
  heroSection,
  servicesSection,
  aboutSection,
  footerSection,
  navigationLinks,
  contactSection,
  testimonialsSection,
  heroSection2,
  aimSection,
} from "@/lib/data";

import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";
import ContactUs from "@/components/sections/ContactUs";
import Testimonials from "@/components/sections/Testimonials";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import HeroSection from "@/components/sections/HeroSection";
import SocialSidebar from "@/components/SocialSidebar";
import Aims from "@/components/sections/Aim";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  // Track scroll position for parallax effects and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Find the active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          const sectionId = section.getAttribute("id");
          if (sectionId) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar links={navigationLinks} activeSection={activeSection} />

      <main className="flex min-h-screen flex-col">
        <SocialSidebar />
        {/* Hero Section */}
        <Hero data={heroSection} />
        {/* <HeroSection data={heroSection2} scrollY={scrollY} /> */}
        {/* Services Section */}
        <Services data={servicesSection} />
        {/* About Section */}
        <About data={aboutSection} />
        <Aims data={aimSection} />
        {/* Testimonial Services Section */}
        <Testimonials data={testimonialsSection} />
        {/* Contact Us Section */}
        <ContactUs data={contactSection} />
      </main>
      {/* Footer Section */}
      <Footer
        data={footerSection}
        links={navigationLinks}
        contact={contactSection}
      />
      <ScrollToTop />
    </div>
  );
}
