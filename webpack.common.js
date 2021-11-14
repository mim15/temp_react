const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const webpack = require('webpack')
const dotenv = require('dotenv')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CopyPlugin({
      patterns: [{ from: './src/favicon.svg', to: 'favicon.svg' }],
    }),

    new CleanWebpackPlugin({}),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed),
    }),
  ],
  resolve: {
    modules: [__dirname, 'src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
    alias: {
      '@/components': path.resolve(__dirname, 'src/components'),
      '@/styles': path.resolve(__dirname, 'src/styles'),
      '@/pages': path.resolve(__dirname, 'src/pages'),
      '@/utils': path.resolve(__dirname, 'src/utils'),
      '@/assets': path.resolve(__dirname, 'src/assets'),
      '@/constants': path.resolve(__dirname, 'src/constants'),
      '@/context': path.resolve(__dirname, 'src/context'),
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    historyApiFallback: true,
    open: true,
    port: 3000,
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
}
