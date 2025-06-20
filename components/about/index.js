import Image from "next/image";
import { React, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";
// ScrollTrigger ko register karein
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRed = useRef(null);
  const topheadingRef = useRef(null);
  const headingRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutRed.current,
        start: "top 20%", // Jab section viewport ke 80% pe aaye
        end: "bottom 50%",
        // markers:true,
        // pin: true,
        // scrub: 4,
        // toggleActions: "play pause resume reset",
        // toggleActions: "play none none reverse",
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: true,
      },
    });

    tl.from(
      topheadingRef.current?.querySelectorAll(".gl h2 , .gl svg"),
      {
        y: 100,
        duration: 1,
        opacity: 0,

        ease: "power3.out",
      },
      "run"
    )
      .from(
        headingRef.current?.querySelectorAll("h2 "),
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
        aboutRed.current?.querySelectorAll(".arcde-ab"),
        {
          scale: 0,
          duration: 2,
          stagger: 0.4,
          ease: "power1.out",
        },
        "run"
      );
  }, []);

  return (
    <>
      <section
        ref={aboutRed}
        id="about"
        className="about-sec  h-screen p-6 flex items-center  "
      >
        <div className="bg-[url('/img/frame.png')] rounded-2xl py-16 mt-6  ">
          <div className="px-6 md:px-14 space-y-12">
            <div
              className="flex justify-between w-full items-center"
              ref={topheadingRef}
            >
              <div className="gl overflow-hidden">
                <h2 className="text-[#F1FFC4] uppercase text-[23px] font-semibold leading-[21px]">
                  RizzNArt
                  <br />
                  is here
                </h2>
              </div>
              <div className="gl overflow-hidden">
                <svg
                  className="w-[100px] h-[93px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 138 93"
                  fill="none"
                >
                  <g>
                    <path
                      d="M138 92.5713H0V0.571289H101.965L138 92.5713Z"
                      fill="black"
                    />
                    <path
                      d="M71.462 5.63086H97.5901L122.895 71.9981H93.3698L91.0795 63.2938H75.8625L73.2977 71.9981H46.1575L71.462 5.63086ZM86.6791 46.6055L83.7455 33.1331H83.5653L80.6317 46.6055H86.6791Z"
                      fill="#B1FF00"
                    />
                    <path
                      d="M6.65649 5.63086H33.8911C47.5555 5.63086 66.1608 9.02683 66.1608 26.7099C66.1608 33.862 62.764 38.9903 57.8146 42.472L72.9459 71.9895H44.2531L34.3543 50.173H33.9854V71.9895H6.65649V5.63086ZM36.0012 34.9597C40.3073 34.9597 42.2373 32.67 42.2373 29.8229C42.2373 26.9758 40.2215 24.7804 36.0012 24.7804H33.9854V34.9511H36.0012V34.9597Z"
                      fill="#B1FF00"
                    />
                    <path
                      d="M65.5603 20.9729V34.5225H77.878L64.6081 59.5121V48.6295H51.0552L65.5603 20.9729Z"
                      fill="black"
                    />
                    <path
                      d="M63.0041 31.4009V37.0608H73.3918L66.9842 49.9072V45.7394H55.6958L63.0041 31.4009Z"
                      fill="#FFA100"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_183_11091">
                      <rect
                        width="138"
                        height="92"
                        fill="white"
                        transform="translate(0 0.571289)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="gl overflow-hidden">
                <h2 className="text-[#F1FFC4] uppercase text-[23px] font-semibold text-right leading-[21px]">
                  who
                  <br />
                  we are
                </h2>
              </div>
            </div>
            <div className="md:grid md:grid-cols-5 gap-8">
              <div className="md:col-span-3  w-full py-2" ref={headingRef}>
                <h2 className="overflow-hidden   text-white text-[30px]  md:text-[4vw]  font-[600]   uppercase leading-[50px] md:leading-[4.5vw] mb-12">
                  Glitch The Ordinary
                  <br />
                  Design
                  <span className="inline-block w-[20px] md:w-[2.3vw]  mx-3">
                    <svg viewBox="0 0 50 73" fill="none">
                      <path
                        d="M26.9707 0.594299L26.9707 25.7614H49.8377L25.2021 72.1569L25.2021 51.9631H0.0493164L26.9707 0.594299Z"
                        fill="#fff"
                      />
                    </svg>
                  </span>
                  With No Speed
                  <br /> Limit Visuals
                  <span className="inline-block w-[20px] md:w-[2.3vw] mx-3 ">
                    <svg viewBox="0 0 50 73" fill="none">
                      <path
                        d="M26.9707 0.594299L26.9707 25.7614H49.8377L25.2021 72.1569L25.2021 51.9631H0.0493164L26.9707 0.594299Z"
                        fill="#fff"
                      />
                    </svg>
                  </span>
                  So
                  <br />
                  Wild, Even Your Brain Buffered.
                </h2>
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
              <div className="md:col-span-2 relative  w-full py-2 px-8   hidden md:block">
                <div className="arcde-ab  opacity-0">
                  <Image
                    src="/img/game.png"
                    width={350}
                    height={800}
                    alt="arrow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
