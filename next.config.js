/** @type {import('next').NextConfig} */
// const nextConfig = {
//   trailingSlash: true,
//   reactStrictMode: true,
//   swcMinify: true,
//   experimental: {
//     concurrentFeatures: true,
//     serverComponents: true,
//   },
// }

// module.exports = nextConfig










module.exports = phase => ({
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /.node$/,
      use: "node-loader"
    });

    config.module.rules.push({
      test: /.(ts|js)x?$/,
      use: [
        {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
            experimentalWatchApi: true,
            onlyCompileBundledFiles: true
          }
        }
      ],
      include: [path.resolve(__dirname, "node_modules/@private/")],
      exclude: [path.resolve(__dirname, "node_modules/@private/src/styleguide")]
    });

    if (!isServer) {
      config.module.rules.push({
        test: /.s?[ac]ss$/i,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          {
            loader: "resolve-url-loader",
            options: { removeCR: true, debug: true }
          },
          { loader: "sass-loader" }
        ]
      });
    }

    config.module.rules.push({
      test: /.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            exclude: /node_modules/
          }
        }
      ],
      exclude: [path.resolve(__dirname, "node_modules/@private/src")]
    });

    return config;
  }
});
