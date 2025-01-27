import { Form } from "@remix-run/react";
import { AnimatePresence, motion } from "motion/react";
import FormCard from "./formCard";
import { login } from "~/data/form/auth";

export default function LoginForm() {
  const formVariants = {
    initial: { opacity: 0, scale: 0.8, x: 200 },
    animate: { opacity: 1, scale: 1, x: 0 },
    exit: { opacity: 0, scale: 0.8, x: -200 },
  };

  return (
    <>
      <div className="flex gap-1.5 w-1/2 items-center">
        <div className="flex min-w-2.5 h-2.5 rounded-full bg-primary" />
        <div className="bg-linear-to-r h-0.75 rounded-full w-full from-primary to-secondary" />
        <div className="flex min-w-2.5 h-2.5 rounded-full bg-transparent border-2 border-secondary" />
      </div>

      <Form className="flex flex-col gap-12" action="" method="post">
        <AnimatePresence mode="wait">
          <motion.div
            key="step-0"
            variants={formVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ type: "spring", visualDuration: 0.3, bounce: 0.4 }}
          >
            <FormCard
              title="Good to see you again!"
              description="Hey, welcome back! We're glad to see you here again."
              footer={false}
              buttonText="Login"
              inputs={login}
              checkBox={{ render: true, text: "Remember me" }}
            />
          </motion.div>
        </AnimatePresence>
      </Form>
    </>
  );
}
