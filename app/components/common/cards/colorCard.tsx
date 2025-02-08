export default function ColorCard({ children }: { children: React.ReactNode }) {
  return (
    <article className="flex flex-col h-fit bg-linear-to-r from-primary to-secondary p-1 rounded-2xl gap-4 shadow-primary">
      <div className="h-full w-full bg-white/30 rounded-xl p-4">{children}</div>
    </article>
  );
}
