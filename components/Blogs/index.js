import { useState, useRef, React } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

// ScrollTrigger ko register karein
gsap.registerPlugin(ScrollTrigger);

export default function Blogs() {
  const [activeTab, setActiveTab] = useState("one");

  const blogRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: blogRef.current,
        start: "top top",
        end: "bottom top",
        pin: true,
       
       scrub: false,
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
      .from(
        blogRef.current?.querySelectorAll(".gl"),
        {
          x: -100,
          duration: 1,
          opacity: 0,
          stagger: 0.4,
          ease: "power3.out",
        },
        "run"
      )
      .from(
        blogRef.current?.querySelectorAll(".rotate"),
        {
          scale: 0,
          duration: 2,
          stagger: 0.4,
          ease: "bounce.out",
        },
        "run"
      )
      .from(
        blogRef.current?.querySelectorAll(".gr"),
        {
          x: 100,
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
      ref={blogRef}
      id="blogs"
      className="ourblog-sec  md:h-screen py-20 overflow-hidden  relative z-20"
    >
      <div className="px-8 md:px-16 space-y-4">
        <div className="b-h flex items-center gap-4 overflow-hidden pt-2">
          <h2 className="up text-[#B1FF01] text-[40px] md:text-[4.271vw] font-[600] uppercase  tall">
            Our blogs
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
        <div className="md:grid md:grid-cols-5 gap-8">
          <div className="col-span-3  w-full  relative">
            <div className="rotate opacity-0">
              <Image src="/img/360.gif" width={500} height={500} alt="arrow" />
            </div>
            <h2 className=" gl text-[#F1FFC4] uppercase text-[23px] font-semibold leading-[21px] ">
              Digital
              <br />
              Experiences
            </h2>
            <div className="gl flex gap-4   md:block py-4 justify-center md:justify-start">
              <button
                className={`text-[18px] md:text-[4.271vw] font-[600] uppercase block transition-all duration-300 ${
                  activeTab === "one"
                    ? "  text-white md:pb-24"
                    : "text-[#797979]"
                }`}
                onClick={() => setActiveTab("one")}
              >
                3D animation
              </button>
              <button
                className={`text-[18px] md:text-[4.271vw] font-[600] uppercase block transition-all duration-300 ${
                  activeTab === "two"
                    ? "  text-white md:pb-24"
                    : "text-[#797979]"
                }`}
                onClick={() => setActiveTab("two")}
              >
                Content Creators
              </button>

              <button
                className={`text-[18px] md:text-[4.271vw] font-[600] uppercase block transition-all duration-300 ${
                  activeTab === "three"
                    ? "  text-white md:pb-24"
                    : "text-[#797979]"
                }`}
                onClick={() => setActiveTab("three")}
              >
                video production
              </button>
            </div>
          </div>
          <div className="gr col-span-2  w-full space-y-4  ">
            {/* one Content */}
            <div className="bg-[#0e0e0e] py-4 px-5 ">
              <Link href={"/blogs"}>
                <h1
                  className={`${
                    activeTab === "one" ? "  text-white" : "text-[#797979]"
                  } text-[20px] md:text-[2.3vw] font-[600] md:leading-[2.3vw] uppercase transition-all duration-300 pb-2`}
                >
                  7 Signs You Need High-Quality 3D Animation Services
                </h1>
              </Link>
              {activeTab === "one" && (
                <motion.div
                  key="one"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <p className="text-white font-[500] md:text-[20px] md:pr-24">
                    Do you know—if you’re running an online business—the digital
                    landscape is a ruthless battlefield? If so, you’re well
                    aware of attention spans that are getting shorter,
                    competition is ruthlessly stealing eyeballs, and businesses
                    failing to adapt are fading into irrelevance faster than
                    Internet Explorer....
                  </p>
                  <div className="text-right py-4">
                    <Link href={"/blogs"} className="btn-c">
                      read more
                    </Link>
                  </div>
                </motion.div>
              )}
            </div>
            {/* two Content */}
            <div className="bg-[#0e0e0e] py-4 px-5">
              <Link href={"/blogs"}>
                <h1
                  className={`${
                    activeTab === "two" ? "  text-white" : "text-[#797979]"
                  } text-[20px] md:text-[2.3vw] font-[600] leading-[2.3vw] uppercase transition-all duration-300 pb-2`}
                >
                  Agency for Content Creators
                </h1>
              </Link>

              {activeTab === "two" && (
                <motion.div
                  key="two"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <p className="text-white font-[500] md:text-[20px] md:pr-24">
                    Welcome to the internet’s best-kept secret—except, it’s not
                    a secret anymore. Because you’ve just unlocked the cheat
                    code, if you’re reading this, to explosive content creation,
                    brand dominance, and the kind of online presence that makes
                    people stop, stare, and say, “Damn, I need whatever they’re
                    having.”
                  </p>
                  <div className="text-right">
                    <Link href={"/blogs"} className="btn-c">
                      read more
                    </Link>
                  </div>
                </motion.div>
              )}
            </div>
            {/* three Content */}
            <div className="bg-[#0e0e0e] py-4 px-5  ">
              <Link href={"/blogs"}>
                <h1
                  className={`${
                    activeTab === "three" ? "  text-white" : "text-[#797979]"
                  } text-[20px] md:text-[2.3vw] font-[600] md:leading-[2.3vw] uppercase transition-all duration-300 pb-2`}
                >
                  9 Reasons High-Quality Video Production Services..
                </h1>
              </Link>

              {activeTab === "three" && (
                <motion.div
                  key="three"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <p className="text-white font-[500] md:text-[20px] md:pr-24">
                    Not investing in professional video production services
                    means the brand is just losing the digital battle. It’s
                    brutal out there—millions of brands (both local and global)
                    fighting for attention, with only the strongest surviving.
                    And guess what? Low-quality, substandard videos won’t cut
                    it...
                  </p>
                  <div className="text-right">
                    <Link href={"/blogs"} className="btn-c">
                      read more
                    </Link>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
