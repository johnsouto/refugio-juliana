import AppShell from "@/components/AppShell";
import RefugioCard from "@/components/RefugioCard";
import SectionBox from "@/components/SectionBox";
import { CONFIG } from "@/content/config";

export default function Page() {
  return (
    <AppShell
      title="Quando bater saudade"
      subtitle={`${CONFIG.names} • ${CONFIG.verseRef}`}
    >
      <div className="grid gap-3">
        <SectionBox title="Respira">
          {"Inspira…\nSegura…\nSolta…\n\nUm toque aqui e você lembra: eu te amo e Deus está conosco."}
        </SectionBox>

        <RefugioCard>
          <div className="text-sm leading-relaxed text-zinc-800 whitespace-pre-line">
            {"Amor, se você abriu isso é porque bateu saudade.\n\n" +
              "Eu quero que você sinta paz: você é meu lar.\n" +
              "Eu continuo te escolhendo. E quando eu estiver longe, eu volto para você.\n\n" +
              "Eu te amo."}
          </div>
        </RefugioCard>

        <SectionBox title="Pequena lembrança">
          {"Do lago ao altar: Deus ouviu nossos pedidos.\nE a nossa história continua."}
        </SectionBox>
      </div>
    </AppShell>
  );
}
