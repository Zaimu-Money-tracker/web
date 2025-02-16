import { motion } from "motion/react";
import { MdOutlineEdit } from "react-icons/md";

export default function EditButton({
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
      className="flex w-fit h-fit p-2 rounded-full bg-neutral-100 cursor-pointer "
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      onClick={action}
    >
      <MdOutlineEdit className={`${w} ${h} text-neutral-700`} />
    </motion.button>
  );
}
