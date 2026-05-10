"use client";

export default function TrustBar() {
  const trusts = [
    { icon: "fa-certificate", title: "NABH Accredited" },
    { icon: "fa-award", title: "ISO Certified" },
    { icon: "fa-user-doctor", title: "15+ Years Exp." },
    { icon: "fa-tooth", title: "CAD/CAM Tech" },
    { icon: "fa-headset", title: "Int'l Support" },
  ];

  return (
    <section style={{ 
      background: "#fff", 
      borderTop: "1px solid var(--gray-100)", 
      borderBottom: "1px solid var(--gray-100)",
      padding: "32px 0"
    }}>
      <div className="container">
        <div style={{ 
          display: "flex", 
          flexWrap: "wrap", 
          justifyContent: "space-between", 
          gap: 24,
          alignItems: "center"
        }}>
          {trusts.map((t, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, flex: "1 1 auto", justifyContent: "center" }}>
              <div style={{ 
                width: 40, 
                height: 40, 
                borderRadius: "50%", 
                background: "var(--gray-50)", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                color: "var(--primary)",
                fontSize: 16
              }}>
                <i className={`fa-solid ${t.icon}`} />
              </div>
              <span style={{ fontSize: 14, fontWeight: 700, color: "var(--gray-700)", textTransform: "uppercase", letterSpacing: "0.5px", whiteSpace: "nowrap" }}>
                {t.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
