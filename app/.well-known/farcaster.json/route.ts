import { NextResponse } from "next/server";

export async function GET() {
  // Use process.env to get your public URL
  const appUrl = (
    process.env.NEXT_PUBLIC_URL ?? "https://based-meme.vercel.app"
  )
    .trim()
    .replace(/\/+$/, "");

  const farcasterConfig = {
    frame: {
      version: "1",
      name: "Based Meme MiniApp",
      iconUrl: `${appUrl}/images/icon.png`,
      homeUrl: `${appUrl}/`,
      imageUrl: `${appUrl}/images/feed.png`,
      screenshotUrls: [],
      tags: ["monad", "farcaster", "miniapp", "template"],
      primaryCategory: "developer-tools",
      buttonTitle: "Launch Template",
      splashImageUrl: `${appUrl}/images/splash.png`,
      splashBackgroundColor: "#ffffff",
      // You can add webhookUrl if you actually use webhooks; otherwise, remove it.
      // Uncomment below if needed:
      // webhookUrl: `${appUrl}/api/webhook`
    },
  };

  return NextResponse.json(farcasterConfig);
}
