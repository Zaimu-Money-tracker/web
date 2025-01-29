import { LuAward, LuGoal, LuLayoutDashboard } from "react-icons/lu";
import DropDownButton from "../buttons/dropDownButton";
import { TbPigMoney } from "react-icons/tb";
import { TiFlashOutline } from "react-icons/ti";
import { PiRecycleBold } from "react-icons/pi";
import { path } from "~/data/paths/paths.data";

export default function MainDropDown() {
  return (
    <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
      <DropDownButton
        text="Dashboard"
        description="All you need to know right here."
        link={path.features.dashboard}
        icon={<LuLayoutDashboard className="w-6 h-6" />}
      />
      <DropDownButton
        text="Categories"
        description="Keep your transactions in order."
        link={path.features.categories}
        icon={<TbPigMoney className="w-6 h-6" />}
      />
      <DropDownButton
        text="Savings"
        description="Take a look at your monthly savings."
        link={path.features.savings}
        icon={<TbPigMoney className="w-6 h-6" />}
      />
      <DropDownButton
        text="Achievements"
        description="Save money, get achievements."
        link={path.features.achievements}
        icon={<LuAward className="w-6 h-6" />}
      />
      <DropDownButton
        text="Goals"
        description="Reach all your dreams."
        link={path.features.goals}
        icon={<LuGoal className="w-6 h-6" />}
      />
      <DropDownButton
        text="Shortcuts"
        description="Add transactions with one click."
        link={path.features.shortcuts}
        icon={<TiFlashOutline className="w-6 h-6" />}
      />
      <DropDownButton
        text="Recurring"
        description="Don't worry about repetitive transactions."
        link={path.features.recurring}
        icon={<PiRecycleBold className="w-6 h-6" />}
      />
    </ul>
  );
}
