export default function RefugioCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-4 transition hover:-translate-y-[1px] hover:shadow-soft">
      {children}
    </div>
  );
}
