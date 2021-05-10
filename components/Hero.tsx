import React from "react";
import { Highlight } from "./Highlight";
import Image from "next/image";

export const Hero = () => {
  return (
    <div
      id="hero"
      className="mb-24 md:mb-32 container mx-auto px-10 lg:px-32 pt-24"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-20 items-center">
        <div>
          <p className="text-2xl md:text-3xl">
            <span className="wave" role="img" aria-label="waving hand emoji">
              👋🏼
            </span>{" "}
            Hi, I'm
          </p>
          <h1 className="text-5xl md:text-6xl  font-medium leading-none my-2">
            Mahmoud Abdelwahab
          </h1>
          <p className="text-xl md:text-2xl">
            Developer, writer, and maker. Obsessed with &amp; creating
            exceptional, high-quality, content and applications. Currently a{" "}
            <Highlight
              content="Developer Advocate"
              delay={2000}
              color="var(--color-text-accent)"
            />{" "}
            at{" "}
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://prisma.io"
            >
              prisma.io
            </a>
          </p>
        </div>
        <div className="relative">
          <p className="invisible lg:visible absolute top-0 right-0 font-medium text-xl mt-2  -mr-10">
            That's me!
          </p>
          <svg
            className="invisible lg:visible absolute top-0 right-0 ml-5 mt-10"
            width="90"
            height="57"
            viewBox="0 0 90 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M88.5 2C73 18 34 50.2 2 51M2 51L15.5 39.5M2 51C5.16667 52.5 12.3 55.4 15.5 55"
              stroke="var(--color-text-accent)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <Image
            className="w-full max-w-sm shadow-lg rounded-full z-10"
            src="/images/me.jpg"
            alt="Mahmoud Abdelwahab"
            layout="responsive"
            width="300"
            height="300"
          />
        </div>
      </div>
    </div>
  );
};
