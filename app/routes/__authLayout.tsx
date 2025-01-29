import { Outlet } from "@remix-run/react";
import AuthLayout from "~/components/layouts/authLayout.layout";

export default function AuthLayoutRoute() {
  return (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  );
}
