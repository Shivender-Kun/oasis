"use client";

const treatments = [
  { id: "treatment-cardiology", icon: "fa-heart", title: "Cardiology", desc: "Heart bypass surgery, valve replacement, angioplasty, and advanced cardiac procedures by top cardiologists." },
  { id: "treatment-orthopedics", icon: "fa-bone", title: "Orthopedics", desc: "Joint replacement, spine surgery, sports medicine, and robotic-assisted orthopedic procedures." },
  { id: "treatment-cosmetic", icon: "fa-wand-magic-sparkles", title: "Cosmetic Surgery", desc: "Rhinoplasty, facelifts, liposuction, and body contouring by board-certified plastic surgeons." },
  { id: "treatment-dental", icon: "fa-tooth", title: "Dental Care", desc: "Dental implants, veneers, root canals, and full-mouth rehabilitation with premium materials." },
  { id: "treatment-ivf", icon: "fa-baby", title: "IVF & Fertility", desc: "IVF, IUI, egg freezing, and advanced reproductive treatments with high success rates." },
];

export default function Treatments() {
  return (
    <section id="treatments" className="section" style={{ background: "var(--gray-50)" }} aria-labelledby="treatments-title">
      <div className="container">
        <div className="section-header">
          <span className="section-tag fade-in">Our Specialities</span>
          <h2 id="treatments-title" className="section-title fade-in">Treatments We <span className="highlight">Offer</span></h2>
          <p className="section-subtitle fade-in">
            Comprehensive medical services across major specialities with cutting-edge technology and compassionate care.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
          {treatments.map((t, i) => (
            <TreatmentCard key={t.id} treatment={t} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TreatmentCard({ treatment, delay }: { treatment: typeof treatments[0]; delay: number }) {
  return (
    <div
      id={treatment.id}
      className="fade-in"
      style={{ transitionDelay: `${delay}s`, background: "#fff", borderRadius: 16, padding: "36px 24px", textAlign: "center", border: "1px solid var(--gray-200)", transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)", position: "relative", overflow: "hidden" }}
      onMouseEnter={(e) => {
        const card = e.currentTarget;
        card.style.transform = "translateY(-6px)";
        card.style.boxShadow = "0 20px 50px rgba(15,25,35,0.12), 0 8px 20px rgba(15,25,35,0.06)";
        card.style.borderColor = "var(--primary-light)";
        const icon = card.querySelector<HTMLElement>(".t-icon");
        if (icon) icon.style.transform = "scale(1.1) rotate(5deg)";
        const gradient = card.querySelector<HTMLElement>(".t-gradient");
        if (gradient) gradient.style.height = "100%";
      }}
      onMouseLeave={(e) => {
        const card = e.currentTarget;
        card.style.transform = "none";
        card.style.boxShadow = "none";
        card.style.borderColor = "var(--gray-200)";
        const icon = card.querySelector<HTMLElement>(".t-icon");
        if (icon) icon.style.transform = "none";
        const gradient = card.querySelector<HTMLElement>(".t-gradient");
        if (gradient) gradient.style.height = "0";
      }}
    >
      {/* Bottom gradient on hover */}
      <div className="t-gradient" style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 0, background: "linear-gradient(180deg, transparent, var(--primary-subtle))", transition: "height 0.5s cubic-bezier(0.22,1,0.36,1)", zIndex: 0 }} />
      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="t-icon" style={{ width: 72, height: 72, margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, var(--primary), var(--primary-dark))", borderRadius: "50%", fontSize: 28, color: "#fff", boxShadow: "0 8px 24px var(--primary-glow)", transition: "transform 0.3s" }}>
          <i className={`fa-solid ${treatment.icon}`} />
        </div>
        <h3 style={{ fontSize: 18, marginBottom: 10 }}>{treatment.title}</h3>
        <p style={{ fontSize: 14, color: "var(--gray-500)", lineHeight: 1.7, marginBottom: 16 }}>{treatment.desc}</p>
        <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 600, color: "var(--primary)", transition: "all 0.2s" }}
          onMouseEnter={(e) => { (e.currentTarget).style.gap = "10px"; }}
          onMouseLeave={(e) => { (e.currentTarget).style.gap = "6px"; }}
        >
          Learn More <i className="fa-solid fa-arrow-right" style={{ fontSize: 12 }} />
        </a>
      </div>
    </div>
  );
}
