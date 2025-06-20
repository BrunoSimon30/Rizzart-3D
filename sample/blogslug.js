"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import articles from "@/sample/blogs";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { CiCalendarDate } from "react-icons/ci";

export default function BlogsDetail() {
  const [activeSection, setActiveSection] = useState("");
  const router = useRouter();
  const { slug } = router.query;
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (slug) {
      const foundBlog = articles.find((b) => b.slug === slug);
      setBlog(foundBlog);
    }
  }, [slug]);

  useEffect(() => {
    if (!blog?.sections || blog.sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Active Section:", entry.target.dataset.id);
            setActiveSection(entry.target.dataset.id);
          }
        });
      },
      { threshold: 0.5 } // Try changing this value (0.3, 0.7, etc.)
    );

    blog.sections.forEach((section) => {
      const el = document.getElementById(`section-${section.id}`);
      if (el) {
        observer.observe(el);
      } else {
        console.warn("⚠️ Section not found:", section.id);
      }
    });

    return () => {
      blog.sections.forEach((section) => {
        const el = document.getElementById(`section-${section.id}`);
        if (el) observer.unobserve(el);
      });
    };
  }, [blog?.sections]);

  useEffect(() => {
    console.log("Active Section:", activeSection); // Debugging
  }, [activeSection]);

  if (!slug) return <p className="text-white text-center">Loading...</p>;
  if (!blog) return <p className="text-white text-center">Blog not found</p>;

  return (
    <>
      <Head>
        <title>{blog?.metaTitel}</title>
        <meta name="description" content={blog?.metaDescription} />
      </Head>
      <Header />

      {/* Hero Section */}
      <section className="innerBan-sec p-6 md:p-8">
        <div className="h-[40vh] md:h-[80vh] bg-[url('/img/secbg1.jpg')] bg-cover bg-center bg-fixed flex items-center justify-center rounded-xl">
          <div className="container mx-auto max-w-screen-xl">
            <h1 className="text-white text-3xl md:text-[5vw] leading-[6vw] md:leading-[4.5vw] font-semibold   text-center px-6 md:px-12">
              {blog?.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-12 md:py-24 px-4 md:px-16 lg:px-14">
        <div className="">
          <div className="bg-[#0a0a0a] py-5 px-4 md:px-6 flex flex-wrap justify-between items-center gap-4 rounded-lg">
            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12 md:w-16 md:h-16 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Author"
              />
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white">
                  {blog?.author}
                </h3>
                <p className="text-gray-400 text-sm md:text-base">
                  Brand Writer
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <span className="text-lime-400 text-xs md:text-sm font-semibold uppercase border border-[#B1FF01] px-3 py-1 md:px-4 md:py-2 rounded-3xl">
                {blog?.category}
              </span>
              <div className="border border-[#B1FF01] px-3 py-1 md:px-4 md:py-2 rounded-3xl flex items-center gap-2">
                <CiCalendarDate className="text-[#B1FF01]" />
                <span className="text-[#B1FF01] text-xs md:text-sm font-semibold uppercase">
                  {blog?.date}
                </span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col md:flex-row gap-8 py-12">
            {/* Sidebar */}
            <aside className="md:w-1/4 bg-[#0a0a0a] px-6 py-4 rounded-lg md:sticky md:top-32 md:self-start">
  <ul className="space-y-2">
    {(blog?.sections || []).map((section) => (
      <li key={section.id} className="border-b border-[#494949] pb-2">
        <a
          href={`#section-${section.id}`}
          onClick={(e) => {
            e.preventDefault();
            const sectionElement = document.getElementById(`section-${section.id}`);
            if (sectionElement) {
              sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
              setActiveSection(section.id.toString()); // Manually set active section
            }
          }}
          className={`block font-semibold text-sm md:text-[19px] transition-colors duration-300 ${
            activeSection?.toString() === section.id.toString()
              ? "text-lime-400 font-bold"
              : "text-gray-400"
          } hover:text-lime-300`}
        >
          {section.title}
        </a>
      </li>
    ))}
  </ul>
</aside>

            {/* Blog Content */}
            <div className="md:w-3/4 bg-[#0a0a0a] p-6 md:p-10 rounded-lg space-y-12">
              <div>
                <img
                  src={blog?.image}
                  alt={blog?.title}
                  className="w-full rounded-lg mb-4"
                />
                <div className="bg-[#B1FF00] px-4 py-8  rounded-3xl">
                  <h2 className="text-black text-xl md:text-[35px] leading-[40px] font-semibold pb-3">
                    {blog?.title}
                  </h2>
                  <ul className="space-y-3">
                    {blog?.descriptionArr?.map((e, i) => (
                      <li key={i}>
                        <p className="text-black text-sm font-[500] md:text-[22px] md:leading-[24px]">
                          {e.para}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {blog?.sections?.map((section) => (
                <div
                  key={section.id}
                  id={`section-${section.id}`}
                  data-id={section.id}
                >
                  {section.image && ( // Image sirf tab show hogi jab available hogi
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full rounded-lg mb-4"
                    />
                  )}
                  <h2 className="text-white text-xl md:text-[35px] font-semibold pb-3">
                    {section.title}
                  </h2>
                  <ul className="space-y-3">
                    {(Array.isArray(section?.content)
                      ? section.content
                      : []
                    ).map((e, i) => (
                      <li key={i}>
                        <div dangerouslySetInnerHTML={{ __html: e.para }} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
