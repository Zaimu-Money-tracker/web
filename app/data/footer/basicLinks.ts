import BasicLink from "~/interfaces/footer/basicLink";
import { path } from "../paths/paths";

export const zaimuLinks: BasicLink[] = [
  {
    text: "Features",
    link: path.features.main,
  },
  {
    text: "Updates",
    link: path.updates,
  },
  {
    text: "Donate",
    link: path.donate,
  },
  {
    text: "Plans & Pricing",
    link: path.pricing,
  },
];

export const resourcesLinks: BasicLink[] = [
  {
    text: "About",
    link: path.about,
  },
  {
    text: "How to use",
    link: path.docs,
  },
  {
    text: "Tutorials",
    link: path.tutorials,
  },
  {
    text: "Team",
    link: path.team,
  },
];

export const supportLinks: BasicLink[] = [
  {
    text: "Contact",
    link: path.contact,
  },
  {
    text: "FAQ",
    link: path.faq,
  },
];
