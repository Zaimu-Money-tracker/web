import { useState } from "react";
import { motion } from "motion/react";

export default function AmountInput({
  placeholder,
  name,
  defaultValue,
  required,
}: {
  placeholder: string;
  name: string;
  defaultValue?: string;
  required?: boolean;
}) {
  const [selected, setSelected] = useState<boolean>(!!defaultValue);
  const [value, setValue] = useState<string>(defaultValue || "");

  const formatCurrency = (value: string) => {
    const numericValue = value.replace(/\D/g, "");
    return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatCurrency(e.target.value);
    setValue(`$${formattedValue}`);
  };

  return (
    <label
      className="flex relative w-full"
      onSelect={() => setSelected(true)}
      onBlur={() => !value.trim() && setSelected(false)}
    >
      <motion.span
        className="absolute text-neutral-500 px-3 select-none font-medium top-0 left-0 text-xl"
        initial={{
          top: 0,
          left: 0,
          fontSize: "1.125rem",
          paddingTop: "0.75rem",
          paddingBottom: "0.75rem",
        }}
        animate={
          selected
            ? {
                top: "-1.25rem",
                left: "-0.5rem",
                fontSize: "0.875rem",
                cursor: "default",
                paddingTop: "0rem",
                paddingBottom: "0rem",
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
        transition={{ duration: 0.15, ease: "easeInOut" }}
      >
        {placeholder}
      </motion.span>
      <input
        className="border-2 border-neutral-200 rounded-xl py-2 px-3 text-lg w-full outline-none focus:border-primary transition-all ease-in-out duration-200 appearance-none"
        type="text"
        name={name}
        value={value}
        required={required ?? false}
        onChange={handleChange}
      />
    </label>
  );
}
