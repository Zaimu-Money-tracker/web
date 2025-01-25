import { Link } from "@remix-run/react";

export default function DropDownButton({
  text,
  description,
  link,
  icon,
  blank,
  titleIcon,
}: {
  text: string;
  description: string;
  link: string;
  icon?: React.ReactNode;
  blank?: boolean;
  titleIcon?: React.ReactNode;
}) {
  const Body = () => {
    return (
      <>
        {icon ? (
          <div className="flex p-1 items-center justify-center group-hover/item:text-primary group-hover/item:bg-primary/20 group-hover/item:border-primary/60 rounded-md bg-neutral-300/20 text-neutral-500/90 border-2 border-neutral-400/60 transition-all ease-linear duration-200">
            {icon}
          </div>
        ) : (
          <></>
        )}
        <div className="flex flex-col gap-0 mx-2">
          {titleIcon ? (
            <div className="flex gap-1.5 items-center">
              {titleIcon}
              <span className="w-fit">{text}</span>
            </div>
          ) : (
            <span className="w-fit">{text}</span>
          )}
          <p className="w-fit text-neutral-800/70 font-medium text-sm">
            {description}
          </p>
        </div>
      </>
    );
  };

  return (
    <li className="flex text-neutral-700 text-base font-bold">
      {blank ? (
        <Link
          className="flex group/item gap-1 items-center w-full p-2 rounded-xl hover:bg-primary/15 transition-all ease-linear duration-200"
          to={link}
          rel="noopener noreferrer"
          target="_blank"
        >
          {<Body />}
        </Link>
      ) : (
        <Link
          className="flex group/item gap-1 items-center w-full p-2 rounded-xl hover:bg-primary/15 transition-all ease-linear duration-200"
          to={link}
        >
          {<Body />}
        </Link>
      )}
    </li>
  );
}
