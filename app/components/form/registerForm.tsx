import { Form } from "@remix-run/react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import FormCard from "~/components/form/formCard";
import { registerFirst, registerSecond, registerThird } from "~/data/form/auth";

export default function RegisterForm() {
  const [formRender, setFormRender] = useState<number>(0);

  const formVariants = {
    initial: { opacity: 0, scale: 0.8, x: 200 },
    animate: { opacity: 1, scale: 1, x: 0 },
    exit: { opacity: 0, scale: 0.8, x: -200 },
  };
  return (
    <>
      <div className="flex gap-1.5 w-1/2 items-center">
        <div
          className={`flex min-w-2.5 h-2.5 rounded-full transition-all border-primary border-2 ease-in-out duration-200 ${
            formRender === 0 ? "bg-transparent" : "bg-primary"
          }`}
        />
        <div
          className={`bg-neutral-200 h-0.75 rounded-full w-full bar-1 relative after:from-primary after:to-middle ${
            formRender >= 1 ? "after:w-full" : "after:w-0"
          }`}
        />
        <div
          className={`flex min-w-2.5 h-2.5 rounded-full  border-2 transition-all ease-in-out duration-200 ${
            formRender === 1
              ? "border-middle bg-transparent"
              : formRender > 1
              ? "border-middle bg-middle"
              : "border-neutral-200 bg-neutral-200"
          }`}
        />
        <div
          className={`bg-neutral-200 h-0.75 rounded-full w-full bar-2 relative after:from-middle after:to-secondary ${
            formRender >= 2 ? "after:w-full" : "after:w-0"
          }`}
        />
        <div
          className={`flex min-w-2.5 h-2.5 rounded-full  border-2 transition-all ease-in-out duration-200 ${
            formRender === 2
              ? "border-secondary bg-transparent"
              : "border-neutral-200 bg-neutral-200"
          }`}
        />
      </div>

      <Form className="flex flex-col gap-12" action="" method="post">
        <AnimatePresence mode="wait">
          {formRender === 0 && (
            <motion.div
              key="step-0"
              variants={formVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ type: "spring", visualDuration: 0.3, bounce: 0.4 }}
            >
              <FormCard
                title="Let's get started!"
                description="It's your first time here? Let's start creating a new account!"
                footer
                buttonText="Next step"
                buttonType="button"
                buttonAction={() => setFormRender(1)}
                inputs={registerFirst}
                checkBox={{
                  render: true,
                  text: "(Optional) Send me emails with Zaimu's updates, news and special offers. You can disable this anytime.",
                }}
              />
            </motion.div>
          )}
          {formRender === 1 && (
            <motion.div
              key="step-1"
              variants={formVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ type: "spring", visualDuration: 0.3, bounce: 0.4 }}
            >
              <FormCard
                title="Customize your profile!"
                description="Time to customize your profile! How do you want it to look?"
                footer
                buttonText="Next step"
                buttonType="button"
                buttonAction={() => setFormRender(2)}
                inputs={registerSecond}
                checkBox={{ render: false, text: "" }}
              />
            </motion.div>
          )}
          {formRender === 2 && (
            <motion.div
              key="step-2"
              variants={formVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ type: "spring", visualDuration: 0.3, bounce: 0.4 }}
            >
              <FormCard
                title="App settings!"
                description="We're almost there! Customize Zaimu however you like."
                footer
                buttonText="Register"
                inputs={registerThird}
                checkBox={{
                  render: true,
                  text: "(Optional) Send WhatsApp reminders.",
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </Form>
    </>
  );
}
