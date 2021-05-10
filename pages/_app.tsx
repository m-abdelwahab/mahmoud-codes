import "../styles/tailwind.css";
import PlausibleProvider from "next-plausible";
import { Layout } from "components/Layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <PlausibleProvider domain="mahmoud.codes">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PlausibleProvider>
  );
}

export default MyApp;
