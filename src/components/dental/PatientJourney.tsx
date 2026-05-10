"use client";

export default function PatientJourney() {
  const steps = [
    { num: "1", icon: "fa-file-medical", title: "Share Reports", desc: "Share your dental X-rays (OPG) and photos securely online." },
    { num: "2", icon: "fa-video", title: "Video Consultation", desc: "Speak directly with our senior specialists from home." },
    { num: "3", icon: "fa-clipboard-list", title: "Treatment Plan", desc: "Receive a detailed plan, timeline, and cost estimate." },
    { num: "4", icon: "fa-plane-arrival", title: "Travel Assistance", desc: "We assist with visa, flights, and airport transfers." },
    { num: "5", icon: "fa-tooth", title: "Treatment in India", desc: "Undergo your dental procedure in our luxury clinics." },
    { num: "6", icon: "fa-house-medical-circle-check", title: "Follow-Up Care", desc: "Ongoing tele-support after you return home safely." }
  ];

  return (
    <section className="section" style={{ background: "#fff", overflow: "hidden" }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag fade-in">Concierge Process</span>
          <h2 className="section-title fade-in">
            Your International Patient <span className="highlight">Journey</span>
          </h2>
          <p className="section-subtitle fade-in">
            We handle every detail of your trip so you can focus entirely on your new smile.
          </p>
        </div>

        <div style={{ position: "relative", paddingTop: "20px" }}>
          {/* Timeline line */}
          <div style={{ position: "absolute", top: 32, left: "5%", right: "5%", height: 2, background: "var(--gray-200)", zIndex: 0 }} className="timeline-line">
            <div style={{ height: "100%", background: "var(--primary)", width: "100%", animation: "fillLine 2s ease-out forwards" }} />
          </div>

          <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "space-between" }}>
            {steps.map((step, i) => (
              <div
                key={i}
                className="fade-in step-card"
                style={{ transitionDelay: `${i * 0.1}s`, flex: "1 1 150px", maxWidth: 180, textAlign: "center", position: "relative", zIndex: 1, cursor: "pointer" }}
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
                    iconWrap.style.background = "#fff";
                    iconWrap.style.color = "var(--primary)";
                    iconWrap.style.boxShadow = "0 4px 12px rgba(15,25,35,0.05)";
                    iconWrap.style.transform = "none";
                  }
                }}
              >
                {/* Step Number Circle on the line */}
                <div style={{ width: 28, height: 28, margin: "0 auto 32px", background: "var(--primary)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontFamily: "var(--font-poppins, Poppins)", fontWeight: 700, fontSize: 13, zIndex: 2, position: "relative", boxShadow: "0 0 0 4px #fff" }}>
                  {step.num}
                </div>

                {/* Step Icon Large Circle */}
                <div className="step-icon-wrap" style={{ width: 72, height: 72, margin: "0 auto 20px", background: "#fff", border: "1px solid var(--gray-100)", boxShadow: "0 4px 12px rgba(15,25,35,0.05)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, color: "var(--primary)", transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)" }}>
                  <i className={`fa-solid ${step.icon}`} />
                </div>

                <h3 style={{ fontSize: 16, marginBottom: 8, color: "var(--gray-800)" }}>{step.title}</h3>
                <p style={{ fontSize: 13, color: "var(--gray-500)", lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fillLine { 0% { width: 0; } 100% { width: 100%; } }
        @media (max-width: 768px) {
          .timeline-line { display: none; }
          .step-card { flex: 1 1 100% !important; max-width: 100% !important; margin-bottom: 40px; }
        }
      `}</style>
    </section>
  );
}
