export default function SectionBox({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-zinc-200 bg-white p-4">
      <div className="mb-2 text-sm font-semibold text-zinc-900">{title}</div>
      <div className="whitespace-pre-line text-sm leading-relaxed text-zinc-800">
        {children}
      </div>
    </section>
  );
}
