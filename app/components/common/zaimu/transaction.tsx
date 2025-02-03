import FormatDate from "~/utils/formatDate";
import FormatNumber from "~/utils/formatNumber";
import { motion } from "motion/react";
import TrashButton from "../buttons/trashButton";
import Transaction from "~/interfaces/entities/transaction.interface";

export default function TransactionItem({
  transaction,
  delay,
  showDelete,
  searchId,
}: {
  transaction: Transaction;
  delay: number;
  showDelete: (state: boolean) => void;
  searchId: (id: string) => void;
}) {
  const createdAt = new Date(transaction.createdAt);
  return (
    <motion.li
      className="flex relative justify-between items-center bg-white shadow-gray-1 rounded-2xl pl-2 pr-4 py-2 group"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: delay * 0.1,
          duration: 0.6,
          type: "spring",
          bounce: 0.5,
        },
      }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ scale: 1.005 }}
      transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
    >
      <div className="flex gap-2">
        <div className="bg-white rounded-lg p-2 w-auto h-auto">
          <img src="" alt="" width={"40"} height={"40"} />
        </div>

        <div className="flex flex-col min-w-48 gap-1">
          <span className="text-neutral-700 text-lg font-bold">
            {transaction.name}
          </span>
          <div
            className={`flex gap-1 bg-neutral-200/80 w-fit py-0.25 ${
              transaction.category ? "pr-3 pl-1" : "px-"
            } rounded-full items-center justify-center`}
          >
            {transaction.category ? (
              <>
                <div
                  className="w-3.5 h-3.5 rounded-full"
                  style={{ backgroundColor: transaction.category.color }}
                />
                <span className="text-neutral-700 font-medium text-sm">
                  {transaction.category.name}
                </span>
              </>
            ) : (
              <span className="text-neutral-700 font-medium text-sm px-2">
                No category
              </span>
            )}
          </div>
        </div>
      </div>

      <span className="font-medium text-neutral-500">
        {FormatDate(createdAt)}
      </span>

      {transaction.type === "income" ? (
        <span className="font-black text-xl text-green-500 min-w-48 text-end">
          + ${FormatNumber(transaction.amount)}
        </span>
      ) : (
        <span className="font-black text-xl text-red-500 min-w-48 text-end">
          - ${FormatNumber(transaction.amount)}
        </span>
      )}

      <div className="absolute flex opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto w-full h-full bg-linear-to-r from-70% to-90% from-neutral-400/20 to-neutral-300 inset-0 rounded-2xl items-center justify-end px-4 transition-all ease-in-out duration-300">
        <TrashButton
          w="w-5"
          h="h-5"
          action={() => {
            showDelete(true);
            searchId(transaction._id);
          }}
        />
      </div>
    </motion.li>
  );
}
