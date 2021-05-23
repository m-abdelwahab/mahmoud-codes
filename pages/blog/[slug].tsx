import fs from "fs";
import matter from "gray-matter";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import Image from "next/image";
import path from "path";
import { Highlight, Subscribe } from "components";
import { TableOfContents, Share, Callout, CodeBlock } from "components/MDX";
import { useRouter } from "next/router";
import readingTime from "reading-time";
import { NextSeo } from "next-seo";

const components = {
  Image,
  Highlight,
  Callout,
  code: CodeBlock,
};

export default function PostPage({ source, frontMatter, readingTime }) {
  const router = useRouter();
  const { slug } = router.query;

  // @ts-ignore
  const url = router.pathname.replace("[slug]", slug);
  const content = hydrate(source, { components });

  return (
    <>
      <NextSeo
        twitter={{
          handle: "@thisismahmoud_",
          site: "@thisismahmoud_",
          cardType: "summary_large_image",
        }}
        openGraph={{
          type: "website",
          url: `https://mahmoudabdelwahab.com/${slug}`,
          title: `${frontMatter.title}`,
          description: `${frontMatter.description}`,
          images: [
            {
              url: `https://mahmoudabdelwahab.com/images/blog/${slug}/cover.png`,
              width: 800,
              height: 600,
              alt: `${frontMatter.cover.alt}`,
            },
          ],
        }}
      />
      <div className="mx-auto container px-2 md:px-16">
        <div className="flex justify-center pb-12">
          <div>
            <div className="px-8 md:px-10 py-20 prose sm:prose lg:prose-lg">
              <h1>{frontMatter.title}</h1>
              <div className="-mt-8 flex space-x-5">
                <p>{readingTime}</p>
                <p>-</p>
                <p>{frontMatter.date}</p>
              </div>
              <article>{content}</article>
            </div>
            <Share title={frontMatter.title} slug={url} />
            <Subscribe />
          </div>
          {frontMatter.showTOC ? <TableOfContents /> : null}
        </div>
      </div>
    </>
  );
}

const POSTS_PATH = path.join(process.cwd(), "content");

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await renderToString(content, {
    components,
    mdxOptions: {
      remarkPlugins: [
        require("remark-slug"),
        require("remark-external-links"),
        require("remark-autolink-headings"),
      ],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      readingTime: readingTime(content).text,
      nextPost: {},
      previousPost: {},
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
