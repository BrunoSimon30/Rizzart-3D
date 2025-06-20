/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // Ensures paths have a trailing slash
  async rewrites() {
    return [
      {
        source: "/blogs/:slug",
        destination: "/blogs/[slug].html", // Required for static exports
      },
    ];
  },
};

export default nextConfig;
