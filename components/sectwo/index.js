import Image from "next/image";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// ScrollTrigger ko register karein
gsap.registerPlugin(ScrollTrigger);

export default function Sectwo() {

  const SecWrap = useRef(null);

  useGSAP(() => {
     const tl = gsap.timeline({
       scrollTrigger: {
         trigger: SecWrap.current,
         start: "top top",
         end: "bottom top",
         pin: true,
         scrub: true,
       },
     });
 
     tl.from(
       SecWrap.current?.querySelectorAll(".gl"),
       {
         x: 100,
         duration: 1,
         opacity: 0,
         stagger: 0.4,
         ease: "power3.out",
       },
       "run"
     ).from(
       SecWrap.current?.querySelectorAll(".gr"),
       {
         x: -100,
         duration: 1,
         opacity: 0,
         stagger: 0.4,
         ease: "power3.out",
       },
       "run"
     );
   }, []);

  return (
     <section
        ref={SecWrap}
        className="sec-two h-screen   py-12 flex items-center justify-center bg-fixed bg-center relative overflow-hidden"
      >
        <div className="container mx-auto max-w-screen-xl ">
          <div className="space-y-6 px-4 md:px-14 2xl:px-0">
            <div className=" w-full py-2">
              <h2 className="gl text-white text-[45px] md:text-[4.271vw] font-[600] uppercase line leading-[55px] md:leading-[3.49vw]">
                Flip The
                <br />
                Switch go
              </h2>
            </div>
            <div className="gr  w-full py-2">
              <h2 className="text-white text-[45px] md:text-[4.271vw] font-[600] uppercase line leading-[55px] md:leading-[3.49vw] text-right">
                Full Mad
                <br />
                Scientist
                <br /> Mode
              </h2>
            </div>
          </div>
        </div>
      </section>
  );
}
