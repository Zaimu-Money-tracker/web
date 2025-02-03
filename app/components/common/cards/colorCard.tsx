export default function ColorCard({ children }: { children: React.ReactNode }) {
  return (
    <article className="flex flex-col h-fit bg-linear-to-r from-primary to-secondary p-4 rounded-2xl gap-4 shadow-primary">
      {children}
    </article>
  );
}
