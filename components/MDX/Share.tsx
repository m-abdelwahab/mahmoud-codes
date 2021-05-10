import React from "react";
import { FormattedIcon } from "../Icons/FormattedIcon";

export const Share = ({ slug, title }) => {
  const generateText = (title) => encodeURIComponent(`Check out "${title}"`);
  const generateUrl = (slug) =>
    encodeURIComponent(`https://mahmoud.codes${slug}`);

  // https://stackoverflow.com/a/32261263/2347675
  const popupWindow = (url, title, win, w, h) => {
    const y = win.top.outerHeight / 2 + win.top.screenY - h / 2;
    const x = win.top.outerWidth / 2 + win.top.screenX - w / 2;

    return win.open(
      url,
      title,
      `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${w}, height=${h}, top=${y}, left=${x}`
    );
  };

  const handleClick = () => {
    popupWindow(
      `https://twitter.com/intent/tweet?text=${generateText(
        title
      )}&url=${generateUrl(slug)}&via=thisismahmoud_`,
      "Share this post",
      window,
      600,
      400
    );
  };

  return (
    <div className="px-4 md:px-10 py-4 text-xl text-center bg-gray-200 rounded max-w-md mx-auto flex flex-col items-center justify-center">
      <p className="mb-5">
        Found this article useful? Make sure you share it with other people on
        Twitter
      </p>
      <button className="btn flex items-center" onClick={handleClick}>
        Share now!{" "}
        <span className="ml-2 font-medium text-black">
          <FormattedIcon name="Twitter" aria-label="twitter" />{" "}
        </span>
      </button>
    </div>
  );
};
