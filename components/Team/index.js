import SliderComponent from "../Silder";
import { useRef, React } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Image from "next/image";
import Link from "next/link";

export default function Team() {
  const metRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: metRef.current,
        start: "top 50%", // Jab section viewport ke 80% pe aaye
        end: "bottom 50%",
        // markers:true,
        // pin: true,
        // scrub: 4,
        // toggleActions: "play pause resume reset",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(
      metRef.current?.querySelectorAll(".up h2"),
      {
        y: 100,
        duration: 1,
        opacity: 0,
        stagger: 0.4,
        ease: "power3.out",
      },
      "run"
    )
      .to(
        metRef.current?.querySelectorAll(".met-wrap"),
        {
          scale: 0.9,
          duration: 1,
          stagger: 0.4,
          ease: "none",
          scrollTrigger: {
            trigger: metRef.current, // Yeh pura section target karega
            start: "top", // Jab element viewport ke 80% tak aaye tab start ho
            end: "bottom", // Jab element 20% tak scroll ho chuka ho tab khatam ho
            scrub: 1, // Smooth effect scroll ke saath
            pin: true, // Element fixed karega as scroll hojae
          },
        },
        "ru"
      )
      .to(
        metRef.current?.querySelectorAll(".lbox"),
        {
          skewX: "-21.6deg", // (-0.06turn) ko degrees mein convert kiya
          duration: 1,
          stagger: 0.4,
          ease: "bounce.out",
        },
        "ru"
      )
      .from(
        metRef.current?.querySelectorAll(".silder-g"),
        {
          opacity: 0,
          duration: 1,
          stagger: 0.4,
          ease: "none",
        },
        "ru"
      );
  }, []);

  return (
    <>
      <section ref={metRef} className="meets-sec relative z-[1]">
        <div className="mhead h-[35vh] md:h-[80vh] bg-[#FFA100] text-center pt-16 md:pt-32">
          <div className="up overflow-hidden pt-2">
            <h2 className="text-[50px] md:text-[4.271vw] font-[600] uppercase text-black tall">
              The &nbsp; Rizzy Reviews
            </h2>
          </div>
        </div>
        <div className="met-wrap relative">
          <div className="lbox"></div>
          <div className="bg-[url('/img/frame.png')] rounded-2xl pb-12 pt-16 md:pb-16 md:pt-24 mt-6">
            <Swiper
              modules={[Navigation, Pagination, EffectFade]}
              navigation={{
                nextEl: ".next-slide", // 👈 Custom Next Button
                prevEl: ".prev-slide", // 👈 Custom Prev Button
              }}
              effect="fade"
              fadeEffect={{ crossFade: true }}
            >
              <SwiperSlide>
                <div className="px-6 md:px-14 silder-g">
                  <div className="md:grid md:grid-cols-5 gap-8 items-center">
                    <div className=" col-span-2  w-full py-2 space-y-2  md:space-y-8 ">
                      <div>
                        <div className="flex gap-3 items-center ">
                          <h2 className="text-white text-[4.167vw] font-[600]   capitalize leading-[4.167vw]">
                            <span className="inline-block text-[#B2FF2D]">
                              <FaQuoteLeft />
                            </span>{" "}
                            Exceptional creative, seamless execution.
                            <span className="inline-block text-[#B2FF2D]">
                              <FaQuoteRight />
                            </span>
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-3 relative  w-full md:py-2 md:px-8 ">
                      <div className="grid grid-cols-5 gap-8 items-center   ">
                        {/* Image Section */}
                        <div className="col-span-2">
                          <Image
                            className="rounded-2xl"
                            src={"/img/silmaya.jpg"}
                            width={406}
                            height={656}
                            alt="Slide Image"
                          />
                        </div>

                        {/* Content Section */}
                        <div className="col-span-3 px-4 space-y-3 md:space-y-6">
                          <p className="text-white font-[500] text-[15px] md:text-[1.771vw] md:leading-[2vw]  ">
                            " Working with Rizznart was a game-changer for our
                            brand. Their team brought a strategic approach to
                            our visual identity that balanced innovation with
                            clarity. Every detail—from typography to motion
                            graphics—was thoughtful and aligned with our goals.
                            Their professionalism, responsiveness, and creative
                            insight set a new standard. We’ll absolutely be
                            collaborating again. "
                          </p>
                          <div className="flex justify-between items-center">
                            <div className="colan ">
                              <span className="inline-block text-[#B2FF2D] text-[80px]">
                                <FaQuoteRight />
                              </span>
                            </div>
                            <div>
                              <h2 className="text-[#F1FFC4] uppercase text-[12px] md:text-[23px] font-semibold text-right leading-[21px]">
                                Maya
                              </h2>
                              <h2 className="text-[#5F5F5F] capitalize text-[12px] md:text-[23px] font-semibold text-right leading-[21px]">
                                (skincare CEO & content baddie)
                              </h2>
                            </div>
                          </div>

                          {/* Navigation Buttons */}
                          <div className="flex gap-2">
                            <button className="flex items-center gap-2 btn-b prev-slide  md:py-2 px-5">
                              <span className="arrow-l hidden md:block">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 105 20"
                                  fill="none"
                                >
                                  <path
                                    d="M0.16455 9.88573L104.11 9.88574"
                                    stroke="white"
                                    strokeWidth="2"
                                  />
                                  <path
                                    d="M94.3948 0.169922C94.3948 9.88574 104.11 9.88574 104.11 9.88574"
                                    stroke="white"
                                    strokeWidth="2"
                                  />
                                  <path
                                    d="M94.3948 19.6016C94.3948 9.88574 104.11 9.88574 104.11 9.88574"
                                    stroke="white"
                                    strokeWidth="2"
                                  />
                                </svg>
                              </span>
                              <span className="bb-txt text-[16px] md:text-[20px]  font-[600] uppercase text-white ">
                                prev
                              </span>
                            </button>
                            <button className="flex items-center gap-2 btn-b next-slide py-2 px-5">
                              <span className="bb-txt text-[16px] md:text-[20px] font-[600] uppercase text-white ">
                                next
                              </span>
                              <span className="arrow-r pt-1 hidden md:block">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 105 20"
                                  fill="none"
                                >
                                  <path
                                    d="M0.16455 9.88573L104.11 9.88574"
                                    stroke="white"
                                    strokeWidth="2"
                                  />
                                  <path
                                    d="M94.3948 0.169922C94.3948 9.88574 104.11 9.88574 104.11 9.88574"
                                    stroke="white"
                                    strokeWidth="2"
                                  />
                                  <path
                                    d="M94.3948 19.6016C94.3948 9.88574 104.11 9.88574 104.11 9.88574"
                                    stroke="white"
                                    strokeWidth="2"
                                  />
                                </svg>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="px-6 md:px-14 silder-g">
                  <div className="md:grid md:grid-cols-5 gap-8 items-center">
                    <div className=" col-span-2  w-full py-2 space-y-2  md:space-y-8 ">
                      <div>
                        <div className="flex gap-3 items-center text-center md:text-left">
                          <h2 className="text-white text-[4.167vw] font-[600]   capitalize leading-[4.167vw]">
                            <span className="inline-block text-[#B2FF2D]">
                              <FaQuoteLeft />
                            </span>{" "}
                            Smart strategy, killer visuals, real results.
                            <span className="inline-block text-[#B2FF2D]">
                              <FaQuoteRight />
                            </span>
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-3 relative  w-full md:py-2 md:px-8 ">
                      <div className="grid grid-cols-5 gap-8 items-center   ">
                        {/* Image Section */}
                        <div className="col-span-2">
                          <Image
                            className="rounded-2xl"
                            src={"/img/sil.jpg"}
                            width={406}
                            height={656}
                            alt="Slide Image"
                          />
                        </div>

                        {/* Content Section */}
                        <div className="col-span-3 px-4 space-y-3 md:space-y-6">
                          <p className="text-white font-[500] text-[15px] md:text-[1.771vw] md:leading-[2vw]  ">
                            " Rizznart’s team doesn’t just create pretty
                            things—they build brands with purpose. Our campaign
                            went from flat to fire, and the engagement? Off the
                            charts. They get it. They’re plugged in. And they
                            make the process actually fun. "
                          </p>
                          <div className="flex justify-between items-center">
                            <div className="colan ">
                              <span className="inline-block text-[#B2FF2D] text-[80px]">
                                <FaQuoteRight />
                              </span>
                            </div>
                            <div>
                              <h2 className="text-[#F1FFC4] uppercase text-[12px] md:text-[23px] font-semibold text-right leading-[21px]">
                                Jay
                              </h2>
                              <h2 className="text-[#5F5F5F] capitalize text-[12px] md:text-[23px] font-semibold text-right leading-[21px]">
                                (indie fashion label founder)
                              </h2>
                            </div>
                          </div>

                          {/* Navigation Buttons */}
                          <div className="flex gap-2">
                            <button className="flex items-center gap-2 btn-b prev-slide  md:py-2 px-5">
                              <span className="arrow-l hidden md:block">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 105 20"
                                  fill="none"
                                >
                                  <path
                                    d="M0.16455 9.88573L104.11 9.88574"
                                    stroke="white"
                                    strokeWidth="2"
                                  />
                                  <path
                                    d="M94.3948 0.169922C94.3948 9.88574 104.11 9.88574 104.11 9.88574"
                                    stroke="white"
                                    strokeWidth="2"
                                  />
                                  <path
                                    d="M94.3948 19.6016C94.3948 9.88574 104.11 9.88574 104.11 9.88574"
                                    stroke="white"
                                    strokeWidth="2"
                                  />
                                </svg>
                              </span>
                              <span className="bb-txt text-[16px] md:text-[20px]  font-[600] uppercase text-white ">
                                prev
                              </span>
                            </button>
                            <button className="flex items-center gap-2 btn-b next-slide py-2 px-5">
                              <span className="bb-txt text-[16px] md:text-[20px] font-[600] uppercase text-white ">
                                next
                              </span>
                              <span className="arrow-r pt-1 hidden md:block">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 105 20"
                                  fill="none"
                                >
                                  <path
                                    d="M0.16455 9.88573L104.11 9.88574"
                                    stroke="white"
                                    strokeWidth="2"
                                  />
                                  <path
                                    d="M94.3948 0.169922C94.3948 9.88574 104.11 9.88574 104.11 9.88574"
                                    stroke="white"
                                    strokeWidth="2"
                                  />
                                  <path
                                    d="M94.3948 19.6016C94.3948 9.88574 104.11 9.88574 104.11 9.88574"
                                    stroke="white"
                                    strokeWidth="2"
                                  />
                                </svg>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="px-6 md:px-14 silder-g">
                  <div className="md:grid md:grid-cols-5 gap-8 items-center">
                    <div className=" col-span-2  w-full py-2 space-y-2  md:space-y-8 ">
                      <div>
                        <div className="flex gap-3 items-center text-center md:text-left">
                          <h2 className="text-white text-[4.167vw] font-[600]   capitalize leading-[4.167vw] ">
                            <span className="inline-block text-[#B2FF2D]">
                              <FaQuoteLeft />
                            </span>{" "}
                            Rizznart understood the assignment—and elevated it.
                            <span className="inline-block text-[#B2FF2D]">
                              <FaQuoteRight />
                            </span>
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-3 relative  w-full md:py-2 md:px-8 ">
                      <div className="grid grid-cols-5 gap-8 items-center   ">
                        {/* Image Section */}
                        <div className="col-span-2">
                          <Image
                            className="rounded-2xl"
                            src={"/img/silzee.jpg"}
                            width={406}
                            height={656}
                            alt="Slide Image"
                          />
                        </div>

                        {/* Content Section */}
                        <div className="col-span-3 px-4 space-y-3 md:space-y-6">
                          <p className="text-white font-[500] text-[15px] md:text-[1.771vw] md:leading-[2vw]  ">
                            " From the first call, I knew I wasn’t dealing with
                            just another agency. Rizznart took my vision,
                            refined it, and delivered a brand identity that
                            genuinely connects with my audience. They know what
                            Gen Z wants—and how to make it look incredible. "
                          </p>
                          <div className="flex justify-between items-center">
                            <div className="colan ">
                              <span className="inline-block text-[#B2FF2D] text-[80px]">
                                <FaQuoteRight />
                              </span>
                            </div>
                            <div>
                              <h2 className="text-[#F1FFC4] uppercase text-[12px] md:text-[23px] font-semibold text-right leading-[21px]">
                                Zee
                              </h2>
                              <h2 className="text-[#5F5F5F] capitalize text-[12px] md:text-[23px] font-semibold text-right leading-[21px]">
                                (podcast host + chaos curator)
                              </h2>
                            </div>
                          </div>

                          {/* Navigation Buttons */}
                          <div className="flex gap-2">
                            <button className="flex items-center gap-2 btn-b prev-slide  md:py-2 px-5">
                              <span className="arrow-l hidden md:block">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 105 20"
                                  fill="none"
                                >
                                  <path
                                    d="M0.16455 9.88573L104.11 9.88574"
                                    stroke="white"
                                    strokeWidth="2"
                                  />
                                  <path
                                    d="M94.3948 0.169922C94.3948 9.88574 104.11 9.88574 104.11 9.88574"
                                    stroke="white"
                                    strokeWidth="2"
                                  />
                                  <path
                                    d="M94.3948 19.6016C94.3948 9.88574 104.11 9.88574 104.11 9.88574"
                                    stroke="white"
                                    strokeWidth="2"
                                  />
                                </svg>
                              </span>
                              <span className="bb-txt text-[16px] md:text-[20px]  font-[600] uppercase text-white ">
                                prev
                              </span>
                            </button>
                            <button className="flex items-center gap-2 btn-b next-slide py-2 px-5">
                              <span className="bb-txt text-[16px] md:text-[20px] font-[600] uppercase text-white ">
                                next
                              </span>
                              <span className="arrow-r pt-1 hidden md:block">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 105 20"
                                  fill="none"
                                >
                                  <path
                                    d="M0.16455 9.88573L104.11 9.88574"
                                    stroke="white"
                                    strokeWidth="2"
                                  />
                                  <path
                                    d="M94.3948 0.169922C94.3948 9.88574 104.11 9.88574 104.11 9.88574"
                                    stroke="white"
                                    strokeWidth="2"
                                  />
                                  <path
                                    d="M94.3948 19.6016C94.3948 9.88574 104.11 9.88574 104.11 9.88574"
                                    stroke="white"
                                    strokeWidth="2"
                                  />
                                </svg>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
