export default function HeaderLink({
  text,
  link,
}: {
  text: string;
  link: string;
}) {
  return (
    <li className="flex text-lg items-center">
      <a
        className="text-black text-opacity-50 hover:text-opacity-65  cursor-pointer px-2 py-0.5 transition-all ease-linear duration-200"
        href={link}
      >
        <span className="font-bold">{text}</span>
      </a>
    </li>
  );
}
