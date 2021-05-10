import React from "react";
import { FormattedIcon } from "./Icons/FormattedIcon";
import useSound from "use-sound";
// @ts-ignore
import Name from "../public/sounds/name.mp3";
import { motion } from "framer-motion";

export const Contact = () => {
  const [play] = useSound(Name, { interrupt: true });

  return (
    <>
      <div className="px-12 py-24 flex flex-col items-center justify-center  container mx-auto md:px-24 text-center">
        <h1 className="text-4xl md:text-5xl font-medium w-full">
          That's it! Now It's your turn to say hi.
        </h1>
        <div className="my-5 flex flex-col lg:flex-row items-center ">
          <p className="text-xl md:text-3xl">
            This is how you pronounce my name ~ Mahmoud{" "}
          </p>
          <motion.button
            name="Name Button"
            role="button"
            aria-label="How I pronounce my name"
            whileHover={{
              scale: 1.15,
              transition: { duration: 0.2 },
            }}
            whileTap={{
              scale: 0.8,
              transition: { duration: 0.2 },
            }}
            className="bg-accent my-2 md:my-0 p-2 ml-2 rounded-full cursor-pointer"
            onClick={() => play()}
          >
            <FormattedIcon name="Play" />
          </motion.button>
        </div>

        <p className="text-xl md:text-3xl">
          I hope To hear from you!{" "}
          <span>
            <a
              href="mailto:hey@mahmoud.codes"
              className="text-xl md:text-3xl font-medium my-12"
            >
              hey@mahmoud.codes
            </a>
          </span>
        </p>
      </div>
    </>
  );
};
