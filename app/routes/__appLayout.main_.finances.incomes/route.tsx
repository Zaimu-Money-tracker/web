import axios from "axios";
import { useEffect, useState } from "react";
import Transaction from "~/interfaces/entities/transaction.interface";
import { EnvConfig } from "~/config/env.config";
import TransactionItem from "~/components/common/zaimu/transaction";

const env = EnvConfig();

export default function Incomes() {
  const [transactions, setTransactions] = useState<Transaction[]>();

  useEffect(() => {
    const getTransactions = async () => {
      await axios
        .get(`${env.zaimu_api_url}/transactions/incomes`, {
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
    <section className="mt-4 flex flex-col gap-6">
      <span className="font-bold text-neutral-700 text-2xl">All Incomes</span>

      <ul className="flex flex-col gap-2">
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
            />
          );
        })}
      </ul>
    </section>
  );
}
