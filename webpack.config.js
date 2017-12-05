const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const PATHS = {
  source: path.join(__dirname, "src"),
  build: path.join(__dirname, "build")
};

const commonConfig = {
  entry: {
    index: PATHS.source + "/pages/index/index.js",
    blog: PATHS.source + "/pages/blog/blog.js"
  },
  output: {
    path: PATHS.build,
    filename: "js/[name].js"
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      chunks: ["index", "common"],
      template: PATHS.source + "/pages/index/index.pug"
    }),
    new HtmlWebpackPlugin({
      filename: "blog.html",
      chunks: ["blog", "common"],
      template: PATHS.source + "/pages/blog/blog.pug"
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "common"
    })
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["babel-preset-env"]
        }
      },
      {
        test: /\.pug$/,
        exclude: /node_modules/,
        loader: "pug-loader",
        options: {
          pretty: true
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg|)$/i,
        loader: "file-loader",
        options: {
          name: "images/[hash].[ext]"
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: "file-loader",
        options: {
          name: "fonts/[hash].[ext]"
        }
      }
    ]
  }
};

const developmentConfig = {
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },

  devServer: {
    open: true,
    port: 9000
  }
};

const productionConfig = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: { loader: "css-loader", options: { minimize: true } }
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          publicPath: "../",
          fallback: "style-loader",
          use: [
            { loader: "css-loader", options: { minimize: true } },
            "sass-loader"
          ]
        })
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin("./css/[name].css"),
    new webpack.optimize.UglifyJsPlugin()
  ]
};

module.exports = function(env) {
  if (env === "production") {
    return merge(commonConfig, productionConfig);
  }
  if (env === "development") {
    return merge(commonConfig, developmentConfig);
  }
};
