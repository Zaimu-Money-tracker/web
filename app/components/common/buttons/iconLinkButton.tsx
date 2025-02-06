import { motion } from "motion/react";

export default function IconLinkButton({
  link,
  icon,
  ariaLabel,
}: {
  link: string;
  icon: React.ReactNode;
  ariaLabel: string;
}) {
  return (
    <li className="flex w-fit h-fit">
      <motion.a
        className="group flex"
        whileHover={{ scale: 1.1 }}
        transition={{ scale: { type: "spring", bounce: 0.6 } }}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
      >
        {icon}
      </motion.a>
    </li>
  );
}
