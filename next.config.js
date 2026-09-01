/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  experimental: {
    sri: {
      algorithm: "sha256",
    },
  },
  turbopack: {
    rules: {
      "*.wav": {
        type: "asset",
      },
    },
  },
};

module.exports = nextConfig;
