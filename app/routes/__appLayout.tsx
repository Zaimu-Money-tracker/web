import { Outlet } from "@remix-run/react";
import AppLayout from "~/components/layouts/appLayout.layout";

export default function AppLayoutRoute() {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}
