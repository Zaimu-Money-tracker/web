import { FaGithub } from "react-icons/fa";
import IconLinkButton from "../buttons/iconLinkButton";
import ZaimuBlackLogo from "../svg/ZaimuBlackLogo";

export default function ComingSoon() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-full max-w-xl self-center">
      <div className="w-fit h-fit">
        <ZaimuBlackLogo w={350} h={350} opacity={0.1} />
      </div>

      <div className="flex flex-col gap-2 items-center justify-center">
        <span className="text-primary font-black text-7xl text-center">
          Coming Soon...
        </span>

        <p className="text-2xl text-neutral-400/60 font-semibold text-center">
          We&apos;re working hard to bring you something amazing!
        </p>
      </div>

      <div className="flex my-4">
        <IconLinkButton
          link="https://github.com/Zaimu-Money-tracker"
          icon={
            <FaGithub className="w-10 h-10 text-neutral-400/60 group-hover:text-neutral-700 transition-all ease-in-out duration-200" />
          }
          ariaLabel="Zaimu's GitHub Organization Link"
        />
      </div>
    </div>
  );
}
