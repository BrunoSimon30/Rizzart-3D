import { useState, useRef, React, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";

// ScrollTrigger ko register karein
gsap.registerPlugin(ScrollTrigger);

export default function Pricing() {
  const blogRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    "/img/p1.jpg",
    "/img/p2.jpg",
    "/img/p3.jpg",
    "/img/p4.jpg",
    "/img/p5.jpg",
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: blogRef.current,
        start: "top 70%", // Jab section viewport ke 80% pe aaye
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
    );
  }, []);
  useEffect(() => {
    const sections = document.querySelectorAll(".content-section");

    const observer = new IntersectionObserver(
      (entries) => {
        let visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => ({
            index: Number(entry.target.dataset.index),
            ratio: entry.intersectionRatio,
          }));

        if (visibleSections.length === 0) return;

        // Sort by max visible area
        visibleSections.sort((a, b) => b.ratio - a.ratio);

        if (visibleSections[0].index !== activeIndex) {
          setActiveIndex(visibleSections[0].index);
        }
      },
      {
        threshold: Array.from({ length: 20 }, (_, i) => i / 20), // finer detection
        rootMargin: "0px 0px -40% 0px", // slightly higher detection point
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [activeIndex]); // add activeIndex to dependency

  return (
    <>
      <section ref={blogRef} id="blogs" className="blog-sec   py-20  ">
        <div className="px-8 md:px-16 space-y-32">
          <div className="b-h flex items-center gap-4 overflow-hidden pt-2">
            <h2 className="up text-[#B1FF01] text-[40px] md:text-[4.271vw] font-[600] uppercase  tall">
              our Pricing
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
          <div className=" gap-24 hidden md:flex">
            <div className="pri-img w-full hidden md:block sticky top-32 self-start ">
              <div className="relative w-[644px] h-[483px] ml-8 rounded-lg  ">
                {images.map((src, i) => (
                  <motion.div
                    key={i}
                    className="absolute top-0 left-0 w-full h-full"
                    initial={false}
                    animate={{ opacity: i === activeIndex ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <Image
                      src={src}
                      alt="pricing"
                      fill
                      sizes="(max-width: 1440px) 100vw, 644px"
                      className="-rotate-12 rounded-lg"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="pright w-full space-y-24  ">
              <ul className="space-y-24">
                {[
                  "smm",
                  "Content Strategy",
                  "Content production",
                  "3D/Animations",
                  "Game design",
                ].map((title, index) => (
                  <li
                    className="content-section min-h-[250px] mb-[100px]"
                    data-index={index}
                    key={index}
                  >
                    <div className="flex gap-6 items-center">
                      <h4 className="text-[#fff] text-[40px] md:text-[3.271vw]   font-[600] uppercase  tall">
                        {title}
                      </h4>
                      <div className="pwrap space-y-4 pb-6 ">
                        <h5 className="text-[#ACACAC] text-[40px] md:text-[2.125vw] leading-[2.125vw] font-[600] uppercase">
                          $100
                        </h5>
                        <div>
                          <Link
                            href={"#contact"}
                            className="btn-c inline-flex items-center gap-2"
                          >
                            <p>contact us</p>
                            <span className=" text-[20px]  pt-1">
                              <MdArrowRightAlt />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:hidden">
            <div className="md:grid md:grid-cols-3 gap-8 space-y-8 md:space-y-0 ">
              <div className="teamn-bx space-y-4">
                <Image
                  className="team-img"
                  src="/img/p1.jpg"
                  alt="team"
                  width={567}
                  height={535}
                />
                <div className='space-y-4'>
                  <div className='flex justify-between items-center'>
                    <h4 className="text-white text-[30px] leading-[30px]   font-semibold uppercase">
                      smm
                    </h4>
                    <h5 className="text-[#ACACAC] text-[30px]   font-[600] uppercase">
                      $100
                    </h5>
                  </div>
                  <div>
                    <Link
                      href={"#contact"}
                      className="btn-c inline-flex items-center gap-2"
                    >
                      <p>contact us</p>
                      <span className=" text-[20px]  pt-1">
                        <MdArrowRightAlt />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="teamn-bx space-y-4">
                <Image
                  className="team-img"
                  src="/img/p2.jpg"
                  alt="team"
                  width={567}
                  height={535}
                />
                <div className='space-y-4'>
                  <div className='flex justify-between items-center'>
                    <h4 className="text-white text-[30px] leading-[30px]   font-semibold uppercase">
                    Content Strategy
                    </h4>
                    <h5 className="text-[#ACACAC] text-[30px]   font-[600] uppercase">
                      $100
                    </h5>
                  </div>
                  <div>
                    <Link
                      href={"#contact"}
                      className="btn-c inline-flex items-center gap-2"
                    >
                      <p>contact us</p>
                      <span className=" text-[20px]  pt-1">
                        <MdArrowRightAlt />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="teamn-bx space-y-4">
                <Image
                  className="team-img"
                  src="/img/p3.jpg"
                  alt="team"
                  width={567}
                  height={535}
                />
                <div className='space-y-4'>
                  <div className='flex justify-between items-center'>
                    <h4 className="text-white text-[30px] leading-[30px]   font-semibold uppercase">
                    Content production
                    </h4>
                    <h5 className="text-[#ACACAC] text-[30px]   font-[600] uppercase">
                      $100
                    </h5>
                  </div>
                  <div>
                    <Link
                      href={"#contact"}
                      className="btn-c inline-flex items-center gap-2"
                    >
                      <p>contact us</p>
                      <span className=" text-[20px]  pt-1">
                        <MdArrowRightAlt />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="teamn-bx space-y-4">
                <Image
                  className="team-img"
                  src="/img/p4.jpg"
                  alt="team"
                  width={567}
                  height={535}
                />
                <div className='space-y-4'>
                  <div className='flex justify-between items-center'>
                    <h4 className="text-white text-[30px] leading-[30px]   font-semibold uppercase">
                    3D/Animations
                    </h4>
                    <h5 className="text-[#ACACAC] text-[30px]   font-[600] uppercase">
                      $100
                    </h5>
                  </div>
                  <div>
                    <Link
                      href={"#contact"}
                      className="btn-c inline-flex items-center gap-2"
                    >
                      <p>contact us</p>
                      <span className=" text-[20px]  pt-1">
                        <MdArrowRightAlt />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="teamn-bx space-y-4">
                <Image
                  className="team-img"
                  src="/img/p5.jpg"
                  alt="team"
                  width={567}
                  height={535}
                />
                <div className='space-y-4'>
                  <div className='flex justify-between items-center'>
                    <h4 className="text-white text-[30px] leading-[30px]   font-semibold uppercase">
                    Game  design
                    </h4>
                    <h5 className="text-[#ACACAC] text-[30px]   font-[600] uppercase">
                      $100
                    </h5>
                  </div>
                  <div>
                    <Link
                      href={"#contact"}
                      className="btn-c inline-flex items-center gap-2"
                    >
                      <p>contact us</p>
                      <span className=" text-[20px]  pt-1">
                        <MdArrowRightAlt />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
