/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/.well-known/farcaster.json",
        destination: "https://api.farcaster.xyz/miniapps/hosted-manifest/019851f5-f843-5d6c-bd73-2ad5d0445296", // <-- replace with your hosted manifest link if changed!
        permanent: false // 307 (temporary redirect)
      }
    ];
  },
};

export default nextConfig;
