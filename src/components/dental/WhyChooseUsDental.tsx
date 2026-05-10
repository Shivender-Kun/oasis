"use client";

export default function WhyChooseUsDental() {
  const features = [
    {
      title: "Advanced Technology",
      desc: "Our clinics are equipped with top-tier 3D CBCT scanners, intraoral cameras, and CAD/CAM milling machines for precise, same-day restorations.",
      img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "International Sterilization Standards",
      desc: "We follow strict Class-B autoclaving, 4-step sterilization protocols, and single-use disposables, ensuring a 100% infection-free environment.",
      img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80",
      reverse: true
    },
    {
      title: "Fast Treatment Timelines",
      desc: "We value your travel time. With our in-house dental labs, we deliver complex procedures like full mouth implants in record time without compromising quality.",
      img: "https://images.unsplash.com/photo-1598256989800-fea5ce5146f2?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="section" style={{ background: "var(--gray-50)" }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag fade-in">The Oasis Standard</span>
          <h2 className="section-title fade-in">
            Why Choose Us For Your <span className="highlight">Smile</span>
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 80, marginTop: 40 }}>
          {features.map((f, i) => (
            <div key={i} className="fade-in" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 48, flexDirection: f.reverse ? "row-reverse" : "row" }}>
              <div style={{ flex: "1 1 400px", position: "relative" }}>
                <div style={{ position: "absolute", inset: -16, border: "2px solid var(--primary-subtle)", borderRadius: 24, zIndex: 0, transform: f.reverse ? "translate(-8px, 8px)" : "translate(8px, 8px)" }} />
                <img 
                  src={f.img} 
                  alt={f.title} 
                  style={{ width: "100%", borderRadius: 24, position: "relative", zIndex: 1, boxShadow: "0 12px 32px rgba(15,25,35,0.06)", objectFit: "cover", aspectRatio: "4/3" }} 
                />
              </div>
              <div style={{ flex: "1 1 400px" }}>
                <div style={{ width: 48, height: 48, background: "var(--primary-subtle)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)", fontSize: 24, marginBottom: 20 }}>
                  <i className="fa-solid fa-check-double" />
                </div>
                <h3 style={{ fontSize: 28, color: "var(--gray-900)", marginBottom: 16 }}>{f.title}</h3>
                <p style={{ fontSize: 16, color: "var(--gray-600)", lineHeight: 1.8 }}>{f.desc}</p>
                <ul style={{ marginTop: 24, listStyle: "none", padding: 0 }}>
                  <li style={{ marginBottom: 12, display: "flex", gap: 12, alignItems: "center" }}><i className="fa-solid fa-arrow-right" style={{ color: "var(--primary)" }} /> <span style={{ color: "var(--gray-700)" }}>Premium Materials</span></li>
                  <li style={{ marginBottom: 12, display: "flex", gap: 12, alignItems: "center" }}><i className="fa-solid fa-arrow-right" style={{ color: "var(--primary)" }} /> <span style={{ color: "var(--gray-700)" }}>Expert Care</span></li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
