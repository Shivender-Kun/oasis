"use client";

const testimonials = [
  {
    id: "testimonial-1",
    featured: false,
    quote: "I was quoted $120,000 for heart bypass surgery in the US. Oasis Care arranged the same procedure in India for under $12,000 — at a JCI-accredited hospital with an incredible team. The care was beyond my expectations.",
    name: "Rajesh Patel",
    location: "California, USA",
    avatar: "/testimonial-1.png",
  },
  {
    id: "testimonial-2",
    featured: true,
    quote: "From the moment I reached out, Oasis Care took care of everything — from visa assistance to hospital appointments to post-op recovery. I felt safe and cared for throughout my knee replacement journey.",
    name: "Sarah Mitchell",
    location: "London, UK",
    avatar: "/testimonial-2.png",
  },
  {
    id: "testimonial-3",
    featured: false,
    quote: "My wife and I struggled with fertility issues for years. Oasis Care connected us with one of India's top IVF specialists. Today, we are proud parents of a beautiful baby girl. Forever grateful!",
    name: "Ahmed Al-Rashid",
    location: "Dubai, UAE",
    avatar: "/testimonial-3.png",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section" style={{ background: "var(--gray-50)" }} aria-labelledby="testimonials-title">
      <div className="container">
        <div className="section-header">
          <span className="section-tag fade-in">Patient Stories</span>
          <h2 id="testimonials-title" className="section-title fade-in">
            What Our Patients <span className="highlight">Say</span>
          </h2>
          <p className="section-subtitle fade-in">
            Real stories from real patients who trusted Oasis Care for their medical journey.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, alignItems: "start" }}>
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              id={t.id}
              className="fade-in"
              style={{
                transitionDelay: `${i * 0.1}s`,
                background: "#fff",
                border: t.featured ? "1px solid var(--primary)" : "1px solid var(--gray-200)",
                borderRadius: 16,
                padding: "36px 28px",
                boxShadow: t.featured ? "0 10px 30px rgba(31, 175, 139, 0.1)" : "0 4px 12px rgba(15,25,35,0.05)",
                transform: t.featured ? "scale(1.02)" : "none",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = t.featured ? "scale(1.02) translateY(-6px)" : "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 20px 50px rgba(15,25,35,0.12), 0 8px 20px rgba(15,25,35,0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = t.featured ? "scale(1.02)" : "none";
                e.currentTarget.style.boxShadow = t.featured ? "0 10px 30px rgba(31, 175, 139, 0.1)" : "0 4px 12px rgba(15,25,35,0.05)";
              }}
            >
              {/* Featured Badge */}
              {t.featured && (
                <div style={{ position: "absolute", top: 24, right: 28, background: "var(--primary)", color: "#fff", padding: "4px 12px", borderRadius: 9999, fontSize: 11, fontWeight: 700, letterSpacing: "0.5px", textTransform: "uppercase" }}>
                  Featured
                </div>
              )}

              {/* Stars */}
              <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>
                {[...Array(5)].map((_, j) => (
                  <i key={j} className="fa-solid fa-star" style={{ fontSize: 14, color: "#FFD700" }} />
                ))}
              </div>
              <blockquote style={{ marginBottom: 24 }}>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--gray-600)", fontStyle: "italic" }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <img
                  src={t.avatar}
                  alt={t.name}
                  style={{ width: 52, height: 52, borderRadius: "50%", objectFit: "cover", background: "var(--gray-100)", padding: 2 }}
                  loading="lazy"
                />
                <div>
                  <strong style={{ display: "block", fontSize: 15, color: "var(--gray-800)" }}>{t.name}</strong>
                  <span style={{ fontSize: 13, color: "var(--gray-500)" }}>
                    <i className="fa-solid fa-location-dot" style={{ marginRight: 6, color: "var(--primary)" }} />{t.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
