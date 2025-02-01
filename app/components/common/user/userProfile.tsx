import { useLocation } from "@remix-run/react";
import { AnimatePresence, motion } from "motion/react";
import { useUserData } from "~/contexts/user.context";

export default function UserProfile() {
  const { user } = useUserData();
  const location = useLocation();

  return (
    <div className="flex items-end justify-end mt-6">
      <div
        className={`absolute transition-all ease-in-out duration-300 ${
          location.pathname === "/main"
            ? "-translate-1/2 top-1/2 left-1/2 pb-36"
            : "top-0 left-0 pb-0 mt-6"
        }`}
      >
        <div
          className={`flex relative font-black text-neutral-700 transition-all ease-in-out duration-300 text-center ${
            location.pathname === "/main" ? "text-6xl gap-4" : "text-4xl gap-2"
          }`}
        >
          <span>Good to see you,</span>
          <span
            className={`text-primary absolute transition-all ease-in-out duration-300 ${
              location.pathname === "/main"
                ? "-translate-x-1/2 left-1/2 top-full"
                : "translate-x-full right-0 pl-2 top-0"
            }`}
          >
            {user.name}!
          </span>
        </div>

        <AnimatePresence>
          {location.pathname === "/main" ? (
            <></>
          ) : (
            <motion.span
              className="font-medium text-neutral-500 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.4 }}
            >
              Have a nice day!
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      <div className="flex gap-4 text-neutral-700 self-end items-center flex-row-reverse">
        <div className="w-fit h-fit">
          <img
            className="rounded-full"
            src={user.profilePhoto.url}
            alt={`${user.name} ${user.lastName} Profile`}
            width={40}
            height={40}
          />
        </div>

        <div className="flex flex-col">
          <span className="text-right w-full font-black text-lg">
            {user.name} {user.lastName}
          </span>
          <span className="text-right w-full font-medium">
            {user.profession}
          </span>
        </div>
      </div>
    </div>
  );
}
