/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/.well-known/farcaster.json',
        destination: 'https://api.farcaster.xyz/miniapps/hosted-manifest/019858bf-372f-f6d8-78ac-b792493b554c',
        statusCode: 307
      }
    ];
  }
};

export default nextConfig;