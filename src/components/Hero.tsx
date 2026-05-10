"use client";
import { useEffect, useRef } from "react";

const stats = [
  { target: 50, suffix: "+", label: "Partner Hospitals" },
  { target: 200, suffix: "+", label: "Expert Doctors" },
  { target: 98, suffix: "%", label: "Success Rate" },
  { target: 30, suffix: "+", label: "Countries Served" },
];

const badges = [
  { icon: "fa-certificate", text: "JCI Accredited Hospitals" },
  { icon: "fa-star", text: "15+ Years Experience" },
  { icon: "fa-users", text: "10,000+ Patients Served" },
];

export default function Hero() {
  const countersRef = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    // Fade-in observer
    const els = document.querySelectorAll(".fade-in");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } }),
      { rootMargin: "0px 0px -60px 0px", threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));

    // Counter observer
    if (countersRef.current) {
      const cObs = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !animated.current) {
            animated.current = true;
            animateCounters();
            cObs.disconnect();
          }
        },
        { threshold: 0.5 }
      );
      cObs.observe(countersRef.current);
    }

    return () => obs.disconnect();
  }, []);

  function animateCounters() {
    const counters = document.querySelectorAll<HTMLElement>(".stat-number-el");
    const duration = 2000;
    counters.forEach((counter) => {
      const target = parseInt(counter.dataset.target || "0");
      const suffix = counter.dataset.suffix || "";
      const startTime = performance.now();
      function update(now: number) {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        counter.textContent = Math.floor(eased * target) + suffix;
        if (progress < 1) requestAnimationFrame(update);
        else counter.textContent = target + suffix;
      }
      requestAnimationFrame(update);
    });
  }

  return (
    <header id="hero" role="banner" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
      {/* Background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <img src="/hero-bg.png" alt="Professional medical team" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(15,25,35,0.85) 0%, rgba(23,143,113,0.75) 50%, rgba(14,154,196,0.65) 100%)" }} />
      </div>

      {/* Content */}
      <div className="container" style={{ position: "relative", zIndex: 2, textAlign: "center", paddingTop: 100, paddingBottom: 80 }}>
        {/* Badges */}
        <div className="fade-in stagger-1" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12, marginBottom: 32 }}>
          {badges.map((b) => (
            <span key={b.text} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 18px", background: "rgba(255,255,255,0.12)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 9999, color: "#fff", fontSize: 13, fontWeight: 500 }}>
              <i className={`fa-solid ${b.icon}`} style={{ color: "#FFD700", fontSize: 14 }} />
              {b.text}
            </span>
          ))}
        </div>

        {/* Headline */}
        <h1 className="fade-in stagger-2" style={{ fontSize: "clamp(32px,5vw,60px)", color: "#fff", marginBottom: 20, letterSpacing: "-0.02em" }}>
          World-Class Medical Treatment<br />in India at{" "}
          <span style={{ color: "var(--primary-light)", textShadow: "0 0 40px var(--primary-glow)" }}>Affordable Costs</span>
        </h1>

        <p className="fade-in stagger-3" style={{ fontSize: "clamp(16px,2vw,20px)", color: "rgba(255,255,255,0.8)", maxWidth: 640, margin: "0 auto 40px", lineHeight: 1.7 }}>
          Trusted by NRIs worldwide for safe, affordable, and hassle-free healthcare solutions
        </p>

        {/* CTAs */}
        <div className="fade-in stagger-4" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16, marginBottom: 56 }}>
          <a href="https://forms.cloud.microsoft/r/AzwwyHGtNA" className="btn btn-primary btn-lg" id="hero-cta-consultation" target="_blank" rel="noopener noreferrer">
            <i className="fa-solid fa-calendar-check" /> Get Free Consultation
          </a>
          <a href="mailto:info@oasiscare.in" className="btn btn-outline btn-lg" id="hero-cta-email">
            <i className="fa-solid fa-envelope" /> Email Us
          </a>
        </div>

        {/* Stats */}
        <div ref={countersRef} className="fade-in stagger-5" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: 0, background: "rgba(255,255,255,0.08)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 24, padding: "28px 40px", maxWidth: 720, margin: "0 auto" }}>
          {stats.map((s, i) => (
            <div key={s.label} style={{ display: "flex", alignItems: "center" }}>
              <div style={{ textAlign: "center", padding: "0 28px" }}>
                <span className="stat-number-el" data-target={s.target} data-suffix={s.suffix} style={{ display: "block", fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontSize: 32, fontWeight: 800, color: "#fff" }}>
                  {s.target}{s.suffix}
                </span>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.5px" }}>{s.label}</span>
              </div>
              {i < stats.length - 1 && <div style={{ width: 1, height: 40, background: "rgba(255,255,255,0.15)" }} />}
            </div>
          ))}
        </div>
      </div>

      {/* Wave */}
      <div style={{ position: "absolute", bottom: -1, left: 0, right: 0, zIndex: 3, lineHeight: 0 }}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: "100%", height: 80 }}>
          <path d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 82.5C1248 75 1344 60 1392 52.5L1440 45V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" fill="#ffffff" />
        </svg>
      </div>
    </header>
  );
}
