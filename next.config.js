/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;
let assetPrefix = "";
let basePath = "";
if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}
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
    path: "",
  },
  assetPrefix: assetPrefix,
  basePath: basePath,
};
module.exports = nextConfig;
