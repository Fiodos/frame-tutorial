/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects(){
    return [
      {
        source: '/blockstories',
        destination: 'https://blockstories.de',
        permanent: true
      },
      {
        source: '/pinatacloud',
        destination: 'https://www.pinata.cloud/blog/how-to-make-a-frame-on-farcaster-using-ipfs',
        permanent: true
      },
      {
        source: '/video',
        destination: 'https://youtu.be/wUt5NjXHSO4',
        permanent: true
      }
    ]
  }
};

export default nextConfig;
