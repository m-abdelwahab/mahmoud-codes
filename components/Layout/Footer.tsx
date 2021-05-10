import { FormattedIcon } from "components/Icons/FormattedIcon";
import React from "react";

export const Footer = () => {
  return (
    <footer className="pt-24 pb-5 flex-col-reverse items-center md:flex-row flex justify-around mx-auto bg-primary">
      <p className="text-secondary text-center">
        © {new Date().getFullYear()} Mahmoud Abdelwahab
      </p>
      <div className="flex mb-5 md:m-0 text-secondary">
        <a
          className="mx-2"
          href="https://github.com/m-abdelwahab"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <FormattedIcon name="GitHub" />
        </a>
        <a
          className="mx-2"
          href="https://twitter.com/thisismahmoud_"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <FormattedIcon name="Twitter" />
        </a>
        <a
          className="mx-2"
          href="https://linkedin.com/in/mahmoud-codes"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <FormattedIcon name="LinkedIn" />
        </a>
      </div>
    </footer>
  );
};
