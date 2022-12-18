/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;
const assetPrefix = "/";
const basePath = "/";

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
  assetPrefix: assetPrefix,
  basePath: basePath,
};
module.exports = nextConfig;
