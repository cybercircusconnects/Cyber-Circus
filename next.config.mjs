/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "interface-eau.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  trailingSlash: true,
  // Note: With static export (output: "export"), redirects and headers must be handled at hosting level
  // For Vercel: Use vercel.json
  // For Netlify: Use _redirects and _headers files in public/
  // For other hosts: Configure redirects in hosting provider settings
};

export default nextConfig;
