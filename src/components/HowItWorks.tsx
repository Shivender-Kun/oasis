"use client";

const steps = [
  { id: "step-1", num: 1, icon: "fa-file-medical", title: "Share Reports", desc: "Upload your medical reports and history through our secure portal." },
  { id: "step-2", num: 2, icon: "fa-stethoscope", title: "Get Consultation", desc: "Receive expert opinions and a personalized treatment plan within 48 hours." },
  { id: "step-3", num: 3, icon: "fa-plane", title: "Travel to India", desc: "We arrange visa, flights, airport pickup, and comfortable accommodation." },
  { id: "step-4", num: 4, icon: "fa-hospital-user", title: "Treatment & Recovery", desc: "Undergo treatment at top hospitals with dedicated care coordinators by your side." },
  { id: "step-5", num: 5, icon: "fa-house-medical-circle-check", title: "Return with Care", desc: "Go home with a complete recovery plan and ongoing tele-consultation support." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section" style={{ background: "#fff", overflow: "hidden" }} aria-labelledby="how-title">
      <div className="container">
        <div className="section-header">
          <span className="section-tag fade-in">Simple Process</span>
          <h2 id="how-title" className="section-title fade-in">How It <span className="highlight">Works</span></h2>
          <p className="section-subtitle fade-in">
            Your journey to world-class healthcare in India is just 5 simple steps away.
          </p>
        </div>

        <div style={{ position: "relative", paddingTop: "20px" }}>
          {/* Timeline line */}
          <div style={{ position: "absolute", top: 32, left: "10%", right: "10%", height: 2, background: "var(--primary)", zIndex: 0 }} className="timeline-line" />

          <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "space-between" }}>
            {steps.map((step, i) => (
              <div
                key={step.id}
                id={step.id}
                className="fade-in step-card"
                style={{ transitionDelay: `${i * 0.1}s`, flex: "1 1 180px", maxWidth: 220, textAlign: "center", position: "relative", zIndex: 1, cursor: "pointer" }}
                onMouseEnter={(e) => {
                  const iconWrap = e.currentTarget.querySelector('.step-icon-wrap') as HTMLElement;
                  if (iconWrap) {
                    iconWrap.style.background = "var(--primary)";
                    iconWrap.style.color = "#fff";
                    iconWrap.style.boxShadow = "0 0 0 8px var(--primary-subtle)";
                    iconWrap.style.transform = "scale(1.05)";
                  }
                }}
                onMouseLeave={(e) => {
                  const iconWrap = e.currentTarget.querySelector('.step-icon-wrap') as HTMLElement;
                  if (iconWrap) {
                    iconWrap.style.background = "var(--primary-subtle)";
                    iconWrap.style.color = "var(--primary)";
                    iconWrap.style.boxShadow = "none";
                    iconWrap.style.transform = "none";
                  }
                }}
              >
                {/* Step Number Circle on the line */}
                <div style={{ width: 28, height: 28, margin: "0 auto 32px", background: "var(--primary)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontFamily: "var(--font-poppins, Poppins)", fontWeight: 700, fontSize: 13, zIndex: 2, position: "relative", boxShadow: "0 0 0 4px #fff" }}>
                  {step.num}
                </div>

                {/* Step Icon Large Circle */}
                <div className="step-icon-wrap" style={{ width: 80, height: 80, margin: "0 auto 24px", background: "var(--primary-subtle)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, color: "var(--primary)", transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)" }}>
                  <i className={`fa-solid ${step.icon}`} />
                </div>

                <h3 style={{ fontSize: 17, marginBottom: 12, color: "var(--gray-800)" }}>{step.title}</h3>
                <p style={{ fontSize: 14, color: "var(--gray-500)", lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-line { display: none; }
          .step-card { flex: 1 1 100% !important; max-width: 100% !important; margin-bottom: 40px; }
        }
      `}</style>
    </section>
  );
}
