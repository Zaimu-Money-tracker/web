import { Form } from "@remix-run/react";
import CheckboxInput from "./checkboxInput";
import Button from "../common/buttons/button";
import BasicLink from "../common/links/basicLink";
import { path } from "~/data/paths/paths";

export default function FormCard({
  title,
  description,
  footer,
  buttonText,
  buttonType,
  inputs,
  checkBox,
}: {
  title: string;
  description: string;
  footer: boolean;
  buttonText: string;
  buttonType: "button" | "submit" | "reset";
  inputs: React.ReactNode[];
  checkBox: { render: boolean; text: string };
}) {
  return (
    <article className="grid gap-12 p-8 items-center bg-white border-2 border-neutral-200 rounded-4xl shadow-gray-1 w-full max-w-[34rem]">
      <header>
        <h1 className="text-center font-black text-neutral-700 text-5xl mx-10">
          {title}
        </h1>
        <p>{description}</p>
      </header>

      <Form className="flex flex-col gap-12" action="" method="POST">
        <fieldset className="flex flex-col gap-3">
          <div className="flex flex-col gap-6">
            {inputs.map((input) => {
              return <>{input}</>;
            })}
          </div>

          {checkBox.render ? <CheckboxInput text={checkBox.text} /> : <></>}
        </fieldset>

        <Button text={buttonText} type={buttonType} />
      </Form>

      {footer ? (
        <footer>
          <p className="text-center text-sm font-medium text-neutral-500">
            By registering, you agree to Zaimu&apos;s{" "}
            <BasicLink text="Terms & Conditions" link={path.terms} />{" "}
            <span className="italic">&</span>{" "}
            <BasicLink text="Privacy policy" link={path.privacy} />.
          </p>
        </footer>
      ) : (
        <></>
      )}
    </article>
  );
}
