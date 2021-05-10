import React from "react";

export const Tooltip = ({ content }) => {
  return (
    <span>
      <span
        className="text-3xl cursor-pointer text-tertiary"
        data-tip={`${content}`}
      >
        *
      </span>
    </span>
  );
};
