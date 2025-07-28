import { NextResponse } from "next/server";

// Use your production Vercel URL for all image and home URLs
const appUrl = "https://based-meme.vercel.app";

export async function GET() {
  const farcasterConfig = {
    frame: {
      version: "1",
      name: "Based Meme MiniApp",
      iconUrl: `${appUrl}/images/icon.png`,
      homeUrl: `${appUrl}/`,
      imageUrl: `${appUrl}/images/feed.png`,
      screenshotUrls: [],
      tags: ["monad", "farcaster", "miniapp", "template"],
      primaryCategory: "Memes", // Use "Memes" if possible; otherwise "developer-tools"
      buttonTitle: "Launch Template",
      splashImageUrl: `${appUrl}/images/splash.png`,
      splashBackgroundColor: "#ffffff",
    },
  };

  return NextResponse.json(farcasterConfig);
}
