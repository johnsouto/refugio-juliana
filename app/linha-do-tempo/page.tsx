import AppShell from "@/components/AppShell";
import RefugioCard from "@/components/RefugioCard";
import { TIMELINE } from "@/content/timeline";

export default function Page() {
  return (
    <AppShell title="Das cartas ao altar" subtitle="Nossa história, em marcos">
      <div className="grid gap-3">
        {TIMELINE.map((item, idx) => (
          <RefugioCard key={idx}>
            <div className="text-sm font-semibold text-zinc-900">{item.title}</div>
            <div className="mt-1 text-sm leading-relaxed text-zinc-700">{item.text}</div>
          </RefugioCard>
        ))}
      </div>
    </AppShell>
  );
}
