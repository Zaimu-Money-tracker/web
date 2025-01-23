import HeaderDrop from "./headerDrop";
import HeaderLink from "./headerLink";
import ButtonLink from "../buttons/buttonLink";
import { GrLanguage } from "react-icons/gr";
import { MdNightsStay } from "react-icons/md";
import { Link } from "@remix-run/react";
import MainDropDown from "../../dropDown/mainDropDown";

export default function Header() {
  return (
    <header>
      <div className="flex bg-[#d4d4d4]/65 py-2 px-8 mx-[10%] mt-3 rounded-2xl items-center">
        <nav className="w-full flex justify-between">
          <div className="flex gap-10">
            <Link
              className="flex gap-3 items-center"
              to="/"
              aria-label="Zaimu Main Page"
            >
              <img
                width={32}
                height={32}
                className="aspect-auto"
                src="/icons/zaimu_black_logo.webp"
                alt="Zaimu Logo in dark"
              />
              <span className="text-neutral-700 font-black text-2xl">
                Zaimu
              </span>
            </Link>

            <ul className="flex gap-6 items-center relative">
              <HeaderDrop text="Features" dropDown={<MainDropDown />} />
              {/* <HeaderDrop text="Start saving" />
              <HeaderDrop text="Others" /> */}
              <HeaderLink text="Pricing" link="/pricing" />
            </ul>
          </div>

          <div className="flex flex-row-reverse gap-6 items-center">
            <ButtonLink text="Download" link="/download" />
            <Link
              className="flex font-bold text-lg items-center text-neutral-800/70 hover:text-neutral-700/100 cursor-pointer px-2 py-0.5 transition-all ease-linear duration-200"
              to="/Login"
            >
              Login
            </Link>

            <div className="h-1/2 w-0.5 bg-neutral-400/30" role="separator" />

            <div className="flex gap-2">
              <MdNightsStay className="w-7 h-7 p-1 text-neutral-800/70 hover:text-neutral-700/100 transition-all ease-linear cursor-pointer duration-200" />
              <GrLanguage
                className="w-7 h-7 p-1 text-neutral-800/70 hover:text-neutral-700/100 transition-all ease-linear cursor-pointer duration-200"
                strokeWidth={20}
              />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
