import CheckboxInput from "./checkboxInput";
import Button from "../common/buttons/button";
import BasicLink from "../common/links/basicLink";
import { path } from "~/data/paths/paths.data";

export default function FormCard({
  title,
  description,
  footer,
  buttonText,
  buttonType,
  buttonAction,
  inputs,
  checkBox,
}: {
  title: string;
  description: string;
  footer: boolean;
  buttonText: string;
  buttonType?: "button" | "submit" | "reset";
  buttonAction?: () => void;
  inputs: React.ReactNode[];
  checkBox: { render: boolean; text: string; name: string };
}) {
  return (
    <article className="grid gap-6 p-8 items-center bg-white border-2 border-neutral-200 rounded-4xl shadow-gray-1 w-full max-w-[34rem]">
      <fieldset className="grid gap-12 items-center w-full mb-6">
        <legend className="w-full mb-2">
          <h1 className="text-center font-black text-neutral-700 text-5xl mx-10">
            {title}
          </h1>
        </legend>
        <p className="text-center font-medium text-neutral-500 w-full">
          {description}
        </p>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-6">
            {inputs.map((input) => {
              return <>{input}</>;
            })}
          </div>

          {checkBox.render ? (
            <CheckboxInput text={checkBox.text} name={checkBox.name} />
          ) : (
            <></>
          )}
        </div>
      </fieldset>
      <Button text={buttonText} type={buttonType} buttonAction={buttonAction} />
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
