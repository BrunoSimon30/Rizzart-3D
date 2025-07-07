"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

export default function Scrollsec() {
  const section2Ref = useRef(null);
  const bgImageRef = useRef(null);
  const boxesRef = useRef([]);
  const circleRef = useRef(null);

  useEffect(() => {
    gsap.set(bgImageRef.current, { scale: 1.1 });
    boxesRef.current.forEach((box) => {
      gsap.set(box, { opacity: 0, y: 800 });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section2Ref.current,
        start: "top top",
        end: "+=300%",
        scrub: 2,
        pin: true,
      },
    });

    tl.to(bgImageRef.current, { scale: 1, duration: 3 });

    boxesRef.current.forEach((box, index) => {
      tl.to(box, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: index === 0 ? 0 : 0.3,
      });
    });

    const handleMouseMove = (e) => {
      const rect = section2Ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left - 160;
      const y = e.clientY - rect.top - 160;

      if (circleRef.current) {
        gsap.to(circleRef.current, {
          x,
          y,
          duration: 0.4,
          ease: "power3.out",
        });
      }
    };

    const container = section2Ref.current;
    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const boxContent = (
    <>
      <h2 className="text-[72px] leading-[5.5rem] font-medium capitalize">
        Make your
        <br />
        brand the
        <br />
        obvious choice
      </h2>
      <div className="flex flex-col justify-center items-center space-y-12">
        <p className="text-xl leading-10 pl-4 max-w-sm">
          We work with businesses to help them in the evolution,
          reinvention, or creation of their brand.
        </p>
        <div className="pr-24">
          <Link
            href={""}
            className="w-fit relative flex text-xl font-medium bg-[#FEECDD] px-16 py-4 rounded-full"
          >
            Let's Explore
            <span className="arow bg-[#FEECDD] text-2xl w-13 h-13 absolute -right-13 top-0 bottom-0 m-auto flex items-center justify-center rounded-full">
              <MdArrowOutward />
            </span>
          </Link>
        </div>
      </div>
    </>
  );

  return (
    <section
      ref={section2Ref}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Background Image with Spotlight Effect */}
      <div ref={bgImageRef} className="absolute inset-0 z-0">
        <img
          src="/img/secbg1.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0">
          <div
            ref={circleRef}
            className="absolute w-96 h-96 rounded-full pointer-events-none"
            style={{
              background: "transparent",
              boxShadow: "0 0 0 9999px rgba(0,0,0,0.95)",
              mixBlendMode: "destination-out",
              filter: "blur(20px)",
              opacity: 0.9,
            }}
          />
        </div>
      </div>

      {/* Boxes */}
      <div className="relative h-full flex flex-col items-center justify-center gap-12">
        <div
          ref={(el) => (boxesRef.current[0] = el)}
          className="box absolute w-full xl:px-40 px-12"
        >
          <div className="items-center px-28 xl:py-52 py-24 w-full bg-white rounded-lg shadow-lg xl:grid xl:grid-cols-2 gap-4">
            <div>{boxContent.props.children[0]}</div>
            {boxContent.props.children[1]}
          </div>
        </div>

        <div
          ref={(el) => (boxesRef.current[1] = el)}
          className="box absolute w-full xl:px-40 px-12"
        >
          <div className="items-center px-28 xl:py-52 py-24 w-full bg-red-300 rounded-lg shadow-lg xl:grid xl:grid-cols-2 gap-4">
            <div>{boxContent.props.children[0]}</div>
            {boxContent.props.children[1]}
          </div>
        </div>

        <div
          ref={(el) => (boxesRef.current[2] = el)}
          className="box absolute w-full xl:px-40 px-12"
        >
          <div className="items-center px-28 xl:py-52 py-24 w-full bg-purple-500 rounded-lg shadow-lg xl:grid xl:grid-cols-2 gap-4">
            <div>{boxContent.props.children[0]}</div>
            {boxContent.props.children[1]}
          </div>
        </div>

        <div
          ref={(el) => (boxesRef.current[3] = el)}
          className="box absolute w-full xl:px-40 px-12"
        >
          <div className="items-center px-28 xl:py-52 py-24 w-full bg-orange-500 rounded-lg shadow-lg xl:grid xl:grid-cols-2 gap-4">
            <div>{boxContent.props.children[0]}</div>
            {boxContent.props.children[1]}
          </div>
        </div>
      </div>
    </section>
  );
}
