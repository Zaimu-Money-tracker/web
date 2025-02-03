import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import TypeOption from "~/interfaces/others/typeOption.interface";

export default function SelectTypeInput({
  name,
  required,
  options,
}: {
  name: string;
  required?: boolean;
  options: TypeOption[];
}) {
  const [selected, setSelected] = useState<TypeOption>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const selectRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: TypeOption) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full bg" ref={selectRef}>
      <button
        id="select-button"
        type="button"
        className="border-2 border-neutral-200 rounded-xl py-2 px-3 text-lg font-medium w-full cursor-pointer text-neutral-500 outline-none focus:border-primary transition-all ease-in-out duration-200 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
        onBlur={(e) => {
          if (!selectRef.current?.contains(e.relatedTarget as Node)) {
            setIsOpen(false);
          }
        }}
      >
        {selected ? (
          <div className="flex items-center gap-2">
            <span>{selected.type}</span>
          </div>
        ) : (
          "Select a type"
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="absolute w-full border-2 border-neutral-200 rounded-xl bg-white mt-1 max-h-56 mini-scroll-bar z-50"
            initial={{ opacity: 0, y: -10, pointerEvents: "auto" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10, pointerEvents: "none" }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.5 }}
          >
            {options.map((data, index) => (
              <button
                key={index}
                className="flex items-center gap-2 rounded-lg px-2 py-1 hover:bg-neutral-100 cursor-pointer w-full transition-all ease-in-out duration-300"
                onMouseUp={() => handleSelect(data)}
                type="button"
              >
                <span>{data.type}</span>
              </button>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <input
        type="hidden"
        name={name}
        value={selected?.type ?? ""}
        required={required}
      />
    </div>
  );
}
