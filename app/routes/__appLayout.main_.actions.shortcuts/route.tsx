import { motion } from "motion/react";
import { useEffect, useState } from "react";
import AddButton from "~/components/common/zaimu/addButton";
import NothingHere from "~/components/common/zaimu/NothingHere";
import AmountInput from "~/components/form/amountInput";
import CategoriesInput from "~/components/form/categoriesInput";
import Input from "~/components/form/input";
import SelectTypeInput from "~/components/form/SelectTypeInput";
import PostModal from "~/components/modal/postModal";
import { TransactionTypes } from "~/data/inputs/TransactionTypes";
import Shortcut from "~/interfaces/entities/shortcut.interface";
import TransactionPayload from "~/interfaces/payloads/entities/transactionPayload.interface";
import {
  createShortcut,
  // deleteShortcut,
  getShortcuts,
} from "~/services/zaimu/entities/shortcuts";
import { createTransactionWithPayload } from "~/services/zaimu/entities/transactions";
import FormatNumber from "~/utils/formatNumber";

export default function ActionsShortcuts() {
  const [shortcuts, setShortcuts] = useState<Shortcut[]>();
  const [show, setShow] = useState<boolean>(false);
  // const [showDelete, setShowDelete] = useState<boolean>(false);
  // const [id, setId] = useState<string>("");

  const handleGetShortcuts = async () => {
    const data = await getShortcuts();

    return setShortcuts(data);
  };

  const handleCreateShortcut = async (data: {
    [key: string]: FormDataEntryValue;
  }) => {
    await createShortcut(data);
    setShow(false);
    close();

    return handleGetShortcuts();
  };

  // const handleDeleteShortcut = async(id:string)=>{
  //   await deleteShortcut(id)
  //   handleGetShortcuts()

  //   return setShow(false)
  // }

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
    <section className="flex flex-col gap-6 h-full mb-6">
      <motion.span
        className="font-bold text-neutral-700 text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        All Shortcuts
      </motion.span>

      {shortcuts.length === 0 ? (
        <NothingHere />
      ) : (
        <ul className="h-full grid grid-cols-5 gap-4">
          {shortcuts.map((data, index) => {
            return (
              <li
                key={index}
                className="bg-white shadow-gray-1 rounded-2xl overflow-hidden h-fit flex flex-col gap-2"
              >
                <div
                  className="flex w-full h-8"
                  style={{ backgroundColor: data.category.color }}
                ></div>

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
                      <span className="text-neutral-700 font-medium text-sm">
                        {data.category ? data.category.name : "No category"}
                      </span>
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
              </li>
            );
          })}
        </ul>
      )}

      <AddButton action={() => setShow(true)} />

      <PostModal
        title="New Shortcut"
        description="Faster way to add transactions,"
        inputs={shortcutInputs}
        open={show}
        submitAction={handleCreateShortcut}
        close={() => setShow(false)}
      />

      {/* <DeleteModal
    open={showDelete}
    target="Transaction"
    getAction={() => {
      handleDeleteTransaction(id);
      setShowDelete(false);
    }}
    close={() => setShowDelete(false)}
  /> */}
    </section>
  );
}
