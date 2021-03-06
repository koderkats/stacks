const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
// const postcss = require('postcss-loader')

const folder = {
  asset: path.resolve(__dirname, 'asset'),
  dist: path.resolve(__dirname, 'dist'),
}

module.exports = {
  mode: 'production',

  entry: ['./src/index.js'],
  output: {
    publicPath: './',
    path: folder.dist,
    filename: '[name].bundle.js',
  },

  module: {
    rules: [
      {
        exclude: /node_modules|packages/,
        test: /\.js$/,
        use: 'babel-loader',
      },

      // {
      //   test: /\.css$/,
      //   use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader'],
      // },


      {
        test: /\.css$/,
        loader: 'style-loader',
      },
      

      {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      },

      {
        test: /\.css$/,
        use: [
          // 'style-loader',
          // 'css-loader',
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9', // React doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009',
                }),
              ],
            },
          }
        ],

      }
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),      
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    // new MiniCssExtractPlugin({
    //   filename: 'style.css',
    // }),

  ],

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false
      }),
      new OptimizeCSSAssetsPlugin()
    ]
  },


}

