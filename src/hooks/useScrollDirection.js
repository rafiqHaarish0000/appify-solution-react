// src/hooks/useScrollDirection.js
import { useEffect, useState } from "react";

const useScrollDirection = (threshold = 300) => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [scrolledPastThreshold, setScrolledPastThreshold] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScroll = () => {
      const currentScrollY = window.scrollY;

      // Threshold logic
      if (!scrolledPastThreshold && currentScrollY > threshold) {
        setScrolledPastThreshold(true);
      } else if (scrolledPastThreshold && currentScrollY <= threshold) {
        setScrolledPastThreshold(false);
      }

      // Direction logic
      const direction = currentScrollY > lastScrollY ? "down" : "up";

      if (
        direction !== scrollDirection &&
        Math.abs(currentScrollY - lastScrollY) > 10
      ) {
        setScrollDirection(direction);
      }

      lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, [scrollDirection, scrolledPastThreshold, threshold]);

  return { scrollDirection, scrolledPastThreshold };
};

export default useScrollDirection;
