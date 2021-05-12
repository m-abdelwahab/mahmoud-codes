import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div className="bg-primary text-primary min-h-full h-full pt-16">
      <div className="mx-auto container px-10 md:px-24 ">
        <div>
          <div>
            <div className="prose prose-lg container mx-auto">
              <h1 className="mb-3 text-center text-6xl font-semibold tracking-wide">
                About Me
              </h1>
              <div>
                <p>
                  I'm currently a Developer Advocate at{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://prisma.io"
                    className="text-accent"
                  >
                    <span role="img" aria-label="prism emoji">
                      ◮
                    </span>{" "}
                    Prisma.io{" "}
                  </a>
                  , where I create videos, write articles, and help developers
                  learn about Prisma and how to use it.
                </p>
                <p>
                  I'm also an instructor at{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://egghead.io/instructors/mahmoud-abdelwahab"
                    className="text-accent"
                  >
                    Egghead.io{" "}
                  </a>
                  , where I create instructional screencasts on various
                  Front-end technologies.
                </p>
                <p>
                  I create videos on my{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.youtube.com/MahmoudAbdelwahab"
                    className="text-accent"
                  >
                    YouTube channel
                  </a>{" "}
                  , publish posts on my{" "}
                  <Link href="/blog">
                    <a className="text-accent">blog</a>
                  </Link>{" "}
                  and{" "}
                  <Link href="/talks">
                    <a className="text-accent">speak</a>
                  </Link>{" "}
                  at conferences/meetups.
                </p>

                <p className="my-5">
                  I enjoy reading and writing about a variety of topics like
                  software development, design and tech careers. I'm also a big
                  advocate for learning in public.
                </p>

                <p className="my-5">
                  I love meeting and talking to new people, so feel free to send
                  me an email or DM me on any social media platform.
                </p>

                <h3>Speaker Bio</h3>
                <p className="my-5">
                  Mahmoud is passionate about Software Development and Developer
                  communities. He currently works as a Developer Advocate at{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://prisma.io"
                    className="text-accent"
                  >
                    Prisma.io{" "}
                  </a>
                  . He loves creating videos on his YouTube Channel and in his
                  free time, he teaches at{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://egghead.io/instructors/mahmoud-abdelwahab"
                    className="text-accent"
                  >
                    Egghead.io{" "}
                  </a>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
