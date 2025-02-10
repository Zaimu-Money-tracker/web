import { MetaFunction } from "@remix-run/react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import ExpensesCard from "~/components/common/cards/expensesCard";
import ValueCard from "~/components/common/cards/valueCard";
import RenderShortcuts from "~/components/common/zaimu/renderShortcuts";
import Transaction from "~/interfaces/entities/transaction.interface";
import {
  getExpenses,
  getIncomes,
} from "~/services/zaimu/entities/transactions";

export const meta: MetaFunction = () => {
  return [
    { title: "Zaimu - Home" },
    {
      name: "description",
      content:
        "Zaimu is the easiest way to track your money, take control of your finances and save to achieve your dreams.",
    },
    { property: "og:url", content: "https://zaimu-finance.pages.dev/" },
    { property: "og:type", content: "website" },
    { property: "og:tittle", content: "Zaimu - Manage your Money" },
    { property: "og:site_name", content: "Zaimu" },
    {
      property: "og:description",
      content:
        "Zaimu is the easiest way to track your money, take control of your finances and save to achieve your dreams.",
    },
    { name: "twitter:card", content: "summary_large_image" },
    { property: "twitter:url", content: "https://zaimu-finance.pages.dev/" },
    { name: "twitter:title", content: "Zaimu - Manage your Money" },
    {
      name: "twitter:description",
      content:
        "Zaimu is the easiest way to track your money, take control of your finances and save to achieve your dreams.",
    },
  ];
};

export default function Home() {
  const [transactionsIncomes, setTransactionsIncomes] =
    useState<Transaction[]>();
  const [transactionExpenses, setTransactionExpenses] =
    useState<Transaction[]>();

  const [incomes, setIncomes] = useState<number>(0);
  const [balance, setBalance] = useState<number>(0);

  const handleGetIncomes = async () => {
    const dataIncomes = await getIncomes();

    return setTransactionsIncomes(dataIncomes);
  };

  const handleGetExpenses = async () => {
    const dataExpenses = await getExpenses();

    return setTransactionExpenses(dataExpenses);
  };

  useEffect(() => {
    handleGetIncomes();
    handleGetExpenses();
  }, []);

  useEffect(() => {
    if (!transactionsIncomes || !transactionExpenses) return;
    setIncomes(transactionsIncomes.reduce((acc, item) => acc + item.amount, 0));
    setBalance(
      incomes - transactionExpenses.reduce((acc, item) => acc + item.amount, 0)
    );
  }, [transactionsIncomes, transactionExpenses, incomes]);

  return (
    <>
      <section className="flex w-full h-fit mb-10">
        <div className="flex w-full h-fit justify-between items-center gap-8">
          <ExpensesCard incomes={incomes} />
          <ValueCard title="Incomes" value={incomes} />
          <ValueCard title="Current balance" value={balance} />
        </div>
      </section>

      <section className="flex flex-col gap-4 w-full h-fit mb-10">
        <motion.span
          className="font-bold text-neutral-700 text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          Shortcuts
        </motion.span>

        <RenderShortcuts />
      </section>
    </>
  );
}
