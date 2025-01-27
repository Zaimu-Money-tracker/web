import { Form } from "@remix-run/react";
import { motion } from "motion/react";
import { useState } from "react";
import FormCard from "~/components/form/formCard";
import { registerFirst, registerSecond, registerThird } from "~/data/form/auth";

export default function RegisterForm() {
  const [formRender, setFormRender] = useState<number>(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const finalData = {
      ...data,
      emailNotification: formData.has("emailNotification"),
      whatsAppReminder: formData.has("whatsappReminder"),
    };

    console.log("Datos del formulario:", finalData);
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

      <Form className="flex gap-12" method="post" onSubmit={handleSubmit}>
        <motion.div
          className={`${formRender != 0 ? "hidden" : "flex"}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            formRender === 0
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 0.8, x: 200 }
          }
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
              name: "emailNotification",
            }}
          />
        </motion.div>
        <motion.div
          className={`${formRender != 1 ? "hidden" : "flex"}`}
          initial={{ opacity: 0, scale: 0.8, x: 200 }}
          animate={
            formRender === 1
              ? { opacity: 1, scale: 1, x: 0 }
              : { opacity: 0, scale: 0.8, x: 200 }
          }
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
            checkBox={{ render: false, text: "", name: "" }}
          />
        </motion.div>
        <motion.div
          className={`${formRender != 2 ? "hidden" : "flex"}`}
          initial={{ opacity: 0, scale: 0.8, x: 200 }}
          animate={
            formRender === 2
              ? { opacity: 1, scale: 1, x: 0 }
              : { opacity: 0, scale: 0.8, x: 200 }
          }
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
              name: "whatsappReminder",
            }}
          />
        </motion.div>
      </Form>
    </>
  );
}
