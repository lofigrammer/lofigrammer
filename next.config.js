/** @type {import('next').NextConfig} */

module.exports = {
  async headers() {
    return [
      {
        source: "/:all*(webp|svg|jpg|png)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=9999999999, must-revalidate",
          },
        ],
      },
    ];
  },
};
const nextConfig = {
  images: {
    loader: "akamai",
    path: "/",
  },
};
module.exports = nextConfig;
