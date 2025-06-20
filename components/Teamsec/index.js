import { useState, useRef, React } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

// ScrollTrigger ko register karein
gsap.registerPlugin(ScrollTrigger);
export default function Teamsec() {

  

    const blogRef = useRef(null);
  
    useGSAP(() => {
   
  
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: blogRef.current,
          start: "top 20%", // Jab section viewport ke 80% pe aaye
          end: "bottom 50%",
          // markers: true,
          // pin: true,
          // scrub: 4,
          // toggleActions: "play pause resume reset",
          toggleActions: "play none none reverse",
        },
      });
  
      tl.from(
        blogRef.current?.querySelectorAll(".up"),
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
    <section  ref={blogRef}  id="team" className="blog-sec  md:h-screen py-20 bg-black">
    <div className="px-8 md:px-16 space-y-12">
      <div className="b-h flex items-center gap-4 overflow-hidden pt-2">
        <h2 className="up text-[#B1FF01] text-[40px] md:text-[4.271vw] font-[600] uppercase  tall">
          Team
        </h2>
        <div className="up gap-4 flex pb-5">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="inline-block w-[3.125vw]  ">
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
      <div className="md:grid md:grid-cols-3 gap-8 space-y-8 md:space-y-0">
        <div className="teamn-bx space-y-4">
            <Image
              className="team-img"
              src="/img/t1.png"
              alt="team"
              width={567}
              height={535} />
              <div>
                <h4 className="text-white text-[30px] leading-[30px] md:text-[45px] md:leading-[45px] font-semibold ">Ali Qureshi</h4>
                <h5 className='text-[#BABABA] text-[20px] leading-[25px] md:text-[25px] md:leading-[30px]'>(Operations)</h5>
              </div>
        </div>
        <div className="teamn-bx space-y-4">
            <Image
              className="team-img"
              src="/img/t2.png"
              alt="team"
              width={567}
              height={535} />
              <div>
                <h4 className="text-white text-[30px] leading-[30px] md:text-[45px] md:leading-[45px] font-semibold ">Mustafa Uzair</h4>
                <h5 className='text-[#BABABA] text-[20px] leading-[25px] md:text-[25px] md:leading-[30px]'>(Marketing)</h5>
              </div>
        </div>
        <div className="teamn-bx space-y-4">
            <Image
              className="team-img"
              src="/img/t3.png"
              alt="team"
              width={567}
              height={535} />
              <div>
                <h4 className="text-white text-[30px] leading-[30px] md:text-[45px] md:leading-[45px] font-semibold ">Jazib Qureshi</h4>
                <h5 className='text-[#BABABA] text-[20px] leading-[25px] md:text-[25px] md:leading-[30px]'>(Business)</h5>
              </div>
        </div>
      </div>
    </div>
  </section>
  )
}
