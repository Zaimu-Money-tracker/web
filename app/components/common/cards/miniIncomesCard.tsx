import { motion } from "motion/react";
import { Link } from "@remix-run/react";
import { path } from "~/data/paths/paths.data";
import { useEffect, useState } from "react";
import Transaction from "~/interfaces/entities/transaction.interface";
import {
  deleteTransaction,
  getExpenses,
} from "~/services/zaimu/entities/transactions";
import TransactionItem from "../zaimu/transaction";
import DeleteModal from "~/components/modal/deleteModal";
import CardVariant from "./cardVariant";

export default function MiniIncomesCard() {
  const [expenses, setExpenses] = useState<Transaction[]>();
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const [id, setId] = useState<string>("");

  const handleGetExpenses = async () => {
    const data = await getExpenses();

    return setExpenses(data);
  };

  const handleDeleteTransaction = async (id: string) => {
    await deleteTransaction(id);

    return setShowDelete(false);
  };

  useEffect(() => {
    handleGetExpenses();
  }, []);

  if (!expenses) return <></>;

  return (
    <CardVariant>
      <motion.header
        className="flex justify-between font-bold text-neutral-700 text-2xl items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <span>Last incomes</span>
        <Link
          className="text-primary font-semibold text-lg"
          to={path.app.finances.incomes}
        >
          View all
        </Link>
      </motion.header>

      <ul className="flex flex-col gap-4">
        {expenses.slice(0, 3).map((data, index) => {
          return (
            <TransactionItem
              key={index}
              transaction={data}
              delay={index}
              showDelete={(state) => setShowDelete(state)}
              searchId={(id) => setId(id)}
            />
          );
        })}
      </ul>

      <DeleteModal
        open={showDelete}
        target="Transaction"
        getAction={() => {
          handleDeleteTransaction(id);
          setShowDelete(false);
        }}
        close={() => setShowDelete(false)}
      />
    </CardVariant>
  );
}
