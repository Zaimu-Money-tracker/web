import { MetaFunction } from "@remix-run/react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import LineChart from "~/components/charts/lineChart";
import BasicCard from "~/components/common/cards/basicCard";
import ColorCard from "~/components/common/cards/colorCard";
import ExpensesCard from "~/components/common/cards/expensesCard";
import ShortcutsCard from "~/components/common/cards/shortcutsCard";
import Transaction from "~/interfaces/entities/transaction.interface";
import { getIncomes } from "~/services/zaimu/entities/transactions";
import FormatNumber from "~/utils/formatNumber";

export const meta: MetaFunction = () => {
  return [
    { title: "Zaimu - Overview" },
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

export default function OverviewGeneral() {
  const [transactions, setTransactions] = useState<Transaction[]>();

  const [incomes, setIncomes] = useState<number>(0);

  const handleGetIncomes = async () => {
    const dataIncomes = await getIncomes();

    return setTransactions(dataIncomes);
  };

  useEffect(() => {
    handleGetIncomes();
  }, []);

  useEffect(() => {
    if (!transactions) return;
    setIncomes(transactions.reduce((acc, item) => acc + item.amount, 0));
  }, [transactions]);

  return (
    <section className="flex gap-4 h-full mb-10">
      <div className="flex flex-col w-2/8 h-full gap-4">
        <ColorCard>
          <motion.header
            className="flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="font-bold text-xl text-black/55">
              Total incomes
            </span>
            <span className="font-semibold text-black/40">This month</span>
          </motion.header>

          <span className="text-black/45 font-bold text-4xl">
            ${FormatNumber(incomes)}
          </span>
        </ColorCard>

        <ExpensesCard incomes={incomes} />

        <ShortcutsCard />
      </div>

      <div className="flex flex-col w-6/8 h-full gap-4">
        <BasicCard>
          <motion.header
            className="flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="font-bold text-2xl text-neutral-700">
              Monthly expenses
            </span>
          </motion.header>

          <LineChart />
        </BasicCard>
      </div>
    </section>
  );
}
