import axios from "axios";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import AddButton from "~/components/common/zaimu/addButton";
import NothingHere from "~/components/common/zaimu/NothingHere";
import { EnvConfig } from "~/config/env.config";
import Goal from "~/interfaces/entities/goal.interface";
import FormatNumber from "~/utils/formatNumber";
import { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [{ title: "Zaimu - Goals" }];
};

const env = EnvConfig();

export default function Goals() {
  const [goals, setGoals] = useState<Goal[]>();

  useEffect(() => {
    axios
      .get(`${env.zaimu_api_url}/goals`, { withCredentials: true })
      .then((res) => {
        setGoals(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!goals) return <>No goals</>;

  return (
    <section className="flex flex-col gap-6 h-full mb-6">
      <motion.span
        className="font-bold text-neutral-700 text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        All Goals
      </motion.span>

      {goals.length === 0 ? (
        <NothingHere />
      ) : (
        <ul className="grid grid-cols-2 gap-4">
          {goals.map((data, index) => {
            const percent = FormatNumber(
              (data.progress / data.targetAmount) * 100
            );

            return (
              <li
                className="flex flex-col gap-2 bg-neutral-200/40 rounded-3xl p-4"
                key={index}
              >
                <div>
                  <span className="font-bold text-sky-500 text-4xl">
                    {data.name}
                  </span>
                </div>

                <div className="flex gap-4 w-full items-center">
                  <div className="w-fit h-fit bg-neutral-200 rounded-xl p-2">
                    <img src="" alt="" width={50} height={50} />
                  </div>

                  <div className="flex flex-col w-full gap-2">
                    <div className="flex justify-between w-full">
                      <span className="flex w-fit font-semibold text-xl text-neutral-600">
                        %{percent}
                      </span>

                      <span className="flex w-fit font-semibold text-xl text-neutral-600">
                        ${FormatNumber(data.progress)}
                        <span className="text-neutral-400">
                          /${FormatNumber(data.targetAmount)}
                        </span>
                      </span>
                    </div>

                    <div className="bg-neutral-200 w-full rounded-full h-3 relative">
                      <div
                        className="bg-sky-500 absolute inset-0 w-54 rounded-full"
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      <AddButton />
    </section>
  );
}
