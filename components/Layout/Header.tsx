import React from "react";
import { ThemeToggle } from "./ThemeToggle";
import { FormattedIcon } from "../Icons/FormattedIcon";
import Link from "components/shared/Link";

export const Header = () => {
  return (
    <>
      <header className="hidden md:inline mx-auto max-w-screen-xl  sm:px-12  h-24 overflow-hidden sticky top-0 bg-primary z-10">
        <nav
          className="px-10 md: md:px-32 lg:px-48 mt-auto h-full flex space-x-12 items-center justify-start text-primary"
          aria-label="Main Navigation"
        >
          <a
            href="/"
            aria-label="Website logo, go back to homepage."
            className="ml-4"
          >
            <FormattedIcon name="Logo" />
          </a>

          <ul className="hidden sm:flex  flex-grow items-center space-x-6  text-lg">
            <li>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/talks">
                <a>Talks</a>
              </Link>
            </li>
            <li>
              <a
                href="https://m.youtube.com/c/MahmoudAbdelwahab"
                rel="noopener"
                target="_blank"
              >
                YouTube
              </a>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/uses">
                <a>Uses</a>
              </Link>
            </li>
          </ul>
          <div className="hidden sm:block hover:text-accent transition duration-150">
            <ThemeToggle />
          </div>
        </nav>
      </header>
    </>
  );
};
