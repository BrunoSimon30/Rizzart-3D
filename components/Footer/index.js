import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import {  FaLinkedinIn , FaInstagram,FaFacebookF,FaTiktok    } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Footer() {
  gsap.registerPlugin(ScrollTrigger);

  const footerRef = useRef(null);
  const [formData, setFormData] = useState({
    email: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "https://api.rizznart.com:3088/api/newsletter",
        formData
      );
      console.log("Response:", response.data);
      toast.success("Sent successfully!", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setFormData({ email: "" });
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to send your message. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 60%", // Jab section viewport ke 80% pe aaye
        end: "bottom 50%",
        // markers: true,
        // pin: true,
        // scrub: 4,
        // toggleActions: "play pause resume reset",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(
      footerRef.current?.querySelectorAll(".up"),
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

  return (
    <>
      <footer
        ref={footerRef}
        className="footer-sec py-8 md:py-24 px-6 md:px-0   bg-[url('/img/footer-bg.png')] relative"
      >
        <div className="ft-shape hidden xl:block up">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 635 1011"
            fill="none"
          >
            <path
              d="M153.514 0.130859V529.329H634.346L116.325 1504.91V1080.28H-412.573L153.514 0.130859Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="container mx-auto max-w-screen-xl md:px-14">
          {/* <div className="up border-2 border-black md:grid md:grid-cols-2  ">
            <div className="newsl py-8 px-12 bg-[#B1FF01]">
              <h2 className="text-black text-[40px] md:text-[2.385vw] font-[600] uppercase line leading-[43px] md:leading-[2.385vw]">
                Newsletter
                <br />
                Sign Up, Don't Regret
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="new-input flex gap-2 mt-8">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-full outline-none bg-transparent text-black placeholder-black text-[18px] font-[500]"
                    required
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-[#B1FF01] px-6 py-2 rounded-full text-[16px] font-[700] uppercase btn-sub"
                  >
                    <span>{loading ? <RiLoaderFill /> : <BsSend />}</span>
                  </button>
                </div>
              </form>
            </div>
            <div className="newsr  py-8 px-12 space-y-6 border-t-2 md:border-l-2 md:border-t-0 border-black bg-[#B1FF01]">
              <h2 className="text-[40px] md:text-[2.385vw] font-[600] uppercase line leading-[43px] md:leading-[2.385vw]">
                Get In Touch
                <br />
                (We Won't Bite)
              </h2>
              <p className="text-black font-[500] text-[23px] ">
                We Don’t Just Talk—we Create. Hit Us Up And Let’s Make Your
                Brand Unforgettable!
              </p>
            </div>
          </div> */}
          <div className="up border-2 border-black md:grid md:grid-cols-2">
            <div>
              <Image
                src={"/img/ft-sc.webp"}
                alt="footer"
                width={762}
                height={395}
              />
            </div>
            <div className="newsr space-y-4 py-8 px-8 border-t-2 md:border-l-2 md:border-t-0 border-[#292929] bg-black">
              <h2 className="text-[#b1ff01] text-[40px] md:text-[2.385vw] font-[600] uppercase line leading-[43px] md:leading-[2.385vw]">
                Warning!!!
              </h2>
              <h3 className="text-white text-[30px] md:text-[35px] font-[600] uppercase line leading-[35px] md:leading-[35px]">
                Side Effects May Include Extreme Brand Recognition.
              </h3>
              <p className="text-white font-[500] text-[23px] ">
                RizznArt blends art and strategy to create immersive visuals
                that connect, engage, and make brands impossible to ignore.
              </p>
            </div>
          </div>
          <div className="up ft-btm ">
            <div className="md:grid md:grid-cols-4 gap-12  space-y-6 md:space-y-0">
              <div className="ft-link w-[150px] bg-black 2xl:bg-transparent p-2">
                <Link href="/">
                  <Image
                    src="/img/ft-logo.png"
                    width={327}
                    height={187}
                    alt="arrow"
                  />
                </Link>
              </div>
              <div className="ft-link space-y-2 md:space-y-8">
                <h3 className="text-[25px] md:text-[2.229vw]  text-black font-[600] uppercase tall">
                  Quick link
                </h3>
                <div className="flex gap-6 md:gap-24">
                  <ul className="ft-lin SMN_effect-15">
                    <li>
                      <Link href="#home">home</Link>
                    </li>
                    <li>
                      <Link href="#about">About</Link>
                    </li>
                    <li>
                      <Link href="/blogs">blogs</Link>
                    </li>
                  </ul>
                  <ul className="ft-lin SMN_effect-15">
                    <li>
                      <Link href="#team">team</Link>
                    </li>
                    <li>
                      <Link href="#work">Work</Link>
                    </li>
                    <li>
                      <Link href="#contact">contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="ft-link space-y-2 md:space-y-8">
                <h3 className="text-[25px] md:text-[2.229vw] text-black font-[600] uppercase tall">
                  contact info
                </h3>
                <ul className="ft-lin SMN_effect-15">
                  <li>
                    <Link href="mailto:letstalk@rizznart.com">
                      Letstalk@rizznart.com
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:+1 385-273-0071">+1 385-273-0071</Link>
                  </li>
                  <li>
                    <p className="text-black text-[18px] font-[600] pl-4">
                      9980 South 300 West,Sandy,UT,84070
                    </p>
                  </li>
                </ul>
              </div>
              <div className="ft-link space-y-2 md:space-y-8">
                <h3 className="text-[25px] md:text-[2.229vw] text-black font-[600] uppercase tall">
                  Social links
                </h3>
                <ul className=" flex gap-2   ">
                  <li >
                    <Link href="/" className="border  border-black p-2 rounded-full flex">
                      <FaInstagram  />
                    </Link>
                  </li>
                  <li >
                    <Link href="/" className="border  border-black p-2 rounded-full flex">
                      <FiYoutube  />
                    </Link>
                  </li>
                  <li >
                    <Link href="/" className="border  border-black p-2 rounded-full flex">
                      <FaLinkedinIn  />
                    </Link>
                  </li>
                  <li >
                    <Link href="/" className="border  border-black p-2 rounded-full flex">
                      <FaFacebookF   />
                    </Link>
                  </li>
                  <li >
                    <Link href="/" className="border  border-black p-2 rounded-full flex">
                      <FaTiktok    />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-[80%] ml-auto up  mt-12 text-center  border-t border-[#ffffffb8] pt-4">
            <div className="   flex justify-between items-center">
              <p className="text-black text-[17px] font-semibold hidden md:block">
                © 2025 Rizznart. All Rights Reserved.
              </p>
              <ul className="   flex gap-6">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-black text-[17px] font-semibold capitalize"
                  >
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link
                    href="/terms-and-conditions"
                    className="text-black text-[17px] font-semibold capitalize"
                  >
                    terms & conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
