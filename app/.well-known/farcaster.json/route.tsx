// app/.well-known/farcaster.json/route.tsx
import { miniAppHost } from "@farcaster/miniapp-sdk";
import { NextResponse } from "next/server";

export async function GET() {
  const body = {
    frame: {
      version: "1",
      name: "Based Memes", // Updated from "Based Memes" for consistency
      iconUrl: "https://based-meme.vercel.app/images/splash.png",
      homeUrl: "https://based-meme.vercel.app/",
      imageUrl: "https://based-meme.vercel.app/opengraph-image.png",
      buttonTitle: "👀 Explore Memes",
      splashImageUrl: "https://based-meme.vercel.app/opengraph-image.png",
      splashBackgroundColor: "#6200EA",
      description: "Create, remix and share memes on farcaster", // Clear and consistent description
      subtitle: "Your meme playground on Base",
      screenshotUrls: ["https://based-meme.vercel.app/opengraph-image.png"],
      primaryCategory: "social",
      tags: ["meme", "memes", "fun", "onchain", "base"],
      heroImageUrl: "https://based-meme.vercel.app/generated-image.png",
      tagline: "Your meme playground on Base",
      ogTitle: "Based Meme - Meme Playground",
      ogDescription: "Create and share memes on farcaster",
      ogImageUrl: "https://based-meme.vercel.app/opengraph-image.png",
    },
    accountAssociation: {
      header:
        "eyJmaWQiOjI3NzA1MSwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDhjNzU4NjllYzZBN0ZCZkQ1NUY4NTFENEU0YTUwQTA0MDdhNDVhMkMifQ",
      payload: "eyJkb21haW4iOiJiYXNlZC1tZW1lLnZlcmNlbC5hcHAifQ",
      signature:
        "MHg1MThjZTBhYWY1MTg0ZWYwZTM3YzQ5ZWUwNTRmOGFkM2UzYzdmNjEzMDY0NmRkZDhjMTViMThlOTE3YTUzZTdkMjdhYTNkMTgyYzY3NTkxOWI3ZTYyZTA2YmE0NGI4ODNhOTM0N2I1MWQ3ZGUxMmU4MTJmMzU5ZThlOGVjY2FmMDFj",
    },
  };

  return NextResponse.json(body);
}
