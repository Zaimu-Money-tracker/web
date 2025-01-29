export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <main className="flex justify-center">{children}</main>
    </div>
  );
}
