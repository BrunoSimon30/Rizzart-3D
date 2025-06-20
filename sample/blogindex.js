"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import articles from "@/sample/blogs";
import Head from "next/head";
import Link from "next/link";
import { React, useState } from "react";
import { CiGrid2H, CiGrid2V, CiGrid31, CiCalendarDate } from "react-icons/ci";

const tabs = [
  { id: "all", label: "All" },
  { id: "3D Animation", label: "3D Animation" },
  { id: "content creators", label: "content creators" },
  { id: "video production", label: "video production" },
  { id: "content marketing", label: "content marketing" },
];

export default function Blogs() {
  const [activeTab, setActiveTab] = useState("all");
  const [gridColumns, setGridColumns] = useState(
    "grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
  );

  return (
    <>
      <Head>
        <title>High-Quality Design That Impress | RizzNArt</title>
        <meta
          name="google-site-verification"
          content="Vw8Mb1PQASI0J0UAhBVraLOUlo8DSoO2YjI12JqR5YM"
        />
      </Head>
      <Header />

      {/* Hero Section */}
      <section className="innerBan-sec p-6 md:p-8">
        <div className="h-[40vh] md:h-[80vh] bg-[url('/img/secbg1.jpg')] bg-cover bg-center bg-fixed flex items-center justify-center rounded-xl">
          <h2 className="text-[#B1FF01] text-4xl md:text-[4.271vw] font-bold uppercase">
            Blogs
          </h2>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-sec py-8 px-4 md:px-16 lg:px-32">
        <div className="bg-black text-white relative p-6 md:p-10 rounded-lg">
          {/* Tabs (Filter) */}
          <div className="flex flex-wrap gap-2 md:gap-4 justify-center mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-4 md:px-6 py-2 rounded-3xl text-xs md:text-sm uppercase border border-[#B1FF01] text-[#B1FF01] font-bold ${
                  activeTab === tab.id
                    ? "bg-lime-400 text-black"
                    : "hover:bg-lime-700"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid Selector */}

          {/* <div className="hidden md:flex justify-center md:justify-end gap-2 mb-6">
            <button
              className={`p-2 rounded-md ${
                gridColumns === "grid-cols-1" ? "bg-lime-400" : "bg-gray-800"
              } text-white`}
              onClick={() => setGridColumns("grid-cols-1")}
            >
              <CiGrid2H size={24} />
            </button>
            <button
              className={`p-2 rounded-md ${
                gridColumns === "grid-cols-1 md:grid-cols-2"
                  ? "bg-lime-400"
                  : "bg-gray-800"
              } text-white`}
              onClick={() => setGridColumns("grid-cols-1 md:grid-cols-2")}
            >
              <CiGrid2V size={24} />
            </button>
            <button
              className={`p-2 rounded-md ${
                gridColumns === "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  ? "bg-lime-400"
                  : "bg-gray-800"
              } text-white`}
              onClick={() =>
                setGridColumns("grid-cols-1 md:grid-cols-2 lg:grid-cols-3")
              }
            >
              <CiGrid31 size={24} />
            </button>
          </div> */}

          {/* Blog Grid */}
          <div className={`grid ${gridColumns} gap-6`}>
            {articles
              .filter(
                (article) =>
                  activeTab === "all" || article.category === activeTab
              )
              .map((article) => (
                <div
                  key={article.id}
                  className={`bg-[#0a0a0a] p-4 md:p-6 rounded-lg space-y-6 ${
                    gridColumns === "grid-cols-1" ? "flex space-x-6" : ""
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`${
                      gridColumns === "grid-cols-1" ? "w-1/3" : "w-full mb-4"
                    }`}
                  >
                    <img
                      src={article.image}
                      alt={article.title}
                      className="rounded-lg w-full"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-6">
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-lime-400 text-xs md:text-sm font-semibold uppercase border border-[#B1FF01] px-3 md:px-4 py-1 md:py-2 rounded-3xl">
                          {article.category}
                        </span>
                        <div className="border border-[#B1FF01] px-3 md:px-4 py-1 md:py-2 rounded-3xl flex items-center gap-2">
                          <CiCalendarDate className="text-[#B1FF01]" />
                          <span className="text-[#B1FF01] text-xs md:text-sm font-semibold uppercase">
                            {article.date}
                          </span>
                        </div>
                      </div>
                      <h2 className="text-lg md:text-2xl font-bold leading-snug">
                        {article.title}
                      </h2>
                      <p className="text-gray-400 text-sm md:text-base">
                        {article.description}
                      </p>
                    </div>

              
                    {/* Author & Read More */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <img
                          className="size-10 md:size-12 rounded-full ring-2 ring-white"
                          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt="Author"
                        />
                        <div>
                          <h3 className="text-base md:text-lg font-bold leading-3">
                            {article?.author}
                          </h3>
                          <p className="text-gray-400 text-xs md:text-sm">
                            Brand Writer
                          </p>
                        </div>
                      </div>
                      <Link
                        href={`/blogs/${article.slug}`}
                        className="bg-[#B1FF01] text-black rounded-3xl uppercase font-bold px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
