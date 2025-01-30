import { Link } from "@remix-run/react";

export default function SideBarButton({
  text,
  link,
  icon,
}: {
  text: string;
  link: string;
  icon: React.ReactNode;
}) {
  return (
    <li>
      <Link
        className="flex gap-2 items-center text-lg px-2 py-1 text-neutral-600 hover:text-neutral-700 hover:bg-gray-1 font-semibold rounded-lg min-w-40 transition-all ease-in-out duration-200"
        to={link}
      >
        {icon}
        <span>{text}</span>
      </Link>
    </li>
  );
}
