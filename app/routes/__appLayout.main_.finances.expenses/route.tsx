import axios from "axios";
import { useEffect, useState } from "react";
import Transaction from "~/interfaces/entities/transaction.interface";
import { EnvConfig } from "~/config/env.config";
import TransactionItem from "~/components/common/zaimu/transaction";
import { motion } from "motion/react";
import AddButton from "~/components/common/zaimu/addButton";

const env = EnvConfig();

export default function Expenses() {
  const [transactions, setTransactions] = useState<Transaction[]>();

  useEffect(() => {
    const getTransactions = async () => {
      await axios
        .get(`${env.zaimu_api_url}/transactions/expenses`, {
          withCredentials: true,
        })
        .then((res) => {
          setTransactions(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getTransactions();
  }, []);

  if (!transactions) return <>There&apos;s no transactions</>;
  return (
    <>
      <section className="flex flex-col gap-6 h-full">
        <motion.span
          className="font-bold text-neutral-700 text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          All Expenses
        </motion.span>

        <ul className="flex flex-col gap-3">
          {transactions.map((data, index) => {
            const createdAt = new Date(data.createdAt);

            return (
              <TransactionItem
                key={index}
                name={data.name}
                category={data.category.name}
                date={createdAt}
                amount={data.amount}
                type={data.type}
                delay={index}
              />
            );
          })}
        </ul>
      </section>

      <AddButton />
    </>
  );
}
