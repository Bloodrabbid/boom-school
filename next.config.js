/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: [
      'static-maps.yandex.ru', 
      'images.unsplash.com',
      'api-maps.yandex.ru'
    ],
  },
  swcMinify: true,
  experimental: {
    forceSwcTransforms: true,
  }
}

module.exports = nextConfig