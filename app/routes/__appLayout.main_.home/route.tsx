import { MetaFunction } from "@remix-run/react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import LineChart from "~/components/charts/lineChart";
import BasicCard from "~/components/common/cards/basicCard";
import ExpensesCard from "~/components/common/cards/expensesCard";
import SmallCard from "~/components/common/cards/smallCard";
import ValueCard from "~/components/common/cards/valueCard";
import CircularProgress from "~/components/common/svg/circularProgress";
import RenderShortcuts from "~/components/common/zaimu/renderShortcuts";
import Transaction from "~/interfaces/entities/transaction.interface";
import {
  getExpenses,
  getIncomes,
} from "~/services/zaimu/entities/transactions";
import FormatNumber from "~/utils/formatNumber";

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
  const [bigestIncome, setBigestIncome] = useState<Transaction>();
  const [bigestExpense, setBigestExpense] = useState<Transaction>();

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

    setBigestIncome(
      transactionsIncomes.reduce(
        (max, item) => (item.amount > max.amount ? item : max),
        transactionsIncomes[0]
      )
    );
    setBigestExpense(
      transactionExpenses.reduce(
        (max, item) => (item.amount > max.amount ? item : max),
        transactionExpenses[0]
      )
    );
  }, [transactionsIncomes, transactionExpenses, incomes]);

  return (
    <>
      <section className="flex w-full h-fit">
        <div className="flex w-full h-fit justify-between items-center gap-8">
          <ExpensesCard incomes={incomes} />
          <ValueCard title="Incomes" value={incomes} />
          <ValueCard title="Current balance" value={balance} />
        </div>
      </section>

      <section className="flex w-full h-fit flex-col gap-4">
        <motion.span
          className="font-bold text-neutral-700 text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          Important
        </motion.span>

        <div className="flex gap-4 w-full">
          <div className="flex flex-col w-3/5 h-full gap-4">
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

          <div className="flex flex-col w-2/5 h-full gap-4">
            <SmallCard>
              <motion.header
                className="flex flex-col font-bold text-neutral-700 text-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <span>Bigest income</span>
              </motion.header>

              <div className="flex gap-4 items-center">
                <CircularProgress
                  size={110}
                  percentage={
                    bigestIncome
                      ? parseFloat(
                          FormatNumber((bigestIncome.amount / incomes) * 100)
                        )
                      : 0
                  }
                />

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-0">
                    <span className="font-bold text-neutral-600 text-3xl">
                      {bigestIncome ? bigestIncome.name : "???"}
                    </span>

                    <span className="font-medium text-neutral-500 text-lg">
                      {bigestIncome
                        ? FormatNumber((bigestIncome.amount / incomes) * 100)
                        : "--"}
                      %
                    </span>
                  </div>

                  <span className="font-bold text-primary text-4xl">
                    ${bigestIncome ? FormatNumber(bigestIncome.amount) : "---"}
                  </span>
                </div>
              </div>
            </SmallCard>

            <SmallCard>
              <motion.header
                className="flex flex-col font-bold text-neutral-700 text-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <span>Bigest expense</span>
              </motion.header>

              <div className="flex gap-4 items-center">
                <CircularProgress
                  size={110}
                  percentage={
                    bigestExpense
                      ? parseFloat(
                          FormatNumber((bigestExpense.amount / incomes) * 100)
                        )
                      : 0
                  }
                />

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-0">
                    <span className="font-bold text-neutral-600 text-3xl">
                      {bigestExpense ? bigestExpense.name : "???"}
                    </span>

                    <span className="font-medium text-neutral-500 text-lg">
                      {bigestExpense
                        ? FormatNumber((bigestExpense.amount / incomes) * 100)
                        : "--"}
                      %
                    </span>
                  </div>

                  <span className="font-bold text-primary text-4xl">
                    $
                    {bigestExpense ? FormatNumber(bigestExpense.amount) : "---"}
                  </span>
                </div>
              </div>
            </SmallCard>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4 w-full h-fit pb-10">
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

      {/* <section className="flex flex-col gap-4 w-full h-fit pb-10">
        <motion.span
          className="font-bold text-neutral-700 text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          Achievements
        </motion.span>
      </section> */}
    </>
  );
}
