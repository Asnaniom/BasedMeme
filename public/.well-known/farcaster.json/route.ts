import { NextResponse } from "next/server";

export async function GET() {
return NextResponse.json({
  miniapp: { // <--- was 'frame', now 'miniapp'
    name: "Based Meme",
    version: "1",
    iconUrl: "https://based-meme.vercel.app/icon.png",
    homeUrl: "https://based-meme.vercel.app",
    imageUrl: "https://based-meme.vercel.app/image.png",
    splashImageUrl: "https://based-meme.vercel.app/splash.png",
    splashBackgroundColor: "#6200EA",
    webhookUrl: "https://based-meme.vercel.app/api/webhook",
    subtitle: "Have Fun In Farcaster",
    description: "De-Generate Memes ",
    primaryCategory: "social",
    tags: ["memes", "degen", "meme"],
  },
  accountAssociation: {
    header:
      "eyJmaWQiOjI3NzA1MSwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDhjNzU4NjllYzZBN0ZCZkQ1NUY4NTFENEU0YTUwQTA0MDdhNDVhMkMifQ",
    payload: "eyJkb21haW4iOiJiYXNlZC1tZW1lLnZlcmNlbC5hcHAifQ",
    signature:
      "MHg1MThjZTBhYWY1MTg0ZWYwZTM3YzQ5ZWUwNTRmOGFkM2UzYzdmNjEzMDY0NmRkZDhjMTViMThlOTE3YTUzZTdkMjdhYTNkMTgyYzY3NTkxOWI3ZTYyZTA2YmE0NGI4ODNhOTM0N2I1MWQ3ZGUxMmU4MTJmMzU5ZThlOGVjY2FmMDFj",
  },
});
}