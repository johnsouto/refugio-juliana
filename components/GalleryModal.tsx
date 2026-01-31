"use client";

import { useState } from "react";

type Item = {
  src: string;
  caption?: string;
};

export default function GalleryModal({ items }: { items: Item[] }) {
  const [index, setIndex] = useState<number | null>(null);

  const close = () => setIndex(null);

  const prev = () =>
    setIndex((i) => (i === null ? null : (i - 1 + items.length) % items.length));

  const next = () =>
    setIndex((i) => (i === null ? null : (i + 1) % items.length));

  return (
    <>
      {/* grid */}
      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((img, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="group relative aspect-16/10 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50"
            aria-label={img.caption ? `Abrir foto: ${img.caption}` : "Abrir foto"}
          >
            <img
              src={img.src}
              alt={img.caption ?? "Foto"}
              className="h-full w-full object-cover transition group-hover:scale-[1.03]"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {/* modal */}
      {index !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={close}
              className="absolute right-2 top-2 z-10 rounded-full bg-black/60 px-3 py-2 text-white"
              aria-label="Fechar"
            >
              ✕
            </button>

            <img
              src={items[index].src}
              alt={items[index].caption ?? "Foto ampliada"}
              className="w-full rounded-3xl object-contain"
              loading="eager"
            />

            {items[index].caption && (
              <div className="mt-3 text-center text-sm text-zinc-200">
                {items[index].caption}
              </div>
            )}

            <div className="mt-4 flex justify-between">
              <button
                onClick={prev}
                className="rounded-full bg-white/90 px-4 py-2 text-sm"
              >
                ← Anterior
              </button>
              <button
                onClick={next}
                className="rounded-full bg-white/90 px-4 py-2 text-sm"
              >
                Próxima →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
