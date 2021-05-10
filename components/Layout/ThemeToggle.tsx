import React from "react";
import useDarkMode from "use-dark-mode";

export const ThemeToggle = () => {
  const darkMode = useDarkMode(false, {
    classNameDark: "dark",
    classNameLight: "light",
  });

  return (
    <>
      <button onClick={darkMode.toggle}>
        <svg
          aria-hidden="true"
          className="w-6 h-6 md:w-5 md:h-5 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 18.75V1.25a8.75 8.75 0 100 17.5zM10 20a10 10 0 100-20 10 10 0 000 20z"
          />
        </svg>
      </button>
    </>
  );
};
