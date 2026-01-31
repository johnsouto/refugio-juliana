"use client";

import AppShell from "@/components/AppShell";
import SectionBox from "@/components/SectionBox";
import { MESSAGES } from "@/content/messages";
import { useMemo, useState } from "react";

function dayOfYear(d: Date) {
  const start = new Date(d.getFullYear(), 0, 0);
  const diff = d.getTime() - start.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

export default function Page() {
  const todayMsg = useMemo(() => {
    const i = dayOfYear(new Date()) % MESSAGES.length;
    return MESSAGES[i];
  }, []);

  const [randomMsg, setRandomMsg] = useState<string | null>(null);

  return (
    <AppShell title="Mensagem do dia" subtitle="Um toque e uma lembrança">
      <div className="grid gap-3">
        <SectionBox title="Hoje">
          {todayMsg}
        </SectionBox>

        <SectionBox title="Quer outra?">
          <div className="grid gap-2">
            <button
              className="rounded-2xl bg-zinc-900 px-4 py-3 text-base font-medium text-white transition active:scale-[0.99]"
              onClick={() => {
                const i = Math.floor(Math.random() * MESSAGES.length);
                setRandomMsg(MESSAGES[i]);
              }}
            >
              Me dá outra mensagem
            </button>

            {randomMsg ? (
              <div className="rounded-2xl border border-zinc-200 bg-white p-4 text-sm leading-relaxed text-zinc-800">
                {randomMsg}
              </div>
            ) : (
              <div className="text-xs text-zinc-500">
                Toque no botão para ver uma mensagem extra.
              </div>
            )}
          </div>
        </SectionBox>
      </div>
    </AppShell>
  );
}
