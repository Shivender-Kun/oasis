"use client";
import { useEffect } from "react";

export default function DentalHero() {
  useEffect(() => {
    // Initial hero fade-in
    const fadeEls = document.querySelectorAll('.hero-fade-in');
    fadeEls.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('visible');
      }, 100 * index);
    });

    // Scroll fade-in for the rest of the page
    const els = document.querySelectorAll(".fade-in");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { 
        if (e.isIntersecting) { 
          e.target.classList.add("visible"); 
          obs.unobserve(e.target); 
        } 
      }),
      { rootMargin: "0px 0px -60px 0px", threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  }, []);

  return (
    <section className="section" style={{ 
      position: "relative", 
      paddingTop: "160px", 
      paddingBottom: "80px",
      background: "linear-gradient(135deg, #f8fbfb 0%, #eef6f5 100%)",
      overflow: "hidden"
    }}>
      {/* Premium background blobs */}
      <div style={{ position: "absolute", top: -100, right: -100, width: 600, height: 600, background: "radial-gradient(circle, rgba(31, 175, 139, 0.08) 0%, transparent 70%)", borderRadius: "50%", zIndex: 0 }} />
      <div style={{ position: "absolute", bottom: -150, left: -100, width: 500, height: 500, background: "radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%)", borderRadius: "50%", zIndex: 0 }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 64, alignItems: "center" }}>
          
          {/* LEFT SIDE */}
          <div>
            <div className="hero-fade-in fade-in" style={{ display: "inline-block", background: "rgba(31,175,139,0.1)", color: "var(--primary-dark)", padding: "6px 16px", borderRadius: 9999, fontSize: 13, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", marginBottom: 24 }}>
              Premium Dental Tourism
            </div>
            
            <h1 className="hero-fade-in fade-in" style={{ fontSize: "clamp(40px, 5vw, 56px)", fontWeight: 800, lineHeight: 1.15, color: "var(--gray-900)", marginBottom: 24 }}>
              World-Class <span className="highlight">Dental Care</span> in India at Affordable Prices
            </h1>
            
            <p className="hero-fade-in fade-in" style={{ fontSize: 18, color: "var(--gray-600)", lineHeight: 1.7, marginBottom: 32, maxWidth: 540 }}>
              Save up to 70% on dental treatments while receiving internationally accredited care from experienced specialists.
            </p>

            {/* Trust Pills */}
            <div className="hero-fade-in fade-in" style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 40 }}>
              {[
                { icon: "fa-earth-americas", text: "10,000+ International Patients" },
                { icon: "fa-microchip", text: "Advanced Digital Dentistry" },
                { icon: "fa-language", text: "English-Speaking Specialists" },
                { icon: "fa-plane-arrival", text: "Airport & Stay Assistance" }
              ].map((pill, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, background: "#fff", padding: "8px 16px", borderRadius: 9999, fontSize: 13, fontWeight: 600, color: "var(--gray-700)", boxShadow: "0 2px 8px rgba(15,25,35,0.04)", border: "1px solid var(--gray-100)" }}>
                  <i className={`fa-solid ${pill.icon}`} style={{ color: "var(--primary)" }} />
                  {pill.text}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="hero-fade-in fade-in" style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
              <a href="#consultation" className="btn btn-primary btn-lg" style={{ boxShadow: "0 10px 30px var(--primary-glow)" }}>
                <i className="fa-solid fa-calendar-check" /> Book Free Consultation
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-lg" style={{ background: "#fff" }}>
                <i className="fa-brands fa-whatsapp" style={{ color: "#25D366" }} /> WhatsApp Us
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="hero-fade-in fade-in" style={{ position: "relative" }}>
            {/* Main Image Container */}
            <div style={{ position: "relative", borderRadius: 24, overflow: "hidden", boxShadow: "0 24px 60px rgba(15,25,35,0.1)", aspectRatio: "4/5", background: "var(--gray-200)" }}>
              {/* Premium Placeholder Image */}
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80" 
                alt="Smiling international dental patient in a modern clinic" 
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,25,35,0.4) 0%, transparent 40%)" }} />
            </div>

            {/* Floating Trust Cards */}
            <div style={{ position: "absolute", top: 40, left: -40, background: "#fff", padding: "16px 24px", borderRadius: 16, boxShadow: "0 12px 32px rgba(15,25,35,0.08)", display: "flex", alignItems: "center", gap: 16, animation: "float 6s ease-in-out infinite" }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--primary-subtle)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)", fontSize: 20 }}>
                <i className="fa-solid fa-globe" />
              </div>
              <div>
                <div style={{ fontSize: 13, color: "var(--gray-500)", fontWeight: 500 }}>Patients from</div>
                <div style={{ fontSize: 18, color: "var(--gray-900)", fontWeight: 800 }}>40+ Countries</div>
              </div>
            </div>

            <div style={{ position: "absolute", bottom: 80, right: -30, background: "#fff", padding: "16px 24px", borderRadius: 16, boxShadow: "0 12px 32px rgba(15,25,35,0.08)", display: "flex", alignItems: "center", gap: 16, animation: "float 8s ease-in-out infinite reverse" }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(212, 175, 55, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#D4AF37", fontSize: 20 }}>
                <i className="fa-solid fa-clock" />
              </div>
              <div>
                <div style={{ fontSize: 13, color: "var(--gray-500)", fontWeight: 500 }}>Priority Access</div>
                <div style={{ fontSize: 18, color: "var(--gray-900)", fontWeight: 800 }}>No Wait Time</div>
              </div>
            </div>

            <div style={{ position: "absolute", bottom: -20, left: 40, background: "#fff", padding: "12px 20px", borderRadius: 12, boxShadow: "0 8px 24px rgba(15,25,35,0.06)", display: "flex", alignItems: "center", gap: 12, animation: "float 7s ease-in-out infinite 1s" }}>
              <i className="fa-solid fa-star" style={{ color: "#FFD700" }} />
              <div style={{ fontSize: 14, color: "var(--gray-800)", fontWeight: 700 }}>Personalized Care</div>
            </div>
          </div>
          
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @media (max-width: 768px) {
          .hero-fade-in > div { left: 0 !important; right: 0 !important; }
        }
      `}</style>
    </section>
  );
}
