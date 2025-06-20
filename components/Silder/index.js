"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Image from "next/image";
import Link from "next/link";

export default function SliderComponent() {
  const slides = [
    {
      img: "/img/sil.jpg",
      text: "Every Frame Counts—like Bitcoin Dips Before It Moons. I Craft Motion That Captivates, Informs, And Elevates Brands. ",
      name: "George Marshall",
      job: "(Motion Graphic Designer)",
    },
    {
      img: "/img/sil.jpg",
      text: "I Craft Binge-worthy Stories That Sell—mad Men Vibes, No Cigarette Breaks. Even Netflix Would Dm Me For A Sequel. ",
      name: "Chris Watson",
      job: "(Content Marketing Expert)",
    },
    {
      img: "/img/sil.jpg",
      text: "From Lens To Screen, I Make Brands Cinematic, Unskippable, And Iconic—so Good, Even Spielberg Would Double-tap. ",
      name: "Susan Crano",
      job: "(Cinematic Content Specialist)",
    },
  ];

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, EffectFade]}
        navigation={{
            nextEl: ".next-slide", // 👈 Custom Next Button
            prevEl: ".prev-slide", // 👈 Custom Prev Button
          }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-5 gap-8 items-center   ">
              {/* Image Section */}
              <div className="col-span-2">
                <Image
                  className="rounded-2xl"
                  src={slide.img}
                  width={406}
                  height={656}
                  alt="Slide Image"
                />
              </div>

              {/* Content Section */}
              <div className="col-span-3 px-4 space-y-3 md:space-y-6">
                <p className="text-white font-[500] text-[15px] md:text-[1.771vw] uppercase ">
                  {slide.text}
                </p>
                <div className="flex justify-between items-center">
                  <div className="colan ">
                    <svg
                    className="w-[50px] md:w-full"
                      xmlns="http://www.w3.org/2000/svg"
                      width="121"
                      height="99"
                      viewBox="0 0 121 99"
                      fill="none"
                    >
                      <path
                        d="M55.2212 23.2306C55.2212 25.2053 54.9973 29.0452 54.5495 34.7501C54.1018 40.4551 52.9824 46.8183 51.1913 53.8398C49.4002 61.0807 46.4898 68.1021 42.4599 74.9041C38.43 81.7062 33.0568 87.3014 26.3403 91.6898C19.4 96.0783 10.6686 98.2725 0.14608 98.2725L0.146083 60.7515C8.8775 60.7515 15.8179 59.435 20.9672 56.8019C25.8926 54.3883 29.5866 51.3164 32.0493 47.5863C34.512 43.8561 36.0792 40.126 36.7509 36.3958C37.4225 32.6656 37.6464 29.484 37.4225 26.851C37.1986 24.4374 37.0867 23.2306 37.0867 23.2306L55.2212 23.2306ZM96.5275 0.191389C105.259 0.19139 111.528 2.3856 115.334 6.77402C118.916 11.3819 120.707 17.0868 120.707 23.8888C120.707 30.252 119.14 35.6278 116.005 40.0163C112.647 44.6241 106.378 46.928 97.1991 46.928C88.2438 46.928 81.8632 44.6241 78.0572 40.0163C74.2512 35.4084 72.3482 29.9229 72.3482 23.5597C72.3482 16.9771 74.2512 11.3818 78.0572 6.77401C81.6393 2.38559 87.7961 0.191388 96.5275 0.191389ZM120.707 23.2306C120.707 25.2054 120.483 29.0452 120.035 34.7501C119.587 40.4551 118.468 46.8183 116.677 53.8398C114.886 61.0807 111.975 68.1021 107.945 74.9042C103.916 81.7062 98.5424 87.3014 91.826 91.6898C84.8856 96.0783 76.1542 98.2725 65.6317 98.2725L65.6317 60.7515C74.3631 60.7515 81.3035 59.435 86.4528 56.8019C91.3782 54.3883 95.0722 51.3164 97.535 47.5863C99.9977 43.8561 101.565 40.126 102.236 36.3958C102.908 32.6657 103.132 29.4841 102.908 26.851C102.684 24.4374 102.572 23.2306 102.572 23.2306L120.707 23.2306ZM31.0419 0.191383C39.7733 0.191384 46.042 2.38559 49.848 6.77401C53.4301 11.3818 55.2212 17.0868 55.2212 23.8888C55.2212 30.252 53.654 35.6278 50.5197 40.0163C47.1614 44.6241 40.8927 46.928 31.7135 46.928C22.7582 46.928 16.3776 44.6241 12.5716 40.0162C8.76557 35.4084 6.86256 29.9229 6.86256 23.5597C6.86256 16.9771 8.76557 11.3818 12.5716 6.77401C16.1537 2.38559 22.3105 0.191382 31.0419 0.191383Z"
                        fill="#B1FF00"
                      />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-[#F1FFC4] uppercase text-[12px] md:text-[23px] font-semibold text-right leading-[21px]">
                      {slide.name}
                    </h2>
                    <h2 className="text-[#5F5F5F] uppercase text-[12px] md:text-[23px] font-semibold text-right leading-[21px]">
                      {slide.job}
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
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
