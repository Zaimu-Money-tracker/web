export default function CardVariant({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="flex flex-col h-full bg-white p-4 rounded-2xl gap-4 shadow-gray-1 overflow-hidden relative">
      {children}

      <div className="absolute w-full h-full inset-0 bg-linear-to-b from-50% to-100% from-transparent to-white pointer-events-none" />
    </article>
  );
}
