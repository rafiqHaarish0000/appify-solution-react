import { useEffect, useState } from "react";
import "../styles/cursor.css";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", () => setClicked(true));
    window.addEventListener("mouseup", () => setClicked(false));

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", () => setClicked(true));
      window.removeEventListener("mouseup", () => setClicked(false));
    };
  }, []);

  return (
    <div
      className={`cursor-container ${clicked ? "cursor-clicked" : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div className="cursor-arrow">
        {/* New filled upward arrow, no stem, rotated slightly left */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="#9fa1fb"
          style={{ transform: "rotate(-35deg)" }}
        >
          <path d="M12 2L6 12h12L12 2z" />
        </svg>
      </div>

      <div className="cursor-chat">
        <span>YOU</span>
      </div>
    </div>
  );
}
