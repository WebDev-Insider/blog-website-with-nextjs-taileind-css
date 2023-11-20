/** @type {import('next').NextConfig} */
const nextConfig = {}
// next.config.js
module.exports = {
  env: {
    NEXT_PUBLIC_API_URL: process.env.NODE_ENV === 'production' ? 'https://production-api.com' : 'http://localhost:3000',
  },
};

module.exports = nextConfig
