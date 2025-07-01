// components/ImageReveal.js
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ImageReveal() {
  const containerRef = useRef(null);
  const circleRef = useRef(null);
  const animationRef = useRef(null); // for cancelling animation
  const mousePos = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - 160; // Center offset (half of w/h)
    const y = e.clientY - rect.top - 160;

    mousePos.current = { x, y };

    // Animate with easing
    if (circleRef.current) {
      gsap.to(circleRef.current, {
        x,
        y,
        duration: 0.5,
   
      });
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img/secbg1.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Black Overlay with Hole */}
        <div className="absolute inset-0">
          <div
            ref={circleRef}
            className="absolute w-80 h-80 rounded-full pointer-events-none"
            style={{
              background: "transparent",
              boxShadow: "0 0 0 9999px rgba(0,0,0,0.95)",
              mixBlendMode: "destination-out",
              filter: "blur(20px)",
              opacity: 0.9,
            }}
          />
        </div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Welcome to My Portal</h1>
        <p className="text-xl max-w-2xl drop-shadow-md">
          This is a mysterious interactive section with a mouse-revealed background effect.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-black rounded-full font-semibold shadow-md hover:bg-gray-200 transition">
          Get Started
        </button>
      </div>
    </div>
  );
}
