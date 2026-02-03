"use client";

import { useEffect, useMemo, useState } from "react";

const PIN_HASH =
  "cbf93d3507a47e109cb09f3867200bb80cc2db1b1ecbe270a26706574be6c37d";
const MIN_ATTEMPT_MS = 900;

async function sha256Hex(value: string) {
  const data = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export default function PinGate({ children }: { children: React.ReactNode }) {
  const [allowed, setAllowed] = useState<boolean | null>(null);
  const [pin, setPin] = useState("");
  const [busy, setBusy] = useState(false);

  const canUseWebCrypto = useMemo(
    () => typeof crypto !== "undefined" && !!crypto.subtle,
    []
  );

  useEffect(() => {
    const ok = localStorage.getItem("refugio_access") === "true";
    setAllowed(ok);
  }, []);

  const submit = async () => {
    if (!canUseWebCrypto || busy) return;

    setBusy(true);
    const start = Date.now();
    try {
      const hashed = await sha256Hex(pin.trim());
      const ok = hashed === PIN_HASH;
      const elapsed = Date.now() - start;
      const wait = Math.max(0, MIN_ATTEMPT_MS - elapsed);

      window.setTimeout(() => {
        if (ok) {
          localStorage.setItem("refugio_access", "true");
          setAllowed(true);
        } else {
          alert("Código incorreto 💙");
        }
        setBusy(false);
      }, wait);
    } catch {
      setBusy(false);
      alert("Não foi possível validar agora.");
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
            className="mt-4 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-center text-lg tracking-widest outline-none focus:ring-2 focus:ring-rose-300 disabled:opacity-60"
            disabled={busy}
          />

          <button
            onClick={submit}
            className="mt-4 w-full rounded-xl bg-rose-500 py-3 text-white font-medium hover:bg-rose-600 disabled:cursor-not-allowed disabled:opacity-70"
            disabled={busy || pin.trim().length === 0}
          >
            {busy ? "Verificando..." : "Entrar"}
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
