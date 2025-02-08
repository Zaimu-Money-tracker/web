import { Form } from "@remix-run/react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import RedButton from "../common/buttons/redButton";

export default function DeleteModal({
  open,
  target,
  getAction,
  close,
}: {
  open: boolean;
  getAction: () => void;
  close: () => void;
  target: string;
}) {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    setShow(open);
  }, [open]);

  return (
    <AnimatePresence>
      {show && (
        <motion.dialog
          id="entity-dialog"
          className="flex fixed top-0 w-full h-screen bg-transparent items-center justify-center z-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <Form
            method="post"
            onSubmit={(e) => {
              e.preventDefault();
              getAction();
            }}
          >
            <article className="grid gap-6 p-8 items-center bg-white border-2 border-neutral-200 rounded-3xl shadow-gray-1 w-full max-w-[34rem]">
              <div className="grid gap-2 items-center w-full mb-6">
                <legend className="w-full">
                  <h1 className="text-center font-black text-neutral-700 text-4xl mx-10">
                    Danger Zone
                  </h1>
                </legend>
                <p className="text-center font-medium text-neutral-500 w-full">
                  Sure you wanna delete this {target}? There&apos;s no going
                  back!
                </p>
              </div>

              <div className="flex gap-6">
                <RedButton text="Delete" style="primary" />
                <RedButton
                  text="Cancel"
                  style="secondary"
                  type="button"
                  action={() => {
                    setShow(false);
                    close();
                  }}
                />
              </div>
            </article>
            <div className="flex w-full gap-4"></div>
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
