import BasicLink from "~/components/common/links/basicLink";
import FormCard from "~/components/form/formCard";
import { login } from "~/data/form/auth";
import { path } from "~/data/paths/paths";

export default function Login() {
  return (
    <section className="flex flex-col justify-between w-6/10 items-center py-10">
      <div className="flex gap-1.5 w-1/2 items-center">
        <div className="flex min-w-2.5 h-2.5 rounded-full bg-primary" />
        <div className="bg-linear-to-r h-0.75 rounded-full w-full from-primary to-secondary" />
        <div className="flex min-w-2.5 h-2.5 rounded-full bg-transparent border-2 border-secondary" />
      </div>

      <FormCard
        title="Good to see you again!"
        description=""
        footer={false}
        buttonText="Login"
        inputs={login}
        checkBox={{ render: true, text: "Remember me" }}
      />

      <p className="text-neutral-500">
        Don&apos;t have an account yet?{" "}
        <BasicLink text="Register" link={path.register} />
      </p>
    </section>
  );
}
