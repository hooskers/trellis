const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/js/app.jsx',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Production',
      template: './src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(eot|woff|woff2|svg|ttf)([?]?.*)$/,
        loader: 'url-loader?limit=50000',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'docs'),
  },
};
