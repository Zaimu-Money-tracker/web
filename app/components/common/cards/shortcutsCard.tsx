import { motion } from "motion/react";
import BasicCard from "./basicCard";
import { Link } from "@remix-run/react";
import { path } from "~/data/paths/paths.data";
import { useEffect, useState } from "react";
import Shortcut from "~/interfaces/entities/shortcut.interface";
import { getShortcuts } from "~/services/zaimu/entities/shortcuts";
import TransactionPayload from "~/interfaces/payloads/entities/transactionPayload.interface";
import { createTransactionWithPayload } from "~/services/zaimu/entities/transactions";
import FormatNumber from "~/utils/formatNumber";

export default function ShortcutsCard() {
  const [shortcuts, setShortcuts] = useState<Shortcut[]>();

  const handleGetShortcuts = async () => {
    const data = await getShortcuts();

    return setShortcuts(data);
  };

  const handleCreateTransaction = async (
    type: string,
    amount: number,
    name: string,
    category?: string
  ) => {
    const amountFormated = parseFloat(
      amount.toString().replaceAll(",", "").replace("$", "")
    );
    const data: TransactionPayload = {
      type: type,
      amount: amountFormated,
      name: name,
      recurring: false,
    };

    if (category) data.category = category;

    return await createTransactionWithPayload(data);
  };

  useEffect(() => {
    handleGetShortcuts();
  }, []);

  if (!shortcuts) return <></>;

  return (
    <BasicCard>
      <motion.header
        className="flex flex-col font-bold text-neutral-700 text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <span>Your shortcuts</span>
      </motion.header>

      <div className="flex flex-col h-full">
        <ul className="flex flex-col h-full max-h-[357px] gap-4 overflow-x-hidden overflow-y-scroll mini-scroll-bar pr-2 relative">
          {shortcuts.slice(0, 4).map((data, index) => {
            return (
              <li
                className="flex w-full justify-between bg-neutral-100 p-3 rounded-2xl items-center"
                key={index}
              >
                <div className="flex flex-col">
                  <span className="font-black text-xl text-neutral-500 min-w-48">
                    {data.name}
                  </span>
                  <span>
                    {data.type === "income" ? (
                      <span className="font-semibold text-base text-green-500 min-w-48 text-end">
                        + ${FormatNumber(data.amount)}
                      </span>
                    ) : (
                      <span className="font-semibold text-base text-red-500 min-w-48 text-end">
                        - ${FormatNumber(data.amount)}
                      </span>
                    )}
                  </span>
                </div>

                <motion.button
                  className="default-button w-fit h-fit flex items-center justify-center shadow-primary outline-none text-neutral-50 bg-linear-to-r from-primary to-secondary shadow-defaultButton font-semibold text-lg rounded-full py-2 px-4 cursor-pointer"
                  type="button"
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                  whileFocus={{ scale: 1.05 }}
                  onClick={() =>
                    handleCreateTransaction(
                      data.type,
                      data.amount,
                      data.name,
                      data.category._id
                    )
                  }
                >
                  Add {data.type === "income" ? "income" : "expense"}
                </motion.button>
              </li>
            );
          })}
        </ul>

        <div className="flex flex-col items-center justify-center">
          <span className="text-neutral-500 font-medium">
            Do you like shortcuts?
          </span>
          <Link
            className="text-primary font-semibold"
            to={path.app.actions.shortcuts}
          >
            Add more
          </Link>
        </div>
      </div>
    </BasicCard>
  );
}
