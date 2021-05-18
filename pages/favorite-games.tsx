import React from "react";
import { NextSeo } from "next-seo";
import { Client } from "@notionhq/client";

const FavoriteGames = ({ pages }) => {
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
          url: `https://mahmoudabdelwahab.com/favorite-games`,
          title: `My favorite Video Games`,
          description: `Some of the games I played and loved`,
          images: [
            {
              url: `https://mahmoudabdelwahab.com/images/favorite-games.png`,
              width: 800,
              height: 600,
              alt: "favorite games",
            },
          ],
        }}
      />
      <div className="bg-primary text-primary min-h-full h-full pt-16">
        <div className="mx-auto container px-10 md:px-24 ">
          <div>
            <div>
              <div className="prose prose-lg container mx-auto">
                <h1 className="mb-3 text-center text-6xl font-semibold tracking-wide">
                  Favorite Games
                </h1>

                <p className="my-5">
                  Playing video games is my favorite form of entertainment. I
                  play on a PlayStation, but maybe in the future I might invest
                  in a gaming PC.
                </p>
                <p className="my-5">
                  {" "}
                  If you're passionate about video games and think there's
                  something that I should play, or if you want us to discuss
                  games in general, definitely reach out to me on Twitter.
                </p>
              </div>
              <div className="container mx-auto max-w-3xl grid grid-cols-1 md:grid-cols-2  gap-20 mt-14 px-6 md:px-0">
                {pages.map(({ properties, id }) => {
                  const { tags, title, review, rating, cover } = properties;

                  return (
                    <div className="max-w-xs" key={id}>
                      <img
                        className="rounded shadow-md w-64 mb-5"
                        src={cover.files[0].name}
                        alt="game cover"
                      />
                      <h2 className="my-3 font-medium text-xl">
                        {title.title[0].plain_text}
                      </h2>
                      <div
                        aria-label={rating.select.name.length}
                        className="my-2"
                        key={rating.select.id}
                      >
                        {rating.select.name}
                      </div>
                      <p className="my-4 overflow-ellipsis text-gray-700">
                        {review.rich_text.map((element, i) => (
                          <span key={i}>{element.plain_text}</span>
                        ))}
                      </p>

                      <div className="flex flex-wrap mt-4">
                        {tags.multi_select.map((tag) => {
                          return (
                            <p
                              key={tag.id}
                              className={`mr-2 my-2 text-sm px-2 py-1 rounded text-primary bg-accent`}
                            >
                              {tag.name}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavoriteGames;

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const databaseId = process.env.DATABASE_ID;

  const getPages = async () =>
    await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: "rating",
          direction: "descending",
        },
      ],
    });

  const pages = await getPages();

  return {
    props: { pages: pages.results },
  };
}
