// app/.well-known/farcaster.json/route.tsx
import { NextResponse } from "next/server";

export async function GET() {
  const body = {
    frame: {
      name: "Based Memes",
      version: "1",
      iconUrl: "https://based-meme.vercel.app/icon.png",
      homeUrl: "https://based-meme.vercel.app",
      imageUrl: "https://based-meme.vercel.app/image.png",
      splashImageUrl: "https://based-meme.vercel.app/splash.png",
      splashBackgroundColor: "#6200EA",
      webhookUrl: "https://based-meme.vercel.app/api/webhook",
      subtitle: "One More Reason To Be Based",
      description: "Have Fun On Farcaster",
      primaryCategory: "social",
      tags: ["meme", "memes"],
    },
    accountAssociation: {
      header: "",
      payload: "",
      signature: "",
    },
  };
  return NextResponse.json(body);
}
