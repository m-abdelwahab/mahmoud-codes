import React from "react";

const Uses = () => {
  return (
    <div className="container mx-auto pt-16">
      <h1 className="mb-3 text-center text-6xl font-semibold tracking-wide">
        Uses{" "}
        <span role="img" aria-label="coding emoji">
          👨‍💻
        </span>
      </h1>
      <p className="mb-16 text-center text-xl font-normal">
        Tools I use for coding and creating videos
      </p>
      <div className="text-primary prose pb-24 mx-auto">
        <h2>Hardware*</h2>
        <ul>
          <li>MacBook Pro 13-inch 2017 16gb 1TB</li>
          <li>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://amzn.to/36Hz69r"
            >
              Sony ZV-1
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://amzn.to/3tnDiov"
            >
              Focusrite Scarlett Solo
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://amzn.to/3at6Ubu"
            >
              Shure beta 87a
            </a>
            +
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://amzn.to/3tmLcyl"
            >
              A55M
            </a>{" "}
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://amzn.to/3oKHnj3"
            >
              Samsung LU28E5 4k Monitor
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://amzn.to/3rjXdmh"
            >
              Sony WH-1000XM4
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://amzn.to/3cAf6t7"
            >
              Logitech MX Keys
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://amzn.to/2MusQuA"
            >
              Logitech MX Master 3
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://amzn.to/2PV98tt"
            >
              Godox SL-60w LED light
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://amzn.to/39JqoJr"
            >
              Viltrox L132 LED light
            </a>
          </li>
        </ul>
        <p>
          *: These are amazon affiliate links, you pay the same price for the
          item but you get to support me if you use it
        </p>
        <h2>Software</h2>
        <ul>
          <li>
            <a href="https://notion.so">Notion</a> for knowledge management and
            note-taking
          </li>
          <li>
            <a href="https://code.visualstudio.com/">Visual Studio Code</a> as
            my text editor
            <ul>
              <li>
                Theme:{" "}
                <a href="https://marketplace.visualstudio.com/items?itemName=GitHub.github-vscode-theme">
                  GitHub Dark
                </a>
              </li>
              <li>
                Font:{" "}
                <a href="https://www.jetbrains.com/lp/mono/">JetBrains Mono</a>
              </li>
              <li>
                Terminal: <a href="https://iterm2.com/">iTerm2</a>+{" "}
                <a href="https://github.com/denysdovhan/spaceship-prompt">
                  {" "}
                  spaceship prompt
                </a>{" "}
                + zsh
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Uses;
