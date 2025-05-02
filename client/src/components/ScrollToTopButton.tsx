import { useCallback, useEffect, useState } from "react";
import "../assets/styles/scrollToTopButton.css";

const ScrollToTopButton = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const scrollClick = useCallback(() => {
    const { scrollY } = window;
    const windowHeight = window.innerHeight;
    const bodyHeight = document.body.clientHeight;

    const progress = (scrollY / (bodyHeight - windowHeight)) * 100;
    setScrollProgress(progress);
    setIsVisible(scrollY > 100);
  }, []); // La fonction est stable maintenant grâce à useCallback

  useEffect(() => {
    window.addEventListener("scroll", scrollClick);
    return () => {
      window.removeEventListener("scroll", scrollClick);
    };
  }, [scrollClick]); // Maintenant on peut ajouter scrollClick ici en toute sécurité

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`scroll-to-top-button ${isVisible ? "visible" : ""}`}>
      <button
        type="button"
        onClick={scrollToTop}
        className="progression-bulle"
        style={{
          background: `conic-gradient(#a14aff ${scrollProgress}%,rgb(53, 53, 53) ${scrollProgress}%)`,
        }}
      >
        ↑
      </button>
    </div>
  );
};

export default ScrollToTopButton;
