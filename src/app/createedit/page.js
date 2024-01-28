"use client";

import React, { useState } from "react";

const Editor = () => {
  // 状態の初期化
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");

  // 記事を送信する関数
  const handleSubmit = async (e) => {
    e.preventDefault();

    const articleData = {
      title,
      description,
      body,
      tagList: tags.split(",").map((tag) => tag.trim()), // カンマ区切りのタグを配列に変換
    };

    try {
      const response = await fetch("http://localhost:3000/api/articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ article: articleData }),
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      // 成功したらフォームをリセット
      setTitle("");
      setDescription("");
      setBody("");
      setTags("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen pt-8">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit}>
            <fieldset className="space-y-4">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg w-full px-3 py-2 border border-gray-300 rounded"
                  placeholder="Article Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control w-full px-3 py-2 border border-gray-300 rounded"
                  placeholder="What's this article about?"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control w-full px-3 py-2 border border-gray-300 rounded"
                  rows="8"
                  placeholder="Write your article (in markdown)"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                ></textarea>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control w-full px-3 py-2 border border-gray-300 rounded"
                  placeholder="Enter tags"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                />
              </div>
              <button
                className="btn btn-lg w-full md:w-auto px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                type="submit"
              >
                Publish Article
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Editor;
