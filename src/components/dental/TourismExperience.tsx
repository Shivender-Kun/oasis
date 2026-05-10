"use client";

export default function TourismExperience() {
  const experiences = [
    { icon: "fa-plane-arrival", title: "Airport Transfers", desc: "Complimentary VIP pickup and drop-off from the international airport directly to your hotel or clinic." },
    { icon: "fa-hotel", title: "Luxury Accommodation", desc: "Partnerships with 4 and 5-star hotels offering exclusive rates and recovery-friendly amenities for our patients." },
    { icon: "fa-language", title: "Multilingual Support", desc: "Dedicated translators and care coordinators who speak your language to ensure perfect communication." },
    { icon: "fa-map-location-dot", title: "Tourism Guidance", desc: "Combine your treatment with a relaxing holiday. We assist with local tours, wellness retreats, and travel planning." }
  ];

  return (
    <section className="section" style={{ background: "var(--gray-900)", color: "#fff", position: "relative", overflow: "hidden" }}>
      {/* Background image with overlay */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, opacity: 0.2 }}>
        <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80" alt="India Tourism" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="section-header">
          <span className="section-tag fade-in" style={{ background: "rgba(255,255,255,0.1)", color: "#fff" }}>Medical Tourism</span>
          <h2 className="section-title fade-in" style={{ color: "#fff" }}>
            Recover While Exploring <span style={{ color: "var(--primary)" }}>India</span>
          </h2>
          <p className="section-subtitle fade-in" style={{ color: "rgba(255,255,255,0.7)" }}>
            Experience the rich culture and healing environment of India while getting world-class dental care.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 24 }}>
          {experiences.map((exp, i) => (
            <div key={i} className="fade-in" style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: 32, transition: "transform 0.3s" }} onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-8px)"} onMouseLeave={(e) => e.currentTarget.style.transform = "none"}>
              <div style={{ width: 56, height: 56, background: "rgba(31,175,139,0.2)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)", fontSize: 24, marginBottom: 24 }}>
                <i className={`fa-solid ${exp.icon}`} />
              </div>
              <h3 style={{ fontSize: 18, color: "#fff", marginBottom: 12 }}>{exp.title}</h3>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
