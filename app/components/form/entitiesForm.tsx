import Button from "../common/buttons/button";
import RedButton from "../common/buttons/redButton";

export default function EntitiesForm({
  title,
  description,
  cancelAction,
  inputs,
}: {
  title: string;
  description: string;
  cancelAction?: () => void;
  inputs: React.ReactNode[];
}) {
  return (
    <article className="grid gap-6 p-8 items-center bg-white border-2 border-neutral-200 rounded-3xl shadow-gray-1 w-full max-w-[34rem]">
      <fieldset className="grid gap-12 items-center w-full mb-6">
        <legend className="w-full mb-2">
          <h1 className="text-center font-black text-neutral-700 text-4xl mx-10">
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
        </div>
      </fieldset>

      <div className="flex gap-6">
        <Button text="Create" />
        <RedButton
          text="Cancel"
          action={cancelAction}
          style="primary"
          type="button"
        />
      </div>
    </article>
  );
}
