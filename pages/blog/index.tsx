import { motion } from "framer-motion";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import { useState } from "react";
import { Subscribe } from "components";

export default function Index({ posts }) {
  const emptyQuery = "";
  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  });

  const handleInputChange = (event) => {
    const query = event.target.value;

    // this is how we get all of our posts
    const allPosts = posts || [];

    // return all filtered posts
    const filteredData = allPosts.filter((post) => {
      // destructure data from post frontmatter

      const { description, title, categories } = post.data;
      return (
        // standardize data with .toLowerCase()
        // return true if the description, title or tags
        // contains the query string
        description.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase()) ||
        (categories &&
          categories
            .join("") // convert tags from an array to string
            .toLowerCase()
            .includes(query.toLowerCase()))
      );
    });

    // update state according to the latest query and results
    setState({
      query, // with current query string from the `Input` event
      filteredData, // with filtered data from posts.filter(post => (//filteredData)) above
    });
  };

  const { filteredData, query } = state;
  const hasSearchResults = filteredData && query !== emptyQuery;
  posts = hasSearchResults ? filteredData : posts;

  return (
    <>
      <div className="bg-primary text-primary pt-16">
        <div className="container mx-auto">
          <h1 className="mb-3 text-center text-6xl font-semibold tracking-wide">
            Blog
          </h1>
          <p className="mb-16 mt-8 text-center text-xl font-normal mx-4">
            Articles on DevRel, Developer Experience and the things I learn
          </p>
          <Subscribe />

          <div className="px-10 lg:px-32 flex flex-col md:pt-14 pt-6 mb-24">
            <input
              type="text"
              className="shadow-md bg-card text-primary max-w-sm  rounded p-3 mb-12"
              aria-label="Search"
              placeholder="Type to filter posts..."
              onChange={handleInputChange}
            />
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
              {posts.length === 0
                ? "No results"
                : posts
                    .filter((post) => post.data.published === true)
                    .map((post, i) => (
                      <li key={i}>
                        <Link
                          as={`/blog/${post.filePath.replace(/\.mdx?$/, "")}`}
                          href={`/blog/[slug]`}
                        >
                          <a>
                            <motion.div
                              key={post.filePath}
                              // @ts-ignore
                              whileHover={{ scale: 1.05, transition: 300 }}
                              className="bg-card shadow-md rounded p-5 flex flex-col"
                            >
                              <h1 className=" hover:text-accent text-2xl font-medium mb-3">
                                {post.data.title}
                              </h1>

                              <p className="text-lg mb-5 flex-grow">
                                {post.data.description}
                              </p>
                              <ul>
                                <li>
                                  {post.data.categories.map((category, i) => {
                                    return (
                                      <span
                                        key={i}
                                        className="text-sm rounded-full bg-accent px-3 py-1 mr-2 my-10"
                                      >
                                        {category}
                                      </span>
                                    );
                                  })}
                                </li>
                              </ul>
                            </motion.div>
                          </a>
                        </Link>
                      </li>
                    ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export function getStaticProps() {
  const POSTS_PATH = path.join(process.cwd(), "content");

  // postFilePaths is the list of all mdx files inside the POSTS_PATH directory
  const postFilePaths = fs
    .readdirSync(POSTS_PATH)
    // Only include md(x) files
    .filter((path) => /\.mdx?$/.test(path));

  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);
    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}
