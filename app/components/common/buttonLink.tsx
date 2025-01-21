export default function ButtonLink({
  text,
  link,
}: {
  text: string;
  link: string;
}) {
  return (
    <a
      className="default-button flex items-center justify-center text-neutral-50 shadow-defaultButton font-black text-xl rounded-full py-2 px-6 hover:scale-105 transition-all ease-easeOutBack duration-[400ms]"
      href={link}
    >
      {text}
    </a>
  );
}
