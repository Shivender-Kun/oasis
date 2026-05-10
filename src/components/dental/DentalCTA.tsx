"use client";

export default function DentalCTA() {
  return (
    <section className="section" style={{ position: "relative", background: "var(--gray-900)", color: "#fff", overflow: "hidden" }}>
      {/* Decorative premium gradients */}
      <div style={{ position: "absolute", top: "-50%", left: "-20%", width: "80%", paddingBottom: "80%", background: "radial-gradient(circle, rgba(31, 175, 139, 0.15) 0%, transparent 60%)", borderRadius: "50%", zIndex: 0 }} />
      <div style={{ position: "absolute", bottom: "-50%", right: "-20%", width: "80%", paddingBottom: "80%", background: "radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 60%)", borderRadius: "50%", zIndex: 0 }} />

      <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: 800 }}>
        <h2 className="fade-in" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#fff", marginBottom: 20, fontWeight: 800 }}>
          Start Your <span style={{ color: "var(--primary)" }}>Smile Journey</span> in India
        </h2>
        <p className="fade-in" style={{ fontSize: 18, color: "rgba(255,255,255,0.8)", lineHeight: 1.7, marginBottom: 48, maxWidth: 640, margin: "0 auto 48px" }}>
          Get a personalized treatment plan and cost estimate from our specialists. No obligations, just clarity and expert guidance.
        </p>

        <div className="fade-in" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16, marginBottom: 40 }}>
          <a href="#consultation" className="btn btn-primary btn-lg" style={{ boxShadow: "0 10px 30px var(--primary-glow)", padding: "16px 32px", fontSize: 16 }}>
            <i className="fa-solid fa-video" /> Book Video Consultation
          </a>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn btn-outline-white btn-lg" style={{ padding: "16px 32px", fontSize: 16 }}>
            <i className="fa-brands fa-whatsapp" /> WhatsApp Us
          </a>
        </div>

        <div className="fade-in" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "32px", fontSize: 14, color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}><i className="fa-solid fa-lock" style={{ color: "var(--primary)" }} /> Secure & Confidential</span>
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}><i className="fa-solid fa-bolt" style={{ color: "var(--primary)" }} /> Fast Response</span>
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}><i className="fa-solid fa-plane" style={{ color: "var(--primary)" }} /> Travel Support</span>
        </div>
      </div>
    </section>
  );
}
