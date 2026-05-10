"use client";
import { useEffect, useRef, useState } from "react";

export default function Navbar({ theme = "dark" }: { theme?: "dark" | "light" }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.pageYOffset > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        menuRef.current &&
        toggleRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        !toggleRef.current.contains(e.target as Node) &&
        menuOpen
      ) {
        setMenuOpen(false);
        document.body.style.overflow = "";
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [menuOpen]);

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  };

  const isLightMode = theme === "light" && !scrolled;

  const navStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    padding: scrolled ? "10px 0" : "16px 0",
    background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
    backdropFilter: scrolled ? "blur(20px)" : "none",
    boxShadow: scrolled ? "0 2px 20px rgba(15,25,35,0.08)" : "none",
    transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
  };

  const logoTextStyle: React.CSSProperties = {
    fontFamily: "var(--font-poppins, Poppins, sans-serif)",
    fontSize: 24,
    fontWeight: 800,
    color: scrolled || isLightMode ? "var(--gray-800)" : "#fff",
    transition: "color 0.3s",
  };

  const linkStyle: React.CSSProperties = {
    padding: "8px 16px",
    fontFamily: "var(--font-poppins, Poppins, sans-serif)",
    fontSize: 14,
    fontWeight: 500,
    color: scrolled || isLightMode ? "var(--gray-600)" : "rgba(255,255,255,0.85)",
    borderRadius: 9999,
    transition: "all 0.2s",
    display: "block",
  };

  const hamburgerStyle: React.CSSProperties = {
    width: 24,
    height: 2,
    background: scrolled ? "var(--gray-700)" : "#fff",
    borderRadius: 2,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: menuOpen ? "translate(-50%,-50%) rotate(0)" : "translate(-50%,-50%)",
    transition: "all 0.3s",
    backgroundColor: menuOpen ? "transparent" : scrolled ? "var(--gray-700)" : "#fff",
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/dental-tourism", label: "Dental Tourism" },
    { href: "/#treatments", label: "Treatments" },
    { href: "/#how-it-works", label: "How It Works" },
    { href: "/#testimonials", label: "Testimonials" },
  ];

  return (
    <nav style={navStyle} id="navbar" role="navigation" aria-label="Main navigation">
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <a href="/" aria-label="Oasis Care Home" style={{ display: "flex", alignItems: "center", gap: 10, zIndex: 1001 }}>
          <i className="fa-solid fa-leaf" style={{ fontSize: 28, color: "var(--primary)", filter: "drop-shadow(0 2px 4px var(--primary-glow))" }} />
          <span style={logoTextStyle}>
            Oasis<span style={{ color: "var(--primary)" }}>Care</span>
          </span>
        </a>

        {/* Hamburger */}
        <button
          ref={toggleRef}
          id="nav-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
          style={{ display: "none", width: 32, height: 32, position: "relative", zIndex: 1001 }}
          className="nav-toggle-btn"
        >
          <span style={hamburgerStyle} />
          <span style={{
            width: 24, height: 2,
            background: menuOpen ? "var(--gray-700)" : scrolled ? "var(--gray-700)" : "#fff",
            borderRadius: 2,
            position: "absolute",
            top: menuOpen ? "50%" : "calc(50% - 8px)",
            left: "50%",
            transform: menuOpen ? "translateX(-50%) rotate(45deg)" : "translateX(-50%)",
            transition: "all 0.3s",
          }} />
          <span style={{
            width: 24, height: 2,
            background: menuOpen ? "var(--gray-700)" : scrolled ? "var(--gray-700)" : "#fff",
            borderRadius: 2,
            position: "absolute",
            top: menuOpen ? "50%" : "calc(50% + 8px)",
            left: "50%",
            transform: menuOpen ? "translateX(-50%) rotate(-45deg)" : "translateX(-50%)",
            transition: "all 0.3s",
          }} />
        </button>

        {/* Menu */}
        <ul
          ref={menuRef}
          id="nav-menu"
          role="menubar"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
          className="nav-menu-list"
        >
          {navLinks.map((link) => (
            <li key={link.href} role="none">
              <a
                href={link.href}
                role="menuitem"
                style={linkStyle}
                onClick={closeMenu}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = scrolled || isLightMode ? "var(--primary)" : "#fff";
                  (e.target as HTMLElement).style.background = scrolled || isLightMode ? "var(--primary-subtle)" : "rgba(255,255,255,0.12)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = scrolled || isLightMode ? "var(--gray-600)" : "rgba(255,255,255,0.85)";
                  (e.target as HTMLElement).style.background = "transparent";
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li role="none">
            <a
              href="https://forms.cloud.microsoft/r/AzwwyHGtNA"
              role="menuitem"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              style={{
                background: "var(--primary)",
                color: "#fff",
                padding: "10px 24px",
                fontWeight: 600,
                fontFamily: "var(--font-poppins, Poppins, sans-serif)",
                fontSize: 14,
                borderRadius: 9999,
                boxShadow: "0 2px 12px var(--primary-glow)",
                transition: "all 0.2s",
                display: "block",
              }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.transform = "translateY(-1px)"; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.transform = "none"; }}
            >
              Get Free Consultation
            </a>
          </li>
        </ul>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-toggle-btn { display: flex !important; flex-direction: column; align-items: center; justify-content: center; }
          .nav-menu-list {
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(255,255,255,0.98);
            backdrop-filter: blur(20px);
            flex-direction: column;
            justify-content: center;
            gap: 8px;
            padding: 80px 24px 24px;
            transform: ${menuOpen ? "translateX(0)" : "translateX(100%)"};
            transition: transform 0.3s cubic-bezier(0.22,1,0.36,1);
            z-index: 1000;
          }
          .nav-menu-list a { color: var(--gray-700) !important; background: transparent !important; font-size: 18px !important; padding: 12px 20px !important; }
        }
      `}</style>
    </nav>
  );
}
