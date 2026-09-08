"use client";

import {
  ConversationProvider,
  useConversationControls,
  useConversationStatus,
} from "@elevenlabs/react";
import { Mic, PhoneOff } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const AGENT_ID = "agent_5801m1sayfz1egzv77pnk3f3tb7b";
const IDLE_LABEL_EN = "Talk to AI";
const IDLE_LABEL_SR = "Pri\u010Daj sa AI";
const IDLE_LABELS = [IDLE_LABEL_EN, IDLE_LABEL_SR] as const;

function unlockIosAudio() {
  try {
    const AudioCtx =
      window.AudioContext ||
      (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    void ctx.resume();
    const buffer = ctx.createBuffer(1, 1, 22050);
    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.connect(ctx.destination);
    source.start(0);
  } catch {
    // Safari may reject unlock before the mic prompt; startSession still runs.
  }
}

function GlassCta() {
  const { startSession, endSession, setVolume } = useConversationControls();
  const { status } = useConversationStatus();
  const live = status === "connected" || status === "connecting";
  const [armed, setArmed] = useState(false);
  const [labelIndex, setLabelIndex] = useState(0);
  const [labelVisible, setLabelVisible] = useState(true);
  const showHangup = live || armed;
  const hangupRef = useRef(showHangup);
  hangupRef.current = showHangup;

  useEffect(() => {
    if (showHangup) {
      setLabelVisible(true);
      return;
    }

    let fadeIn = 0;
    const interval = window.setInterval(() => {
      setLabelVisible(false);
      window.clearTimeout(fadeIn);
      fadeIn = window.setTimeout(() => {
        setLabelIndex((index) => (index === 0 ? 1 : 0));
        setLabelVisible(true);
      }, 500);
    }, 4000);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(fadeIn);
    };
  }, [showHangup]);

  useEffect(() => {
    if (status === "connected") {
      setVolume({ volume: 1 });
    }
    if (status === "disconnected" || status === "error") {
      setArmed(false);
    }
  }, [setVolume, status]);

  const onClick = () => {
    if (hangupRef.current) {
      setArmed(false);
      endSession();
      return;
    }

    unlockIosAudio();
    void navigator.mediaDevices.getUserMedia({ audio: true }).catch(() => {
      setArmed(false);
    });
    startSession({
      agentId: AGENT_ID,
      connectionType: "webrtc",
      webRtc: { singlePeerConnection: false },
    });
    setArmed(true);
  };

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={showHangup}
      className="absolute bottom-12 left-1/2 z-20 inline-flex min-h-12 -translate-x-1/2 transform cursor-pointer items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-base tracking-wide text-white shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-md transition-all duration-300 hover:bg-white/20 sm:gap-3 sm:px-8 sm:py-4 sm:text-lg sm:tracking-widest"
    >
      {showHangup ? (
        <>
          <PhoneOff className="h-5 w-5" strokeWidth={2} />
          <span>Zakończ połączenie</span>
        </>
      ) : (
        <>
          <Mic className="h-5 w-5" strokeWidth={2} />
          <span className={`transition-opacity duration-500 ${labelVisible ? "opacity-100" : "opacity-0"}`}>
            {IDLE_LABELS[labelIndex]}
          </span>
        </>
      )}
    </button>
  );
}

export default function Page() {
  return (
    <ConversationProvider>
      <main className="relative h-[100dvh] min-h-[100dvh] w-full overflow-hidden bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 z-0 h-full w-full object-cover"
          src="/background.mp4"
        />
        <GlassCta />
      </main>
    </ConversationProvider>
  );
}
