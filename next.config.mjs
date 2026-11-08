/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // `output: "export"` was removed so middleware can run: it decides between
  // the desktop and legacy site on the first visit and shields crawlers from
  // the rotation redirects. That also unblocked `next/image` optimisation,
  // which is why `unoptimized` is gone: images now get responsive srcset and
  // AVIF/WebP instead of the raw file at full size.
  trailingSlash: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
          // No `preload` and no `includeSubDomains`: the subdomains are
          // separate projects, and committing them to HSTS from here would be
          // a promise this config cannot keep.
          { key: "Strict-Transport-Security", value: "max-age=31536000" },
        ],
      },
    ];
  },
};

export default nextConfig;
