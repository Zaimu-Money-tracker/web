import { motion } from "motion/react";

export default function RedButton({
  text,
  style,
  type,
  action,
}: {
  text: string;
  style: string;
  type?: "button" | "submit" | "reset";
  action?: () => void;
}) {
  return (
    <>
      {style === "primary" ? (
        <motion.button
          className="w-full flex items-center shadow-red justify-center outline-none text-neutral-50 bg-red font-black text-xl rounded-full py-2 px-6 cursor-pointer"
          type={type}
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
          whileFocus={{ scale: 1.05 }}
          onClick={action}
        >
          {text}
        </motion.button>
      ) : (
        <motion.button
          className="default-button w-full flex items-center shadow-red justify-center outline-none text-neutral-50 bg-red font-black text-xl rounded-full p-0.75 cursor-pointer"
          type="button"
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
          whileFocus={{ scale: 1.05 }}
          onClick={action}
        >
          <div className="w-full flex items-center justify-center text-red bg-white font-black text-xl rounded-full py-2 px-6">
            {text}
          </div>
        </motion.button>
      )}
    </>
  );
}
