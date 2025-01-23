import { Link } from "@remix-run/react";
import { ReactNode } from "react";

export default function ddButton({
  text,
  description,
  link,
  icon,
}: {
  text: string;
  description: string;
  link: string;
  icon?: ReactNode;
}) {
  return (
    <li className="flex text-neutral-700 text-base font-bold">
      <Link
        className="flex group gap-3 items-center w-full p-2 rounded-xl hover:bg-primary/15 transition-all ease-linear duration-200"
        to={link}
      >
        {icon ? (
          <div className="flex p-1 items-center justify-center group-hover:text-primary/80 group-hover:bg-primary/20 group-hover:border-primary/40 rounded-md bg-neutral-300/20 text-neutral-500/90 border-2 border-neutral-400/60 transition-all ease-linear duration-200">
            {icon}
          </div>
        ) : (
          <></>
        )}

        <div className="flex flex-col gap-0">
          <span className="w-fit">{text}</span>
          <p className="w-fit text-neutral-800/70 font-medium text-sm">
            {description}
          </p>
        </div>
      </Link>
    </li>
  );
}
