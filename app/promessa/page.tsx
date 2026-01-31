import AppShell from "@/components/AppShell";
import SectionBox from "@/components/SectionBox";
import { CONFIG } from "@/content/config";

export default function Page() {
  return (
    <AppShell title="Nossa promessa" subtitle={`${CONFIG.names} • ${CONFIG.verseRef}`}>
      <div className="grid gap-3">
        <SectionBox title="O que eu prometo com atitudes">
          {"• Te honrar todos os dias.\n" +
            "• Te ouvir de verdade.\n" +
            "• Ser fiel, cuidadoso e presente.\n" +
            "• Proteger o nosso lar.\n" +
            "• Sempre seguir os passos do Senhor Jesus.\n\n" +
            "Eu te amo."}
        </SectionBox>

        <SectionBox title="Nosso coração de vidro">
          {"Eu posso ser imperfeito mas sempre estarei conectado em Deus.\n" +
            "Você sempre será essa florzinha e sempre vou acreditar na promessa que Ele nos deu." +
            "\n\n‘‘Assim, já não são dois, mas sim uma só carne. Portanto, o que Deus uniu, ninguém separe.’’ (Mateus 19:6)"}
        </SectionBox>
      </div>
    </AppShell>
  );
}
