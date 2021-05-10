import React from "react";

const Welcome = () => {
  return (
    <div className="bg-primary text-primary min-h-full h-full pt-16">
      <div className="py-10 mx-auto container px-10 md:px-24 ">
        <div>
          <div>
            <div className="prose prose-lg container mx-auto">
              <h1 className="mb-3 text-center text-6xl capitalize font-semibold tracking-wide">
                Welcome to the newsletter!
              </h1>
              <p className="my-5">
                Thank you so much for subscribing! My goal with this newsletter
                is to provide value and possibly meet new people. What I love
                about newsletters is that they cut through the noise and give
                you total control of who can reach you.
              </p>

              <p className="my-5">
                I enjoy reading and writing about a variety of topics like
                software development, design and tech careers. I'm also a big
                advocate for learning in public.
              </p>
              <p className="my-5">
                I love meeting and talking to new people, so feel free to send
                me an email or DM me on Twitter.
              </p>
              <p>
                I create videos on my{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.youtube.com/MahmoudAbdelwahab"
                  className="text-accent"
                >
                  YouTube channel.
                </a>{" "}
              </p>
              <p>
                Here's a list of my all-time favorite articles/videos
                <ul>
                  <li>
                    <a href="https://www.swyx.io/learn-in-public/">
                      Learn in Public{" "}
                    </a>
                    - by Swyx.io
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
