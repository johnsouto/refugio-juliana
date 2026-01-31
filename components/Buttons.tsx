type BtnProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function PrimaryButton({ className = "", ...props }: BtnProps) {
  return (
    <button
      {...props}
      className={[
        "w-full rounded-2xl bg-zinc-900 px-4 py-3 text-base font-medium text-white",
        "transition active:scale-[0.99] disabled:opacity-50",
        className,
      ].join(" ")}
    />
  );
}

export function SecondaryButton({ className = "", ...props }: BtnProps) {
  return (
    <button
      {...props}
      className={[
        "w-full rounded-2xl bg-zinc-700 px-4 py-3 text-base font-medium text-white",
        "transition active:scale-[0.99] disabled:opacity-50",
        className,
      ].join(" ")}
    />
  );
}
