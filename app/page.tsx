"use client";

import { useCallback, useState } from "react";

export default function Page() {
  const [open, setOpen] = useState(false);

  const startConversation = useCallback(() => {
    console.log("Inicjalizacja ElevenLabs...");
    setOpen(true);

    // TODO: Conversation.startSession({
    //   agentId: process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID,
    //   connectionType: "websocket",
    // })
  }, []);

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src="/generated_video%20(3).mp4"
      />

      <div className="absolute inset-0 z-10 bg-black/10" />

      <div className="relative z-20 h-full w-full">
        <button
          type="button"
          onClick={startConversation}
          className="absolute bottom-[8%] left-1/2 z-30 -translate-x-1/2 cursor-pointer rounded-full bg-gradient-to-r from-fuchsia-600 to-orange-500 px-12 py-3 text-lg font-bold tracking-wide text-white shadow-[0_0_30px_rgba(217,70,239,0.4)] transition-transform hover:scale-105 hover:brightness-110"
        >
          Talk to AI
        </button>
      </div>

      {open ? (
        <div className="absolute inset-0 z-40 flex items-center justify-center bg-black/50 px-6">
          <div className="w-full max-w-md rounded-3xl border border-white/15 bg-white/10 p-8 text-center backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.22em] text-white/50">AI SKY</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Agent głosowy</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/65">
              Tutaj podłączymy widget ElevenLabs i sesję głosową.
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-8 rounded-full border border-white/20 px-6 py-2 text-sm text-white/80 transition hover:bg-white/10"
            >
              Zamknij
            </button>
          </div>
        </div>
      ) : null}
    </main>
  );
}
