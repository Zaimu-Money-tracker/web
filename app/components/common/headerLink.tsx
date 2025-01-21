export default function HeaderLink({
  text,
  link,
}: {
  text: string;
  link: string;
}) {
  return (
    <li className=" flex text-lg items-center">
      <a
        className="group text-neutral-500 hover:text-neutral-600 cursor-pointer px-2 py-0.5 transition-all ease-linear duration-200"
        href={link}
      >
        <strong>{text}</strong>
      </a>
    </li>
  );
}
