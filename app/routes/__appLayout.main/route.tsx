import ButtonLink from "~/components/common/buttons/buttonLink";
import { path } from "~/data/paths/paths.data";
import { motion } from "motion/react";

export default function Main() {
  return (
    <section className="flex h-full w-full absolute items-center justify-center">
      <motion.div
        className="flex w-fit h-fit"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col gap-10 w-fit items-center justify-center pt-56">
          <div className="flex flex-col gap-2 max-w-md text-center">
            <p className="text-neutral-500 font-semibold text-lg">
              Saving money is the best way to make your dreams come true.
              Don&apos;t worry, it&apos;s easier than you think! 🌱
            </p>
          </div>

          <div className="flex gap-8">
            <ButtonLink
              text="Take a look"
              link={path.app.home}
              type="primary"
            />
            <ButtonLink text="Open App" link="" type="secondary" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
