import { Link, useLocation } from "@remix-run/react";
import SideBarButton from "./sideBarButton";
import { FiHome } from "react-icons/fi";
import { MdOutlineInbox } from "react-icons/md";
import { LuCreditCard, LuGoal, LuGrid2X2 } from "react-icons/lu";
import { TiFlashOutline } from "react-icons/ti";
import { FaHeart } from "react-icons/fa";
import { PiGearSixBold } from "react-icons/pi";
import { BiHelpCircle } from "react-icons/bi";
import { path } from "~/data/paths/paths.data";

export default function SideBar() {
  const location = useLocation();
  return (
    <div className="flex h-screen items-center justify-center">
      <nav className="flex flex-col gap-4 bg-gray-1/65 w-fit h-[calc(100%_-_margin)] self-center m-4 py-6 px-4 rounded-2xl">
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
            <SideBarButton
              text="Home"
              icon={<FiHome className="w-5 h-5" />}
              link={path.app.home}
              isActive={location.pathname === path.app.home}
            />
            <SideBarButton
              text="Inbox"
              icon={<MdOutlineInbox className="w-5 h-5" />}
              link={""}
              isActive={false}
            />
            <SideBarButton
              text="Overview"
              icon={<LuGrid2X2 className="w-5 h-5" />}
              link={path.app.overview.general}
              isActive={location.pathname.includes("/main/overview")}
            />
            <SideBarButton
              text="Finances"
              icon={<LuCreditCard className="w-5 h-5" />}
              link={path.app.finances.transactions}
              isActive={location.pathname.includes("/main/finances")}
            />
            <SideBarButton
              text="Actions"
              icon={<TiFlashOutline className="w-5 h-5" />}
              link={path.app.actions}
              isActive={location.pathname === path.app.actions}
            />
            <SideBarButton
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
            <SideBarButton
              text="Plan"
              icon={<FaHeart className="w-4.5 h-4.5" />}
              link={path.pricing}
              isActive={false}
            />
            <SideBarButton
              text="Help"
              icon={<BiHelpCircle className="w-5 h-5" />}
              link=""
              isActive={false}
            />
            <SideBarButton
              text="Settings"
              icon={<PiGearSixBold className="w-5 h-5 " />}
              link={path.app.settings}
              isActive={location.pathname === path.app.settings}
            />
          </ul>
        </div>
      </nav>
    </div>
  );
}
