export default {
  async redirects() {
    return [
      {
        source: '/.well-known/farcaster.json',
        destination: 'https://api.farcaster.xyz/miniapps/hosted-manifest/01986215-18ab-67f7-8170-55baae59e7b1',
        permanent: false,
      },
    ];
  },
};
