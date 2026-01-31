"use client";

import { useMemo, useState } from "react";

type Props = {
  title?: string;
  subtitle?: string;
  body: string;
  signature?: string;
};

export default function LetterSeal({
  title = "Carta selada",
  subtitle = "Abra quando quiser, com calma",
  body,
  signature,
}: Props) {
  const [open, setOpen] = useState(false);

  const lines = useMemo(() => body.split("\n"), [body]);

  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-4 shadow-soft">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-sm font-semibold text-zinc-900">{title}</div>
          <div className="mt-1 text-xs text-zinc-500">{subtitle}</div>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs font-medium text-zinc-800 hover:bg-white"
        >
          {open ? "Fechar" : "Abrir"}
        </button>
      </div>

      <div className="mt-4">
        {/* Envelope */}
        <div className="relative mx-auto w-full max-w-130">
          {/* base do envelope */}
          <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50">
            {/* “carta” (sobe quando abre) */}
            <div
              className={[
                "relative mx-4 my-4 rounded-2xl border border-zinc-200 bg-white p-4",
                "transition-all duration-500",
                open ? "-translate-y-10 shadow-soft" : "translate-y-2 opacity-95",
              ].join(" ")}
            >
              <div className="text-sm leading-relaxed text-zinc-800 whitespace-pre-line">
                {lines.map((ln, i) => (
                  <span key={i}>
                    {ln}
                    {"\n"}
                  </span>
                ))}
                {signature ? (
                  <>
                    {"\n"}
                    <span className="text-zinc-500 text-sm">{signature}</span>
                  </>
                ) : null}
              </div>
            </div>

            {/* “selo” */}
            <div className="absolute left-1/2 top-[54%] z-20 -translate-x-1/2">
              <div
                className={[
                  "grid h-12 w-12 place-items-center rounded-full",
                  "border border-zinc-200 bg-white shadow",
                  "transition-transform duration-500",
                  open ? "scale-90 rotate-12 opacity-80" : "scale-100 rotate-0",
                ].join(" ")}
                aria-hidden="true"
              >
                <span className="text-lg">💌</span>
              </div>
            </div>

            {/* flap (tampa) */}
            <div
              className={[
                "absolute inset-x-0 top-0 h-[58%] origin-top",
                "bg-linear-to-b from-zinc-100 to-zinc-50",
                "transition-transform duration-500",
                "border-b border-zinc-200",
                open ? "rotate-x-70 opacity-0" : "opacity-100",
              ].join(" ")}
              style={{
                clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              }}
            />

            {/* “dobras” laterais (visual) */}
            <div
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{
                background:
                  "linear-gradient(135deg, transparent 52%, rgba(0,0,0,0.06) 53%, transparent 56%)," +
                  "linear-gradient(225deg, transparent 52%, rgba(0,0,0,0.06) 53%, transparent 56%)",
              }}
            />
          </div>

          <div className="mt-3 text-center text-xs text-zinc-500">
            {open ? "Com amor e propósito." : "A carta está selada."}
          </div>
        </div>
      </div>
    </div>
  );
}
