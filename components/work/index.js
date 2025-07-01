"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// ScrollTrigger ko register karein
gsap.registerPlugin(ScrollTrigger);

export default function OurWork() {
  const teamRef = useRef(null);
    const marqueeRef = useRef(null);
    const [direction, setDirection] = useState(-1); // Default: Left (-1)
  
    useEffect(() => {
      const marqueeInner = marqueeRef.current;
      const images = marqueeInner.children;
      
      // Ensure proper duplication for seamless effect
      const duplicateContent = () => {
        while (marqueeInner.scrollWidth < window.innerWidth * 2) {
          Array.from(images).forEach((img) => {
            const clone = img.cloneNode(true);
            marqueeInner.appendChild(clone);
          });
        }
      };
      
      duplicateContent(); // Ensure enough content
  
      // Get correct total width
      let totalWidth = marqueeInner.scrollWidth / 2;
  
      // GSAP Infinite Scrolling Animation
      let tween = gsap.to(marqueeInner, {
        x: `-${totalWidth}px`,
        duration: 20,
        repeat: -1,
        ease: "none"
      });
  
      // Scroll Event for Direction Change
      const handleScroll = (e) => {
        if (e.deltaY > 0) {
          setDirection(-1); // Move Left
          gsap.to(tween, { timeScale: 1 });
          gsap.to(".mimg", { rotation: 4, duration: 0.5 });
        } else {
          setDirection(1); // Move Right
          gsap.to(tween, { timeScale: -1 });
          gsap.to(".mimg", { rotation: -4, duration: 0.5 });
        }
      };
  
      window.addEventListener("wheel", handleScroll);
  
      return () => {
        window.removeEventListener("wheel", handleScroll);
      };
    }, []);

     
    
      useGSAP(() => {


 gsap.to(teamRef.current, {
      scrollTrigger: {
        trigger: teamRef.current,
        scroller: 'body',
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
        scrub: 1,
        // markers: true,
      }
    });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: teamRef.current,
            start: "top 40%", // Jab section viewport ke 80% pe aaye
            end: "bottom 50%",
            // markers: true,
            // pin: true,
            // scrub: 4,
            // toggleActions: "play pause resume reset",
            toggleActions: "play none none reverse",
          },
        });
    
        tl.from(
          teamRef.current?.querySelectorAll(".up"),
          {
            y: 100,
            duration: 1,
            opacity: 0,
           
            ease: "power3.out",
          },
          "run"
        )
       
        ;
      }, []);


  return (
    <section ref={teamRef} id="work" className="work-sec py-24 md:py-32 bg-black">
      <div className=" md:space-y-24 space-y-16">
        <div className="flex justify-between px-8 md:px-16">
          <div className="b-h flex items-center gap-4">
            <h2 className=" up text-[#B1FF01] text-[40px] md:text-[4.271vw] font-[600] uppercase  tall">
            Creations From Our Corner
            </h2>
            <div className="up gap-2 md:gap-4 flex pb-5">
              {[...Array(3)].map((_, i) => (
                <span key={i} className="inline-block w-[30px] md:w-[3.125vw]  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 73"
                    fill="none"
                  >
                    <path
                      d="M26.9707 0.594299L26.9707 25.7614H49.8377L25.2021 72.1569L25.2021 51.9631H0.0493164L26.9707 0.594299Z"
                      fill="#B1FF00"
                    />
                  </svg>
                </span>
              ))}
            </div>
          </div>
          <div className="hidden md:block up">
          <button className="btn-a uppercase ">
          <span>
            <svg
             className='w-[1.667vw] '
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 73"
              fill="none"
            >
              <path
                d="M26.9707 0.594299L26.9707 25.7614H49.8377L25.2021 72.1569L25.2021 51.9631H0.0493164L26.9707 0.594299Z"
                fill="#B1FF00"
              />
            </svg>
          </span>{" "}
          View All
        </button>
          </div>
        </div>
        <div className="mwarp overflow-hidden flex up">
          <div className="mimg-container flex gap-4" ref={marqueeRef}>
            {[...Array(7)].map((_, i) => (
              <div key={i} className="mimg w-[250px] md:w-auto">
                <Image
                  src={`/img/m${i + 1}.jpg`}
                  width={420}
                  height={420}
                  alt={`Image ${i + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
