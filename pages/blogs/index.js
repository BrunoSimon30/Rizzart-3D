"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { CiCalendarDate } from "react-icons/ci";
import Head from "next/head";
import Image from "next/image";

export default function Blogs() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [featuredImages, setFeaturedImages] = useState({}); // Store images per post
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); // total available pages
  const [authors, setAuthors] = useState({});
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);

        // Add category filter to the API request
        const categoryParam = selectedCategory
          ? `&categories=${selectedCategory}`
          : "";
        const response = await axios.get(
          `https://blogs.rizznart.com/wp-json/wp/v2/posts?page=${currentPage}&per_page=4${categoryParam}`
        );

        const postsData = response.data;
        setPosts(postsData);
        setTotalPages(Number(response.headers["x-wp-totalpages"]));

        const mediaRequests = [];
        const authorRequests = [];
        const mediaMap = {};
        const authorMap = {};

        postsData.forEach((post) => {
          if (post.featured_media) {
            mediaRequests.push(
              axios
                .get(
                  `https://blogs.rizznart.com/wp-json/wp/v2/media/${post.featured_media}`
                )
                .then((res) => {
                  mediaMap[post.id] = res.data.source_url;
                })
            );
          }

          if (post.author) {
            authorRequests.push(
              axios
                .get(
                  `https://blogs.rizznart.com/wp-json/wp/v2/users/${post.author}`
                )
                .then((res) => {
                  authorMap[post.id] = res.data.name;
                })
            );
          }
        });

        await Promise.all([...mediaRequests, ...authorRequests]);

        setFeaturedImages(mediaMap);
        setAuthors(authorMap);
      } catch (error) {
        console.error(error);
        setError("Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    };

    const fetchCategories = async () => {
      try {
        const res = await axios.get(
          "https://blogs.rizznart.com/wp-json/wp/v2/categories"
        );
        setCategories(res.data);
      } catch (err) {
        console.error("Failed to fetch categories", err);
      }
    };

    fetchPosts();
    fetchCategories();
  }, [currentPage, selectedCategory]);

  // Define the local image URLs
  const authorImages = {
    "Mustafa Uzair": "/img/t2.png",
    "Ali Qureshi": "/img/t1.png",
    "Jazib Qureshi": "/img/t3.png",
  };

  // Function to get image based on author name
  const getAuthorImage = (authorName) => {
    return (
      authorImages[authorName] ||
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?..."
    ); // fallback image
  };

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
      <section className="text-center mt-4">
        <div className="flex gap-3 justify-center mb-4 flex-wrap">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full font-semibold transition ${
              selectedCategory === null
                ? "bg-[#B1FF01] text-black"
                : "bg-gray-800 text-white border border-gray-600"
            }`}
          >
            All
          </button>

          {categories
            .filter((cat) => cat.name.toLowerCase() !== "uncategorized")
            .map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full font-semibold transition ${
                  selectedCategory === cat.id
                    ? "bg-[#B1FF01] text-black"
                    : "bg-gray-800 text-white border border-gray-600"
                }`}
              >
                {cat.name}
              </button>
            ))}
        </div>
      </section>
      <section className="blog-sec bg-black py-8 px-4 md:px-16 lg:px-32">
        <div className=" text-white relative p-6 md:p-10 rounded-lg">
          {loading ? (
            <div className="flex justify-center items-center min-h-[300px]">
              <div className="text-[#B1FF01] text-xl font-semibold animate-pulse">
                Loading...
              </div>
            </div>
          ) : posts.length > 0 ? (
            <>
              <div className={`grid grid-cols-2 gap-12`}>
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-[#0A0A0A] p-6 md:p-10 rounded-lg space-y-6"
                  >
                    <div>
                      {featuredImages[post.id] && (
                        <img
                          src={featuredImages[post.id]}
                          alt={post.title.rendered}
                          className="rounded-lg   w-[684px] h-[500px] object-cover"
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-6">
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <div className="border border-[#B1FF01] px-3 md:px-4 py-1 md:py-2 rounded-3xl flex items-center gap-2">
                            <CiCalendarDate className="text-[#B1FF01]" />
                            <span className="text-[#B1FF01] text-xs md:text-sm font-semibold uppercase">
                              {new Date(post.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </span>
                          </div>
                        </div>
                        <h2
                          className="text-lg md:text-2xl font-bold leading-snug"
                          dangerouslySetInnerHTML={{
                            __html: post.title.rendered,
                          }}
                        ></h2>
                        <p
                          className="text-gray-400 text-sm md:text-base"
                          dangerouslySetInnerHTML={{
                            __html: post.excerpt.rendered,
                          }}
                        ></p>
                      </div>

                      {/* Author & Read More */}
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <img
                            className="size-10 md:size-12 rounded-full ring-2 ring-white"
                            src={getAuthorImage(authors[post.id])}
                            alt={authors[post.id] || "Author"}
                          />
                          <div>
                            <h3 className="text-base md:text-lg font-bold leading-3">
                              {authors[post.id]}
                            </h3>
                            <p className="text-gray-400 text-xs md:text-sm">
                              Brand Writer
                            </p>
                          </div>
                        </div>
                        <Link
                          href={`/blogs/${post.slug}`}
                          className="bg-[#B1FF01] text-black rounded-3xl uppercase font-bold px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center w-full mt-16">
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-4 mt-10">
                    <button
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage(currentPage - 1)}
                      className="bg-[#B1FF01] text-black font-semibold py-2 px-4 rounded disabled:opacity-50"
                    >
                      Prev
                    </button>
                    <span className="text-white">
                      Page {currentPage} of {totalPages}
                    </span>
                    <button
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage(currentPage + 1)}
                      className="bg-[#B1FF01] text-black font-semibold py-2 px-4 rounded disabled:opacity-50"
                    >
                      Next
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="text-center text-gray-400">No posts found.</div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
