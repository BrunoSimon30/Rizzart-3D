"use client";
import Image from "next/image";
import React from "react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// ScrollTrigger ko register karein
gsap.registerPlugin(ScrollTrigger);

export default function Marquee() {
    const marqueeRef = useRef(null);
    const marRef = useRef(null);
    const [direction, setDirection] = useState(-1); // Default: Left (-1)

    useEffect(() => {
        const marqueeInner = marqueeRef.current;
        if (!marqueeInner) return;

        // Get total width after duplication
        let totalWidth = marqueeInner.scrollWidth / 2; // 🔥 FIX: Use scrollWidth instead of offsetWidth

        // GSAP Timeline (Smooth)
        let tl = gsap.timeline({
            repeat: -1,
            defaults: { ease: "none" }
        });

        tl.to(marqueeInner, {
            x: `-${totalWidth}px`,
            duration: 30
        });

        // Scroll event listener
        const handleScroll = (e) => {
            if (e.deltaY > 0) {
                setDirection(-1); // Move Left
                gsap.to(tl, { timeScale: 1 });
                gsap.to(".arrow", { rotation: 180, duration: 0.5 });
            } else {
                setDirection(1); // Move Right
                gsap.to(tl, { timeScale: -1 });
                gsap.to(".arrow", { rotation: 0, duration: 0.5 });
            }
        };

        window.addEventListener("wheel", handleScroll);

        return () => {
            window.removeEventListener("wheel", handleScroll);
        };
    }, []);


    useGSAP(() => {
   
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: marRef.current,
            start: "top 80%", // Jab section viewport ke 80% pe aaye
            end: "bottom 50%",
            // markers:true,
            // pin: true,
            // scrub: 4,
            // toggleActions: "play pause resume reset",
            toggleActions: "play none none reverse",
          },
        });
    
        tl.from(
          marRef.current?.querySelectorAll(".marquee-inner"),
          {
            y: 100,
            duration: 1,
            opacity: 0,
            stagger: 0.4,
            ease: "power3.out",
          },
          "run"
        )
      
         
      }, []);


  return (
    <section ref={marRef}  className="marquee-sec m-sec pt-4 md:pt-2 pb-5 bg-[#B1FF00]">
        <div className="maquee-wrap overflow-hidden flex">
      <div className="marquee-inner flex" ref={marqueeRef}>
        {[...Array(10)].map((_, i) => (
            <div key={i} className="mrq">
            <h1>LET’S RIZZ UP SOMETHING ICONIC!</h1>{" "}
            <Image
              src={"/img/arrow-br.svg"}
              className="arrow"
              width={80}
              height={20}
              alt="arrow"
            />
          </div>
        ))}
      </div>
    </div>
       
      
    </section>
  );
}
