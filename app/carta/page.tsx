import AppShell from "@/components/AppShell";
import LetterSeal from "@/components/LetterSeal";
import SectionBox from "@/components/SectionBox";
import { LETTER } from "@/content/letters";

export default function Page() {
  return (
    <AppShell title="Carta selada" subtitle="Abra com calma, isso aqui é o seu refúgio" backHref="/">
      <div className="grid gap-3">
        <LetterSeal
          title={LETTER.title}
          subtitle={LETTER.subtitle}
          body={LETTER.body}
          signature={LETTER.signature}
        />
        
      </div>
    </AppShell>
  );
}
