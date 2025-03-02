import { MdOutlineInbox } from "react-icons/md";

export default function Inbox() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div
        className={`flex flex-col gap-4 bg-neutral-400/50 w-80 h-[calc(100%_-_175px)] backdrop-blur-md my-96 self-center mr-4 py-6 px-4 transition-all rounded-r-2xl`}
      >
        <span className="flex w-full font-bold text-2xl text-neutral-700">
          Inbox
        </span>

        <div className="h-full flex flex-col justify-center items-center gap-2 text-neutral-600">
          <MdOutlineInbox className="w-28 h-28" />
          <p className="text-center mx-8 font-medium">
            This place looks empty—well done keeping it tidy!
          </p>
        </div>
      </div>
    </div>
  );
}
