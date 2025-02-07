import { useEffect, useState } from "react";
import Transaction from "~/interfaces/entities/transaction.interface";
import { getExpenses } from "~/services/zaimu/entities/transactions";
import FormatNumber from "~/utils/formatNumber";
import CircularProgress from "../svg/circularProgress";
import SmallCard from "../cards/smallCard";

export default function ExpensesCard({ incomes }: { incomes: number }) {
  const [transactions, setTransactions] = useState<Transaction[]>();
  const [expenses, setExpenses] = useState<number>(0);

  const progress = (expenses / incomes) * 100;
  const color =
    progress <= 50 ? "#3DDD5F" : progress <= 75 ? "#FFDC4E" : "#FF5C5C";

  const handleGetExpenses = async () => {
    const data = await getExpenses();

    return setTransactions(data);
  };

  useEffect(() => {
    handleGetExpenses();
  }, []);

  useEffect(() => {
    if (!transactions) return;

    setExpenses(transactions.reduce((acc, item) => acc + item.amount, 0));
  }, [transactions]);

  return (
    <SmallCard>
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span className=" font-bold text-lg text-neutral-700">Expenses</span>
          <span className=" font-medium text-neutral-500">This month</span>
        </div>

        <div className="flex items-center gap-4 justify-center">
          <div className="flex flex-col">
            <span className="text-end font-bold text-lg text-neutral-700">
              {FormatNumber(progress)} %
            </span>
            <span className="text-end font-medium text-neutral-500">
              - ${FormatNumber(expenses)}
            </span>
          </div>

          <div>
            <CircularProgress size={45} percentage={progress} color={color} />
          </div>
        </div>
      </div>
    </SmallCard>
  );
}
