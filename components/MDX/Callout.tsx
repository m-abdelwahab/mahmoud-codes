import React from "react";
import { FormattedIcon } from "../Icons/FormattedIcon";

export const Callout = ({ variant = "info", content }) => {
  return (
    <aside
      className={`relative px-8 py-6 rounded text-lg border-l-2 border-solid ${variant} text-primary`}
    >
      <div
        style={{ transform: "translate(-50%, -50%)" }}
        className="absolute w-10 h-10 top-0 left-0 rounded-full p-1 bg-primary"
      >
        <FormattedIcon name={variant} />
      </div>
      {content}
    </aside>
  );
};
