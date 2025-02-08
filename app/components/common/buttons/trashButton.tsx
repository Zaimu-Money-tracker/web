import { motion } from "motion/react";
import { FaTrashCan } from "react-icons/fa6";

export default function TrashButton({
  w,
  h,
  action,
}: {
  w: string;
  h: string;
  action: () => void;
}) {
  return (
    <motion.button
      className="flex w-fit h-fit p-2 rounded-full bg-red cursor-pointer shadow-red"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      onClick={action}
    >
      <FaTrashCan className={`${w} ${h} text-white`} />
    </motion.button>
  );
}
