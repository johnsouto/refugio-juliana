"use client";

import AppShell from "@/components/AppShell";
import SectionBox from "@/components/SectionBox";
import { useEffect, useState } from "react";

export default function Page() {
  const [pinOn, setPinOn] = useState(false);

  useEffect(() => {
    setPinOn(localStorage.getItem("pin_on") === "1");
  }, []);

  function toggle() {
    const next = !pinOn;
    setPinOn(next);
    localStorage.setItem("pin_on", next ? "1" : "0");
  }

  return (
    <AppShell title="Configurações" subtitle="Preferências locais (no celular)">
      <div className="grid gap-3">
        <SectionBox title="PIN (privacidade leve)">
          <div className="flex items-center justify-between gap-3">
            <div className="text-sm text-zinc-700">
              {pinOn ? "Ativado" : "Desativado"}
            </div>
            <button
              onClick={toggle}
              className="rounded-full border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-zinc-800"
            >
              Alternar
            </button>
          </div>
          <div className="mt-2 text-xs text-zinc-500">
            Isso não é segurança forte, é só para manter o momento mais íntimo.
          </div>
        </SectionBox>
      </div>
    </AppShell>
  );
}
