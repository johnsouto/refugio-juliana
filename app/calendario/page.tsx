"use client";

import { useMemo, useState } from "react";
import AppShell from "@/components/AppShell";
import SectionBox from "@/components/SectionBox";
import { Calendar } from "@/components/ui/calendar";

type LoveEvent = {
  date: string;      // "YYYY-MM-DD"
  title: string;
  message: string;
  emoji?: string;
};

const LOVE_EVENTS: LoveEvent[] = [
  {
    date: "2025-02-18",
    title: "Quando nos falamos pela 1ª vez",
    message:
      "Eu já sabia que você seria minha futura esposa, minha mulher e a mãe dos meus filhos.",
    emoji: "💬",
  },
  {
    date: "2025-02-22",
    title: "Parque de diversões e Outback",
    message:
      "Não dá pra esquecer. Eu te senti nos meus braços, e aquilo foi uma das melhores coisas que já me aconteceram.",
    emoji: "🎡",
  },
  {
    date: "2025-02-28",
    title: "1ª viagem para Miguel Pereira",
    message:
      "Tudo perfeito: curtimos o Parque dos Dinossauros, o trenó e cantamos nossas músicas preferidas no carro.",
    emoji: "🚗",
  },
  {
    date: "2025-02-28",
    title: "Pedido de namoro",
    message:
      "Tudo planejado por Deus, por mim e pela Tabata. Você nem imaginava o que estava acontecendo, kkkkk. E até a pedrinha voltou para contar a história desse grande dia!",
    emoji: "💌",
  },
  {
    date: "2025-05-25",
    title: "Noivado",
    message:
      "Como um bom pinguim, eu me declarei na frente dos meus familiares. Eu já tinha preparado tudo para você ser a minha noiva.",
    emoji: "🐧",
  },
  {
    date: "2025-06-02",
    title: "Seu aniversário",
    message:
      "Teve bolo, danças expressivas e muito chamego.",
    emoji: "🎂",
  },
  {
    date: "2025-06-07",
    title: "Casamento no cartório",
    message:
      "Foi tudo lindo e muito emocionante. Foi só uma “amostra grátis” do que estava por vir no religioso.",
    emoji: "📝",
  },
  {
    date: "2025-09-10",
    title: "Meu aniversário",
    message:
      "Eu nunca tive um topo de bolo personalizado e tantas coisas gostosas para comer. Mas o melhor foi a presença de quem me ama e o cuidado que você tem por mim. Eu te amo.",
    emoji: "🎉",
  },
  {
    date: "2025-09-27",
    title: "Casamento no religioso",
    message:
      "O nosso compromisso mais precioso. Eu te escolho todos os dias, com Deus no centro. (Is 41:20)",
    emoji: "💍",
  },
  {
    date: "2025-09-29",
    title: "Lua de mel",
    message:
      "Aproveitamos muito na nossa casa de madeira: comemos muito morango, pizza e chocolate, e criamos um vídeo mais maneiro do século, kkkkk.",
    emoji: "🍓",
  },
];


function toDateOnly(d: Date) {
  // normaliza para evitar bug de fuso
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

function iso(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export default function Page() {
  const [selected, setSelected] = useState<Date | undefined>(new Date());

  const eventMap = useMemo(() => {
    const map = new Map<string, LoveEvent[]>();
    for (const ev of LOVE_EVENTS) {
      const arr = map.get(ev.date) ?? [];
      arr.push(ev);
      map.set(ev.date, arr);
    }
    return map;
  }, []);

  const selectedIso = selected ? iso(selected) : null;
  const todaysEvents = selectedIso ? eventMap.get(selectedIso) ?? [] : [];

  // Dias marcados (para o calendário destacar)
  const markedDays = useMemo(() => {
    return Array.from(eventMap.keys()).map((s) => {
      const [y, m, d] = s.split("-").map(Number);
      return new Date(y, m - 1, d);
    });
  }, [eventMap]);

  const defaultMessage =
    "Escolhe um dia. Em alguns deles tem um pedacinho da nossa história guardado aqui.";

  return (
    <AppShell
      title="Calendário do nosso amor"
      subtitle="Datas, memórias e promessas — com Deus no centro"
      backHref="/"
    >
      <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-3xl border border-zinc-200 bg-white p-3 shadow-soft">
          <Calendar
            mode="single"
            selected={selected}
            onSelect={(d) => setSelected(d ? toDateOnly(d) : undefined)}
            modifiers={{ marked: markedDays }}
            modifiersClassNames={{
              marked:
                "relative after:content-['♥'] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:text-xs after:text-pink-600",
            }}
            className="rounded-2xl"
          />
          <div className="mt-2 text-xs text-zinc-500">
            Dica: os dias com ♥ têm algo especial.
          </div>
        </div>

        <SectionBox title={selectedIso ? `Refúgio — ${selectedIso}` : "Refúgio"}>
          {todaysEvents.length === 0 ? (
            <span className="text-zinc-600">{defaultMessage}</span>
          ) : (
            <div className="grid gap-3">
              {todaysEvents.map((ev, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-zinc-200 bg-white p-4"
                >
                  <div className="text-sm font-semibold text-zinc-900">
                    {ev.emoji ? `${ev.emoji} ` : ""}
                    {ev.title}
                  </div>
                  <div className="mt-2 whitespace-pre-line text-sm text-zinc-700">
                    {ev.message}
                  </div>
                </div>
              ))}
            </div>
          )}
        </SectionBox>
      </div>
    </AppShell>
  );
}
