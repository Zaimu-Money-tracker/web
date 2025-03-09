import { motion } from "motion/react";

export default function Checkbox({ checked }: { checked: boolean }) {
  return (
    <div
      className={`flex h-fit min-w-10 group rounded-full items-center py-0.75 px-0.75 transition-all ease-in-out duration-200 ${
        checked ? "bg-primary" : "bg-neutral-200"
      }`}
    >
      <motion.div
        className="w-4 h-4 rounded-full bg-white"
        animate={checked ? { translateX: "1.125rem" } : { translateX: 0 }}
        transition={{ type: "spring", duration: 0.5, bounce: 0.5 }}
      />
    </div>
  );
}
