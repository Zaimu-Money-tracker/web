import { motion } from "motion/react";
import { FaPlus } from "react-icons/fa";

export default function AddButton({ action }: { action: () => void }) {
  return (
    <motion.button
      className="w-fit h-fit bg-linear-to-b from-primary to-secondary p-4 rounded-full shadow-primary self-center cursor-pointer"
      type="button"
      onClick={action}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
      whileFocus={{ scale: 1.05 }}
    >
      <FaPlus className="text-white w-6 h-6" />
    </motion.button>
  );
}
