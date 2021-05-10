import Link from "next/link";
import React from "react";

export const YouTube = ({ videos }) => {
  return (
    <div className="container mx-auto px-10 lg:px-32 my-20">
      <h2 className="text-4xl font-medium">Recent Videos</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-10 md:grid-cols-2 ">
        {videos.map(({ id, title }) => {
          return (
            <div key={id}>
              <a
                href={`https://www.youtube.com/watch?v=${id}`}
                className="hover:text-accent flex flex-col flex-grow text-primary  rounded py-5 my-5"
              >
                <img
                  className="rounded shadow"
                  src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
                  alt="Video thumbnail"
                />
                <h2 className="text-2xl my-5 font-medium">{title}</h2>
              </a>
            </div>
          );
        })}
      </div>
      <Link href="/youtube">
        <a className="text-lg hover:text-accent">View All Videos →</a>
      </Link>
    </div>
  );
};
