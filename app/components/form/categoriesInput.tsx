import axios from "axios";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Category from "~/interfaces/entities/category.interface";
import { EnvConfig } from "~/config/env.config";
import { Link } from "@remix-run/react";
import { path } from "~/data/paths/paths.data";

const env = EnvConfig();

export default function CategoriesInput({
  name,
  required,
}: {
  name: string;
  required?: boolean;
}) {
  const [selected, setSelected] = useState<Category>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [categories, setCategories] = useState<Category[]>();

  const selectRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: Category) => {
    setSelected(option);
    setIsOpen(false);
  };

  const getCategories = async () => {
    await axios
      .get(`${env.zaimu_api_url}/categories`, { withCredentials: true })
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCategories();
  }, []);

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
            <span>{selected.name}</span>
          </div>
        ) : (
          "Select a category"
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="absolute w-full border-2 border-neutral-200 rounded-xl bg-white mt-1 max-h-56 h-fit mini-scroll-bar z-50 min-h-full content-center"
            initial={{ opacity: 0, y: -10, pointerEvents: "auto" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10, pointerEvents: "none" }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.5 }}
          >
            {categories &&
              (categories.length > 1 ? (
                categories.map((data, index) => (
                  <li key={index}>
                    <button
                      className="flex items-center gap-2 rounded-lg px-2 py-1 hover:bg-neutral-100 cursor-pointer w-full transition-all ease-in-out duration-300"
                      onMouseUp={() => handleSelect(data)}
                      type="button"
                    >
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: data.color }}
                      />
                      <span>{data.name}</span>
                    </button>
                  </li>
                ))
              ) : (
                <Link
                  className="px-2 hover:text-primary transition-all ease-in-out duration-200"
                  to={path.app.overview.categories}
                >
                  Create category
                </Link>
              ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <input
        type="hidden"
        name={name}
        value={selected?._id ?? ""}
        required={required}
      />
    </div>
  );
}
