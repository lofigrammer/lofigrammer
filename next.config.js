/** @type {import('next').NextConfig} */

// import CopyPluin from "copy-webpack-plugin";
const CopyPlugin = require("copy-webpack-plugin")

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
  webpack: (config) => {
    config.devServer = { writeToDisk: true };
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          { from: "node_modules/@blacksquareui/look/dist", to: "static/" },
        ],
      }),
    )

    return config
  }
};
module.exports = nextConfig;
