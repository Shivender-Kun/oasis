"use client";

export default function CTA() {
  return (
    <section id="contact" className="section" style={{ position: "relative", background: "linear-gradient(135deg, var(--primary), var(--accent))", color: "#fff", overflow: "hidden" }} aria-labelledby="cta-title">
      {/* Decorative shapes */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, opacity: 0.1 }}>
        <div style={{ position: "absolute", top: "-10%", left: "-5%", width: "40%", paddingBottom: "40%", background: "#fff", borderRadius: "50%", filter: "blur(100px)" }} />
        <div style={{ position: "absolute", bottom: "-20%", right: "-10%", width: "50%", paddingBottom: "50%", background: "#fff", borderRadius: "50%", filter: "blur(120px)" }} />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: 800 }}>
        <h2 id="cta-title" className="fade-in" style={{ fontSize: "clamp(32px, 5vw, 48px)", color: "#fff", marginBottom: 20 }}>
          Get Your Treatment Plan <span style={{ position: "relative", display: "inline-block" }}>
            Today
            <span style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: "#fff", borderRadius: 2 }}></span>
          </span>
        </h2>
        <p className="fade-in" style={{ fontSize: 18, color: "rgba(255,255,255,0.9)", lineHeight: 1.7, marginBottom: 40, maxWidth: 640, margin: "0 auto 40px" }}>
          Schedule a free consultation with our medical experts and take the first step towards world-class healthcare at affordable prices.
        </p>

        <div className="fade-in" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16, marginBottom: 40 }}>
          <a href="https://forms.cloud.microsoft/r/AzwwyHGtNA" className="btn btn-white btn-lg" target="_blank" rel="noopener noreferrer">
            <i className="fa-solid fa-calendar-check" /> Start Free Consultation
          </a>
          <a href="mailto:info@oasiscare.in" className="btn btn-outline-white btn-lg">
            <i className="fa-solid fa-envelope" /> Email Us Directly
          </a>
        </div>

        <div className="fade-in" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "24px", fontSize: 14, color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>
          <span><i className="fa-solid fa-lock" style={{ marginRight: 8 }} />100% Confidential</span>
          <span><i className="fa-solid fa-clock" style={{ marginRight: 8 }} />Response within 24 hours</span>
          <span><i className="fa-solid fa-circle-check" style={{ marginRight: 8 }} />No obligation</span>
        </div>
      </div>
    </section>
  );
}
