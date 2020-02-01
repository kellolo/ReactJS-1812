const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve (__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: path.join('js', 'bundle.js'),
    publicPath: '/'
  },
  mode: 'development',
  devServer: {
    contentBase: './dist',
    port: 8080,
    hot: true,
    historyApiFallback: true
  },
  module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [
              "@babel/plugin-transform-runtime",
              [
                "@babel/plugin-proposal-class-properties",
                {
                  "loose": true
                }
              ]
            ]
          },
        },
        {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
        ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: path.join('css', 'style.css'),
    }),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve('src', 'index.html')
    })
  ]
}