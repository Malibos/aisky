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

export default function Page() {
  const [isCalling, setIsCalling] = useState(false);
  const widgetRef = useRef<ConvaiWidget | null>(null);
  const userArmedRef = useRef(false);
  const retryRef = useRef<number>(0);

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
    <main className="relative z-0 h-screen w-screen overflow-hidden bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        src="/background.mp4"
      />

      <div className="relative z-50 flex h-full w-full items-center justify-center">
        <button
          type="button"
          onClick={toggleCall}
          aria-pressed={isCalling}
          className="relative z-50 inline-flex cursor-pointer items-center gap-3 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-lg tracking-widest text-white shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-md transition-all duration-300 hover:bg-white/20"
        >
          {isCalling ? (
            <>
              <PhoneOff className="h-5 w-5" strokeWidth={2} />
              Zakończ połączenie
            </>
          ) : (
            <>
              <Mic className="h-5 w-5" strokeWidth={2} />
              Rozpocznij połączenie
            </>
          )}
        </button>
      </div>

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
