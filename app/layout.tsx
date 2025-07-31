import "./globals.css";

const OG_IMAGE = "https://based-meme.vercel.app/opengraph-image.png";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content={OG_IMAGE} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>Based Meme</title>
        <meta
          name="description"
          content="Create, remix and share memes on Farcaster"
        />
      </head>
      <body
        style={{
          width: "100vw",
          height: "100vh",
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
          background: "#6200EA", // Background purple
          overflow: "hidden",
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
            border: "8px solid #6200EA", // <-- THE BORDER (adjust width here)
            borderRadius: "18px", // <-- optional: for rounded corners (adjust as needed)
            background: "#fff", // Or your inner background color
            overflow: "hidden",
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
