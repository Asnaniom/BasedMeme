// app/.well-known/farcaster.json/route.tsx
import { NextResponse } from "next/server";

export async function GET() {
  const body = {
    frame: {
      version: "1",
      name: "Based Meme", // Updated from "Based Memes" for consistency
      iconUrl: "https://based-meme.vercel.app/favicon.ico",
      homeUrl: "https://based-meme.vercel.app",
      imageUrl: "https://based-meme.vercel.app/opengraph-image.png",
      buttonTitle: "👀 Explore Memes",
      splashImageUrl: "https://based-meme.vercel.app/opengraph-image.png",
      splashBackgroundColor: "#6200EA",
      description: "Create, remix & share memes powered by Farcaster and Base", // Clear and consistent description
      subtitle: "The ultimate meme playground on Base",
      screenshotUrls: ["https://based-meme.vercel.app/opengraph-image.png"],
      primaryCategory: "social",
      tags: ["meme", "memes", "fun", "onchain", "base"],
      heroImageUrl: "https://based-meme.vercel.app/opengraph-image.png",
      tagline: "The ultimate meme playground on Base",
      ogTitle: "Based Meme - Meme Playground",
      ogDescription:
        "Create, remix & share memes powered by Farcaster and Base",
      ogImageUrl: "https://based-meme.vercel.app/opengraph-image.png",
    },
    accountAssociation: {
      header: "",
      payload: "",
      signature: "",
    },
  };

  return NextResponse.json(body);
}
