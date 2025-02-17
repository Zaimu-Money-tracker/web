import { Form } from "@remix-run/react";
import EntitiesForm from "../form/entitiesForm";
import { AnimatePresence, motion } from "motion/react";
import { ReactNode, useEffect, useState } from "react";

export default function PostModal({
  open,
  inputs,
  title,
  description,
  update,
  close,
  submitAction,
}: {
  open: boolean;
  inputs: ReactNode[];
  title: string;
  description: string;
  update?: boolean;
  close: () => void;
  submitAction: (data: { [key: string]: FormDataEntryValue }) => void;
}) {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    setShow(open);
  }, [open]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    submitAction(data);
  };

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
              title={title}
              description={description}
              inputs={inputs}
              update={update}
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
