import { NextResponse } from "next/server";

// Hardcode your production URL to avoid any ephemeral vercel deploy domains
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
      primaryCategory: "Memes",
      buttonTitle: "Launch Template",
      splashImageUrl: `${appUrl}/images/splash.png`,
      splashBackgroundColor: "#ffffff",
    },
  };

  return NextResponse.json(farcasterConfig);
}
