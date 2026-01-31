import Image from "next/image";
import AppShell from "@/components/AppShell";
import RefugioCard from "@/components/RefugioCard";
import NavButton from "@/components/NavButton";
import SectionBox from "@/components/SectionBox";
import { CONFIG } from "@/content/config";
import { MESSAGES } from "@/content/messages";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function dayOfYear(d: Date) {
  const start = new Date(d.getFullYear(), 0, 0);
  const diff = d.getTime() - start.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

function formatBR(d: Date) {
  return d.toLocaleDateString("pt-BR");
}

export default function Home() {
  const today = new Date();
  const msg = MESSAGES[dayOfYear(today) % MESSAGES.length];

  return (
    <AppShell
      title="Nosso Refúgio"
      subtitle={`${CONFIG.names} • Do lago ao altar • ${CONFIG.verseRef}`}
      backHref="/"
      rightSlot={
        <span className="hidden sm:inline-flex rounded-full border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-zinc-700">
          Hoje: {formatBR(today)}
        </span>
      }
    >
      {/* HERO */}
      <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <RefugioCard>
          <div className="relative aspect-16/10 overflow-hidden rounded-3xl border border-zinc-100 bg-white">
            <Image
              src={`${BASE}/photos/principal.jpg`}
              alt="Foto do casamento"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 560px"
            />
          </div>

          <div className="mt-4">
            <div className="text-sm font-semibold text-zinc-900">
              Um toque, e você lembra:
            </div>
            <div className="mt-1 text-sm leading-relaxed text-zinc-600">
              Deus cuidou do começo, cuidou do caminho e continua cuidando de nós.
              Quando bater saudade, abre o seu refúgio e respira.
            </div>
          </div>
        </RefugioCard>

        <div className="grid gap-4">
          <SectionBox title="Mensagem do dia">
            {msg}
            {"\n\n"}
            <span className="text-zinc-500">
              Abra a página de mensagens para ver mais.
            </span>
          </SectionBox>

          <div className="grid gap-2">
            <NavButton
              href="/saudade"
              title="Quando bater saudade"
              desc="Um lugar calmo para respirar e lembrar do nosso amor."
              emoji="💗"
              variant="primary"
            />
            <NavButton
              href="/oracao"
              title="Orar agora"
              desc="Paz, força e presença de Deus em poucas linhas."
              emoji="🙏"
              variant="secondary"
            />
          </div>
        </div>
      </div>

      {/* ATALHOS */}
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <NavButton
          href="/gratidao"
          title="Gratidão"
          desc="Lembrar das vitórias e do caminho que Deus conduziu."
          emoji="🌿"
          variant="primary"
        />
        <NavButton
          href="/promessa"
          title="Nossa promessa"
          desc="Atitudes, lealdade e propósito."
          emoji="💍"
          variant="secondary"
        />
        <NavButton
          href="/carta"
          title="Carta selada"
          desc="Um tesouro escrito por você, para ela abrir quando quiser."
          emoji="✉️"
          variant="primary"
        />
        <NavButton
          href="/linha-do-tempo"
          title="Das cartas ao altar"
          desc="Nossa linha do tempo: marcos e significados."
          emoji="🗺️"
          variant="secondary"
        />
        <NavButton
          href="/audios"
          title="Ouvir minha voz"
          desc="Três áudios curtos para aquecer o coração."
          emoji="🎧"
          variant="primary"
        />
        <NavButton
          href="/galeria"
          title="Galeria"
          desc="Fotos com legenda e memória."
          emoji="📷"
          variant="secondary"
        />
        <NavButton
          href="/mensagem"
          title="Mensagens"
          desc="Mensagem do dia + mensagens extras."
          emoji="✨"
          variant="primary"
        />
        <NavButton
          href="/config"
          title="Configurações"
          desc="PIN (opcional) e preferências locais."
          emoji="⚙️"
          variant="secondary"
        />
      </div>
    </AppShell>
  );
}
