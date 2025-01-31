import { financesLinks } from "~/data/zaimu/links";
import NavBar from "./navBar";
import { useLocation } from "@remix-run/react";
import { AnimatePresence, motion } from "motion/react";

export default function RenderNavBar() {
  const location = useLocation();

  return (
    <AnimatePresence>
      {location.pathname != "/main" && (
        <motion.div
          className="h-fit"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
        >
          <NavBar buttons={financesLinks} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
