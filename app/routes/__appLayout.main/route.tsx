import ButtonLink from "~/components/common/buttons/buttonLink";
import { path } from "~/data/paths/paths.data";
import { motion } from "motion/react";
import { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Zaimu" },
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

export default function Main() {
  return (
    <section className="flex h-full w-full items-center justify-center">
      <motion.div
        className="flex w-fit h-fit"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col gap-10 w-fit items-center justify-center pt-32">
          <div className="flex flex-col gap-2 max-w-md text-center">
            <p className="text-neutral-500 font-semibold text-lg">
              Saving money is the best way to make your dreams come true.
              Don&apos;t worry, it&apos;s easier than you think! 🌱
            </p>
          </div>

          <div className="flex gap-8">
            <ButtonLink
              text="Take a look"
              link={path.app.home}
              type="primary"
            />
            <ButtonLink text="Open App" link="" type="secondary" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
