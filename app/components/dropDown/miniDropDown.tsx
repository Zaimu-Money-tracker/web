import { FaGithub, FaHeart, FaUser } from "react-icons/fa";
import DropDownButton from "../buttons/dropDownButton";

export default function MiniDropDown() {
  return (
    <ul className="grid gap-2 max-w-60">
      <DropDownButton
        text="Donate"
        description="Support Zaimu and help us improve with a donation!"
        titleIcon={<FaHeart className="w-4 h-4 text-primary" />}
        link="/donate"
      />
      <DropDownButton
        text="GitHub"
        description="Zaimu is Opensource, you can contribute on the project."
        titleIcon={<FaGithub className="w-4 h-4 " />}
        link="https://github.com/Zaimu-Money-tracker"
      />
      <DropDownButton
        text="Team"
        description="It's just one developer behind this... for now."
        titleIcon={<FaUser className="w-4 h-4 text-sky-800" />}
        link="/team"
      />
    </ul>
  );
}
