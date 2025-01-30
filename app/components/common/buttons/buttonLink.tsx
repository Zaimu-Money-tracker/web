import { Link } from "@remix-run/react";

export default function ButtonLink({
  text,
  link,
  type,
}: {
  text: string;
  link: string;
  type: string;
}) {
  return (
    <>
      {type === "primary" ? (
        <Link
          className="flex items-center justify-center shadow-primary text-neutral-50 bg-linear-to-r from-primary to-secondary font-black text-xl rounded-full py-2 px-6 hover:scale-110 transition-all duration-[400ms] ease-bounce active:scale-95"
          to={link}
        >
          {text}
        </Link>
      ) : (
        <Link
          className="flex items-center shadow-gray-2 justify-center shadow- text-primary bg-linear-to-r from-primary to-secondary font-black text-xl rounded-full p-0.75 hover:scale-110 transition-all duration-[400ms] ease-bounce active:scale-95"
          to={link}
        >
          <div className="w-fit h-full bg-linear-to-r from-neutral-50 to-neutral-50 py-2 px-6 rounded-full">
            {text}
          </div>
        </Link>
      )}
    </>
  );
}
