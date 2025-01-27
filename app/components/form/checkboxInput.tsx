import { useState } from "react";
import Checkbox from "./checkbox";

export default function CheckboxInput({
  text,
  name,
}: {
  text: string;
  name: string;
}) {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <label className="flex items-center gap-2 cursor-pointer w-fit">
      <input
        className="peer hidden"
        type="checkbox"
        name={name}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <Checkbox checked={checked} />
      <span className="font-medium text-neutral-500 text-sm">{text}</span>
    </label>
  );
}
