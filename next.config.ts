/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net", // Giữ lại để các ảnh cũ từ Contentful không bị lỗi
      },
      {
        protocol: "https",
        hostname: "images.reactbricks.com", // Thêm hostname của React Bricks
      },
    ],
  },
};

export default nextConfig;
