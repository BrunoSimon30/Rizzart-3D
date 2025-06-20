"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { CiCalendarDate } from "react-icons/ci";
import Link from "next/link";
import Head from "next/head";

export default function BlogsDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [featuredImage, setFeaturedImage] = useState(null);
  const [tags, setTags] = useState([]);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [authorName, setAuthorName] = useState("");

  useEffect(() => {
    if (!router.isReady || !slug) return;

    const fetchPost = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://blogs.rizznart.com/wp-json/wp/v2/posts?slug=${slug}`
        );
        console.log(response);

        if (response.data.length > 0) {
          const postData = response.data[0];
          setPost(postData);

          if (postData.author) {
            fetchAuthor(postData.author);
          }

          if (postData.featured_media) {
            fetchFeaturedImage(postData.featured_media);
          }

          if (postData.tags.length > 0) {
            fetchTags(postData.tags);
          }

          if (postData.categories.length > 0) {
            fetchRelatedPosts(postData.categories, postData.id);
            fetchCategories(postData.categories);
          }
        } else {
          setError("Post not found");
        }
      } catch (error) {
        setError("Failed to load post");
      } finally {
        setLoading(false);
      }
    };

    const fetchAuthor = async (authorId) => {
      try {
        const response = await axios.get(
          `https://blogs.rizznart.com/wp-json/wp/v2/users/${authorId}`
        );
        setAuthorName(response.data.name);
      } catch (error) {
        console.error("Failed to fetch author", error);
      }
    };

    const fetchFeaturedImage = async (mediaId) => {
      try {
        const response = await axios.get(
          `https://blogs.rizznart.com/wp-json/wp/v2/media/${mediaId}`
        );
        setFeaturedImage(response.data.source_url);
      } catch (error) {
        console.error("Failed to load featured image", error);
      }
    };

    const fetchTags = async (tagIds) => {
      try {
        const response = await axios.get(
          `https://blogs.rizznart.com/wp-json/wp/v2/tags?include=${tagIds.join(
            ","
          )}`
        );
        setTags(response.data.map((tag) => tag.name));
      } catch (error) {
        console.error("Failed to fetch tags", error);
      }
    };

    const fetchRelatedPosts = async (categoryIds, postId) => {
      try {
        const response = await axios.get(
          `https://blogs.rizznart.com/wp-json/wp/v2/posts?categories=${categoryIds.join(
            ","
          )}&per_page=3&exclude=${postId}`
        );
        setRelatedPosts(response.data);
      } catch (error) {
        console.error("Failed to fetch related posts", error);
      }
    };

    const fetchRecentPosts = async () => {
      try {
        const response = await axios.get(
          `https://blogs.rizznart.com/wp-json/wp/v2/posts?per_page=5&_embed`
        );

        // Extract the featured image URL from the response
        const postsWithImages = response.data.map((post) => ({
          ...post,
          featured_media:
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
        }));

        setRecentPosts(postsWithImages);
      } catch (error) {
        console.error("Failed to fetch recent posts", error);
      }
    };

    const fetchCategories = async (categoryIds) => {
      try {
        const response = await axios.get(
          `https://blogs.rizznart.com/wp-json/wp/v2/categories?include=${categoryIds.join(
            ","
          )}`
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      }
    };

    fetchPost();
    fetchRecentPosts();
  }, [slug, router.isReady]);

  if (loading)
    return <p className="text-white text-center mt-10">Loading...</p>;
  if (error) return <p className="text-red-500 text-center mt-10">{error}</p>;

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
        <title>{post?.seo_title}</title>
        <meta name="description" content={post?.seo_description} />
      </Head>
      <Header />

      <div>
        <section className="innerBan-sec p-6 md:p-8">
          <div className="h-[40vh] md:h-[80vh] bg-[url('/img/secbg1.jpg')] bg-cover bg-center bg-fixed flex items-center justify-center rounded-xl">
            <div className="container mx-auto max-w-screen-xl">
              <h1
                className="text-white text-3xl md:text-[4.5vw] leading-[6vw] md:leading-[4.5vw] font-semibold text-center px-6 md:px-12"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              ></h1>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 px-4 md:px-16 lg:px-14">
          <div>
            <div className="bg-[#0a0a0a] py-5 px-4 md:px-6 flex flex-wrap justify-between items-center gap-4 rounded-lg">
              <div className="flex items-center gap-3">
                <img
                  className="size-10 md:size-12 rounded-full ring-2 ring-white"
                  src={getAuthorImage(authorName)}
                  alt={authorName}
                />
                <div>
                  <h3 className="text-base md:text-lg font-bold leading-3 text-white">
                    {authorName}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm">
                    Brand Writer
                  </p>
                </div>
              </div>
              <div className="border border-[#B1FF01] px-3 py-1 md:px-4 md:py-2 rounded-3xl flex items-center gap-2">
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

            <div className="flex flex-col md:flex-row gap-8 py-12">
              <div className="md:w-3/4 bg-[#0a0a0a] text-white p-6 md:p-10 rounded-lg space-y-2">
                {featuredImage && (
                  <img
                    src={featuredImage}
                    alt="Featured"
                    className="w-full h-[900px] rounded-lg mb-4 object-cover"
                  />
                )}
                <h1 className="text-[40px] font-bold">{post.title.rendered}</h1>
                <div
                  className="blogwrap "
                  dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                ></div>
              </div>
              <aside className="md:w-1/4 bg-[#0a0a0a] px-6 py-4 rounded-lg md:sticky md:top-28 md:self-start">
                <h2 className="text-white text-lg font-bold mb-4">Tags</h2>
                <ul className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <li key={index}>
                      <div className="border border-[#B1FF01] px-3 py-1 md:px-4 md:py-2 rounded-3xl flex items-center gap-2">
                        <span className="text-[#B1FF01] text-xs md:text-sm font-semibold capitalize">
                          {tag}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>

                <h2 className="text-white text-lg font-bold mt-6 mb-4">
                  Recent Posts
                </h2>
                <ul className="space-y-4">
                  {recentPosts.map((post) => (
                    <li key={post.id} className="flex items-center gap-4">
                      {post.featured_media && (
                        <img
                          src={post.featured_media}
                          alt="Post Thumbnail"
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                      )}
                      <Link
                        href={`/blogs/${post.slug}`}
                        className="text-[#B1FF01] no-underline"
                      >
                        {post.title.rendered.length > 50
                          ? `${post.title.rendered.substring(0, 50)}...`
                          : post.title.rendered}
                      </Link>
                    </li>
                  ))}
                </ul>
                <h2 className="text-white text-lg font-bold mt-6 mb-4">
                  Categories
                </h2>
                <ul className="space-y-2 inline-flex items-center gap-2">
                  {categories.map((category) => (
                    <li key={category.id} className="text-gray-400">
                       <div className="border border-[#B1FF01] px-3 py-1 md:px-4 md:py-2 rounded-3xl flex items-center gap-2">
                        <span className="text-[#B1FF01] text-xs md:text-sm font-semibold capitalize">
                        {category.name}
                        </span>
                      </div>
                      
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
