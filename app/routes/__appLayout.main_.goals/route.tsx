import { motion } from "motion/react";
import { useEffect, useState } from "react";
import AddButton from "~/components/common/zaimu/addButton";
import NothingHere from "~/components/common/zaimu/NothingHere";
import Goal from "~/interfaces/entities/goal.interface";
import FormatNumber from "~/utils/formatNumber";
import { MetaFunction } from "@remix-run/react";
import {
  createGoal,
  deleteGoal,
  getGoals,
} from "~/services/zaimu/entities/goals";
import PostModal from "~/components/modal/postModal";
import Input from "~/components/form/input";
import AmountInput from "~/components/form/amountInput";
import TrashButton from "~/components/common/buttons/trashButton";
import DeleteModal from "~/components/modal/deleteModal";

export const meta: MetaFunction = () => {
  return [
    { title: "Zaimu - Goals" },
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

export default function Goals() {
  const [goals, setGoals] = useState<Goal[]>();
  const [show, setShow] = useState<boolean>(false);
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const [id, setId] = useState<string>("");

  const handleGetGoals = async () => {
    const data = await getGoals();
    return setGoals(data);
  };

  const handleCreateGoal = async (data: {
    [key: string]: FormDataEntryValue;
  }) => {
    await createGoal(data);
    setShow(false);
    close();

    return handleGetGoals();
  };

  const handleDeleteGoal = async (id: string) => {
    await deleteGoal(id);
    handleGetGoals();

    return setShowDelete(false);
  };

  useEffect(() => {
    handleGetGoals();
  }, []);

  const goalsInputs = [
    <Input
      key={"name"}
      placeholder="Goal name"
      type="text"
      name="name"
      required
    />,

    <AmountInput
      key={"targetAmount"}
      placeholder="Goal target amount"
      name="targetAmount"
      required
    />,
  ];

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
        <ul className="grid grid-cols-2 gap-4 h-full">
          {goals.map((data, index) => {
            const percent = FormatNumber(
              (data.progress / data.targetAmount) * 100
            );

            return (
              <motion.li
                className="flex flex-col gap-2 bg-white shadow-gray-1 rounded-3xl p-4 h-fit relative group overflow-hidden"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: index * 0.03,
                    duration: 0.6,
                    type: "spring",
                    bounce: 0.5,
                  },
                }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
              >
                <div className="flex w-full justify-between">
                  <span className="font-bold text-sky-500 text-4xl">
                    {data.name}
                  </span>
                </div>

                <div className="flex gap-4 w-full items-center">
                  <div className="w-fit h-fit bg-neutral-100 rounded-xl p-2">
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

                    <div className="bg-neutral-100 w-full rounded-full h-3 relative">
                      <div
                        className="bg-sky-500 absolute inset-0 w-54 rounded-full"
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="absolute flex opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto w-full h-full bg-linear-to-r from-black/5 to-black/20 backdrop-blur-[1px] inset-0 items-center justify-end px-4 transition-all ease-in-out duration-300">
                  <TrashButton
                    w="w-5"
                    h="h-5"
                    action={() => {
                      setShowDelete(true);
                      setId(data._id);
                    }}
                  />
                </div>
              </motion.li>
            );
          })}
        </ul>
      )}

      <AddButton action={() => setShow(true)} />

      <PostModal
        title="New Transaction"
        description="A new expense? A new income? Keep everything tracked!"
        inputs={goalsInputs}
        open={show}
        submitAction={handleCreateGoal}
        close={() => setShow(false)}
      />

      <DeleteModal
        open={showDelete}
        target="Transaction"
        getAction={() => {
          handleDeleteGoal(id);
          setShowDelete(false);
        }}
        close={() => setShowDelete(false)}
      />
    </section>
  );
}
