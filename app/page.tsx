"use client";
import React, { useState, useEffect } from "react";
import { sdk } from "@farcaster/miniapp-sdk";

// Farcaster brand purple
const PRIMARY = "#8A63D2";
const BACKGROUND = "#F7F3FF";
const CARD = "#fff";
const TEXT = "#222";
const SUBTLE = "#bbb";

const moodMap: Record<string, string> = {
  Random: "",
  Happy: "wholesomememes",
  Dank: "dankmemes",
  Funny: "memes",
  Sad: "meirl",
  Surprised: "me_irl",
  Animal: "animalsbeingderps",
  Chaotic: "chaotic_good",
  Mindful: "GetMotivated",
  Nostalgic: "nostalgia",
  Epic: "nextfuckinglevel",
  Chill: "mildlyinteresting",
};

type Meme = {
  postLink: string;
  subreddit: string;
  title: string;
  url: string;
  nsfw: boolean;
  spoiler: boolean;
  author: string;
  ups: number;
};

export default function BasedMemes() {
  // All hooks at the top!
  const [hydrated, setHydrated] = useState(false);
  const [mood, setMood] = useState("Random");
  const [loading, setLoading] = useState(false);
  const [meme, setMeme] = useState<Meme | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    setHydrated(true);
    console.log("Hydrated! About to call sdk.actions.ready()");
    if (sdk?.actions?.ready) {
      sdk.actions.ready();
      console.log("Called sdk.actions.ready()");
    } else {
      console.warn("sdk.actions.ready is not defined - running outside Mini App?");
    }
    // Optionally log context (be careful: do not log private data in production)
    console.log("SDK context:", sdk.context);
    fetchMeme();
  }, []);

  const fetchMeme = async (chosenMood: string = mood) => {
    console.log("Fetching meme for mood:", chosenMood);
    setLoading(true);
    setError("");
    setMeme(null);
    let url = "https://meme-api.com/gimme";
    const subreddit = moodMap[chosenMood];
    if (subreddit) url += "/" + subreddit;
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Could not fetch memes.");
      const memeData = await response.json();
      setMeme(memeData);
      console.log("Fetched meme:", memeData);
    } catch (err: any) {
      setError(err.message || "Unknown error");
      console.error("Error fetching meme:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (hydrated) fetchMeme();
    // eslint-disable-next-line
  }, [hydrated]);

  const handleMoodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMood(e.target.value);
    fetchMeme(e.target.value);
  };

  function handleCast() {
    if (
      typeof window !== "undefined" &&
      window?.parent &&
      window.parent !== window &&
      (window as any).farcaster
    ) {
      (window as any).farcaster.composeCast({
        text: meme?.title || "",
        embeds: meme?.url ? [meme.url] : [],
      });
    } else if (meme) {
      const text = encodeURIComponent(
        meme.title + (meme.url ? `\n${meme.url}` : ""),
      );
      window.open(`https://warpcast.com/~/compose?text=${text}`, "_blank");
    } else {
      alert("Casting available in Farcaster MiniApp or via web composer.");
    }
  }

  if (!hydrated) return null;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: BACKGROUND,
        fontFamily: "'Inter', sans-serif",
        color: TEXT,
      }}
    >
      <div
        style={{
          maxWidth: 470,
          margin: "0 auto",
          padding: "24px 0 16px 0",
        }}
      >
        <h1
          style={{
            color: PRIMARY,
            fontFamily: "'Inter', sans-serif",
            fontSize: "2.2em",
            textAlign: "center",
            margin: "24px 0 8px 0",
            fontWeight: 800,
            letterSpacing: "-1.5px",
          }}
        >
          Based Memes
        </h1>
        <div
          style={{
            textAlign: "center",
            fontSize: "1.09em",
            color: "#555",
            marginBottom: 20,
            fontWeight: 500,
          }}
        >
          Mood-based Meme Explorer{" "}
          <span style={{ color: PRIMARY }}>for Farcaster</span>
        </div>
        <div
          style={{
            background: CARD,
            borderRadius: 16,
            boxShadow: "0 5px 32px #8A63D220",
            padding: 18,
            marginBottom: 24,
          }}
        >
          {/* Mood selector */}
          <div style={{ marginBottom: 13 }}>
            <label
              htmlFor="mood-picker"
              style={{
                color: PRIMARY,
                fontWeight: 700,
                fontSize: "1.01em",
              }}
            >
              How are you feeling?
            </label>
            <select
              id="mood-picker"
              value={mood}
              onChange={handleMoodChange}
              style={{
                fontSize: "1em",
                margin: "8px 0 2px 0",
                borderRadius: 7,
                border: `1.5px solid ${PRIMARY}`,
                color: TEXT,
                padding: "6px 8px",
                width: "100%",
                background: "#f7f2ff",
              }}
            >
              {Object.keys(moodMap).map((k) => (
                <option key={k} value={k}>
                  {k}
                </option>
              ))}
            </select>
          </div>
          {loading && (
            <p style={{ color: PRIMARY, fontWeight: 600, marginBottom: 15 }}>
              Loading meme...
            </p>
          )}
          {error && (
            <p style={{ color: "#D3322E", fontWeight: 500, marginBottom: 15 }}>
              {error}
            </p>
          )}
          {meme && (
            <>
              <div
                style={{
                  margin: "11px 0 14px 0",
                  padding: "10px",
                  background: "#fff",
                  borderRadius: 12,
                  boxShadow: "0 3px 12px #8A63D210",
                  border: `1.5px solid ${PRIMARY}22`,
                }}
              >
                <a
                  href={meme.postLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "block", marginBottom: 8 }}
                >
                  <img
                    src={meme.url}
                    alt={meme.title}
                    style={{
                      maxWidth: "100%",
                      width: "100%",
                      borderRadius: 8,
                      margin: "0 auto",
                      boxShadow: "0 4px 14px #aaa2",
                    }}
                  />
                </a>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "1.07em",
                    margin: "10px 0 2px 0",
                    color: TEXT,
                    textAlign: "center",
                  }}
                >
                  {meme.title}
                </div>
                <div
                  style={{
                    fontSize: "0.97em",
                    color: SUBTLE,
                    textAlign: "center",
                  }}
                >
                  r/{meme.subreddit} • by u/{meme.author}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  justifyContent: "center",
                  margin: "18px 0 0 0",
                  flexWrap: "wrap",
                }}
              >
                <button style={actionBtn()} onClick={() => fetchMeme()}>
                  Nah, Next One
                </button>
                <button style={actionBtn()} onClick={handleCast}>
                  Yah, Cast This
                </button>
              </div>
            </>
          )}
        </div>
        <div
          style={{
            textAlign: "center",
            fontSize: "0.97em",
            color: PRIMARY,
            marginTop: 14,
            fontWeight: 500,
          }}
        >
          Made with 💜 for the Farcaster community
        </div>
      </div>
      {/* Mobile responsive tweaks (hydration-safe) */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @media (max-width: 500px) {
          body, html {
            margin: 0 !important;
            padding: 0 !important;
            font-size: 1em !important;
          }
          #__next {
            width: 100vw !important;
            min-width: 0 !important;
          }
          div[style*="max-width: 470px"] {
            max-width: 100vw !important;
            padding: 0 0px !important;
          }
          select, input, button {
            font-size: 1.01em !important;
          }
        }
      `,
        }}
      />
    </div>
  );
}

// --- Unified large purple button style ---
function actionBtn() {
  return {
    background: PRIMARY,
    color: "#fff",
    border: "none",
    borderRadius: 9,
    fontWeight: 800,
    fontSize: "1.09em",
    padding: "11px 28px",
    boxShadow: "0 2px 8px #8A63D222",
    cursor: "pointer",
    letterSpacing: "0.5px",
    transition: "all 0.18s",
    outline: "none",
  };
}
