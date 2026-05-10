"use client";

export default function VideoTestimonials() {
  const testimonials = [
    {
      name: "Michael R.",
      country: "USA",
      flag: "🇺🇸",
      treatment: "Full Mouth Implants",
      quote: "I saved over $30,000 and the care I received in India was better than anything back home. Truly a 5-star experience.",
      thumb: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Sarah W.",
      country: "Canada",
      flag: "🇨🇦",
      treatment: "Smile Makeover",
      quote: "The team coordinated my airport pickup, hotel, and treatment flawlessly. I can finally smile with confidence again!",
      thumb: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "David L.",
      country: "UK",
      flag: "🇬🇧",
      treatment: "Porcelain Veneers",
      quote: "World-class facilities and incredible doctors. I combined my dental work with a beautiful holiday in Kerala.",
      thumb: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="section" style={{ background: "linear-gradient(to bottom, var(--gray-50), #fff)" }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title fade-in">
            Patients From Around the World <span className="highlight">Trust Us</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32 }}>
          {testimonials.map((t, i) => (
            <div key={i} className="fade-in" style={{ background: "#fff", borderRadius: 24, padding: 32, border: "1px solid var(--gray-200)", boxShadow: "0 10px 30px rgba(15,25,35,0.05)", position: "relative" }}>
              {/* Video Thumbnail */}
              <div style={{ position: "relative", marginBottom: 24, borderRadius: 16, overflow: "hidden", aspectRatio: "16/9" }}>
                <img src={t.thumb} alt={t.name} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.8)" }} />
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: 64, height: 64, background: "rgba(255,255,255,0.9)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)", fontSize: 24, cursor: "pointer", transition: "transform 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"} onMouseLeave={(e) => e.currentTarget.style.transform = "none"}>
                    <i className="fa-solid fa-play" style={{ marginLeft: 4 }} />
                  </div>
                </div>
              </div>
              
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <div>
                  <strong style={{ display: "block", fontSize: 18, color: "var(--gray-900)" }}>{t.name} {t.flag}</strong>
                  <span style={{ fontSize: 13, color: "var(--primary)", fontWeight: 600 }}>{t.treatment}</span>
                </div>
              </div>
              
              <p style={{ fontSize: 15, color: "var(--gray-600)", lineHeight: 1.7, fontStyle: "italic" }}>
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
