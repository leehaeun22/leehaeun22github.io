// src/components/Navbar.tsx
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.css";

const SECTION_IDS = ["projects","about", "skills", "resume", "contact"];

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const [activeSection, setActiveSection] = useState<string>("");
  const [scrolled, setScrolled] = useState<boolean>(false);

  /* =========================
     Navbar shadow
     ========================= */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* =========================
     Scroll Spy (IntersectionObserver)
     ========================= */
  useEffect(() => {
    if (!isHome) return;

    const sections = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // ⭐ 화면 중앙에 가장 가까운 섹션 하나만 선택
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top)
          )[0];

        if (visible) {
          const id = visible.target.id;
          setActiveSection(id);
          window.history.replaceState(null, "", `#${id}`);
        }
      },
      {
        root: null,
        rootMargin: "-45% 0px -45% 0px", // ⭐ 핵심
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [isHome]);

  /* =========================
     Click → Smooth Scroll
     ========================= */
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    setActiveSection(id);
    navigate(`/#${id}`, { replace: true });

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-logo" onClick={() => navigate("/")}>
        Portfolio
      </div>

      <div className="nav-menu">
        {isHome ? (
          SECTION_IDS.map((id) => (
            <button
              key={id}
              onClick={() => handleScroll(id)}
              className={`nav-link ${
                activeSection === id ? "active" : ""
              }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))
        ) : (
          <button
            className="nav-link active"
            onClick={() => navigate("/")}
          >
            Home
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
