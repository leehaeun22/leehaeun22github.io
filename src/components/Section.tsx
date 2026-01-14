import { useEffect, useRef } from "react";
import "./Section.css";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  variant?: "center" | "left" | "right";
}

function Section({ children, id, variant = "center" }: SectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const hasShown = useRef(false); // ⭐ 한 번만 실행 보장

  useEffect(() => {
    if (!ref.current || hasShown.current) return;

    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting && !hasShown.current) {
          entry.target.classList.add("show");
          hasShown.current = true;
          obs.unobserve(entry.target); // ⭐ 관찰 종료
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      className={`section-animate section-${variant}`}
    >
      {children}
    </section>
  );
}

export default Section;
