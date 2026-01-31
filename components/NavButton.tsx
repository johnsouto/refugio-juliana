import Link from "next/link";

type Props = {
  href: string;
  title: string;
  desc?: string;
  emoji?: string;
  variant?: "primary" | "secondary";
};

export default function NavButton({ href, title, desc, emoji, variant = "primary" }: Props) {
  const base =
    "group block w-full rounded-3xl border px-4 py-4 transition " +
    "active:scale-[0.99]";

  const styles =
    variant === "primary"
      ? "border-zinc-200 bg-white hover:bg-zinc-50"
      : "border-zinc-200 bg-zinc-50 hover:bg-white";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      <div className="flex items-start gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-2xl border border-zinc-200 bg-white text-lg">
          {emoji ?? "✨"}
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between gap-2">
            <div className="text-base font-semibold text-zinc-900">{title}</div>
            <div className="text-xs text-zinc-400 transition group-hover:translate-x-0.5">
              Abrir →
            </div>
          </div>

          {desc ? (
            <div className="mt-1 text-sm leading-relaxed text-zinc-600">{desc}</div>
          ) : null}
        </div>
      </div>
    </Link>
  );
}
