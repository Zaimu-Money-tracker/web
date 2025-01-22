import HeaderDrop from "./headerDrop";
import HeaderLink from "./headerLink";
import ButtonLink from "../buttons/buttonLink";
import { GrLanguage } from "react-icons/gr";
import { MdNightsStay } from "react-icons/md";

export default function Header() {
  return (
    <header>
      <div className="flex bg-[#c2c2c2] bg-opacity-50 py-2 px-8 mx-[10%] mt-6 rounded-2xl items-center">
        <nav className="w-full flex justify-between">
          <div className="flex gap-10">
            <a
              className="flex gap-2 items-center"
              href="/"
              aria-label="Zaimu Main Page"
            >
              <img
                className="w-8 aspect-square"
                src="/icons/zaimu_black_logo.svg"
                alt="Zaimu Logo in dark"
              />
              <span className="text-neutral-700 font-black text-2xl">
                Zaimu
              </span>
            </a>

            <ul className="flex gap-6 items-center">
              <HeaderDrop text="Features" />
              <HeaderDrop text="Start saving" />
              <HeaderDrop text="Others" />
              <HeaderLink text="Pricing" link="/pricing" />
            </ul>
          </div>

          <div className="flex flex-row-reverse gap-6 items-center">
            <ButtonLink text="Download" link="/download" />
            <a
              className="flex text-lg items-center text-black text-opacity-50 hover:text-opacity-65  cursor-pointer px-2 py-0.5 transition-all ease-linear duration-200"
              href="/Login"
            >
              <span className="font-bold">Login</span>
            </a>

            <div
              className="h-1/2 w-0.5 bg-neutral-400 bg-opacity-30"
              role="separator"
            />

            <ul className="flex gap-2">
              <MdNightsStay className="w-7 h-7 p-1 text-neutral-500 hover:text-neutral-600 transition-all ease-linear cursor-pointer duration-200" />
              <GrLanguage
                className="w-7 h-7 p-1 text-neutral-500 hover:text-neutral-600 transition-all ease-linear cursor-pointer duration-200"
                strokeWidth={20}
              />
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
