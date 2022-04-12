/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    loader: 'imgix',
    path: 'https://example.com/myaccount/',
  }
};

module.exports = nextConfig;
