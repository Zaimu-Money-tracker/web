import { motion } from "motion/react";
import { useEffect, useState } from "react";
import TrashButton from "~/components/common/buttons/trashButton";
import NothingHere from "~/components/common/zaimu/NothingHere";
import AmountInput from "~/components/form/amountInput";
import CategoriesInput from "~/components/form/categoriesInput";
import Input from "~/components/form/input";
import SelectTypeInput from "~/components/form/SelectTypeInput";
import DeleteModal from "~/components/modal/deleteModal";
import PostModal from "~/components/modal/postModal";
import { TransactionTypes } from "~/data/inputs/TransactionTypes";
import Shortcut from "~/interfaces/entities/shortcut.interface";
import TransactionPayload from "~/interfaces/payloads/entities/transactionPayload.interface";
import {
  deleteShortcut,
  getShortcuts,
  updateShortcut,
} from "~/services/zaimu/entities/shortcuts";
import { createTransactionWithPayload } from "~/services/zaimu/entities/transactions";
import FormatNumber from "~/utils/formatNumber";
import EditButton from "../buttons/editButton";

export default function RenderShortcuts() {
  const [shortcuts, setShortcuts] = useState<Shortcut[]>();
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const [showUpdate, setShowUpdate] = useState<boolean>(false);
  const [id, setId] = useState<string>("");

  const handleGetShortcuts = async () => {
    const data = await getShortcuts();

    return setShortcuts(data);
  };

  const handleDeleteShortcut = async (id: string) => {
    await deleteShortcut(id);
    return handleGetShortcuts();
  };

  const handleUpdateShortcut = async (data: {
    [key: string]: FormDataEntryValue;
  }) => {
    await updateShortcut(id, data);
    handleGetShortcuts();

    return setShowUpdate(false);
  };

  const handleCreateTransaction = async (
    type: string,
    amount: number,
    name: string,
    category?: string
  ) => {
    const amountFormated = parseFloat(
      amount.toString().replaceAll(",", "").replace("$", "")
    );
    const data: TransactionPayload = {
      type: type,
      amount: amountFormated,
      name: name,
      recurring: false,
    };

    if (category) data.category = category;

    return await createTransactionWithPayload(data);
  };

  useEffect(() => {
    handleGetShortcuts();
  }, []);

  const shortcutInputs = [
    <div key={"info"} className="flex items-center justify-center gap-4">
      <Input
        key={"name"}
        placeholder="Shortcut name"
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
      placeholder="Shortcut amount"
      name="amount"
      required
    />,
    <CategoriesInput key={"category"} name="category" required />,
  ];

  if (!shortcuts) return <></>;

  return (
    <>
      {shortcuts.length === 0 ? (
        <NothingHere />
      ) : (
        <ul className="h-full grid grid-cols-5 gap-4">
          {shortcuts.slice(0, 5).map((data, index) => {
            return (
              <motion.li
                key={index}
                className="bg-white shadow-gray-1 rounded-2xl overflow-hidden h-fit flex flex-col gap-2 relative group"
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
                <div className="flex w-full h-4 bg-linear-to-r from-primary/70 to-secondary/70"></div>

                <div className="flex flex-col gap-8 p-4 pt-1">
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <span className="font-black text-3xl text-neutral-600">
                        {data.name}
                      </span>

                      {data.type === "income" ? (
                        <span className="font-black text-2xl text-green-500 min-w-48 text-end">
                          + ${FormatNumber(data.amount)}
                        </span>
                      ) : (
                        <span className="font-black text-2xl text-red-500 min-w-48 text-end">
                          - ${FormatNumber(data.amount)}
                        </span>
                      )}
                    </div>

                    <div
                      className={`flex gap-1 bg-neutral-200/80 w-fit py-0.25 px-2 rounded-full items-center justify-center`}
                    >
                      {data.category ? (
                        <>
                          <div
                            className="w-3.5 h-3.5 rounded-full"
                            style={{ backgroundColor: data.category.color }}
                          />
                          <span className="text-neutral-700 font-medium text-sm">
                            {data.category.name}
                          </span>
                        </>
                      ) : (
                        <span className="text-neutral-700 font-medium text-sm px-2">
                          No category
                        </span>
                      )}
                    </div>
                  </div>

                  <motion.button
                    className="default-button w-fit flex items-center justify-center shadow-primary outline-none text-neutral-50 bg-linear-to-r from-primary to-secondary shadow-defaultButton font-black text-xl rounded-full py-2 px-6 cursor-pointer"
                    type="button"
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                    whileFocus={{ scale: 1.05 }}
                    onClick={() =>
                      handleCreateTransaction(
                        data.type,
                        data.amount,
                        data.name,
                        data.category._id
                      )
                    }
                  >
                    Add {data.type === "income" ? "income" : "expense"}
                  </motion.button>
                </div>

                <div className="absolute flex opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto w-full h-2/3 bg-linear-to-t from-0% to-100% from-black/0 to-black/30 backdrop-blur-[1px] inset-0 items-start justify-center py-4 transition-all ease-in-out duration-300 -z-0 gap-2">
                  <EditButton
                    w="w-5"
                    h="h-5"
                    action={() => {
                      setShowUpdate(true);
                      setId(data._id);
                    }}
                  />
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

      <DeleteModal
        open={showDelete}
        target="Transaction"
        getAction={() => {
          handleDeleteShortcut(id);
          setShowDelete(false);
        }}
        close={() => setShowDelete(false)}
      />

      <PostModal
        title="Update Shortcut"
        description="Faster way to add transactions."
        inputs={shortcutInputs}
        open={showUpdate}
        submitAction={handleUpdateShortcut}
        close={() => setShowUpdate(false)}
        update
      />
    </>
  );
}
