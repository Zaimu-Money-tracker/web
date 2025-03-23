import { MdOutlineInbox } from "react-icons/md";

export default function Inbox() {
  return (
    <>
      <span className="flex w-full font-bold text-2xl text-neutral-700">
        Inbox
      </span>

      <div className="h-full flex flex-col justify-center items-center gap-2 text-neutral-600">
        <MdOutlineInbox className="w-28 h-28" />
        <p className="text-center mx-8 font-medium">
          This place looks empty—well done keeping it tidy!
        </p>
      </div>
    </>
  );
}
