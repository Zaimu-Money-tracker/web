import { useState } from "react";
import Checkbox from "./checkbox";

export default function CheckboxInput({
  text,
  name,
  defaultValue,
}: {
  text: string;
  name: string;
  defaultValue?: boolean;
}) {
  const [checked, setChecked] = useState<boolean>(defaultValue ?? false);

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
