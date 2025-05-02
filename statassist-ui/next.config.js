/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
    NEXT_PUBLIC_POWERSIM_URL: process.env.NEXT_PUBLIC_POWERSIM_URL || 'http://localhost:8001',
  },
  images: {
    domains: ['localhost'],
  },
}

module.exports = nextConfig
