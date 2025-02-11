import SideBar from "../common/sideBar/sideBar";
import { DataProvider } from "~/contexts/user.context";
import UserProfile from "../common/user/userProfile";
import RenderNavBar from "../common/zaimu/renderNavBar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <DataProvider>
      <div className="flex gap-4">
        <SideBar />
        <main className="flex flex-col w-full h-screen relative mr-12 gap-8 ml-64">
          <UserProfile />

          <RenderNavBar />

          {children}
        </main>
      </div>
    </DataProvider>
  );
}
