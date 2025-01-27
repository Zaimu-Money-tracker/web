import { Link } from "@remix-run/react";

export default function BasicLink({
  text,
  link,
}: {
  text: string;
  link: string;
}) {
  return (
    <Link
      className="text-primary-darker font-semibold italic hover:text-primary transition-all ease-in-out duration-200"
      to={link}
    >
      {text}
    </Link>
  );
}
