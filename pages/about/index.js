import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Marquee from "@/components/marquee";
import Scrollsec from "@/components/Scrollsec";
import OurWork from "@/components/work";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";

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
      },
    });
  }, []);

  return (
    <>
      <Header />
      <section
         
        className="inner-ban h-screen   px-4 flex items-center justify-center  -z-10"
      >
        <div className="inner-ban-wrap h-[90vh] bg-slate-500 rounded-lg flex items-end px-8 pb-8">
          <div>
            <h2 className="up text-white text-[40px] md:text-[4.271vw] font-[600] uppercase  tall">
              Services
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
      {/* <section className="bd-sec   bg-black   ">
        <div className="px-8 md:px-16 space-y-12">
          <div className="bd-wrap flex items-center justify-center h-screen">
            <div className="grid grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="up text-white text-[40px] md:text-[4.271vw] font-[600] uppercase  tall">
                Brand Development
              </h2>
              <p className="text-[20px] md:text-[25px] font-[600]  text-white pb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <div>
                <Link
                  href={""}
                  className="btn-c inline-flex items-center gap-2"
                >
                  <p>Learn more</p>
                  <span className=" text-[20px]  pt-1">
                    <MdArrowRightAlt />
                  </span>
                </Link>
              </div>
            </div>
            <div className="text-center">
              <img src={"/img/p1.jpg"} className="rounded-lg ml-auto" />
            </div>
          </div>
          </div>
          
        </div>
      </section> */}
       <Scrollsec/>
      <Marquee />
      <OurWork />
      <Footer />
    </>
  );
}
