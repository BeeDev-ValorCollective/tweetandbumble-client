import { useEffect, useState, useCallback } from "react";
import iconUrl from "../assets/images/scrollUP.png"

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setVisible(window.scrollY > 250);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = useCallback(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReduced ? "auto" : "smooth",
    });
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={scrollUp}
      aria-label="Back to top"
      className="scroll-top-btn"
    >
      <img src={iconUrl} alt="" aria-hidden="true" />
    </button>
  );
}
