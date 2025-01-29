import {
  resourcesLinks,
  supportLinks,
  zaimuLinks,
} from "~/data/footer/basicLinks.data";
import FooterSection from "./footerSection";
import { Link } from "@remix-run/react";
import FooterLink from "./footerLink";
import { FaGithub } from "react-icons/fa";
import { path } from "~/data/paths/paths.data";
import IconLinkButton from "../buttons/iconLinkButton";

export default function Footer() {
  return (
    <footer className="bg-gray-2">
      <div className="mx-[10%] pb-4 pt-12">
        <div className="flex justify-between py-4">
          <div className="flex flex-col justify-between gap-8 max-w-60">
            <div className="flex flex-col gap-2">
              <Link className="flex gap-3 items-center w-fit" to={"/"}>
                <div>
                  <img
                    width={35}
                    height={35}
                    className="aspect-auto"
                    src="/icons/zaimu_default_logo.webp"
                    alt="Main Zaimu Logo"
                    loading="lazy"
                  />
                </div>
                <span className="font-black text-neutral-700 text-4xl">
                  Zaimu
                </span>
              </Link>
              <p className="font-semibold text-[#666]">
                Manage your expenses and don&apos;t waste money in random stuff.
              </p>
            </div>

            <ul className="flex gap-2">
              <IconLinkButton
                link="https://github.com/Zaimu-Money-tracker"
                icon={<FaGithub className="w-8 h-8 text-neutral-700" />}
                ariaLabel="Zaimu's GitHub Organization Link"
              />
            </ul>
          </div>

          <div className="flex gap-28">
            <FooterSection title="Zaimu" links={zaimuLinks} />
            <FooterSection title="Resources" links={resourcesLinks} />
            <FooterSection title="Support" links={supportLinks} />
          </div>
        </div>

        <div className="w-full h-0.5 bg-neutral-200 my-4 rounded-full" />

        <div className="flex justify-between">
          <p className="text-[#756b52] font-medium">
            Made with 🧡 by{" "}
            <Link
              className="font-bold hover:text-primary transition-all ease-in-out duration-200"
              to={"https://www.instagram.com/sebastianl_dev/"}
            >
              Sebastián Lozano
            </Link>
          </p>

          <ul className="flex gap-4">
            <FooterLink text="Terms of Service" link={path.terms} />
            <FooterLink text="Privacy policy" link={path.privacy} />
          </ul>
        </div>
      </div>
    </footer>
  );
}
