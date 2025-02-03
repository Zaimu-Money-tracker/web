import { useEffect, useState } from "react";
import { motion } from "motion/react";
import NothingHere from "~/components/common/zaimu/NothingHere";
import PostModal from "~/components/modal/postModal";
import DeleteModal from "~/components/modal/deleteModal";
import { Link, MetaFunction } from "@remix-run/react";
import Input from "~/components/form/input";
import TransactionItem from "~/components/common/zaimu/transaction";
import {
  createTransaction,
  deleteTransaction,
  getExpenses,
  getIncomes,
} from "~/services/zaimu/entities/transactions";
import SelectTypeInput from "~/components/form/SelectTypeInput";
import AmountInput from "~/components/form/amountInput";
import { TransactionTypes } from "~/data/inputs/TransactionTypes";
import CategoriesInput from "~/components/form/categoriesInput";
import Transaction from "~/interfaces/entities/transaction.interface";
import BasicCard from "~/components/common/cards/basicCard";
import ColorCard from "~/components/common/cards/colorCard";
import { path } from "~/data/paths/paths.data";
import FormatNumber from "~/utils/formatNumber";
import SmallCard from "~/components/common/cards/smallCard";
import CircularProgress from "~/components/common/svg/circularProgress";

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

export default function OverviewIncomes() {
  const [transactions, setTransactions] = useState<Transaction[]>();
  const [show, setShow] = useState<boolean>(false);
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const [id, setId] = useState<string>("");

  const [incomes, setIncomes] = useState<number>(0);
  const [expenses, setExpenses] = useState<number>(0);
  const [bigestExpense, setBigestExpense] = useState<Transaction>();
  const [lowestExpense, setLowestExpense] = useState<Transaction>();

  const handleGetExpenses = async () => {
    const data = await getExpenses();

    return setTransactions(data);
  };

  const handleGetIncomes = async () => {
    const data: Transaction[] = await getIncomes();

    return setExpenses(data.reduce((acc, item) => acc + item.amount, 0));
  };

  const handleCreateTransaction = async (data: {
    [key: string]: FormDataEntryValue;
  }) => {
    await createTransaction(data);
    setShow(false);
    close();

    return handleGetExpenses();
  };

  const handleDeleteTransaction = async (id: string) => {
    await deleteTransaction(id);

    handleGetExpenses();
    return setShowDelete(false);
  };

  useEffect(() => {
    handleGetExpenses();
    handleGetIncomes();
  }, []);

  useEffect(() => {
    if (!transactions) return;
    setIncomes(transactions.reduce((acc, item) => acc + item.amount, 0));

    setBigestExpense(
      transactions.reduce(
        (max, item) => (item.amount > max.amount ? item : max),
        transactions[0]
      )
    );
    setLowestExpense(
      transactions.reduce(
        (min, item) => (item.amount < min.amount ? item : min),
        transactions[0]
      )
    );
  }, [transactions]);

  const categoriesInputs = [
    <div key={"info"} className="flex items-center justify-center gap-4">
      <Input
        key={"name"}
        placeholder="Transaction name"
        type="text"
        name="name"
        required
      />
      <SelectTypeInput
        key={"type"}
        name="type"
        options={TransactionTypes}
        required
      />
    </div>,

    <AmountInput
      key={"amount"}
      placeholder="Transaction amount"
      name="amount"
      required
    />,
    <CategoriesInput key={"category"} name="category" required />,
  ];

  if (!transactions) return <>There&apos;s no transactions</>;

  return (
    <section className="flex gap-4 h-full mb-10">
      <div className="flex flex-col gap-6 h-full mb-6 w-6/8">
        <BasicCard>
          <motion.span
            className="font-bold text-neutral-700 text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            Recent expenses
          </motion.span>

          {transactions.length === 0 ? (
            <NothingHere />
          ) : (
            <ul className="flex flex-col gap-3 h-full">
              {transactions.map((data, index) => {
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
          )}

          <div className="flex flex-col items-center">
            <span className="text-neutral-500">Something is missing?</span>
            <Link
              className="text-primary font-bold"
              to={path.app.finances.expenses}
            >
              Se all
            </Link>
          </div>
        </BasicCard>
      </div>

      <div className="flex flex-col gap-6 h-full mb-6 w-2/8">
        <ColorCard>
          <motion.header
            className="flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="font-bold text-xl text-black/55">
              Total expenses
            </span>
            <span className="font-semibold text-black/40">This month</span>
          </motion.header>

          <span className="text-black/45 font-bold text-4xl">
            ${FormatNumber(incomes)}
          </span>
          <span className="text-black/50 font-medium">
            <span className="text-black/40 font-bold">
              {FormatNumber((incomes / expenses) * 100)}%{" "}
            </span>
            of your current balance
          </span>
        </ColorCard>

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
              color={bigestExpense?.category.color ?? "#ff8d35"}
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
                ${bigestExpense ? FormatNumber(bigestExpense.amount) : "---"}
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
            <span>Lowest expense</span>
          </motion.header>

          <div className="flex gap-4 items-center">
            <CircularProgress
              size={110}
              color={lowestExpense?.category.color ?? "#ff8d35"}
              percentage={
                lowestExpense
                  ? parseFloat(
                      FormatNumber((lowestExpense.amount / incomes) * 100)
                    )
                  : 0
              }
            />

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-0">
                <span className="font-bold text-neutral-600 text-3xl">
                  {lowestExpense ? lowestExpense.name : "???"}
                </span>

                <span className="font-medium text-neutral-500 text-lg">
                  {lowestExpense
                    ? FormatNumber((lowestExpense.amount / incomes) * 100)
                    : "--"}
                  %
                </span>
              </div>

              <span className="font-bold text-primary text-4xl">
                ${lowestExpense ? FormatNumber(lowestExpense.amount) : "---"}
              </span>
            </div>
          </div>
        </SmallCard>
      </div>

      <PostModal
        title="New Transaction"
        description="A new expense? A new income? Keep everything tracked!"
        inputs={categoriesInputs}
        open={show}
        submitAction={handleCreateTransaction}
        close={() => setShow(false)}
      />

      <DeleteModal
        open={showDelete}
        target="Transaction"
        getAction={() => {
          handleDeleteTransaction(id);
          setShowDelete(false);
        }}
        close={() => setShowDelete(false)}
      />
    </section>
  );
}
