import { useEffect, useState } from "react";
import Category from "~/interfaces/entities/category.interface";
import AddButton from "~/components/common/zaimu/addButton";
import { motion } from "motion/react";
import NothingHere from "~/components/common/zaimu/NothingHere";
import PostModal from "~/components/modal/postModal";
import BasicCard from "~/components/common/cards/basicCard";
import TrashButton from "~/components/common/buttons/trashButton";
import DeleteModal from "~/components/modal/deleteModal";
import { MetaFunction } from "@remix-run/react";
import Input from "~/components/form/input";
import ColortInput from "~/components/form/colorInput";
import { Colors } from "~/data/colors/colors.data";
import {
  createCategory,
  deleteCategory,
  getCategories,
} from "~/services/zaimu/entities/categories";

export const meta: MetaFunction = () => {
  return [
    { title: "Zaimu - Overview" },
    {
      name: "description",
      content:
        "Zaimu is the easiest way to track your money, take control of your finances and save to achieve your dreams.",
    },
    { property: "og:url", content: "https://zaimu-finance.pages.dev/" },
    { property: "og:type", content: "website" },
    { property: "og:tittle", content: "Zaimu - Manage your Money" },
    { property: "og:site_name", content: "Zaimu" },
    {
      property: "og:description",
      content:
        "Zaimu is the easiest way to track your money, take control of your finances and save to achieve your dreams.",
    },
    { name: "twitter:card", content: "summary_large_image" },
    { property: "twitter:url", content: "https://zaimu-finance.pages.dev/" },
    { name: "twitter:title", content: "Zaimu - Manage your Money" },
    {
      name: "twitter:description",
      content:
        "Zaimu is the easiest way to track your money, take control of your finances and save to achieve your dreams.",
    },
  ];
};

export default function OverviewCategories() {
  const [categories, setCategories] = useState<Category[]>();
  const [show, setShow] = useState<boolean>(false);
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const [id, setId] = useState<string | undefined>("");

  const handleGetCategories = async () => {
    const data = await getCategories();

    return setCategories(data);
  };

  const handleDeleteCategory = async (id: string | undefined) => {
    if (!id) return;

    await deleteCategory(id);
    setShow(false);
    close();

    return handleGetCategories();
  };

  const handleCreateCategory = async (data: {
    [key: string]: FormDataEntryValue;
  }) => {
    await createCategory(data);
    setShow(false);
    close();

    return handleGetCategories();
  };

  useEffect(() => {
    handleGetCategories();
  }, []);

  const categoriesInputs = [
    <Input
      key={"name"}
      placeholder="Category name"
      type="text"
      name="name"
      required
    />,
    <ColortInput
      key={"color"}
      placeholder="Category color"
      name="color"
      options={Colors}
      required
    />,
  ];

  if (!categories) return <>Oops</>;

  return (
    <section className="grid grid-cols-2 gap-4 h-full mb-10">
      <BasicCard>
        <motion.span
          className="font-bold text-neutral-700 text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          All Categories
        </motion.span>

        {categories.length === 0 ? (
          <NothingHere />
        ) : (
          <ul className="flex flex-col pl-0.75 pr-2 gap-2 w-full h-full overflow-y-scroll mini-scroll-bar max-h-[589px]">
            {categories?.map((category, index) => {
              return (
                <motion.li
                  className="flex justify-between bg-neutral-100 p-1.5 rounded-full w-full h-fit items-center pr-2.5 relative group"
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: index * 0.03,
                      duration: 0.6,
                      type: "spring",
                      bounce: 0.5,
                    },
                  }}
                  exit={{ opacity: 0, y: -10 }}
                  whileHover={{ scale: 1.005 }}
                  transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  <div className="flex gap-2 items-center min-w-36">
                    <div
                      className="rounded-full w-7 h-7"
                      style={{ backgroundColor: category.color }}
                    />
                    <span className="text-neutral-700 font-bold text-lg">
                      {category.name}
                    </span>
                  </div>

                  <span className="text-neutral-500 font-semibold">0%</span>

                  <span className="text-neutral-600 font-semibold min-w-36 text-end">
                    $ ---
                  </span>

                  <div className="absolute flex opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto w-full h-full bg-linear-to-r from-70% to-90% from-neutral-400/20 to-neutral-300 inset-0 rounded-full items-center justify-end px-1.25 transition-all ease-in-out duration-300">
                    <TrashButton
                      w="w-4"
                      h="h-4"
                      action={() => {
                        setId(category._id);
                        setShowDelete(true);
                      }}
                    />
                  </div>
                </motion.li>
              );
            })}
          </ul>
        )}

        <AddButton action={() => setShow(true)} />
      </BasicCard>

      <BasicCard>
        <div className="h-full"></div>
      </BasicCard>

      <PostModal
        title="New Category"
        description="Keep your transactions in order with categories."
        inputs={categoriesInputs}
        submitAction={handleCreateCategory}
        open={show}
        close={() => setShow(false)}
      />

      <DeleteModal
        open={showDelete}
        target="Category"
        getAction={() => {
          handleDeleteCategory(id);
          setShowDelete(false);
        }}
        close={() => setShowDelete(false)}
      />
    </section>
  );
}
