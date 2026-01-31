import Link from "next/link";

type Props = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  backHref?: string;
  rightSlot?: React.ReactNode;
};

export default function AppShell({ title, subtitle, children, backHref = "/", rightSlot }: Props) {
  return (
    <main className="min-h-screen bg-white">
      {/* fundo premium */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-fuchsia-200/40 blur-3xl" />
        <div className="absolute top-40 right-[-160px] h-[420px] w-[420px] rounded-full bg-indigo-200/35 blur-3xl" />
        <div className="absolute bottom-[-160px] left-[-160px] h-[420px] w-[420px] rounded-full bg-rose-200/35 blur-3xl" />
      </div>

      <div className="mx-auto max-w-[920px] p-4">
        <div className="rounded-[28px] border border-zinc-100 bg-zinc-50/70 shadow-soft backdrop-blur">
          <header className="flex items-start justify-between gap-3 px-4 pt-4 sm:px-6 sm:pt-6">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
                {title}
              </h1>
              {subtitle ? (
                <p className="mt-2 max-w-[58ch] text-sm leading-relaxed text-zinc-600">
                  {subtitle}
                </p>
              ) : null}
            </div>

            <div className="flex items-center gap-2">
              {rightSlot}
              <Link
                href={backHref}
                className="rounded-full border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-zinc-800 hover:bg-zinc-50"
              >
                Voltar
              </Link>
            </div>
          </header>

          <div className="p-4 sm:p-6">{children}</div>
        </div>

        <footer className="mt-4 text-center text-xs text-zinc-500">
          Feito com amor. Um toque, e eu estou perto.
        </footer>
      </div>
    </main>
  );
}
