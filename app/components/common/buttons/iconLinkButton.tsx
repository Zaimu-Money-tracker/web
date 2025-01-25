import { motion } from "motion/react";

export default function IconLinkButton({
  link,
  icon,
}: {
  link: string;
  icon: React.ReactNode;
}) {
  return (
    <motion.a
      className="hover:text-primary "
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2 }}
      transition={{ scale: { type: "spring", bounce: 0.7 } }}
    >
      {icon}
    </motion.a>
  );
}
