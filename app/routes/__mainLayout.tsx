import { Outlet } from "@remix-run/react";
import MainLayout from "~/components/layouts/mainLayout";

export default function MainLayoutRoute() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}
