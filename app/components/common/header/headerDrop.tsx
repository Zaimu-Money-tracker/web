import { ReactNode, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { AnimatePresence, motion } from "motion/react";

export default function HeaderDrop({
  text,
  dropDown,
  index,
}: {
  text: string;
  dropDown: ReactNode;
  index: number;
}) {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      <li
        className="group flex text-lg text-neutral-800/70 hover:text-neutral-700/100 items-center gap-1 transition-all ease-linear duration-200 cursor-pointer px-2 py-0.5"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        <span className="font-bold">{text}</span>
        <IoIosArrowForward
          className="w-4 h-4 group-hover:rotate-90 transition-all ease-easeOutExpo duration-200"
          strokeWidth={20}
        />
        <AnimatePresence>
          {visible && (
            <motion.div
              className={`${
                index === 1
                  ? "after:left-0 after:w-[18%]"
                  : index === 2
                  ? "after:left-[23%] after:w-[25%]"
                  : "after:left-[60%] after:w-[40%] left-24"
              } absolute w-max flex p-2 bg-neutral-200/60 drop-down -left-4 top-[0px] mt-16 rounded-2xl border-2 border-neutral-200 cursor-default`}
              initial={{ opacity: 0, scale: 0.9, pointerEvents: "all" }}
              animate={{ opacity: 1, scale: 1, pointerEvents: "all" }}
              exit={{ opacity: 0, scale: 0.9, pointerEvents: "none" }}
              transition={{ duration: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
              onMouseEnter={() => setVisible(true)}
            >
              {dropDown}
            </motion.div>
          )}
        </AnimatePresence>
      </li>
    </>
  );
}
