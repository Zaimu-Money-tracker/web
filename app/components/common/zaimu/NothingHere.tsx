import ZaimuBlackLogo from "../svg/ZaimuBlackLogo";

export default function NothingHere() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-full max-w-xl self-center">
      <div className="w-fit h-fit">
        <ZaimuBlackLogo w={350} h={350} opacity={0.1} />
      </div>

      <p className="text-2xl text-neutral-400/60 font-semibold text-center">
        This place feels a little empty... why not try creating something first?
      </p>
    </div>
  );
}
