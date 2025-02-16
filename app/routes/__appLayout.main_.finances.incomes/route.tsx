import { useEffect, useState } from "react";
import Transaction from "~/interfaces/entities/transaction.interface";
import TransactionItem from "~/components/common/zaimu/transaction";
import { motion } from "motion/react";
import AddButton from "~/components/common/zaimu/addButton";
import NothingHere from "~/components/common/zaimu/NothingHere";
import { MetaFunction } from "@remix-run/react";
import PostModal from "~/components/modal/postModal";
import Input from "~/components/form/input";
import SelectTypeInput from "~/components/form/SelectTypeInput";
import { TransactionTypes } from "~/data/inputs/TransactionTypes";
import CategoriesInput from "~/components/form/categoriesInput";
import DeleteModal from "~/components/modal/deleteModal";
import AmountInput from "~/components/form/amountInput";
import {
  createTransaction,
  deleteTransaction,
  getIncomes,
  updateTransaction,
} from "~/services/zaimu/entities/transactions";

export const meta: MetaFunction = () => {
  return [
    { title: "Zaimu - Finances" },
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

export default function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>();
  const [show, setShow] = useState<boolean>(false);
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const [showUpdate, setShowUpdate] = useState<boolean>(false);
  const [id, setId] = useState<string>("");

  const handleGetIncomes = async () => {
    const data = await getIncomes();

    return setTransactions(data);
  };

  const handleCreateTransaction = async (data: {
    [key: string]: FormDataEntryValue;
  }) => {
    await createTransaction(data);
    setShow(false);
    close();

    return handleGetIncomes();
  };

  const handleDeleteTransaction = async (id: string) => {
    await deleteTransaction(id);

    handleGetIncomes();
    return setShowDelete(false);
  };

  const handleUpdateTransaction = async (data: {
    [key: string]: FormDataEntryValue;
  }) => {
    await updateTransaction(id, data);
    handleGetIncomes();

    return setShowUpdate(false);
  };

  useEffect(() => {
    handleGetIncomes();
  }, []);

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
        defaultValue="Income"
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
    <section className="flex flex-col gap-4 h-full mb-6">
      <motion.span
        className="font-bold text-neutral-700 text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        All Incomes
      </motion.span>

      {transactions.length === 0 ? (
        <NothingHere />
      ) : (
        <ul className="flex flex-col gap-3 h-full overflow-y-scroll overflow-x-hidden mini-scroll-bar max-h-160 p-2 border-2 border-neutral-100 rounded-2xl">
          {transactions.map((data, index) => {
            return (
              <TransactionItem
                key={index}
                transaction={data}
                delay={index}
                showDelete={(state) => setShowDelete(state)}
                showUpdate={(state) => setShowUpdate(state)}
                searchId={(id) => setId(id)}
              />
            );
          })}
        </ul>
      )}

      <AddButton action={() => setShow(true)} />

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

      <PostModal
        title="Update Transaction"
        description="A new expense? A new income? Keep everything tracked!"
        inputs={categoriesInputs}
        open={showUpdate}
        submitAction={handleUpdateTransaction}
        close={() => setShowUpdate(false)}
      />
    </section>
  );
}
