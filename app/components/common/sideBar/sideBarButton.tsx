export default function SideBarButton({
  text,
  icon,
  setActive,
}: {
  text: string;
  icon: React.ReactNode;
  setActive: () => void;
}) {
  return (
    <li>
      <button
        className={`flex gap-2 items-center cursor-pointer text-lg px-2 py-1 text-neutral-600 hover:text-neutral-700 hover:bg-gray-1 font-semibold rounded-lg min-w-44 transition-all ease-in-out duration-200`}
        onClick={() => setActive()}
      >
        {icon}
        <span>{text}</span>
      </button>
    </li>
  );
}
