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
        className="text-black font-bold text-opacity-50 hover:text-opacity-65  cursor-pointer px-2 py-0.5 transition-all ease-linear duration-200"
        to={link}
      >
        {text}
      </Link>
    </li>
  );
}
