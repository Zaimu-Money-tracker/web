import { financesLinks, overviewLinks } from "~/data/zaimu/links.data";
import NavBar from "./navBar";
import { useLocation } from "@remix-run/react";
import { AnimatePresence, motion } from "motion/react";

export default function RenderNavBar() {
  const location = useLocation();

  return (
    <AnimatePresence>
      {location.pathname != "/main" && location.pathname != "/main/goals" && (
        <motion.div
          className="h-fit"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "circInOut" }}
        >
          {location.pathname.includes("/finances") ? (
            <NavBar buttons={financesLinks} />
          ) : location.pathname.includes("/overview") ? (
            <NavBar buttons={overviewLinks} />
          ) : (
            <></>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
