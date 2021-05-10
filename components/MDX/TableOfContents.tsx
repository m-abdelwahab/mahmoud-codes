import { useEffect, useState } from "react";

export const TableOfContents = () => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const headingElements = document.querySelectorAll("h2,h3");

    const callback = ([entry]) => {
      const activeHeading = entry.target;
      const links = Array.from(
        document.querySelectorAll(`.table-of-contents a`)
      );

      links.forEach((link) => {
        // @ts-ignore
        const [, href] = link.href.split("#");
        if (entry.isIntersecting && href === activeHeading.id) {
          links.forEach((l) => l.classList.remove("text-accent"));
          link.classList.add("text-accent");
        }
      });
    };

    const observer = new IntersectionObserver(callback, { threshold: [1.0] });

    const headings = Array.from(headingElements)
      .filter((heading) => heading.id !== "table-of-contents")
      .map((heading) => {
        observer.observe(heading);
        return {
          // @ts-ignore
          label: heading.innerText,
          href: `#${heading.id}`,
          tag: heading.tagName,
        };
      });

    setHeadings(headings);

    return () => {
      Array.from(headingElements).map((heading) => {
        observer.unobserve(heading);
      });
    };
  }, []);

  return (
    <aside
      style={{ maxHeight: "calc(100vh - 148px)" }}
      className="text-primary hidden xl:inline lg:m-12 py-24 sticky h-screen top-0 max-w-sm"
    >
      <h2
        id="table-of-contents"
        className="mt-5 text-xl capitalize font-medium tracking-wide mb-2"
      >
        Table of contents
      </h2>
      <ul className="table-of-contents">
        {headings.map((heading, i) => (
          <div key={i}>
            <li
              key={`heading-${heading.href}`}
              className={`my-2 ${heading.tag === "H3" ? "ml-8" : ""}`}
            >
              <a href={heading.href}>{heading.label}</a>
            </li>
          </div>
        ))}
      </ul>
    </aside>
  );
};
