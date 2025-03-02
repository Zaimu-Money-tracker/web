import { Link, useLocation } from "@remix-run/react";
import SideBarLink from "./sideBarLink";
import { FiHome } from "react-icons/fi";
import { MdOutlineInbox } from "react-icons/md";
import { LuCreditCard, LuGoal, LuGrid2X2 } from "react-icons/lu";
import { TiFlashOutline } from "react-icons/ti";
import { FaHeart } from "react-icons/fa";
import { PiGearSixBold } from "react-icons/pi";
import { BiHelpCircle } from "react-icons/bi";
import { path } from "~/data/paths/paths.data";
import SideBarButton from "./sideBarButton";
import { useState } from "react";
import Inbox from "./inbox";
import { AnimatePresence, motion } from "motion/react";

export default function SideBar() {
  const location = useLocation();

  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div className="flex h-screen items-center justify-center fixed z-50">
      <nav
        className={`flex flex-col gap-4 bg-gray-1/65 w-fit h-[calc(100%_-_margin)] my-96 self-center py-6 px-4 transition-all ease-in-out duration-200 ${
          !isActive ? "rounded-2xl m-4" : "rounded-l-2xl ml-4"
        }`}
      >
        <div className="w-max">
          <Link
            className="flex gap-3 items-center"
            to={path.app.main}
            aria-label="Zaimu Main Page"
          >
            <img
              width={32}
              height={32}
              className="aspect-auto"
              src="/icons/zaimu_black_logo.webp"
              alt="Zaimu Logo in Dark"
            />
            <span className="text-neutral-700 font-black text-2xl">Zaimu</span>
          </Link>
        </div>

        <div className="w-full h-0.5 rounded-full bg-neutral-400/30" />

        <div className="mb-54 mt-8">
          <ul className="flex flex-col gap-2">
            <SideBarLink
              text="Home"
              icon={<FiHome className="w-5 h-5" />}
              link={path.app.home}
              isActive={location.pathname === path.app.home}
            />
            <SideBarButton
              text="Inbox"
              setActive={() => setIsActive(!isActive)}
              icon={<MdOutlineInbox className="w-5 h-5" />}
            />
            <SideBarLink
              text="Overview"
              icon={<LuGrid2X2 className="w-5 h-5" />}
              link={path.app.overview.general}
              isActive={location.pathname.includes("/main/overview")}
            />
            <SideBarLink
              text="Finances"
              icon={<LuCreditCard className="w-5 h-5" />}
              link={path.app.finances.transactions}
              isActive={location.pathname.includes("/main/finances")}
            />
            <SideBarLink
              text="Actions"
              icon={<TiFlashOutline className="w-5 h-5" />}
              link={path.app.actions.shortcuts}
              isActive={location.pathname.includes("/main/actions")}
            />
            <SideBarLink
              text="Goals"
              icon={<LuGoal className="w-5 h-5" />}
              link={path.app.goals}
              isActive={location.pathname === path.app.goals}
            />
          </ul>
        </div>

        <div className="w-full h-0.5 rounded-full bg-neutral-400/30" />

        <div>
          <ul className="flex flex-col gap-2">
            <SideBarLink
              text="Plan"
              icon={<FaHeart className="w-4.5 h-4.5" />}
              link={path.pricing}
              isActive={false}
            />
            <SideBarLink
              text="Help"
              icon={<BiHelpCircle className="w-5 h-5" />}
              link=""
              isActive={false}
            />
            <SideBarLink
              text="Settings"
              icon={<PiGearSixBold className="w-5 h-5 " />}
              link={path.app.settings}
              isActive={location.pathname === path.app.settings}
            />
          </ul>
        </div>
      </nav>
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Inbox />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
