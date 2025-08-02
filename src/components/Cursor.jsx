import React, { useEffect, useRef, useState } from "react";
import "./Cursor.css";

export default function Cursor() {
  const cursorRef = useRef(null);
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const cursorPos = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    let animationFrame;

    // Animate cursor position smoothly towards mouse position
    const animate = () => {
      cursorPos.current.x += (pos.current.x - cursorPos.current.x) * 0.15;
      cursorPos.current.y += (pos.current.y - cursorPos.current.y) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0)`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    // Update mouse position on mousemove
    const onMouseMove = (e) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
    };

    // On mouseover, check the computed cursor style of the hovered element
    const onMouseOver = (e) => {
      const el = e.target;
      if (!el) return;

      const style = window.getComputedStyle(el);
      const cursorStyle = style.cursor;

      // List of cursor styles that indicate interactive elements
      const interactiveCursors = [
        "pointer",
        "grab",
        "alias",
        "copy",
        "move",
        "zoom-in",
        "zoom-out",
      ];

      if (interactiveCursors.includes(cursorStyle)) {
        setHovering(true);
      }
    };

    // On mouseout, remove hover if the cursor style matches
    const onMouseOut = (e) => {
      const el = e.target;
      if (!el) return;

      const style = window.getComputedStyle(el);
      const cursorStyle = style.cursor;

      const interactiveCursors = [
        "pointer",
        "grab",
        "alias",
        "copy",
        "move",
        "zoom-in",
        "zoom-out",
      ];

      if (interactiveCursors.includes(cursorStyle)) {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${hovering ? "hover" : ""}`}
    />
  );
}
