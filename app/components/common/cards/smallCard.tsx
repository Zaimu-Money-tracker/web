export default function SmallCard({ children }: { children: React.ReactNode }) {
  return (
    <article className="flex flex-col h-fit bg-white p-4 rounded-2xl gap-4 shadow-gray-1">
      {children}
    </article>
  );
}
