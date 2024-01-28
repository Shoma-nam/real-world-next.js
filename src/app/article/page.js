// pages/article.js
import Head from "next/head";
import Banner from "../components/Banner";
import CommentForm from "../components/Commentform";
import ArticleMeta from "../components/Articlemeta";

export default function Article() {
  return (
    <div className="article-page">
      <Head>
        <title>Article Title - RealWorld</title>
      </Head>
      <Banner title="How to build webapps that scale" />

      <div className="container page">
        <ArticleMeta />

        <div className="row article-content">
          <div className="col-md-12">
            <p>
              Web development technologies have evolved at an incredible clip
              over the past few years.
            </p>
            {/* ...その他のコンテンツ... */}
          </div>
        </div>

        <hr />

        <CommentForm />
        {/* コメントリストコンポーネントなど */}
      </div>
    </div>
  );
}
