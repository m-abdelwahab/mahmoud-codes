import fs from "fs";
import matter from "gray-matter";
import path from "path";

export const getAllPosts = () => {
  const POSTS_PATH = path.join(process.cwd(), "content");

  // postFilePaths is the list of all mdx files inside the posts_PATH directory
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

  return posts
};
