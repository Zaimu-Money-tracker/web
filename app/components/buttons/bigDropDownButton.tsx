import ButtonLink from "../common/buttons/buttonLink";

export default function BigDropDownButton({
  text,
  description,
  link,
  btnText,
}: {
  text: string;
  description: string;
  link: string;
  btnText: string;
}) {
  return (
    <>
      <div className="flex flex-col gap-1 w-full items-center">
        <span className="w-fit text-center text-2xl">{text}</span>
        <p className="w-fit text-neutral-800/70 font-medium text-base text-center">
          {description}
        </p>
      </div>

      <ButtonLink text={btnText} link={link} />
    </>
  );
}
