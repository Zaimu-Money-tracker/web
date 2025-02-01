import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import Option from "~/interfaces/others/option.interface";

export default function SelectInput({
  name,
  required,
  options,
}: {
  placeholder: string;
  name: string;
  required?: boolean;
  options: Option[];
}) {
  const [selected, setSelected] = useState<Option>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSelect = (option: Option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full bg">
      <button
        type="button"
        className="border-2 border-neutral-200 rounded-xl py-2 px-3 text-lg font-medium w-full text-neutral-500 outline-none focus:border-primary transition-all ease-in-out duration-200 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setIsOpen(false)}
      >
        {selected ? (
          <div className="flex items-center gap-2">
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: selected.value }}
            />
            <span>{selected.name}</span>
          </div>
        ) : (
          "Choose a color"
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="absolute w-full border-2 border-neutral-200 rounded-xl bg-white mt-1 overflow-y-scroll max-h-56 mini-scroll-bar"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.5 }}
          >
            {options.map((data, index) => (
              <button
                key={index}
                className="flex items-center gap-2 rounded-lg px-2 py-1 hover:bg-neutral-100 cursor-pointer w-full transition-all ease-in-out duration-300"
                onClick={() => handleSelect(data)}
                type="button"
              >
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: data.value }}
                />
                <span>{data.name}</span>
              </button>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <input
        type="hidden"
        name={name}
        value={selected?.value ?? ""}
        required={required}
      />
    </div>
  );
}
