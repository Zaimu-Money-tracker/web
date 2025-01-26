import { motion } from "motion/react";

export default function Checkbox({ checked }: { checked: boolean }) {
  return (
    <div className="flex h-fit min-w-10 bg-neutral-200 group rounded-full items-center py-0.75 px-0.75 transition-all ease-in-out duration-200 peer-checked:bg-primary">
      <motion.div
        className="w-4 h-4 rounded-full bg-white"
        animate={checked ? { translateX: "1.125rem" } : { translateX: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      />
    </div>
  );
}
