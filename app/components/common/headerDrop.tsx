import { IoIosArrowForward } from "react-icons/io";

export default function HeaderDrop({ text }: { text: string }) {
  return (
    <li className="group flex text-lg text-neutral-500 hover:text-neutral-600 items-center gap-1 transition-all ease-linear duration-200 cursor-pointer px-2 py-0.5">
      <strong>{text}</strong>
      <IoIosArrowForward
        className="w-4 h-4 group-hover:rotate-90 transition-all ease-easeOutExpo duration-500"
        strokeWidth={20}
      />
    </li>
  );
}
