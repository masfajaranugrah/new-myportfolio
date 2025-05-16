"use client"
import clsx from "clsx";
import { motion } from "framer-motion";

import { NextPage } from "next";

interface Props {
  text: string;
}

const BlurIn: NextPage<Props> = ({ text }) => {
  const variants1 = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      transition={{ duration: 1 }}
      variants={variants1}
      className={clsx(
        "text-center font-display font-bold drop-shadow-sm",
        "text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
        "tracking-[-0.02em]",
        "md:leading-[4rem] lg:leading-[4.5rem] xl:leading-[5rem]",
        "bg-gradient-to-r from-primary-300 via-primary-500 to-primary-600 inline-block text-transparent bg-clip-text"
      )}
    >
      {text}
    </motion.span>
  );
};

export default BlurIn;
