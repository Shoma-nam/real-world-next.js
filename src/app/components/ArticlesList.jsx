"use client";

import { useState, useEffect } from "react";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch("http://localhost:3000/api/articles");
      const data = await response.json();
      setArticles(data);
    };

    fetchArticles();
  }, []);

  return (
    <div>
      {articles.map((article, index) => (
        <div key={index}>
          <h2>{article.title}</h2>
          <p>{article.body}</p>
        </div>
      ))}
    </div>
  );
};

export default ArticlesList;
