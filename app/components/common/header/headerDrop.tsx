import { ReactNode } from "react";
import { IoIosArrowForward } from "react-icons/io";

// TODO: Conditional render to show dropdown

export default function HeaderDrop({
  text,
  dropDown,
}: {
  text: string;
  dropDown: ReactNode;
}) {
  return (
    <>
      <li className="group flex text-lg text-neutral-800/70 hover:text-neutral-700/100 items-center gap-1 transition-all ease-linear duration-200 cursor-pointer px-2 py-0.5">
        <span className="font-bold">{text}</span>
        <IoIosArrowForward
          className="w-4 h-4 group-hover:rotate-90 transition-all ease-easeOutExpo duration-200"
          strokeWidth={20}
        />
        <div className="absolute w-max flex p-2 bg-neutral-200/60 -left-4 top-[60px] rounded-2xl border-2 border-neutral-200 cursor-default">
          {dropDown}
        </div>
      </li>
    </>
  );
}
