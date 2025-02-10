import FormatNumber from "~/utils/formatNumber";
import SmallCard from "./smallCard";

export default function ValueCard({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  return (
    <SmallCard>
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span className=" font-bold text-lg text-neutral-700">{title}</span>
          <span className=" font-medium text-neutral-500">This month</span>
        </div>

        <div className="flex items-center justify-center">
          <span className="text-neutral-500 font-bold text-3xl">
            ${FormatNumber(value)}
          </span>
        </div>
      </div>
    </SmallCard>
  );
}
