"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import Treatments from "@/components/Treatments";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Trust from "@/components/Trust";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main>
      <Navbar />
      <Hero />
      <WhyUs />
      <Treatments />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <Trust />
      <CTA />
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        style={{
          position: "fixed",
          bottom: showTopBtn ? 96 : 32,
          right: 32,
          width: 56,
          height: 56,
          background: "#25D366",
          color: "#fff",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 28,
          boxShadow: "0 4px 16px rgba(37,211,102,0.4)",
          zIndex: 900,
          transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-4px)";
          e.currentTarget.style.boxShadow = "0 8px 28px rgba(37,211,102,0.6)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "none";
          e.currentTarget.style.boxShadow = "0 4px 16px rgba(37,211,102,0.4)";
        }}
      >
        <i className="fa-brands fa-whatsapp" />
      </a>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`back-to-top ${showTopBtn ? "visible" : ""}`}
        aria-label="Back to top"
      >
        <i className="fa-solid fa-chevron-up" />
      </button>
    </main>
  );
}
