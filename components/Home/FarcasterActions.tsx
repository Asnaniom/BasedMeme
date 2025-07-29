import { useFrame } from "@/components/farcaster-provider";

// Accept memeImageUrl as a prop, from meme data or state.
export function FarcasterActions({ memeImageUrl }: { memeImageUrl: string }) {
  const { actions } = useFrame();
  const proxyUrl = memeImageUrl
    ? `/api/proxy-image?url=${encodeURIComponent(memeImageUrl)}`
    : "";

  return (
    <div className="space-y-4 border border-[#333] rounded-md p-4">
      <div className="text-xl font-bold text-left">sdk.actions</div>
      <div className="flex flex-row space-x-4 justify-start items-start">
        {actions ? (
          <div className="flex flex-col space-y-4 justify-start">
            <button
              type="button"
              className="bg-white text-black rounded-md p-2 text-sm"
              onClick={() => actions?.addMiniApp()}
            >
              addFrame
            </button>
            <button
              type="button"
              className="bg-white text-black rounded-md p-2 text-sm"
              onClick={() =>
                actions?.composeCast({
                  text: "Check out this meme!",
                  embeds: [{ url: proxyUrl }],
                })
              }
              disabled={!proxyUrl}
            >
              Cast Meme via Proxy
            </button>
          </div>
        ) : (
          <div className="text-sm text-left">Actions not available</div>
        )}
      </div>
    </div>
  );
}
