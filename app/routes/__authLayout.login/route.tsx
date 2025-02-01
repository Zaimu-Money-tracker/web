import BasicLink from "~/components/common/links/basicLink";
import LoginForm from "~/components/form/loginForm";
import { path } from "~/data/paths/paths.data";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Zaimu - Login" },
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

export default function Login() {
  return (
    <section className="flex flex-col justify-between w-6/10 items-center py-10">
      <LoginForm />

      <p className="text-neutral-500">
        Don&apos;t have an account yet?{" "}
        <BasicLink text="Register" link={path.register} />
      </p>
    </section>
  );
}
