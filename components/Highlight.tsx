import React, { useState, useEffect } from "react";
import { RoughNotation } from "react-rough-notation";
import { useInView } from "react-intersection-observer";

export const Highlight = ({
  content,
  type = "underline",
  color = "#000000",
  delay = 1000,
}) => {
  const [isAnimated, setIsAnimated] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "50px 0px",
  });
  useEffect(() => {
    inView ? setIsAnimated(true) : setIsAnimated(false);
  }, [setIsAnimated, inView]);
  return (
    <span
      // @ts-ignore
      style={{ zIndex: "-5" }}
      ref={ref}
      className="inline"
    >
      <RoughNotation
        // @ts-ignore
        type={type}
        show={isAnimated}
        animationDelay={delay}
        color={color}
      >
        {content}
      </RoughNotation>
    </span>
  );
};
