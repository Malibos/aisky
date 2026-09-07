"use client";

import { Mic, PhoneOff } from "lucide-react";
import Script from "next/script";
import { useCallback, useEffect, useRef, useState } from "react";

type ConvaiWidget = HTMLElement & {
  startConversation?: () => void;
  endConversation?: () => void;
};

const AGENT_ID = "agent_5801m1sayfz1egzv77pnk3f3tb7b";

function getWidget(ref?: React.RefObject<ConvaiWidget | null>): ConvaiWidget | null {
  return (
    ref?.current ??
    (document.getElementById("aisky-agent") as ConvaiWidget | null) ??
    (document.querySelector("elevenlabs-convai") as ConvaiWidget | null)
  );
}

function clickShadowButton(widget: HTMLElement, test: (button: HTMLButtonElement) => boolean) {
  const buttons = [...(widget.shadowRoot?.querySelectorAll("button") ?? [])] as HTMLButtonElement[];
  const match = buttons.find(test);
  match?.click();
  return Boolean(match);
}

function labelOf(button: HTMLButtonElement) {
  return `${button.title} ${button.getAttribute("aria-label") ?? ""} ${button.innerText}`.toLowerCase();
}

function startHiddenWidget(widget: ConvaiWidget) {
  if (typeof widget.startConversation === "function") {
    widget.startConversation();
    return true;
  }

  clickShadowButton(widget, (button) => /agree|akceptuj/.test(labelOf(button)));
  return clickShadowButton(widget, (button) => /start (a )?call|begin conversation|rozpocznij/.test(labelOf(button)));
}

function stopHiddenWidget(widget: ConvaiWidget) {
  if (typeof widget.endConversation === "function") {
    widget.endConversation();
    return true;
  }

  return clickShadowButton(widget, (button) =>
    /end (a )?call|end conversation|zakończ|hang/.test(labelOf(button)),
  );
}

export default function Page() {
  const [isCalling, setIsCalling] = useState(false);
  const widgetRef = useRef<ConvaiWidget | null>(null);
  const retryRef = useRef<number>(0);

  useEffect(() => {
    let widget: ConvaiWidget | null = null;
    const onStarted = () => setIsCalling(true);
    const onEnded = () => setIsCalling(false);

    const attach = () => {
      widget = getWidget(widgetRef);
      if (!widget) return false;
      widget.addEventListener("conversationStarted", onStarted);
      widget.addEventListener("conversationEnded", onEnded);
      return true;
    };

    if (attach()) {
      return () => {
        widget?.removeEventListener("conversationStarted", onStarted);
        widget?.removeEventListener("conversationEnded", onEnded);
      };
    }

    const timer = window.setInterval(() => {
      if (attach()) window.clearInterval(timer);
    }, 200);

    return () => {
      window.clearInterval(timer);
      window.clearTimeout(retryRef.current);
      widget?.removeEventListener("conversationStarted", onStarted);
      widget?.removeEventListener("conversationEnded", onEnded);
    };
  }, []);

  const toggleCall = useCallback(() => {
    const widget = getWidget(widgetRef);

    if (isCalling) {
      if (widget) stopHiddenWidget(widget);
      setIsCalling(false);
      return;
    }

    console.log("Inicjalizacja ElevenLabs...");
    setIsCalling(true);

    if (widget && startHiddenWidget(widget)) return;

    window.clearTimeout(retryRef.current);
    retryRef.current = window.setTimeout(() => {
      const late = getWidget(widgetRef);
      if (late) startHiddenWidget(late);
    }, 200);
  }, [isCalling]);

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
        <div className="absolute bottom-[8%] left-1/2 z-30 -translate-x-1/2">
          {!isCalling && (
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-full bg-emerald-400/70 blur-[2px] animate-ping"
            />
          )}
          <button
            type="button"
            onClick={toggleCall}
            aria-pressed={isCalling}
            className={
              isCalling
                ? "relative inline-flex min-w-[20rem] cursor-pointer items-center justify-center gap-2.5 rounded-full bg-red-600 px-12 py-3.5 text-lg font-bold tracking-wide text-white shadow-[0_0_34px_rgba(220,38,38,0.7)] transition-transform hover:scale-105"
                : "relative inline-flex min-w-[20rem] cursor-pointer items-center justify-center gap-2.5 rounded-full bg-emerald-500 px-12 py-3.5 text-lg font-bold tracking-wide text-white shadow-[0_0_34px_rgba(16,185,129,0.75)] transition-transform hover:scale-105"
            }
          >
            {isCalling ? (
              <>
                <PhoneOff className="h-5 w-5" strokeWidth={2} />
                Zakończ rozmowę
              </>
            ) : (
              <>
                <Mic className="h-5 w-5" strokeWidth={2} />
                Rozpocznij rozmowę
              </>
            )}
          </button>
        </div>
      </div>

      <div className="pointer-events-none hidden opacity-0" aria-hidden="true">
        {
          // @ts-ignore
          <elevenlabs-convai
            ref={(element) => {
              widgetRef.current = element as ConvaiWidget | null;
            }}
            id="aisky-agent"
            agent-id={AGENT_ID}
            variant="compact"
            placement="bottom-right"
            dismissible="true"
          />
        }
      </div>

      <Script src="https://elevenlabs.io/convai-widget/index.js" strategy="lazyOnload" />
    </main>
  );
}
