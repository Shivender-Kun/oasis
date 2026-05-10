"use client";

export default function DoctorProfiles() {
  const doctors = [
    {
      name: "Dr. Ananya Sharma",
      spec: "Implantologist & Prosthodontist",
      exp: "18+ Years Experience",
      cert: "FICOI (USA), MDS",
      bio: "Internationally trained expert in full-mouth rehabilitation and advanced basal implants.",
      img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dr. Rahul Verma",
      spec: "Cosmetic Dentist",
      exp: "15+ Years Experience",
      cert: "AACD Member, BDS",
      bio: "Specializes in smile makeovers, porcelain veneers, and digital smile design for international patients.",
      img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="section" style={{ background: "#fff" }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag fade-in">World-Class Team</span>
          <h2 className="section-title fade-in">
            Meet Our <span className="highlight">Specialists</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32, justifyContent: "center" }}>
          {doctors.map((doc, i) => (
            <div key={i} className="fade-in" style={{ display: "flex", flexWrap: "wrap", background: "#fff", borderRadius: 24, border: "1px solid var(--gray-200)", overflow: "hidden", boxShadow: "0 10px 30px rgba(15,25,35,0.05)" }}>
              <div style={{ flex: "1 1 200px" }}>
                <img src={doc.img} alt={doc.name} style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: 250 }} />
              </div>
              <div style={{ flex: "2 1 300px", padding: 32 }}>
                <h3 style={{ fontSize: 24, color: "var(--gray-900)", marginBottom: 8 }}>{doc.name}</h3>
                <div style={{ color: "var(--primary)", fontWeight: 600, fontSize: 15, marginBottom: 16 }}>{doc.spec}</div>
                
                <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
                  <span style={{ fontSize: 13, background: "var(--gray-100)", padding: "4px 12px", borderRadius: 9999, fontWeight: 500, color: "var(--gray-700)" }}><i className="fa-solid fa-briefcase" style={{ marginRight: 6 }} />{doc.exp}</span>
                  <span style={{ fontSize: 13, background: "rgba(212, 175, 55, 0.1)", padding: "4px 12px", borderRadius: 9999, fontWeight: 500, color: "#D4AF37" }}><i className="fa-solid fa-award" style={{ marginRight: 6 }} />{doc.cert}</span>
                </div>
                
                <p style={{ fontSize: 15, color: "var(--gray-600)", lineHeight: 1.6 }}>{doc.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
