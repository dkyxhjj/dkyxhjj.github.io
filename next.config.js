/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/dkyxhjj.github.io' : '',
  // Configure images for static export
  images: {
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
};

module.exports = nextConfig;
