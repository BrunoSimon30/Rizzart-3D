import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Marquee from "@/components/marquee";
import Scrollsec from "@/components/Scrollsec";
import OurWork from "@/components/work";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// ScrollTrigger ko register karein
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const innerBan = useRef(null);
  useGSAP(() => {
    gsap.to(innerBan.current, {
      scrollTrigger: {
        trigger: innerBan.current,
        scroller: "body",
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
        scrub: 1,
        markers: true,
      },
    });
  }, []);

  return (
    <>
      <Header />
      <section ref={innerBan} className="inner-ban h-screen   px-4 flex items-center justify-center  ">
        <div className="inner-ban-wrap h-[90vh] bg-slate-500 rounded-lg flex items-end px-8 pb-8">
          <div>
            <h2 className="up text-white text-[40px] md:text-[4.271vw] font-[600] uppercase  tall">
              Team
            </h2>
            <div>
              <img src={"/img/preload.png"} />
            </div>
            <h3 className="  text-white text-[30px] md:text-[3.271vw] font-[600] uppercase  text-right ">
              scroll to explore
            </h3>
          </div>
        </div>
      </section>
      
      <Marquee />
      <OurWork />
      <Footer />
    </>
  );
}
