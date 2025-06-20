import React from "react";
import Link from "next/link"; // Add this import
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Custom404() {
  return (
    <>
      <Header />
      <section className="innerBan-sec p-8  ">
        <div className="h-[40vh] md:h-[80vh] bg-[url('/img/secbg1.jpg')] py-12 flex items-center justify-center bg-fixed bg-center relative rounded-xl">
          <div className="text-center text-white">
            <h2 className="up text-[#B1FF01] text-[40px] md:text-[4.271vw] font-[600] uppercase  tall">
              404
            </h2>
            <p className="text-xl text-white mb-4">
              Oops! The page you’re looking for doesn’t exist.
            </p>
            <Link href="/" className="bg-[#B1FF01] text-black px-6 py-3 rounded-full font-semibold block w-fit m-auto hover:underline">
              Go back to home
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
