"use client";
import { useEffect } from "react";

const features = [
  { id: "feature-pricing", icon: "fa-indian-rupee-sign", title: "Affordable Pricing", desc: "Save up to 80% compared to US/UK costs without compromising on quality of care." },
  { id: "feature-hospitals", icon: "fa-hospital", title: "Top Hospitals", desc: "Partnered with JCI & NABH accredited hospitals equipped with world-class infrastructure." },
  { id: "feature-doctors", icon: "fa-user-doctor", title: "Experienced Doctors", desc: "Access to internationally trained specialists with decades of clinical expertise." },
  { id: "feature-assistance", icon: "fa-hands-holding-circle", title: "End-to-End Assistance", desc: "From visa to accommodation, travel to post-treatment follow-ups — we handle it all." },
  { id: "feature-transparent", icon: "fa-shield-halved", title: "No Hidden Costs", desc: "Transparent pricing with detailed cost breakdowns. What we quote is what you pay." },
  { id: "feature-personalized", icon: "fa-heart-pulse", title: "Personalized Care", desc: "Dedicated care coordinators who craft treatment plans tailored to your specific needs." },
];

export default function WhyUs() {
  useEffect(() => {
    const els = document.querySelectorAll(".fade-in");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } }),
      { rootMargin: "0px 0px -60px 0px", threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="why-us" className="section" style={{ background: "#fff" }} aria-labelledby="why-us-title">
      <div className="container">
        <div className="section-header">
          <span className="section-tag fade-in">Why Choose Us</span>
          <h2 id="why-us-title" className="section-title fade-in">
            Why NRIs Trust <span className="highlight">Oasis Care</span>
          </h2>
          <p className="section-subtitle fade-in">
            We provide end-to-end medical tourism services, ensuring your journey from consultation to recovery is seamless and stress-free.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {features.map((f, i) => (
            <FeatureCard key={f.id} feature={f} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, delay }: { feature: typeof features[0]; delay: number }) {
  return (
    <div
      id={feature.id}
      className="fade-in"
      style={{ transitionDelay: `${delay}s` }}
      onMouseEnter={(e) => {
        const card = e.currentTarget;
        card.style.borderColor = "var(--primary-subtle)";
        card.style.boxShadow = "0 10px 30px rgba(15,25,35,0.1), 0 4px 12px rgba(15,25,35,0.05)";
        card.style.transform = "translateY(-4px)";
        const bar = card.querySelector<HTMLElement>(".card-bar");
        if (bar) bar.style.transform = "scaleX(1)";
        const icon = card.querySelector<HTMLElement>(".feature-icon");
        if (icon) { icon.style.background = "linear-gradient(135deg, var(--primary), var(--primary-dark))"; icon.style.color = "#fff"; icon.style.transform = "scale(1.08)"; icon.style.boxShadow = "0 6px 20px var(--primary-glow)"; }
      }}
      onMouseLeave={(e) => {
        const card = e.currentTarget;
        card.style.borderColor = "var(--gray-200)";
        card.style.boxShadow = "none";
        card.style.transform = "none";
        const bar = card.querySelector<HTMLElement>(".card-bar");
        if (bar) bar.style.transform = "scaleX(0)";
        const icon = card.querySelector<HTMLElement>(".feature-icon");
        if (icon) { icon.style.background = "linear-gradient(135deg, var(--primary-subtle), var(--accent-subtle))"; icon.style.color = "var(--primary)"; icon.style.transform = "none"; icon.style.boxShadow = "none"; }
      }}
      style={{ background: "#fff", border: "1px solid var(--gray-200)", borderRadius: 16, padding: "36px 28px", textAlign: "center", transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)", position: "relative", overflow: "hidden" }}
    >
      <div className="card-bar" style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg, var(--primary), var(--accent))", transform: "scaleX(0)", transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)", transformOrigin: "left" }} />
      <div className="feature-icon" style={{ width: 64, height: 64, margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, var(--primary-subtle), var(--accent-subtle))", borderRadius: 12, fontSize: 26, color: "var(--primary)", transition: "all 0.3s" }}>
        <i className={`fa-solid ${feature.icon}`} />
      </div>
      <h3 style={{ fontSize: 18, marginBottom: 10, color: "var(--gray-800)" }}>{feature.title}</h3>
      <p style={{ fontSize: 14, color: "var(--gray-500)", lineHeight: 1.7 }}>{feature.desc}</p>
    </div>
  );
}
