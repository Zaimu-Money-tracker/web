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
        className="font-bold text-neutral-800 text-opacity-70 hover:text-opacity-100 hover:text-neutral-700 cursor-pointer px-2 py-0.5 transition-all ease-linear duration-200"
        to={link}
      >
        {text}
      </Link>
    </li>
  );
}
