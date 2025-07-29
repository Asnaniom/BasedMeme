// app/api/proxy-image/route.ts (Next.js App Router)

import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url");

  if (
    !url ||
    !(
      url.startsWith("https://preview.redd.it/") ||
      url.startsWith("https://i.redd.it/")
    )
  ) {
    return new Response("Invalid or missing URL", { status: 400 });
  }

  try {
    const imageRes = await fetch(url);

    if (!imageRes.ok)
      return new Response("Could not fetch image", { status: 400 });

    const contentType = imageRes.headers.get("content-type") || "image/jpeg";
    const arrayBuffer = await imageRes.arrayBuffer();

    return new Response(arrayBuffer, {
      headers: { "Content-Type": contentType },
    });
  } catch {
    return new Response("Error fetching image", { status: 500 });
  }
}
