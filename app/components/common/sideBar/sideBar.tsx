import { Link } from "@remix-run/react";
import SideBarButton from "./sideBarButton";
import { FiHome } from "react-icons/fi";
import { MdOutlineInbox } from "react-icons/md";
import { LuCreditCard, LuGoal, LuGrid2X2 } from "react-icons/lu";
import { TiFlashOutline } from "react-icons/ti";
import { FaHeart } from "react-icons/fa";
import { PiGearSixBold } from "react-icons/pi";
import { BiHelpCircle } from "react-icons/bi";

export default function SideBar() {
  return (
    <div className="flex h-screen items-center justify-center">
      <nav className="flex flex-col gap-4 bg-gray-1/65 w-fit h-[calc(100%_-_margin)] self-center m-4 p-6 rounded-2xl">
        <div className="w-max">
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
              link=""
            />
            <SideBarButton
              text="Inbox"
              icon={<MdOutlineInbox className="w-5 h-5" />}
              link=""
            />
            <SideBarButton
              text="Overview"
              icon={<LuGrid2X2 className="w-5 h-5" />}
              link=""
            />
            <SideBarButton
              text="Finances"
              icon={<LuCreditCard className="w-5 h-5" />}
              link=""
            />
            <SideBarButton
              text="Actions"
              icon={<TiFlashOutline className="w-5 h-5" />}
              link=""
            />
            <SideBarButton
              text="Goals"
              icon={<LuGoal className="w-5 h-5" />}
              link=""
            />
          </ul>
        </div>

        <div className="w-full h-0.5 rounded-full bg-neutral-400/30" />

        <div>
          <ul className="flex flex-col gap-2">
            <SideBarButton
              text="Plan"
              icon={<FaHeart className="w-4.5 h-4.5" />}
              link=""
            />
            <SideBarButton
              text="Help"
              icon={<BiHelpCircle className="w-5 h-5" />}
              link=""
            />
            <SideBarButton
              text="Settings"
              icon={<PiGearSixBold className="w-5 h-5 " />}
              link=""
            />
          </ul>
        </div>
      </nav>
    </div>
  );
}
