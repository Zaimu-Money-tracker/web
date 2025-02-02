import axios from "axios";
import { useEffect, useState } from "react";
import Transaction from "~/interfaces/entities/transaction.interface";
import { EnvConfig } from "~/config/env.config";
import TransactionItem from "~/components/common/zaimu/transaction";
import { motion } from "motion/react";
import AddButton from "~/components/common/zaimu/addButton";
import NothingHere from "~/components/common/zaimu/NothingHere";
import { MetaFunction } from "@remix-run/react";

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

const env = EnvConfig();

export default function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>();

  useEffect(() => {
    const getTransactions = async () => {
      await axios
        .get(`${env.zaimu_api_url}/transactions`, { withCredentials: true })
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
    <section className="flex flex-col gap-6 h-full mb-6">
      <motion.span
        className="font-bold text-neutral-700 text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        All Transactions
      </motion.span>

      {transactions.length === 0 ? (
        <NothingHere />
      ) : (
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
      )}

      <AddButton />
    </section>
  );
}
