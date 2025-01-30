import FormatDate from "~/utils/formatDate";
import FormatNumber from "~/utils/formatNumber";

export default function TransactionItem({
  name,
  category,
  date,
  amount,
  type,
}: {
  name: string;
  category: string;
  date: Date;
  amount: number;
  type: string;
}) {
  return (
    <li className="flex justify-between items-center bg-neutral-200/50 rounded-2xl pl-2 pr-4 py-2">
      <div className="flex gap-2">
        <div className="bg-white rounded-lg p-2 w-auto h-auto">
          <img src="" alt="" width={"40"} height={"40"} />
        </div>

        <div className="flex flex-col">
          <span className="text-neutral-700 text-lg font-bold">{name}</span>
          <span className="text-neutral-600 font-medium">{category}</span>
        </div>
      </div>

      <span className="font-medium text-neutral-600">{FormatDate(date)}</span>

      {type === "income" ? (
        <span className="font-black text-xl text-green-500">
          + ${FormatNumber(amount)}
        </span>
      ) : (
        <span className="font-black text-xl text-red-500">
          - ${FormatNumber(amount)}
        </span>
      )}
    </li>
  );
}
