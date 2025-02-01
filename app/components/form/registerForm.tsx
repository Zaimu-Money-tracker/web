import { Form, useNavigate } from "@remix-run/react";
import { motion } from "motion/react";
import { useState } from "react";
import FormCard from "~/components/form/formCard";
import Input from "./input";
import axios from "axios";
import { path } from "~/data/paths/paths.data";
import { EnvConfig } from "~/config/env.config";

const env = EnvConfig();

export default function RegisterForm() {
  const navigate = useNavigate();

  const [formRender, setFormRender] = useState<number>(0);
  const [firstForm, setFirstForm] = useState<{
    [key: string]: FormDataEntryValue;
  }>();

  const registerFirst = [
    <div className="flex gap-3" key={"name-inputs"}>
      <Input placeholder="First name" type="text" name="firstName" required />
      <Input placeholder="Last name" type="text" name="lastName" required />
    </div>,

    <Input
      key={"email-input"}
      placeholder="Email"
      type="email"
      name="email"
      required
      data-step={0}
    />,

    <div className="flex gap-3" key={"currency-data-inputs"}>
      <Input
        placeholder="Currency"
        type="text"
        name="currency"
        defaultValue="COP"
        required
      />
      <Input
        placeholder="Profession (Optional)"
        type="text"
        name="profession"
      />
    </div>,

    <Input
      key={"password-input"}
      placeholder="Password"
      type="password"
      name="password"
      required
      data-step={0}
    />,
  ];

  const registerSecond = [
    <div className="flex gap-3" key={"language-theme-inputs"}>
      <Input
        placeholder="Language"
        type="text"
        name="language"
        defaultValue="es"
        required
      />
      <Input
        placeholder="Appearance"
        type="text"
        name="appearance"
        defaultValue="Dark"
        required
      />
    </div>,

    <Input
      key={"phone-input"}
      placeholder="Phone (Optional)"
      type="tel"
      name="phone"
    />,
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const finalData = {
      ...data,
      emailNotification: formData.has("emailNotification"),
      whatsAppReminder: formData.has("whatsappReminder"),
    };

    if (formRender === 0 && data) {
      setFirstForm(data);
      setFormRender(1);
      return;
    }

    postData(data, finalData);
  };

  const postData = async (
    data: { [key: string]: FormDataEntryValue },
    finalData: { emailNotification: boolean; whatsAppReminder: boolean }
  ) => {
    if (!firstForm) return setFormRender(0);

    await axios
      .post(
        `${env.zaimu_api_url}/register`,
        {
          name: firstForm.firstName,
          lastName: firstForm.lastName,
          profession: firstForm.profession,
          email: firstForm.email,
          password: firstForm.password,
          settings: {
            language: data.language,
            currency: firstForm.currency,
            appearance: data.appearance,
            notifications: {
              email: finalData.emailNotification,
              whatsApp: finalData.whatsAppReminder,
            },
          },
        },
        { withCredentials: true }
      )
      .then(() => {
        return navigate(path.app.main);
      })
      .catch((err) => {
        return console.log(err);
      });
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
          className={`bg-neutral-200 h-0.75 rounded-full w-full bar-1 relative after:from-primary after:to-secondary ${
            formRender >= 1 ? "after:w-full" : "after:w-0"
          }`}
        />

        <div
          className={`flex min-w-2.5 h-2.5 rounded-full  border-2 transition-all ease-in-out duration-200 ${
            formRender === 1
              ? "border-secondary bg-transparent"
              : "border-neutral-200 bg-neutral-200"
          }`}
        />
      </div>

      <div className="flex gap-12">
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
          <Form method="post" onSubmit={handleSubmit}>
            <FormCard
              title="Let's get started!"
              description="It's your first time here? Let's start creating a new account!"
              footer
              buttonText="Next step"
              buttonAction={() => handleSubmit}
              inputs={registerFirst}
              checkBox={{
                render: true,
                text: "(Optional) Send me emails with Zaimu's updates, news and special offers. You can disable this anytime.",
                name: "emailNotification",
              }}
            />
          </Form>
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
          <Form method="post" onSubmit={handleSubmit}>
            <FormCard
              title="App settings!"
              description="We're almost there! Customize Zaimu however you like."
              footer
              buttonText="Register"
              inputs={registerSecond}
              checkBox={{
                render: true,
                text: "(Optional) Send WhatsApp reminders.",
                name: "whatsappReminder",
              }}
            />
          </Form>
        </motion.div>
      </div>
    </>
  );
}
