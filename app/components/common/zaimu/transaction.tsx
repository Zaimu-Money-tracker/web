import FormatDate from "~/utils/formatDate";
import FormatNumber from "~/utils/formatNumber";
import { motion } from "motion/react";

export default function TransactionItem({
  name,
  category,
  date,
  amount,
  type,
  delay,
}: {
  name: string;
  category: string;
  date: Date;
  amount: number;
  type: string;
  delay: number;
}) {
  return (
    <motion.li
      className="flex justify-between items-center bg-neutral-200/50 rounded-2xl pl-2 pr-4 py-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: delay * 0.1,
          duration: 0.5,
          type: "spring",
          bounce: 0.6,
        },
      }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
    >
      <div className="flex gap-2">
        <div className="bg-white rounded-lg p-2 w-auto h-auto">
          <img src="" alt="" width={"40"} height={"40"} />
        </div>

        <div className="flex flex-col min-w-48">
          <span className="text-neutral-700 text-lg font-bold">{name}</span>
          <span className="text-neutral-600 font-medium">{category}</span>
        </div>
      </div>

      <span className="font-medium text-neutral-600">{FormatDate(date)}</span>

      {type === "income" ? (
        <span className="font-black text-xl text-green-500 min-w-48 text-end">
          + ${FormatNumber(amount)}
        </span>
      ) : (
        <span className="font-black text-xl text-red-500 min-w-48 text-end">
          - ${FormatNumber(amount)}
        </span>
      )}
    </motion.li>
  );
}
