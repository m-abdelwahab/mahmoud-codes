import Head from "next/head";
import { Hero, PinnedPosts, Contact, YouTube } from "../components";

export default function Home({ videos }) {
  return (
    <div>
      <Head>
        <title>Mahmoud Abdelwahab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <YouTube videos={videos} />
      <PinnedPosts />
      <Contact />
    </div>
  );
}

export async function getStaticProps() {
  const CHANNEL_ID = "UCHtsW8bzaayqEOxIUtg-7eg";
  const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=4
  `);
  const data = await response.json();

  const videos = data.items
    .map(({ id, snippet }) => ({
      id: id.videoId,
      title: snippet.title,
    }))
    .filter(({ id }) => id !== undefined); // removes channel info from response

  return {
    props: {
      videos,
    },
    revalidate: 60 * 60, // 1 hour
  };
}
