// components/ArticlePreview.js
const ArticlePreview = () => {
  return (
    <div className="article-preview">
      <div className="article-meta">
        <a href="/profile/example">
          <img src="http://i.imgur.com/Qr71crq.jpg" alt="Profile" />
        </a>
        <div className="info">
          <a href="/profile/example" className="author">
            Author Name
          </a>
          <span className="date">January 20th</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart"></i> 29
        </button>
      </div>
      <a href="/article/example-article" className="preview-link">
        <h1>Article Title</h1>
        <p>This is the description for the post.</p>
        <span>Read more...</span>
        <ul className="tag-list">
          <li className="tag-default tag-pill tag-outline">Tag 1</li>
          {/* 他のタグ */}
        </ul>
      </a>
    </div>
  );
};

export default ArticlePreview;
