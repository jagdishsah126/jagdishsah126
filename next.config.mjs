/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // `output: "export"` was removed so middleware can run: it decides between
  // the desktop and legacy site on the first visit and shields crawlers from
  // the rotation redirects.
  trailingSlash: true,
};

export default nextConfig;
