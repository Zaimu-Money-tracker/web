import { Link } from "@remix-run/react";

export default function FooterLink({
  text,
  link,
}: {
  text: string;
  link: string;
}) {
  return (
    <li className="text-[#666] font-semibold">
      <Link
        className="gap-x-2 gap-y-1 hover:text-primary transition-all ease-in-out duration-200"
        to={link}
      >
        {text}
      </Link>
    </li>
  );
}
