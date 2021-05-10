import React from "react";
import Link from "next/link";
import pinnedPosts from "../data/pinnedPosts.json";

export const PinnedPosts = () => {
  return (
    <div className="container mx-auto px-10 lg:px-32 my-20">
      <h2 className="text-4xl font-medium">Featured Posts</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-10 md:grid-cols-2 ">
        {pinnedPosts.map(({ title, description, categories, link }, i) => {
          return (
            <div key={i}>
              <Link href={link}>
                <a className="flex flex-col flex-grow text-primary  rounded bg-card shadow p-5 my-5">
                  <h2 className="text-2xl my-5 font-medium">{title}</h2>
                  <p
                    className="text-lg mb-5"
                    dangerouslySetInnerHTML={{
                      __html: description,
                    }}
                  ></p>
                  <ul>
                    <li>
                      {categories.map((category, i) => {
                        return (
                          <span
                            key={i}
                            className="text-sm rounded-full bg-accent px-3 py-1 mr-2 hover:bg-accent-hover"
                          >
                            {category}
                          </span>
                        );
                      })}
                    </li>
                  </ul>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
      <Link href="/blog">
        <a className="text-lg hover:text-accent">View All Posts →</a>
      </Link>
    </div>
  );
};
