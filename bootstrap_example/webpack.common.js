const Webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    vendor: "./src/app/vendor.js",
    index: "./src/app/chunks/index.js",
    contact: "./src/app/chunks/contact.js"
  },
  resolve: {
    modules: ['node_modules'],
    alias: {
      images: path.join(__dirname, 'src/images'),
      fonts: path.join(__dirname, 'src/fonts')
    }
  },
  plugins: [
    new Webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      Popper: 'popper.js'
    }),
    new HtmlWebpackPlugin({
      title: "Webpack Demo",
      filename: "index.html",
      template: "./src/templates/index.html",
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
      },
      chunks: ['vendor', 'index']
    }),
    new HtmlWebpackPlugin({
      title: "Webpack Demo",
      filename: "contact.html",
      template: "./src/templates/contact.html",
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
      }
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          "html-loader" //3. Inject html into DOM
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "images",
            esModule: false
          }
        }
      },
      {
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts'
            }
          }
        ]
      },
    ]
  }
};
