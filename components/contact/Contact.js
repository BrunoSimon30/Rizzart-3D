import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoCallOutline,IoLocationOutline ,IoMailOutline  } from "react-icons/io5";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    emailAddress: "",
    phoneNumber: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const pathName = router.pathname;

  const webUrl = "https://rizznart.com";
  const url = `${webUrl}${pathName}`;

  // Set url in formData when component mounts
  useEffect(() => {
    setFormData((prevData) => ({ ...prevData, url: url }));
  }, [url]);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "https://api.rizznart.com:3088/api/contact",
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
      setFormData({
        firstName: "",
        emailAddress: "",
        phoneNumber: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to send your message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <section
        id="contact"
        className=" bg-[url('/img/frame.png')] contact-sec py-24 md:py-32"
      >
        <div className="px-8 md:px-16 space-y-4">
          <div className="md:grid md:grid-cols-2 gap-32 items-end">
            <div className="con-l space-y-5">
              <div className="b-h flex items-end ">
                <h2 className="up text-[#B1FF01] text-[40px] md:text-[4.271vw] font-[600] uppercase  tall">
                  Ask anything <br />
                  Contact Us
                </h2>
                <div className="up gap-2 md:gap-4 flex pb-5">
                  {[...Array(3)].map((_, i) => (
                    <span
                      key={i}
                      className="inline-block w-[30px] md:w-[3.125vw]  "
                    >
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

              <div className="conf">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#B1FF01]"
                    >
                      Name:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="firstName"
                      placeholder="Enter your name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="bg-transparent outline-none"
                      required
                    />
                  </div>
                  <div className="flex gap-8">
                    <div className="w-full">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[#B1FF01]"
                      >
                        Email:
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="emailAddress"
                        placeholder="Enter your email address"
                        value={formData.emailAddress}
                        onChange={handleChange}
                        className="bg-transparent outline-none"
                        required
                      />
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-[#B1FF01]"
                      >
                        Phone Number:
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phoneNumber"
                        placeholder="Enter your phone number"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="bg-transparent outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[#B1FF01]"
                    >
                      Message:
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Enter your message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-transparent outline-none"
                      required
                    />
                  </div>
                  <div>
                    <button type="submit" disabled={loading}>
                      {loading ? "Submitting..." : "Leave a Request"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="con-r  space-y-12 pb-12">
            <div className="flex gap-4 items-center   bg-white/10 px-8 py-4 rounded-xl md:w-[70%]">
              <div className="con-icon border border-[#fff] rounded-full p-3">
                <IoLocationOutline  className="text-[#B1FF01] text-[30px]" />
              </div>
              <div className="con-text">
                <h3 className="text-[#B1FF01] text-[20px] font-semibold">
            Where to Find Us
                </h3>
                <p className="text-white text-[25px] font-semibold">9980 South 300 West,Sandy,UT,84070</p>
              </div>
            </div>
              <div className="flex gap-4 items-center   bg-white/10 px-8 py-4 rounded-xl md:w-[70%]">
              <div className="con-icon border border-[#fff] rounded-full p-3">
                <IoMailOutline  className="text-[#B1FF01] text-[30px]" />
              </div>
              <div className="con-text">
                <h3 className="text-[#B1FF01] text-[20px] font-semibold">
                   Drop an Emai
                </h3>
                <p className="text-white text-[25px] font-semibold">Letstalk@rizznart.com</p>
              </div>
            </div>
              <div className="flex gap-4 items-center   bg-white/10 px-8 py-4 rounded-xl md:w-[70%]">
              <div className="con-icon border border-[#fff] rounded-full p-3">
                <IoCallOutline className="text-[#B1FF01] text-[30px]" />
              </div>
              <div className="con-text">
                <h3 className="text-[#B1FF01] text-[20px] font-semibold">
                Talk to Us
                </h3>
                <p className="text-white text-[25px] font-semibold">+1 385-273-0071</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
