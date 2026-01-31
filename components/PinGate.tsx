"use client";

import { useEffect, useState } from "react";

const PIN_CODE = "27092025";

export default function PinGate({ children }: { children: React.ReactNode }) {
  const [allowed, setAllowed] = useState<boolean | null>(null);
  const [pin, setPin] = useState("");

  useEffect(() => {
    const ok = localStorage.getItem("refugio_access") === "true";
    setAllowed(ok);
  }, []);

  const submit = () => {
    if (pin === PIN_CODE) {
      localStorage.setItem("refugio_access", "true");
      setAllowed(true);
    } else {
      alert("Código incorreto 💙");
    }
  };

  if (allowed === null) return null;

  if (!allowed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-4">
        <div className="w-full max-w-sm rounded-3xl border border-zinc-200 bg-zinc-50 p-6 text-center shadow-soft">
          <div className="text-xl font-semibold text-zinc-900">
            Nosso refúgio
          </div>

          <p className="mt-2 text-sm text-zinc-600">
            Esse espaço é só nosso.
          </p>

          <input
            type="password"
            inputMode="numeric"
            placeholder="Digite o código"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            className="mt-4 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-center text-lg tracking-widest outline-none focus:ring-2 focus:ring-rose-300"
          />

          <button
            onClick={submit}
            className="mt-4 w-full rounded-xl bg-rose-500 py-3 text-white font-medium hover:bg-rose-600"
          >
            Entrar
          </button>

          <div className="mt-4 text-xs text-zinc-500">
            Amor, fé e cuidado.
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
