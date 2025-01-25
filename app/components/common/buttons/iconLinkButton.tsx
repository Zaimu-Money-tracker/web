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
    <motion.li
      className="hover:text-primary "
      whileHover={{ scale: 1.2 }}
      transition={{ scale: { type: "spring", bounce: 0.7 } }}
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
      >
        {icon}
      </a>
    </motion.li>
  );
}
