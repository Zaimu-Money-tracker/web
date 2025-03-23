import type { MetaFunction } from "@remix-run/node";
import { RiScrollToBottomLine } from "react-icons/ri";
import ButtonLink from "~/components/common/buttons/buttonLink";
import { path } from "~/data/paths/paths.data";

export const meta: MetaFunction = () => {
  return [
    { title: "Zaimu - Manage your Money" },
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

export default function Index() {
  return (
    <>
      <section className="grid h-screen items-center grid-flow-col gap-28 relative">
        <div className="flex flex-col gap-12 w-fit">
          <div className="flex flex-col gap-4">
            <h1 className="text-6xl font-black text-black">
              Make <span className="text-primary">better use</span> of <br />{" "}
              your money
            </h1>
            <p className="text-lg font-semibold text-neutral-500">
              Zaimu is the easiest way to track your money, take control of{" "}
              <br /> your finances and save to achieve your dreams.{" "}
            </p>
          </div>

          <div className="flex w-fit gap-4">
            <ButtonLink text="Login" link={path.login} type="primary" />
            <ButtonLink
              text="Take a look"
              link={path.features.main}
              type="secondary"
            />
          </div>
        </div>

        <RiScrollToBottomLine className="w-8 h-8 absolute left-1/2 -translate-1/2 bottom-10 animate-bounce text-neutral-700" />
      </section>

      <section className="grid w-full justify-center my-28">
        <div className="max-w-3xl flex flex-col gap-2">
          <h2 className="text-5xl font-black text-black text-center">
            Get a full breakdown
          </h2>
          <p className="text-lg font-semibold text-neutral-500 text-center">
            Zaimu provides a complete analysis of your transactions. You&apos;ll
            see percentages, values, and a lot of details about your expenses,
            incomes, and savings. It even gives you tips on smart money
            management.
          </p>
        </div>
      </section>
    </>
  );
}
