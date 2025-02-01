import { Form } from "@remix-run/react";
import axios from "axios";
import { EnvConfig } from "~/config/env.config";
import Input from "../form/input";
import EntitiesForm from "../form/entitiesForm";
import SelectInput from "../form/selectInput";
import { Colors } from "~/data/colors/colors.data";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const env = EnvConfig();

export default function PostModal({
  open,
  getAction,
  close,
}: {
  open: boolean;
  getAction: () => void;
  close: () => void;
}) {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    setShow(open);
  }, [open]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    await axios
      .post(
        `${env.zaimu_api_url}/categories`,
        {
          name: data.name,
          color: data.color,
        },
        { withCredentials: true }
      )
      .then(() => {
        setShow(false);
        close();
        getAction();
      })
      .catch((err) => {
        return console.log(err);
      });
  };

  const categoriesInputs = [
    <Input
      key={"name"}
      placeholder="Category name"
      type="text"
      name="name"
      required
    />,
    <SelectInput
      key={"color"}
      placeholder="Category color"
      name="color"
      options={Colors}
      required
    />,
  ];

  return (
    <AnimatePresence>
      {show && (
        <motion.dialog
          id="entity-dialog"
          className="flex fixed top-0 w-full h-screen bg-transparent items-center justify-center z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <Form method="post" onSubmit={handleSubmit}>
            <EntitiesForm
              title="New category"
              description="Keep your transactions in order with categories."
              inputs={categoriesInputs}
              cancelAction={() => {
                setShow(false);
                close();
              }}
            />
          </Form>
        </motion.dialog>
      )}

      {show && (
        <motion.div
          className="flex fixed top-0 left-0 w-full h-screen  bg-black/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        />
      )}
    </AnimatePresence>
  );
}
