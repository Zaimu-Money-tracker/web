import { Link } from "@remix-run/react";

export default function HeaderLink({
  text,
  link,
}: {
  text: string;
  link: string;
}) {
  return (
    <li className="flex text-lg items-center">
      <Link
        className="font-bold text-neutral-800/70 hover:text-neutral-700/100 cursor-pointer px-2 py-0.5 transition-all ease-in-out duration-200"
        to={link}
      >
        {text}
      </Link>
    </li>
  );
}
