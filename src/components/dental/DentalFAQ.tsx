"use client";
import { useState } from "react";

export default function DentalFAQ() {
  const faqs = [
    { q: "Is dental treatment in India safe?", a: "Absolutely. Our partner clinics are NABH and ISO certified, strictly adhering to international sterilization standards like Class-B autoclaving. We use the same premium materials (like Nobel Biocare, Straumann, E-max) used in the US and UK." },
    { q: "How much can I save?", a: "International patients typically save between 60% to 70% on major procedures like full-mouth implants and veneers, even after factoring in flights and accommodation." },
    { q: "How long should I stay in India?", a: "This depends on the treatment. A smile makeover or single implant can take 5-7 days. Full mouth rehabilitation might require 10-14 days. We provide an exact timeline during your video consultation." },
    { q: "Do you assist with accommodation?", a: "Yes. We offer complete concierge services, including airport transfers, booking 4 or 5-star recovery-friendly hotels, and assigning a dedicated local care coordinator." },
    { q: "Will I need multiple visits?", a: "For some advanced implant procedures, a second visit after 3-6 months may be required for the permanent prosthesis. However, many treatments, including basal implants and veneers, are completed in a single trip." },
    { q: "What happens after I return home?", a: "We provide comprehensive post-treatment guidelines and schedule regular follow-up video consultations to monitor your healing and ensure complete satisfaction." },
    { q: "Are your dentists internationally trained?", a: "Yes, our specialists hold advanced degrees (MDS) and international certifications from prestigious bodies in the USA, UK, and Europe, with 10-20+ years of experience." },
    { q: "Can I get a treatment estimate online?", a: "Yes! Simply share your OPG (dental X-ray) and some photos through our secure portal or WhatsApp, and our specialists will provide a detailed treatment plan and cost estimate within 48 hours." }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section" style={{ background: "var(--gray-50)" }}>
      <div className="container" style={{ maxWidth: 800 }}>
        <div className="section-header">
          <span className="section-tag fade-in">Got Questions?</span>
          <h2 className="section-title fade-in">
            Frequently Asked <span className="highlight">Questions</span>
          </h2>
        </div>

        <div className="fade-in" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              style={{ 
                background: "#fff", 
                borderRadius: 16, 
                border: "1px solid var(--gray-200)",
                overflow: "hidden",
                boxShadow: openIndex === i ? "0 10px 30px rgba(15,25,35,0.05)" : "none",
                transition: "all 0.3s"
              }}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{ 
                  width: "100%", 
                  padding: "24px 32px", 
                  display: "flex", 
                  justifyContent: "space-between", 
                  alignItems: "center", 
                  background: "transparent", 
                  border: "none", 
                  cursor: "pointer",
                  textAlign: "left"
                }}
              >
                <span style={{ fontSize: 16, fontWeight: 700, color: openIndex === i ? "var(--primary-dark)" : "var(--gray-800)" }}>{faq.q}</span>
                <i className={`fa-solid fa-chevron-${openIndex === i ? "up" : "down"}`} style={{ color: openIndex === i ? "var(--primary)" : "var(--gray-400)", transition: "transform 0.3s" }} />
              </button>
              
              <div style={{ 
                maxHeight: openIndex === i ? 500 : 0, 
                opacity: openIndex === i ? 1 : 0, 
                transition: "all 0.3s ease-in-out",
                padding: openIndex === i ? "0 32px 24px 32px" : "0 32px"
              }}>
                <p style={{ fontSize: 15, color: "var(--gray-600)", lineHeight: 1.7, margin: 0, paddingTop: 16, borderTop: "1px solid var(--gray-100)" }}>
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
