"use client";

export default function BeforeAfterGallery() {
  const gallery = [
    { type: "Smile Makeover", country: "United States", flag: "🇺🇸", before: "https://images.unsplash.com/photo-1590680424564-927160751167?auto=format&fit=crop&w=400&q=80", after: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=400&q=80" },
    { type: "Full Mouth Implants", country: "United Kingdom", flag: "🇬🇧", before: "https://images.unsplash.com/photo-1590680424564-927160751167?auto=format&fit=crop&w=400&q=80", after: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=400&q=80" },
    { type: "Porcelain Veneers", country: "Australia", flag: "🇦🇺", before: "https://images.unsplash.com/photo-1590680424564-927160751167?auto=format&fit=crop&w=400&q=80", after: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=400&q=80" },
  ];

  return (
    <section className="section" style={{ background: "#fff" }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag fade-in">Life-Changing Results</span>
          <h2 className="section-title fade-in">
            Real Transformations, <span className="highlight">Real Smiles</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32 }}>
          {gallery.map((item, i) => (
            <div key={i} className="fade-in" style={{ background: "#fff", borderRadius: 20, overflow: "hidden", border: "1px solid var(--gray-200)", boxShadow: "0 10px 30px rgba(15,25,35,0.05)" }}>
              <div style={{ display: "flex" }}>
                {/* Before */}
                <div style={{ flex: 1, position: "relative" }}>
                  <img src={item.before} alt="Before" style={{ width: "100%", height: 240, objectFit: "cover", filter: "grayscale(30%)" }} />
                  <div style={{ position: "absolute", bottom: 12, left: 12, background: "rgba(0,0,0,0.6)", color: "#fff", padding: "4px 12px", borderRadius: 9999, fontSize: 12, fontWeight: 600 }}>Before</div>
                </div>
                {/* After */}
                <div style={{ flex: 1, position: "relative" }}>
                  <img src={item.after} alt="After" style={{ width: "100%", height: 240, objectFit: "cover" }} />
                  <div style={{ position: "absolute", bottom: 12, right: 12, background: "var(--primary)", color: "#fff", padding: "4px 12px", borderRadius: 9999, fontSize: 12, fontWeight: 600 }}>After</div>
                </div>
              </div>
              <div style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <h4 style={{ fontSize: 16, color: "var(--gray-900)", marginBottom: 4 }}>{item.type}</h4>
                  <p style={{ fontSize: 13, color: "var(--gray-500)" }}>Patient from {item.country}</p>
                </div>
                <div style={{ fontSize: 24 }}>{item.flag}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
