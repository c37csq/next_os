/** @type {import('next').NextConfig} */
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin');

module.exports = {
  reactStrictMode: false,
  distDir: '/build',
  env: {
    NEXT_PUBLIC_APP_ENV: process.env.NEXT_PUBLIC_APP_ENV,
  },
  images: {
    loader: 'imgix',
    path: 'http://uat.onetouch-tech.com/',
  },
  webpack(config) {
    config.plugins.push(new WindiCSSWebpackPlugin());
    return config;
  },
};
