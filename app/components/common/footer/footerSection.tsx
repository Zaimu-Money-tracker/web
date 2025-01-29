import BasicLink from "~/interfaces/footer/basicLink.interface";
import FooterLink from "./footerLink";

export default function FooterSection({
  title,
  links,
}: {
  title: string;
  links: BasicLink[];
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-neutral-700 font-bold text-xl">{title}</span>
      <ul className="flex flex-col gap-1">
        {links.map((link, index) => {
          return <FooterLink key={index} text={link.text} link={link.link} />;
        })}
      </ul>
    </div>
  );
}
