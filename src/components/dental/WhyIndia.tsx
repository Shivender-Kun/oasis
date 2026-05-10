"use client";

export default function WhyIndia() {
  const tableData = [
    { treatment: "Dental Implant", usa: "$4,000", uk: "£3,000", india: "$900" },
    { treatment: "Veneers (per tooth)", usa: "$1,500", uk: "£1,200", india: "$300" },
    { treatment: "Smile Makeover", usa: "$12,000", uk: "£9,000", india: "$2,500" },
  ];

  const benefits = [
    "Save 60–70% compared to US/UK",
    "Internationally trained dentists",
    "No long waiting periods",
    "Advanced dental technology",
    "Personalized treatment plans",
    "Combine treatment with travel",
  ];

  return (
    <section className="section" style={{ background: "#fff" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 64, alignItems: "center" }}>
          
          {/* Left: Imagery */}
          <div className="fade-in" style={{ position: "relative" }}>
            <div style={{ position: "absolute", top: -20, left: -20, width: "100%", height: "100%", border: "2px solid var(--primary-subtle)", borderRadius: 24, zIndex: 0 }} />
            <img 
              src="https://images.unsplash.com/photo-1590680424564-927160751167?auto=format&fit=crop&w=800&q=80" 
              alt="Advanced dental clinic in India" 
              style={{ width: "100%", borderRadius: 24, position: "relative", zIndex: 1, boxShadow: "0 20px 40px rgba(15,25,35,0.08)", objectFit: "cover", aspectRatio: "4/3" }} 
            />
            {/* Small floating badge */}
            <div style={{ position: "absolute", bottom: -20, right: 20, background: "#fff", padding: "16px 24px", borderRadius: 16, boxShadow: "0 10px 30px rgba(15,25,35,0.1)", zIndex: 2, display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ width: 48, height: 48, background: "var(--primary-subtle)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)", fontSize: 24 }}>
                <i className="fa-solid fa-piggy-bank" />
              </div>
              <div>
                <div style={{ fontSize: 13, color: "var(--gray-500)", fontWeight: 500 }}>Average Savings</div>
                <div style={{ fontSize: 20, color: "var(--primary-dark)", fontWeight: 800 }}>Up to 70%</div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="fade-in">
            <span className="section-tag">Unmatched Value</span>
            <h2 className="section-title" style={{ textAlign: "left", marginBottom: 24 }}>
              Why International Patients Choose <span className="highlight">India</span>
            </h2>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 40 }}>
              {benefits.map((b, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <i className="fa-solid fa-circle-check" style={{ color: "var(--primary)", marginTop: 4 }} />
                  <span style={{ fontSize: 15, color: "var(--gray-700)", lineHeight: 1.5, fontWeight: 500 }}>{b}</span>
                </div>
              ))}
            </div>

            {/* Premium Cost Table */}
            <div style={{ background: "#fff", borderRadius: 16, overflow: "hidden", border: "1px solid var(--gray-200)", boxShadow: "0 10px 30px rgba(15,25,35,0.05)" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                <thead>
                  <tr style={{ background: "var(--gray-900)", color: "#fff" }}>
                    <th style={{ padding: "16px 20px", fontSize: 13, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>Treatment</th>
                    <th style={{ padding: "16px 20px", fontSize: 13, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "var(--gray-400)" }}>USA</th>
                    <th style={{ padding: "16px 20px", fontSize: 13, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "var(--gray-400)" }}>UK</th>
                    <th style={{ padding: "16px 20px", fontSize: 13, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "var(--primary)" }}>India</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, i) => (
                    <tr key={i} style={{ borderBottom: i === tableData.length - 1 ? "none" : "1px solid var(--gray-100)", transition: "background 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.background = "var(--gray-50)"} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                      <td style={{ padding: "16px 20px", fontWeight: 600, color: "var(--gray-800)", fontSize: 15 }}>{row.treatment}</td>
                      <td style={{ padding: "16px 20px", color: "var(--gray-500)", fontSize: 15 }}>{row.usa}</td>
                      <td style={{ padding: "16px 20px", color: "var(--gray-500)", fontSize: 15 }}>{row.uk}</td>
                      <td style={{ padding: "16px 20px", fontWeight: 800, color: "var(--primary)", fontSize: 16 }}>{row.india}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
