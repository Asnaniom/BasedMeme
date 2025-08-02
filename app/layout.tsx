import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Based Meme",
  description: "Create, remix and share memes on Farcaster",
  openGraph: {
    title: 'Based Meme',
    description: 'Create, remix and share memes on Farcaster',
    url: 'https://based-meme.vercel.app/',
    siteName: 'Based Meme',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: "Based Meme Preview",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    title: "Based Meme",
    description: "Create, remix and share memes on Farcaster",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: "/generated-image.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          width: "100vw",
          height: "100vh",
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
          background: "#6200EA",
          overflow: "auto",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            width: "100vw",
            height: "100vh",
            minHeight: "100vh",
            minWidth: "100vw",
            boxSizing: "border-box",
            border: "8px solid #6200EA",
            borderRadius: "18px",
            background: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "stretch",
            alignItems: "stretch",
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
