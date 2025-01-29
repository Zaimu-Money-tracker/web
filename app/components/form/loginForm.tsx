import { Form, useNavigate } from "@remix-run/react";
import { motion } from "motion/react";
import FormCard from "./formCard";
import { login } from "~/data/form/auth.data";
import axios from "axios";
import { path } from "~/data/paths/paths.data";
import { EnvConfig } from "~/config/env.config";

const env = EnvConfig();

export default function LoginForm() {
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    await axios
      .post(
        `${env.zaimu_api_url}/login`,
        {
          email: data.email,
          password: data.password,
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
        <div className="flex min-w-2.5 h-2.5 rounded-full bg-primary" />
        <div className="bg-linear-to-r h-0.75 rounded-full w-full from-primary to-secondary" />
        <div className="flex min-w-2.5 h-2.5 rounded-full bg-transparent border-2 border-secondary" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", visualDuration: 0.3, bounce: 0.4 }}
      >
        <Form method="post" onSubmit={handleSubmit}>
          <FormCard
            title="Good to see you again!"
            description="Hey, welcome back! We're glad to see you here again."
            footer={false}
            buttonText="Login"
            inputs={login}
            checkBox={{ render: true, text: "Remember me", name: "checkbox" }}
          />
        </Form>
      </motion.div>
    </>
  );
}
