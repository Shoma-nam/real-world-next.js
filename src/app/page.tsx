import ArticlesList from "./components/ArticlesList";
import Banner from "./components/Banner";
import FeedToggle from "./components/FeedToggle";
import Sidebar from "./components/Sidebar";
import "./globals.css";
import Head from "next/head";

export default function Home() {
  return (
    <div className="min-vh-100 bg-light">
      <Head>
        <title>Conduit</title>
      </Head>
      <div className="container py-4">
        <Banner title="Conduit" subtitle="A place to share your knowledge." />
        <div className="row">
          <div className="col-md-9">
            <FeedToggle />
            <ArticlesList />
          </div>
          <div className="col-md-3">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
