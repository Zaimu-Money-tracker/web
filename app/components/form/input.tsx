import { useState } from "react";
import { motion } from "motion/react";

export default function Input({
  placeholder,
  type,
  name,
  defaultValue,
  required,
}: {
  placeholder: string;
  type: string;
  name: string;
  defaultValue?: string;
  required?: boolean;
}) {
  const [selected, setSelected] = useState<boolean>(!!defaultValue);
  const [value, setValue] = useState<string>(defaultValue || "");

  const canDeselect = () => {
    if (value.trim() === "") setSelected(false);
    return;
  };

  return (
    <label
      className="flex relative w-full"
      onSelect={() => setSelected(true)}
      onBlur={() => canDeselect()}
    >
      <motion.span
        className="absolute text-neutral-500 px-3 select-none font-medium"
        initial={{ top: 0, left: 0, fontSize: "1.125rem" }}
        animate={
          selected
            ? {
                top: "-1.25rem",
                left: "-0.5rem",
                fontSize: "0.875rem",
                cursor: "default",
              }
            : {
                top: 0,
                left: 0,
                fontSize: "1.125rem",
                paddingTop: "0.75rem",
                paddingBottom: "0.75rem",
                cursor: "text",
              }
        }
        transition={{ type: "spring", stiffness: 300, damping: 16 }}
        onClick={() => setSelected(true)}
      >
        {placeholder}
      </motion.span>
      <input
        className="border-2 border-neutral-200 rounded-xl py-2 px-3 text-lg w-full outline-none focus:border-primary transition-all ease-in-out duration-200"
        type={type}
        name={name}
        defaultValue={defaultValue}
        required={required ?? false}
        onChange={(e) => setValue(e.target.value)}
      />
    </label>
  );
}
