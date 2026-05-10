"use client";

export default function Footer() {
  return (
    <footer style={{ background: "var(--gray-900)", color: "rgba(255,255,255,0.7)", paddingTop: 80, paddingBottom: 24 }}>
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <i className="fa-solid fa-leaf" style={{ fontSize: 28, color: "var(--primary)" }} />
              <span style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontSize: 24, fontWeight: 800, color: "#fff" }}>
                Oasis<span style={{ color: "var(--primary)" }}>Care</span>
              </span>
            </a>
            <p style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 24 }}>
              Your trusted partner for world-class medical treatment in India. We make healthcare accessible, affordable, and hassle-free for patients worldwide.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              {["facebook-f", "instagram", "x-twitter", "linkedin-in", "youtube"].map((social) => (
                <a key={social} href="#" aria-label={social} style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", transition: "all 0.2s" }} onMouseEnter={(e) => { e.currentTarget.style.background = "var(--primary)"; e.currentTarget.style.transform = "translateY(-2px)"; }} onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.transform = "none"; }}>
                  <i className={`fa-brands fa-${social}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: "#fff", fontSize: 16, marginBottom: 20 }}>Quick Links</h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[{ l: "Home", h: "/" }, { l: "Dental Tourism", h: "/dental-tourism" }, { l: "Why Oasis Care", h: "/#why-us" }, { l: "How It Works", h: "/#how-it-works" }, { l: "Cost Comparison", h: "/#pricing" }].map((link) => (
                <li key={link.h}>
                  <a href={link.h} style={{ fontSize: 14, transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}>{link.l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4 style={{ color: "#fff", fontSize: 16, marginBottom: 20 }}>Treatments</h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[{ l: "Dental Tourism", h: "/dental-tourism" }, { l: "Cardiology", h: "/#treatment-cardiology" }, { l: "Orthopedics", h: "/#treatment-orthopedics" }, { l: "Cosmetic Surgery", h: "/#treatment-cosmetic" }, { l: "IVF & Fertility", h: "/#treatment-ivf" }].map((link) => (
                <li key={link.h}>
                  <a href={link.h} style={{ fontSize: 14, transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}>{link.l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 style={{ color: "#fff", fontSize: 16, marginBottom: 20 }}>Contact Us</h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <li style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: 14 }}>
                <i className="fa-solid fa-envelope" style={{ color: "var(--primary)", marginTop: 4 }} />
                <a href="mailto:info@oasiscare.in" style={{ transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}>info@oasiscare.in</a>
              </li>
              <li style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: 14 }}>
                <i className="fa-brands fa-whatsapp" style={{ color: "var(--primary)", marginTop: 4 }} />
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" style={{ transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}>+91 98765 43210</a>
              </li>
              <li style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: 14 }}>
                <i className="fa-solid fa-phone" style={{ color: "var(--primary)", marginTop: 4 }} />
                <a href="tel:+911234567890" style={{ transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}>+91 12345 67890</a>
              </li>
              <li style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: 14 }}>
                <i className="fa-solid fa-location-dot" style={{ color: "var(--primary)", marginTop: 4 }} />
                <span>Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 16, fontSize: 13 }}>
          <p>&copy; 2026 Oasis Care. All rights reserved.</p>
          <div style={{ display: "flex", gap: 24 }}>
            <a href="#" style={{ transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}>Privacy Policy</a>
            <a href="#" style={{ transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}>Terms of Service</a>
            <a href="#" style={{ transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}>Disclaimer</a>
          </div>
        </div>
      </div>
      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          margin-bottom: 60px;
        }
        .footer-brand {
          max-width: 400px;
        }
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (min-width: 1024px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr 1fr;
          }
        }
      `}</style>
    </footer>
  );
}
