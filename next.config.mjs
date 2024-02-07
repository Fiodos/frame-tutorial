/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects(){
    return [
      {
        source: '/blockstories',
        destination: 'https://blockstories.de/startups-to-watch',
        permanent: true
      }
    ]
  }
};

export default nextConfig;
