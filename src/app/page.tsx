import ArticlePreview from "./components/Articlepreview";
import Banner from "./components/Banner";
import FeedToggle from "./components/Feedtoggle";
import Sidebar from "./components/Sidebar";
import "./globals.css";
import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <meta charSet="utf-8" />
        <title>Conduit</title>
        <link
          href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="//fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic"
          rel="stylesheet"
          type="text/css"
        />
        <link
          rel="stylesheet"
          href="https://demo.productionready.io/main.css"
        />
      </Head>
      <div className="container mx-auto px-4">
        <Banner title={undefined} subtitle={undefined} />
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-3/4 px-4">
            <FeedToggle />
            <div className="mt-8">
              <ArticlePreview />
              <ArticlePreview />
              <ArticlePreview />
              {/* さらに多くのArticlePreviewコンポーネントを追加 */}
            </div>
          </div>
          <div className="w-full md:w-1/4 px-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
