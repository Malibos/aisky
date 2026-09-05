"use client";

import { Bot, Cpu, Workflow, ArrowUpRight } from "lucide-react";

const tags = [
  { label: "Automatyzacja B2B", Icon: Workflow },
  { label: "Multi-Agent Systems", Icon: Bot },
  { label: "Edge AI Hardware", Icon: Cpu },
];

export default function Page() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black text-white antialiased">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_42%,rgba(18,28,42,0.9)_0%,rgba(0,0,0,1)_62%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[38%] h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.04] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:64px_64px]"
      />

      <div className="relative z-10 flex h-full w-full items-center justify-center px-6">
        <article
          className="w-full max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.05] px-10 py-12 shadow-2xl backdrop-blur-2xl sm:px-16 sm:py-14"
          style={{
            boxShadow:
              "0 40px 80px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          <p className="mb-7 text-[11px] font-medium tracking-[0.28em] text-white/40">
            AI SKY · SOFTWARE HOUSE
          </p>

          <div className="mb-8 flex flex-wrap gap-2.5">
            {tags.map(({ label, Icon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[13px] font-medium tracking-wide text-white/80"
              >
                <Icon className="h-3.5 w-3.5 text-cyan-300/80" strokeWidth={1.75} />
                {label}
              </span>
            ))}
          </div>

          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.35rem]">
            Sztuczna Inteligencja
            <br />
            dla Biznesu
          </h1>

          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-white/55">
            Projektujemy i wdrażamy dedykowane systemy wieloagentowe oraz
            infrastrukturę, które automatyzują procesy operacyjne i sprzedażowe
            w Twojej firmie.
          </p>

          <div className="mt-10">
            <a
              href="#konsultacja"
              className="group inline-flex items-center gap-2.5 rounded-full bg-cyan-400 px-7 py-3.5 text-[15px] font-semibold tracking-tight text-black transition duration-300 hover:bg-cyan-300"
              style={{
                boxShadow:
                  "0 0 0 1px rgba(34,211,238,0.35), 0 0 28px rgba(34,211,238,0.45), 0 0 64px rgba(34,211,238,0.18)",
              }}
            >
              Skonsultuj wdrożenie
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={2.25}
              />
            </a>
          </div>
        </article>
      </div>
    </main>
  );
}
