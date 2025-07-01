import React, { useRef, useEffect } from "react";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import { MdArrowOutward  } from "react-icons/md";
// ScrollTrigger register
gsap.registerPlugin(ScrollTrigger);

export default function Scrollsec() {
  const section2Ref = useRef(null);
  const bgImageRef = useRef(null);
  const boxesRef = useRef([]);

  useEffect(() => {
    // Initial state set
    gsap.set(bgImageRef.current, { scale: 2 });
    boxesRef.current.forEach((box) => {
      gsap.set(box, { opacity: 0, y: 800 });
    });

    // Scroll animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section2Ref.current,
        start: "top top",
        end: "+=300%",
        scrub: 2,
        pin: true,
      },
    });

    // Background zoom out
    tl.to(bgImageRef.current, { scale: 1, duration: 3 });

    // Boxes animations
    tl.to(boxesRef.current[0], {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0,
    });
    tl.to(boxesRef.current[1], {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.3,
    });
    tl.to(boxesRef.current[2], {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.3,
    });
    tl.to(boxesRef.current[3], {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.3,
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div>
 

      
      <section
        ref={section2Ref}
        className="relative w-full h-screen overflow-hidden "
      >
        <div
          ref={bgImageRef}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/img/s-bg.jpg')",
          }}
        ></div>

        <div className="relative h-full flex flex-col items-center justify-center gap-12 ">
          <div
            ref={(el) => (boxesRef.current[0] = el)}
            className="box absolute w-full   xl:px-40 px-12"
          >
            <div className="items-center px-28 xl:py-52 py-24  w-full bg-white rounded-lg shadow-lg">
               <div className="xl:grid xl:grid-cols-2 gap-4   ">
              <div>
                <h2 className="text-[72px] leading-22 font-medium capitalize">
                  Make your
                  <br />
                  brand the
                  <br />
                  obvious choice
                </h2>
              </div>
              <div className="flex flex-col justify-center items-center space-y-12">
                <p className="text-xl   leading-10 pl-4 max-w-sm">
                  We work with businesses to help them in the evolution
                  reinvention or creation of their brand.
                </p>
                <div className="pr-24">
                  <Link
                    href={""}
                    className="w-fit relative flex text-xl font-medium bg-[#FEECDD] px-16 py-4 rounded-full"
                  >
                    Let's Explore
                    <span className="arow bg-[#FEECDD]  text-2xl w-13 h-13 absolute -right-13 top-0 bottom-0 m-auto flex items-center justify-center rounded-full">
                      <MdArrowOutward />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            </div>
          </div>
          <div
            ref={(el) => (boxesRef.current[1] = el)}
            className="box absolute w-full   xl:px-40 px-12"
          >
           <div className="items-center px-28 xl:py-52 py-24 w-full bg-red-300 rounded-lg shadow-lg">
               <div className="xl:grid xl:grid-cols-2 gap-4   ">
              <div>
                <h2 className="text-[72px] leading-22 font-medium capitalize">
                  Make your
                  <br />
                  brand the
                  <br />
                  obvious choice
                </h2>
              </div>
              <div className="flex flex-col justify-center items-center space-y-12">
                <p className="text-xl   leading-10 pl-4 max-w-sm">
                  We work with businesses to help them in the evolution
                  reinvention or creation of their brand.
                </p>
                <div className="pr-24">
                  <Link
                    href={""}
                    className="w-fit relative flex text-xl font-medium bg-[#FEECDD] px-16 py-4 rounded-full"
                  >
                    Let's Explore
                    <span className="arow bg-[#FEECDD]  text-2xl w-13 h-13 absolute -right-13 top-0 bottom-0 m-auto flex items-center justify-center rounded-full">
                      <MdArrowOutward />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            </div>
          </div>
          <div
            ref={(el) => (boxesRef.current[2] = el)}
            className="box absolute w-full   xl:px-40 px-12"
          >
            <div className="items-center px-28 xl:py-52 py-24 w-full bg-purple-500 rounded-lg shadow-lg">
               <div className="xl:grid xl:grid-cols-2 gap-4   ">
              <div>
                <h2 className="text-[72px] leading-22 font-medium capitalize">
                  Make your
                  <br />
                  brand the
                  <br />
                  obvious choice
                </h2>
              </div>
              <div className="flex flex-col justify-center items-center space-y-12">
                <p className="text-xl   leading-10 pl-4 max-w-sm">
                  We work with businesses to help them in the evolution
                  reinvention or creation of their brand.
                </p>
                <div className="pr-24">
                  <Link
                    href={""}
                    className="w-fit relative flex text-xl font-medium bg-[#FEECDD] px-16 py-4 rounded-full"
                  >
                    Let's Explore
                    <span className="arow bg-[#FEECDD]  text-2xl w-13 h-13 absolute -right-13 top-0 bottom-0 m-auto flex items-center justify-center rounded-full">
                      <MdArrowOutward />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            </div>
          </div>
          <div
            ref={(el) => (boxesRef.current[3] = el)}
            className="box absolute w-full   xl:px-40 px-12"
          >
          <div className="items-center px-28 xl:py-52 py-24 w-full bg-orange-500 rounded-lg shadow-lg">
               <div className="xl:grid xl:grid-cols-2 gap-4   ">
              <div>
                <h2 className="text-[72px] leading-22 font-medium capitalize">
                  Make your
                  <br />
                  brand the
                  <br />
                  obvious choice
                </h2>
              </div>
              <div className="flex flex-col justify-center items-center space-y-12">
                <p className="text-xl   leading-10 pl-4 max-w-sm">
                  We work with businesses to help them in the evolution
                  reinvention or creation of their brand.
                </p>
                <div className="pr-24">
                  <Link
                    href={""}
                    className="w-fit relative flex text-xl font-medium bg-[#FEECDD] px-16 py-4 rounded-full"
                  >
                    Let's Explore
                    <span className="arow bg-[#FEECDD]  text-2xl w-13 h-13 absolute -right-13 top-0 bottom-0 m-auto flex items-center justify-center rounded-full">
                      <MdArrowOutward />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}