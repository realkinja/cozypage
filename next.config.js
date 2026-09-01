/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
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
