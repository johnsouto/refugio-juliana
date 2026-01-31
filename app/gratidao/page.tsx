import AppShell from "@/components/AppShell";
import SectionBox from "@/components/SectionBox";
import { CONFIG } from "@/content/config";

export default function Page() {
  return (
    <AppShell title="Gratidão" subtitle={`${CONFIG.names} • Amor com fé`}>
      <div className="grid gap-3">
        <SectionBox title="O que eu agradeço a Deus">
          {"Pela sua vida.\nPelo seu coração.\nPela mulher que você é.\n\nObrigado por caminhar comigo."}
        </SectionBox>

        <SectionBox title="Nossas realizações">
          {"• A gente aprendeu a vencer junto.\n" +
            "• A gente escolheu o respeito mesmo nos dias difíceis.\n" +
            "• A gente construiu um lar de paz.\n" +
            "• A gente chegou ao casamento com propósito.\n\n" +
            "E eu continuo acreditando no que Deus ainda vai fazer em nós."}
        </SectionBox>

        <SectionBox title="Final">
          {"Hoje eu te escolho de novo. Com amor, com fé e com alegria."}
        </SectionBox>
      </div>
    </AppShell>
  );
}
