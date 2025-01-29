import { path } from "~/data/paths/paths.data";
import BigDropDownButton from "../buttons/bigDropDownButton";
import DropDownButton from "../buttons/dropDownButton";

export default function BigDropDown() {
  return (
    <div className="flex gap-2">
      <div className="flex flex-col text-neutral-700 text-base font-bold justify-between max-w-56 gap-1 w-full p-4 rounded-xl hover:bg-primary/15 transition-all ease-linear duration-200">
        <BigDropDownButton
          text="A step closer"
          description="Create an account and start tracking your money"
          link={path.register}
          btnText="Register"
        />
      </div>

      <ul className="grid gap-2 max-w-72">
        <DropDownButton
          text="How to use"
          description="Learn how to use Zaimu and start tracking your money."
          link={path.docs}
        />
        <DropDownButton
          text="Upgrade plan"
          description="Zaimu's free, but you can choose a plan and share it with your family."
          link={path.pricing}
        />
      </ul>
    </div>
  );
}
