import { motion } from "motion/react";

export default function Button({
  text,
  type,
  buttonAction,
}: {
  text: string;
  type?: "button" | "submit" | "reset";
  buttonAction?: () => void;
}) {
  return (
    <motion.button
      className="default-button flex items-center justify-center shadow-primary outline-none text-neutral-50 bg-linear-to-r from-primary to-secondary shadow-defaultButton font-black text-xl rounded-full py-2 px-6 cursor-pointer"
      type={type}
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
      whileFocus={{ scale: 1.05 }}
      onClick={buttonAction}
    >
      {text}
    </motion.button>
  );
}
