import SideBar from "../common/sideBar/sideBar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <SideBar />
      <main className="flex flex-col w-full items-center justify-center">
        {children}
      </main>
    </div>
  );
}
