import { MetaFunction } from "@remix-run/react";
import { motion } from "motion/react";
import { useUserData } from "~/contexts/user.context";

export const meta: MetaFunction = () => {
  return [
    { title: "Zaimu - Settings" },
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

export default function Settings() {
  const { user } = useUserData();

  return (
    <section className="grid gap-4">
      <motion.span
        className="font-bold text-neutral-700 text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        Personal information
      </motion.span>

      <div className="flex gap-4">
        <img
          className="aspect-auto rounded-full"
          width={300}
          height={300}
          src={user.profilePhoto?.url}
          alt={`${user.name} ${user.lastName} profile`}
        />

        <div></div>
      </div>
    </section>
  );
}
