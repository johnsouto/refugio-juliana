"use client";

import AppShell from "@/components/AppShell";
import SectionBox from "@/components/SectionBox";
import { PrimaryButton, SecondaryButton } from "@/components/Buttons";
import { useRef } from "react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const AUDIOS = [
  {
    id: "a1",
    label: "1 — “Que tal um cover do Justin Bieber? kkkk”",
    src: `${BASE}/audio/audio_1.mp3`,
  },
  {
    id: "a2",
    label:
      "2 — “Que tal ouvir você mesma de quando um dia tudo era oração e sonho?”",
    src: `${BASE}/audio/audio_2.mp3`,
  },
  {
    id: "a3",
    label:
      "3 — “Que tal um dueto dos crentes, cristãos e evangélicos mais bregas de New Iguaçu? kkkk”",
    src: `${BASE}/audio/audio_3.mp3`,
  },
];

export default function Page() {
  const refs = useRef<Record<string, HTMLAudioElement | null>>({});

  async function play(id: string) {
    const a = refs.current[id];
    if (!a) return;
    try {
      await a.play();
    } catch {
      alert("Se não tocar no primeiro clique, tente mais uma vez.");
    }
  }

  return (
    <AppShell
      title="Aumente o som e sinta meu abraço"
      subtitle="Ouça as notas da nossa vida e o eco de tudo o que ainda vamos viver..."
    >
      <div className="grid gap-3">
        <SectionBox title="Significado de cada áudio">
          {
            "áudio 1 — Para ouvir o esforço de um romântico tentando te conquistar de todas as formas\n\n" +
            "áudio 2 — Para lembrar que o nosso hoje é a resposta exata de tudo o que um dia você pediu em oração\n\n" +
            "áudio 3 — Para sentir que o nosso casamento é isso: uma melodia imperfeita, mas cheia de alegria e cumplicidade"
          }
        </SectionBox>

        <div className="grid gap-2">
          <PrimaryButton onClick={() => play("a1")}>
            {AUDIOS[0].label}
          </PrimaryButton>

          <SecondaryButton onClick={() => play("a2")}>
            {AUDIOS[1].label}
          </SecondaryButton>

          <PrimaryButton onClick={() => play("a3")}>
            {AUDIOS[2].label}
          </PrimaryButton>

          {AUDIOS.map((a) => (
            <audio
              key={a.id}
              ref={(el) => {
                refs.current[a.id] = el;
              }}
              src={a.src}
              preload="none"
            />
          ))}
        </div>

        <div className="text-xs text-zinc-500">
          Se o celular bloquear o áudio, toque novamente. Alguns navegadores fazem isso.
        </div>
      </div>
    </AppShell>
  );
}
