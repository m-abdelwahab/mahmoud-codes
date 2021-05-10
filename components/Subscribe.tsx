import React from "react";

export const Subscribe = () => {
  return (
    <div className="py-10 px-8 md:px-12">
      <div className="flex mx-auto  shadow-lg bg-card flex-col p-4 space-y-3 bg-gray-100 rounded-lg dark:bg-gray-900 max-w-lg">
        <h5 className="flex items-center">
          <span className="flex items-center pr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 16 16 12 12 8"></polyline>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
          </span>
          Follow along
        </h5>
        <p>
          If you want to know about any new posts or any thing I'm working on
          make sure you subscribe!
        </p>
        <form
          action="https://buttondown.email/api/emails/embed-subscribe/thisismahmoud"
          method="post"
          className="flex flex-col space-y-3  md:flex-row md:space-x-3 md:space-y-0"
        >
          <label className="flex flex-1">
            <input
              className="w-full focus:outline-none px-4 py-2 text-base text-primary bg-primary rounded shadow-sm focus:border-blue-500 border border-gray-200 dark:border-gray-800"
              placeholder="Email address"
              required={true}
              type="email"
              name="email"
            />
          </label>
          <input type="hidden" value="1" name="embed" />
          <input className="btn" type="submit" value="Subscribe" />
        </form>
        <p>
          <a
            className="underline hover:text-accent"
            href="https://buttondown.email/thisismahmoud/archive"
          >
            Check out the archive
          </a>
        </p>
      </div>
    </div>
  );
};
