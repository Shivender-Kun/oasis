"use client";

const prices = [
  { id: 1, treatment: "Heart Bypass Surgery", icon: "fa-heart", india: "$5,000", usa: "$123,000", uk: "$42,000", savings: "Up to 96%" },
  { id: 2, treatment: "Knee Replacement", icon: "fa-bone", india: "$6,500", usa: "$50,000", uk: "$18,000", savings: "Up to 87%" },
  { id: 3, treatment: "Dental Implants", icon: "fa-tooth", india: "$500", usa: "$5,000", uk: "$3,500", savings: "Up to 90%" },
  { id: 4, treatment: "IVF Treatment", icon: "fa-baby", india: "$3,000", usa: "$20,000", uk: "$8,000", savings: "Up to 85%" },
  { id: 5, treatment: "Cosmetic Surgery", icon: "fa-wand-magic-sparkles", india: "$2,500", usa: "$15,000", uk: "$10,000", savings: "Up to 83%" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section" style={{ background: "#fff" }} aria-labelledby="pricing-title">
      <div className="container">
        <div className="section-header">
          <span className="section-tag fade-in">Save Big</span>
          <h2 id="pricing-title" className="section-title fade-in">
            Cost <span className="highlight">Comparison</span>
          </h2>
          <p className="section-subtitle fade-in">
            See how much you can save by choosing India for your medical treatment — same quality, fraction of the cost.
          </p>
        </div>

        <div className="fade-in" style={{ overflowX: "auto", background: "#fff", border: "1px solid var(--gray-200)", borderRadius: 12, boxShadow: "0 10px 30px rgba(15,25,35,0.05)" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 700 }}>
            <thead>
              <tr style={{ background: "var(--gray-900)" }}>
                <th style={{ padding: "24px", textAlign: "left", fontSize: 13, fontWeight: 700, letterSpacing: "1px", color: "var(--gray-300)", textTransform: "uppercase", borderTopLeftRadius: 12 }}>Treatment</th>
                <th style={{ padding: "24px", textAlign: "left", fontSize: 13, fontWeight: 700, letterSpacing: "1px", color: "var(--primary)", textTransform: "uppercase" }}><span style={{ marginRight: 8 }}>🇮🇳</span> India</th>
                <th style={{ padding: "24px", textAlign: "left", fontSize: 13, fontWeight: 700, letterSpacing: "1px", color: "var(--gray-300)", textTransform: "uppercase" }}><span style={{ marginRight: 8 }}>🇺🇸</span> USA</th>
                <th style={{ padding: "24px", textAlign: "left", fontSize: 13, fontWeight: 700, letterSpacing: "1px", color: "var(--gray-300)", textTransform: "uppercase" }}><span style={{ marginRight: 8 }}>🇬🇧</span> UK</th>
                <th style={{ padding: "24px", textAlign: "left", fontSize: 13, fontWeight: 700, letterSpacing: "1px", color: "#FFD700", textTransform: "uppercase", borderTopRightRadius: 12 }}>You Save</th>
              </tr>
            </thead>
            <tbody>
              {prices.map((p, i) => (
                <tr key={p.id} style={{ borderBottom: i === prices.length - 1 ? "none" : "1px solid var(--gray-100)", transition: "background 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.background = "var(--gray-50)")} onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}>
                  <td style={{ padding: "24px", fontWeight: 500, color: "var(--gray-600)" }}>
                    <i className={`fa-solid ${p.icon}`} style={{ width: 24, color: "var(--primary)", marginRight: 12, textAlign: "center" }} />
                    {p.treatment}
                  </td>
                  <td style={{ padding: "24px", fontWeight: 800, color: "var(--primary)" }}>{p.india}</td>
                  <td style={{ padding: "24px", color: "var(--gray-600)" }}>{p.usa}</td>
                  <td style={{ padding: "24px", color: "var(--gray-600)" }}>{p.uk}</td>
                  <td style={{ padding: "24px" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", padding: "6px 16px", background: "var(--primary)", color: "#fff", fontSize: 12, fontWeight: 700, borderRadius: 9999 }}>{p.savings}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="fade-in" style={{ marginTop: 24, fontSize: 13, color: "var(--gray-500)", textAlign: "center" }}>
          * Prices are approximate and may vary based on hospital, doctor, and treatment complexity. Contact us for a personalized quote.
        </p>
      </div>
    </section>
  );
}
