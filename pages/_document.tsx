import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="google-site-verification"
            content="qOunR7OuJqcnlnsVlFBXMimz8mmRyuUL9NZr_h7ftkM"
          />
        </Head>
        <body>
          <script src="noflash.js" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
