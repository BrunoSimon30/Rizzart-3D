"use client";
import React from "react";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

// ScrollTrigger ko register karein
gsap.registerPlugin(ScrollTrigger);

export default function MainBanner() {
  const textRef = useRef(null);
  const btnRef = useRef(null);
  const banRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline(); // Create a GSAP timeline

    tl.from(textRef.current?.querySelectorAll("h1"), {
      y: 100,
      duration: 0.5,
      opacity: 0,
      stagger: 0.4,
      ease: "power3.out",
    }).from(
      btnRef.current,
      {
        y: 100,
        duration: 1,
        opacity: 0,
        ease: "power3.out",
      },
      "-=0.3"
    ); // "-=0.3" means start button animation slightly before text ends
  }, []);

  return (
    <section
      ref={banRef}
      id="home"
      className="section-one hero-sec w-full  h-screen flex items-end justify-center bg-fixed  relative overflow-hidden"
    >
      <video
        className="vid"
        id="vid"
        autoPlay={true}
        loop={true}
        muted
        controls={false}
      >
        <source src="/img/stock.mp4" />
      </video>
      <div className="w-full md:flex  items-end  justify-between px-6 md:px-16  pb-20 lg:pb-8 relative z-20  ">
        <h1>
          <div className="textR-wrap" ref={textRef}>
            <span className="textR">
              <h1 className="text-white text-[45px] md:text-[3.2vw] font-[600] uppercase line  leading-[45px] md:leading-[3.2vw]">
                Rizznart Disrupts
              </h1>
            </span>
            <span className="textR">
              <h1 className="text-white text-[45px] md:text-[3.2vw] font-[600] uppercase line  leading-[45px] md:leading-[3.2vw]">
                <span className="flex items-end gap-6">
                  <span className="w-[110px] md:w-[6.771vw]   bg-[#b3ff0000] flex items-center gap-3 ">
                    {[...Array(3)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 73"
                        fill="none"
                      >
                        <path
                          d="M26.9707 0.594299L26.9707 25.7614H49.8377L25.2021 72.1569L25.2021 51.9631H0.0493164L26.9707 0.594299Z"
                          fill="#B1FF00"
                        />
                      </svg>
                    ))}
                  </span>
                  <span>Designs,</span>
                </span>
              </h1>
            </span>
            <span className="textR">
              <h1 className="text-white text-[45px] md:text-[3.2vw] font-[600] uppercase line  leading-[45px] md:leading-[3.2vw]">
                And Dominates<span className="text-[#B1FF00]">.</span>
              </h1>
            </span>
          </div>
        </h1>
        <div className="btn-ani hidden md:block" ref={btnRef}>
          <Link href={"#contact"} className="btn-a uppercase">
            <span>
              <svg
                className="w-[1.667vw] "
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
            contact
          </Link>
        </div>
      </div>
    </section>
  );
}
