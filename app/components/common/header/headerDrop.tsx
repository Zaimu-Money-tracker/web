import { IoIosArrowForward } from "react-icons/io";

export default function HeaderDrop({ text }: { text: string }) {
  return (
    <li className="group flex text-lg text-black text-opacity-50 hover:text-opacity-65 items-center gap-1 transition-all ease-linear duration-200 cursor-pointer px-2 py-0.5">
      <span className="font-bold">{text}</span>
      <IoIosArrowForward
        className="w-4 h-4 group-hover:rotate-90 transition-all ease-easeOutExpo duration-500"
        strokeWidth={20}
      />
    </li>
  );
}
