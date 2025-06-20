import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoCallOutline } from "react-icons/io5";
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

  const webUrl = 'https://rizznart.com';
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
      const response = await axios.post("https://api.rizznart.com:3088/api/contact", formData);
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
      setFormData({ firstName: "", emailAddress: "", phoneNumber: "", message: "" });
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
      <section id="contact" className=" bg-[url('/img/frame.png')] contact-sec py-24 md:py-32">
        <div className="px-8 md:px-16 space-y-4">
          <div className="md:grid md:grid-cols-2 gap-8">
            <div className="con-l space-y-5">
              <h2 className="up text-[#B1FF01] text-[40px] md:text-[4.271vw] font-[600] uppercase  tall">
                Get in Touch
              </h2>
             <div className="flex gap-4 items-end">
             <div className="flex pb-2 gap-4 items-end">
                <span className="w-[30px] h-[30px]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" fill="none">
                    <path d="M28 0.000488281L30.3286 17.0452L39.3886 2.42122L34.5832 18.9395L48.8081 9.26483L37.6995 22.4005L54.6296 19.348L39.1386 26.8298L55.8466 30.9273L38.6518 31.4615L52.2487 42.0005L36.3232 35.4948L44.458 50.653L32.5555 38.2322L33.8215 55.3886L28 39.2005L22.1785 55.3886L23.4445 38.2322L11.542 50.653L19.6768 35.4948L3.75129 42.0005L17.3482 31.4615L0.153387 30.9273L16.8614 26.8298L1.37042 19.348L18.3005 22.4005L7.19194 9.26483L21.4168 18.9395L16.6114 2.42122L25.6714 17.0452L28 0.000488281Z" fill="#B1FF00" />
                  </svg>
                </span>
                <h2 className="text-[#F1FFC4;] uppercase">Fill out the form</h2>
              </div>
              <div className="flex pb-2 gap-4 ">
                <span className=" text-[#B1FF01] text-[20px]">
                <IoCallOutline />
                </span>
                <Link href={'tel:+1 385-273-0071'} className="text-[#F1FFC4;] uppercase">+1 385-273-0071</Link>
              </div>
             </div>
              <div className="conf md:w-[70%]">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#B1FF01]">
                      Name:
                    </label>
                    <input type="text" id="name" name="firstName" placeholder="Enter your name" value={formData.firstName} onChange={handleChange} className="bg-transparent outline-none" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#B1FF01]">
                      Email:
                    </label>
                    <input type="email" id="email" name="emailAddress" placeholder="Enter your email address" value={formData.emailAddress} onChange={handleChange} className="bg-transparent outline-none" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#B1FF01]">
                      Phone Number:
                    </label>
                    <input type="tel" id="phone" name="phoneNumber" placeholder="Enter your phone number" value={formData.phoneNumber} onChange={handleChange} className="bg-transparent outline-none" required />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#B1FF01]">
                      Message:
                    </label>
                    <textarea id="message" name="message" placeholder="Enter your message" rows="4" value={formData.message} onChange={handleChange} className="bg-transparent outline-none" required />
                  </div>
                  <div>
                    <button type="submit" disabled={loading}>
                      {loading ? "Submitting..." : "Leave a Request"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="con-r text-center hidden md:block">
              <div className="con-i">
                <Image className="mx-auto" src="/img/game.png" width={350} height={800} alt="arrow" />
               
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
