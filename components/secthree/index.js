import Image from "next/image";
import { React, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";
export default function Secthree() {
  const SecWrapp = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: SecWrapp.current,
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: true,
      },
    });

    tl.from(
      SecWrapp.current?.querySelectorAll(".gl"),
      {
        opacity: 0,
        duration: 2,
        ease: "power3.out",
      },
      "run"
    )
      .from(
        SecWrapp.current?.querySelectorAll(".lcurr"),
        {
          scale: 0,
          duration: 2,
          stagger: 0.4,
          ease: "power3.out",
        },
        "run"
      )
      .from(
        SecWrapp.current?.querySelectorAll(".gr"),
        {
          opacity: 1,
          duration: 2,
          opacity: 0,
          stagger: 0.4,
          ease: "power3.out",
        },
        "run"
      );
  }, []);
  return (
    <>
      <section
        ref={SecWrapp}
        className="sec-three h-screen py-12 flex items-center justify-center "
      >
        
        <div className="container mx-auto max-w-screen-xl px-4 md:px-14 2xl:px-0">
          <div className="md:grid md:grid-cols-3 gap-8 items-center">
            <div className="  w-full py-2"></div>
            <div className="col-span-2 gr  w-full md:py-2 md:px-8 pl-0 lg:pl-32 space-y-4">
              <h2 className="gl text-black text-[45px]   uppercase tall">
                It's Time&nbsp; To Set The &nbsp; Internet On Fire!
              </h2>
              <p className="text-[20px] md:text-[25px] font-[600] ">
                Rizznart bends reality and reprograms attention spans. Our
                cinematic visuals and motion graphics make audiences stop,
                watch, and engage. In a world of endless scrolling, we make your
                brand impossible to ignore.
              </p>
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
      </section>
    </>
  );
}
