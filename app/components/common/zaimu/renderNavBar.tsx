import { financesLinks } from "~/data/zaimu/links";
import NavBar from "./navBar";
import { useLocation } from "@remix-run/react";

export default function RenderNavBar() {
  const location = useLocation();

  return (
    <div className="h-fit mt-8 mb-2">
      {location.pathname === "/main" ? (
        <></>
      ) : (
        <NavBar buttons={financesLinks} />
      )}
    </div>
  );
}
