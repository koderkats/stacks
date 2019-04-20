const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');


const folder = {
  asset: path.resolve(__dirname, 'asset'),
  dist: path.resolve(__dirname, 'distDev'),
}

module.exports = {
  mode: 'development',

  entry: ['./src/index.js'],
  output: {
    // publicPath: './',  // Required for: yarn build:dev
    publicPath: '/',      // Required for: yarn start
    path: folder.dist,
    filename: '[name].bundle.js',
  },

  devtool: 'cheap-module-eval-source-map',

  module: {
    rules: [
      {
        exclude: /node_modules|packages/,
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        exclude: /node_modules|packages/,
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },

      {
        test: /\.css$/,
        loader: 'style-loader'
      }, {
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
                    'not ie < 9',
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
    new HtmlWebpackPlugin()
  ],

  devServer: {
    contentBase: folder.asset,
    index: 'index.html',
    hot: true
  },

}
