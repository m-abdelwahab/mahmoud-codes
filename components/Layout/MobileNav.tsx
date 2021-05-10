import Link from "next/link";
import React from "react";
import { ThemeToggle } from "./ThemeToggle";
import { motion, useCycle } from "framer-motion";
import { FormattedIcon } from "../Icons/FormattedIcon";

export const MobileNav = () => {
  const [navShow, setNavShow] = useCycle(false, true);

  const container = {
    open: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    closed: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };
  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 100% 1%)`,
      delay: 0.1,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(30px at 100% 1%)",
      delay: 0.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  const item = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };
  return (
    <header className="sm:hidden pt-24 px-12 text-xl" aria-hidden={!navShow}>
      <div className="absolute left-0 top-0 ml-10 mt-12">
        <Link href="/">
          <a>
            <FormattedIcon name="Logo" />
          </a>
        </Link>
      </div>
      <button
        type="button"
        className="md:hidden fixed right-0 top-0 px-5 py-12 z-50 focus:outline-none"
        // @ts-ignore
        onClick={() => setNavShow(!navShow)}
      >
        {navShow ? (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        ) : (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        )}
      </button>
      <div className="relative z-20">
        <motion.button
          type="button"
          initial="closed"
          animate={navShow ? "open" : "closed"}
          variants={sidebar}
          transition={{ duration: 0.2 }}
          aria-label="Menu Button"
          className="-ml-8 -mt-24 w-full h-screen bg-primary fixed cursor-auto"
          onClick={() => {
            // @ts-ignore
            setNavShow(!navShow);
          }}
        ></motion.button>
        {navShow && (
          <motion.nav className="w-full right-0 h-screen mt-auto pb-48 px-6 fixed ">
            <motion.ul
              variants={container}
              initial="closed"
              animate={navShow ? "open" : "closed"}
              // @ts-ignore
              onClick={() => setNavShow(!navShow)}
              className="h-full flex flex-col items-center justify-around font-medium text-primary text-2xl"
            >
              <motion.li variants={item}>
                <Link href="/blog">
                  <a>Blog</a>
                </Link>
              </motion.li>
              <motion.li variants={item}>
                <Link href="/talks">
                  <a>Talks</a>
                </Link>
              </motion.li>
              <motion.li variants={item}>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </motion.li>
              <motion.li variants={item}>
                <a
                  href="https://m.youtube.com/c/MahmoudAbdelwahab"
                  rel="noopener"
                  target="_blank"
                >
                  YouTube
                </a>
              </motion.li>
              <motion.li variants={item}>
                <Link href="/uses">
                  <a>Uses</a>
                </Link>
              </motion.li>
              <motion.li variants={item}>
                <ThemeToggle />
              </motion.li>
            </motion.ul>
          </motion.nav>
        )}
      </div>
    </header>
  );
};
