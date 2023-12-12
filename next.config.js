/** @type {import('next').NextConfig} */
const nextConfig = {};

// module.exports = nextConfig;

const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");

module.exports = withPlugins([withImages()]);

module.exports = withPlugins([
  withImages(),
  {
    webpack(config, options) {
      config.module.rules.push({
        test: /\.(pdf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              publicPath: `/_next/static/pdf/`, // Ajusta la ruta según tus necesidades
              outputPath: `${options.isServer ? "../" : ""}static/pdf/`,
            },
          },
        ],
      });

      return config;
    },
  },
]);
