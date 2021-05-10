const title = "Mahmoud Abdelwahab - Developer, writer, and maker";
const description =
  "Developer, writer, and maker. Obsessed with & creating exceptional, high-quality, content and applications.";

const SEO = {
  title,
  description,
  canonical: "https://mahmoudabdelwahab.com",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://mahmoudabdelwahab.com",
    title,
    description,
    images: [
      {
        url: "https://mahmoudabdelwahab.com/images/banner.jpg",
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    handle: "@thisismahmoud_",
    site: "@thisismahmoud_",
    cardType: "summary_large_image",
  },
};

export default SEO;
