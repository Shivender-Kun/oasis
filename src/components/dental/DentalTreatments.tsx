"use client";

export default function DentalTreatments() {
  const treatments = [
    { icon: "fa-tooth", title: "Dental Implants", desc: "Permanent, natural-looking tooth replacements using premium titanium implants from top global brands." },
    { icon: "fa-face-smile-beam", title: "Veneers & Smile Makeovers", desc: "Custom-crafted porcelain veneers to correct discoloration, chips, and gaps for a perfect Hollywood smile." },
    { icon: "fa-teeth", title: "Full Mouth Rehabilitation", desc: "Comprehensive restoration of your entire mouth, combining implants, crowns, and bridges for optimal function." },
    { icon: "fa-wand-magic-sparkles", title: "Invisalign & Aligners", desc: "Clear, comfortable, and invisible orthodontic treatments to straighten teeth without traditional metal braces." },
    { icon: "fa-crown", title: "Crowns & Bridges", desc: "High-quality Zirconia and E-max crowns to restore damaged teeth and bridge missing gaps beautifully." },
    { icon: "fa-syringe", title: "Root Canal Treatment", desc: "Painless, single-visit root canals using advanced rotary endodontics and 3D imaging technology." }
  ];

  return (
    <section className="section" style={{ background: "var(--gray-50)" }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag fade-in">Expertise</span>
          <h2 className="section-title fade-in">
            Advanced Dental <span className="highlight">Treatments</span>
          </h2>
          <p className="section-subtitle fade-in">
            We offer a comprehensive range of world-class dental procedures using state-of-the-art technology.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {treatments.map((t, i) => (
            <div 
              key={i} 
              className="fade-in treatment-card"
              style={{ 
                background: "#fff", 
                borderRadius: 16, 
                padding: "32px", 
                border: "1px solid var(--gray-200)",
                boxShadow: "0 4px 12px rgba(15,25,35,0.03)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(15,25,35,0.08), 0 1px 3px rgba(15,25,35,0.05)";
                e.currentTarget.style.borderColor = "var(--primary-subtle)";
                const link = e.currentTarget.querySelector('.learn-more-link') as HTMLElement;
                if(link) link.style.color = "var(--primary-dark)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(15,25,35,0.03)";
                e.currentTarget.style.borderColor = "var(--gray-200)";
                const link = e.currentTarget.querySelector('.learn-more-link') as HTMLElement;
                if(link) link.style.color = "var(--primary)";
              }}
            >
              <div style={{ width: 64, height: 64, borderRadius: 16, background: "var(--primary-subtle)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)", fontSize: 28, marginBottom: 24 }}>
                <i className={`fa-solid ${t.icon}`} />
              </div>
              <h3 style={{ fontSize: 20, color: "var(--gray-900)", marginBottom: 16 }}>{t.title}</h3>
              <p style={{ fontSize: 15, color: "var(--gray-600)", lineHeight: 1.6, marginBottom: 24, flex: 1 }}>{t.desc}</p>
              
              <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 8, fontWeight: 700, fontSize: 14 }}>
                <span className="learn-more-link" style={{ color: "var(--primary)", transition: "color 0.2s" }}>Learn More</span>
                <i className="fa-solid fa-arrow-right" style={{ color: "var(--gray-400)" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
