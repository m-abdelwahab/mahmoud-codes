import React from "react";
import talks from "../data/talks.json";

const Talks = () => {
  return (
    <>
      <div className="bg-primary text-primary ">
        <div className="container mx-auto px-10 lg:px-32 pb-32 pt-16">
          <h1 className="mb-3 text-center text-5xl md:text-6xl font-semibold tracking-wide">
            Talks & Appearances
          </h1>
          <p className="mb-16 text-center text-xl font-normal">
            Public speaking has been an incredible experience, here's some of my
            talks and appearances{" "}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-y-10 gap-x-10">
            {talks.map((talk, i) => {
              const { topic, title, description, event, link } = talk;
              return (
                <div
                  className="bg-card rounded flex flex-col flex-grow text-primary shadow p-5 "
                  key={i}
                >
                  <a rel="noopener noreferrer" target="_blank" href={link}>
                    <div>
                      <span className="text-sm rounded-full bg-accent px-3 py-1 mr-2 ">
                        {topic}
                      </span>
                      <h2 className="text-xl my-5 font-medium hover:text-accent">
                        {title}
                      </h2>
                      <p className="text-lg mb-5 ">{description}</p>
                      <h3 className="text-sm">{event}</h3>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Talks;
