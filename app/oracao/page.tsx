import AppShell from "@/components/AppShell";
import SectionBox from "@/components/SectionBox";
import { CONFIG } from "@/content/config";

export default function Page() {
  return (
    <AppShell title="Orar agora" subtitle={`${CONFIG.names} • Refúgio`}>
      <div className="grid gap-3">
        <SectionBox title="Oração">
          {"Senhor, guarda o coração dele / dela com paz.\n" +
            "Fortalece, consola e renova.\n" +
            "Abençoa nosso casamento, nosso lar e nossos passos.\n\n" +
            "Amém."}
        </SectionBox>

        <SectionBox title="Respiração Miyagi-do (30 segundos)">
          {"1) Inspira 4 segundos\n2) Segura 2 segundos\n3) Solta 6 segundos\n\nRepete 3 vezes."}
        </SectionBox>

        <SectionBox title="Lembrete">
          {`Referência: ${CONFIG.verseRef}\n\nSe você abriu isso, eu estou com você em oração.`}
        </SectionBox>
      </div>
    </AppShell>
  );
}
