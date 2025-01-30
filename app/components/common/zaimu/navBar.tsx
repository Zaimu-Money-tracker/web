import { Link, useLocation } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";
import BasicLink from "~/interfaces/footer/basicLink.interface";

export default function NavBar({ buttons }: { buttons: BasicLink[] }) {
  const location = useLocation();
  const refs = useRef<Record<string, HTMLAnchorElement | null>>({});

  const [width, setWidth] = useState<number>(0);
  const [left, setLeft] = useState<number>(0);

  useEffect(() => {
    const activeRef = refs.current[location.pathname];

    if (activeRef) {
      const { width } = activeRef.getBoundingClientRect();
      setWidth(width);
      setLeft(activeRef.offsetLeft);
    }
  }, [location.pathname]);

  return (
    <nav className="-translate-x-2">
      <ul className="flex gap-4 relative w-fit">
        {buttons.map((data) => {
          const isActive = location.pathname === data.link;
          return (
            <li key={data.link}>
              <Link
                className={`hover:text-primary ${
                  isActive ? "text-primary" : "text-neutral-600"
                } transition-all ease-in-out duration-300 py-1 px-2 font-medium`}
                to={data.link}
                ref={(el) => (refs.current[data.link] = el)}
              >
                {data.text}
              </Link>
            </li>
          );
        })}
        <div
          className="absolute bg-linear-to-r from-primary to-secondary h-0.5 rounded-full bottom-0 transition-all ease-in-out duration-300"
          style={{
            width: width,
            left: left,
          }}
        />
      </ul>
    </nav>
  );
}
