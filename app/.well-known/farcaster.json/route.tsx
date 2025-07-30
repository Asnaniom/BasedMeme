// app/.well-known/farcaster.json/route.tsx
import { NextResponse } from "next/server";

export async function GET() {
  const body = {
    miniapp: {
      version: "1",
      name: "Based Memes", // Use your app's name
      iconUrl: "https://based-meme.vercel.app/icon.png",
      homeUrl: "https://based-meme.vercel.app",
      imageUrl: "https://based-meme.vercel.app/image.png",
      buttonTitle: "👀 Explore Memes",
      splashImageUrl: "https://based-meme.vercel.app/splash.png",
      splashBackgroundColor: "#6200EA",
      description: "Have Fun On Farcaster", // Your app description
      subtitle: "One More Reason To Be Based",
      screenshotUrls: ["https://based-meme.vercel.app/feed.png"],
      primaryCategory: "social",
      tags: ["meme", "memes", "fun", "onchain"],
      heroImageUrl: "https://based-meme.vercel.app/image.png",
      tagline: "The ultimate meme playground",
      ogTitle: "Based Memes - Meme Playground",
      ogDescription:
        "Create, remix & share memes powered by Farcaster and Base.",
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
