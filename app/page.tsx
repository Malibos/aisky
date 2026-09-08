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
  const root = widget.shadowRoot;
  if (!root) return false;
  const buttons = [...root.querySelectorAll("button")] as HTMLButtonElement[];
  const match = buttons.find(test);
  match?.click();
  return Boolean(match);
}

function labelOf(button: HTMLButtonElement) {
  return `${button.title} ${button.getAttribute("aria-label") ?? ""} ${button.innerText}`.toLowerCase();
}

function clickHiddenStart(widget: ConvaiWidget) {
  widget.click();
  return clickShadowButton(widget, (button) =>
    /start (a )?call|begin conversation|rozpocznij/.test(labelOf(button)),
  );
}

function clickHiddenStop(widget: ConvaiWidget) {
  widget.click();
  return clickShadowButton(widget, (button) =>
    /end (a )?call|end conversation|zakończ|hang/.test(labelOf(button)),
  );
}

const IDLE_LABEL_EN = "Talk to AI";
const IDLE_LABEL_SR = "Pričaj sa AI";

export default function Page() {
  const [isCalling, setIsCalling] = useState(false);
  const [idleLabel, setIdleLabel] = useState(IDLE_LABEL_EN);
  const [labelVisible, setLabelVisible] = useState(true);
  const widgetRef = useRef<ConvaiWidget | null>(null);
  const userArmedRef = useRef(false);
  const retryRef = useRef<number>(0);

  useEffect(() => {
    let fadeIn = 0;
    const interval = window.setInterval(() => {
      setLabelVisible(false);
      window.clearTimeout(fadeIn);
      fadeIn = window.setTimeout(() => {
        setIdleLabel((current) => (current === IDLE_LABEL_EN ? IDLE_LABEL_SR : IDLE_LABEL_EN));
        setLabelVisible(true);
      }, 500);
    }, 4000);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(fadeIn);
    };
  }, []);

  useEffect(() => {
    let widget: ConvaiWidget | null = null;

    const onStarted = () => {
      if (!userArmedRef.current) {
        const rogue = getWidget(widgetRef);
        if (rogue) clickHiddenStop(rogue);
        return;
      }
      setIsCalling(true);
    };

    const onEnded = () => {
      userArmedRef.current = false;
      setIsCalling(false);
    };

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
      userArmedRef.current = false;
      if (widget) clickHiddenStop(widget);
      setIsCalling(false);
      return;
    }

    userArmedRef.current = true;
    setIsCalling(true);

    const tryStart = (attempt = 0) => {
      const current = getWidget(widgetRef);
      if (current && clickHiddenStart(current)) return;
      if (attempt < 24) {
        retryRef.current = window.setTimeout(() => tryStart(attempt + 1), 120);
      }
    };

    tryStart();
  }, [isCalling]);

  return (
    <main className="relative h-[100dvh] min-h-[100dvh] w-full overflow-hidden bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src="/background.mp4"
      />

      <div className="pointer-events-none absolute bottom-0 left-0 z-[1] h-48 w-full bg-gradient-to-t from-black from-[55%] via-black/80 to-transparent md:h-64 lg:h-[35vh]" />

      <button
        type="button"
        onClick={toggleCall}
        aria-pressed={isCalling}
        className="absolute bottom-[calc(3rem+env(safe-area-inset-bottom,0px))] left-1/2 z-20 inline-flex min-h-12 -translate-x-1/2 cursor-pointer items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-base tracking-wide text-white shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-md transition-all duration-300 hover:bg-white/20 sm:gap-3 sm:px-8 sm:py-4 sm:text-lg sm:tracking-widest md:bottom-20"
      >
        {isCalling ? (
          <>
            <PhoneOff className="h-5 w-5" strokeWidth={2} />
            <span>Zakończ połączenie</span>
          </>
        ) : (
          <>
            <Mic className="h-5 w-5" strokeWidth={2} />
            <span className={`transition-opacity duration-500 ${labelVisible ? "opacity-100" : "opacity-0"}`}>
              {idleLabel}
            </span>
          </>
        )}
      </button>

      <div className="elevenlabs-host pointer-events-none hidden" aria-hidden="true">
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
      </div>

      <Script src="https://elevenlabs.io/convai-widget/index.js" strategy="lazyOnload" />
    </main>
  );
}
