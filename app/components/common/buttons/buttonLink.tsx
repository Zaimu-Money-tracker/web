import { Link } from "@remix-run/react";

export default function ButtonLink({
  text,
  link,
}: {
  text: string;
  link: string;
}) {
  return (
    <Link
      className="flex items-center justify-center shadow-primary text-neutral-50 bg-linear-to-r from-primary to-secondary shadow-defaultButton font-black text-xl rounded-full py-2 px-6 hover:scale-110 transition-all duration-[400ms] ease-bounce active:scale-95"
      to={link}
    >
      {text}
    </Link>
  );
}
