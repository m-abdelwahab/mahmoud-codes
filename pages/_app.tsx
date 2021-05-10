import "../styles/tailwind.css";
import PlausibleProvider from "next-plausible";
import { Layout } from "components/Layout/Layout";
import SEO from "next-seo.config";
import { NextSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <PlausibleProvider domain="mahmoud.codes">
      <NextSeo {...SEO} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PlausibleProvider>
  );
}

export default MyApp;
