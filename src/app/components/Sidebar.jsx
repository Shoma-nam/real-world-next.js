"use client";
import React, { useEffect, useState } from "react";
import { fetchPopularTags } from "../api"; // APIからデータを取得する関数をインポート

const Sidebar = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    // ページがロードされた際にタグデータを取得
    fetchPopularTags().then((data) => {
      setTags(data);
    });
  }, []);

  return (
    <div>
      <div className="sidebar">
        <p>Popular Tags</p>
        <div className="tag-list">
          {tags.map((tag) => (
            <a key={tag} href="" className="tag-pill tag-default">
              {tag}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
