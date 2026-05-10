"use client";
import { useEffect } from "react";

const promises = [
  { id: 1, icon: "fa-shield-halved", title: "Quality Guaranteed", desc: "Every hospital and doctor in our network undergoes rigorous verification and accreditation checks." },
  { id: 2, icon: "fa-handshake", title: "Zero Hidden Charges", desc: "Complete transparency in pricing. Your treatment quote includes everything — no surprises." },
  { id: 3, icon: "fa-envelope-open-text", title: "24/7 Email Support", desc: "Dedicated care coordinators available round the clock via email for your complete peace of mind." },
  { id: 4, icon: "fa-laptop-medical", title: "Follow-Up Care", desc: "Post-treatment tele-consultations and ongoing medical guidance even after you return home." },
];

export default function Trust() {
  useEffect(() => {
    const els = document.querySelectorAll("#trust-section .fade-in");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } }),
      { rootMargin: "0px 0px -60px 0px", threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="trust-section" className="section" style={{ position: "relative", backgroundColor: "#f8fbfb", overflow: "hidden" }} aria-labelledby="trust-title">
      {/* Subtle green radial blur top left */}
      <div style={{ position: "absolute", top: "-10%", left: "-5%", width: "40%", paddingBottom: "40%", background: "var(--primary)", borderRadius: "50%", filter: "blur(120px)", opacity: 0.08, zIndex: 0 }} />
      
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="section-header">
          <span className="section-tag fade-in">Our Promise</span>
          <h2 id="trust-title" className="section-title fade-in">
            Your Trust, Our <span className="highlight">Commitment</span>
          </h2>
          <p className="section-subtitle fade-in">
            We stand behind every patient journey with unwavering dedication to quality, transparency, and care.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24, alignItems: "stretch" }}>
          {promises.map((p, i) => (
            <div
              key={p.id}
              className="fade-in trust-card"
              style={{
                transitionDelay: `${i * 0.1}s`,
                background: "#fff",
                border: "1px solid var(--gray-200)",
                borderRadius: 16,
                padding: "40px 28px",
                textAlign: "center",
                position: "relative",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: "0 4px 12px rgba(15,25,35,0.03)",
                overflow: "hidden"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 20px 50px rgba(15,25,35,0.1), 0 8px 20px rgba(15,25,35,0.05)";
                const topBar = e.currentTarget.querySelector('.top-bar') as HTMLElement;
                if (topBar) {
                  topBar.style.width = "100%";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(15,25,35,0.03)";
                const topBar = e.currentTarget.querySelector('.top-bar') as HTMLElement;
                if (topBar) {
                  topBar.style.width = "40px";
                }
              }}
            >
              {/* Top expanding line */}
              <div 
                className="top-bar" 
                style={{ 
                  position: "absolute", 
                  top: 0, 
                  left: "50%", 
                  transform: "translateX(-50%)", 
                  height: 4, 
                  width: 40, 
                  background: "linear-gradient(90deg, var(--primary), var(--accent))", 
                  transition: "width 0.4s cubic-bezier(0.4, 0, 0.2, 1)" 
                }} 
              />
              
              <div style={{ width: 64, height: 64, margin: "0 auto 24px", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--primary-subtle)", borderRadius: "50%", fontSize: 24, color: "var(--primary)" }}>
                <i className={`fa-solid ${p.icon}`} />
              </div>
              
              <h3 style={{ fontSize: 17, marginBottom: 12, color: "var(--gray-800)" }}>{p.title}</h3>
              <p style={{ fontSize: 14, color: "var(--gray-500)", lineHeight: 1.7 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
