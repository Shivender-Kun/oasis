import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DentalHero from "@/components/dental/DentalHero";
import TrustBar from "@/components/dental/TrustBar";
import WhyIndia from "@/components/dental/WhyIndia";
import DentalTreatments from "@/components/dental/DentalTreatments";
import PatientJourney from "@/components/dental/PatientJourney";
import WhyChooseUsDental from "@/components/dental/WhyChooseUsDental";
import BeforeAfterGallery from "@/components/dental/BeforeAfterGallery";
import VideoTestimonials from "@/components/dental/VideoTestimonials";
import TourismExperience from "@/components/dental/TourismExperience";
import DoctorProfiles from "@/components/dental/DoctorProfiles";
import DentalFAQ from "@/components/dental/DentalFAQ";
import DentalCTA from "@/components/dental/DentalCTA";

export const metadata: Metadata = {
  title: "Premium Dental Tourism in India | Save 70% on Implants & Veneers",
  description: "World-class dental treatments in India for international patients. Affordable dental implants, smile makeovers, and full mouth rehabilitation with VIP concierge services.",
  keywords: "dental tourism India, affordable dental care India, dental implants India, smile makeover India, veneers India, medical tourism India",
};

export default function DentalTourismPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is dental treatment in India safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Our partner clinics are NABH and ISO certified, strictly adhering to international sterilization standards."
        }
      },
      {
        "@type": "Question",
        "name": "How much can I save?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "International patients typically save between 60% to 70% on major procedures like full-mouth implants and veneers."
        }
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Oasis Care Dental",
    "image": "https://images.unsplash.com/photo-1590680424564-927160751167?auto=format&fit=crop&w=800&q=80",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "medicalSpecialty": [
      "https://schema.org/Dentistry"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <main>
        <Navbar theme="light" />
        <DentalHero />
        <TrustBar />
        <WhyIndia />
        <DentalTreatments />
        <PatientJourney />
        <WhyChooseUsDental />
        <BeforeAfterGallery />
        <VideoTestimonials />
        <TourismExperience />
        <DoctorProfiles />
        <DentalFAQ />
        <DentalCTA />

        {/* Floating WhatsApp Button */}
        {/* <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="whatsapp-float"
          style={{
            position: "fixed",
            bottom: 32,
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
        >
          <i className="fa-brands fa-whatsapp" />
        </a> */}

        {/* <style>{`
          .whatsapp-float:hover {
            transform: translateY(-4px);
            boxShadow: 0 8px 28px rgba(37,211,102,0.6);
          }
        `}</style> */}

        <Footer />
      </main>
    </>
  );
}
