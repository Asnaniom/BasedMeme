export default {
  async redirects() {
    return [
      {
        source: '/.well-known/farcaster.json',
        destination: 'https://api.farcaster.xyz/miniapps/hosted-manifest/019858ca-1c0a-b906-0e9c-1389339d933e',
        permanent: false,
      },
    ];
  },
};
