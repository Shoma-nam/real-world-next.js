// pages/editor.js
import React from "react";
// import Layout from "../components/Layout";

const Editor = () => {
  return (
    <div>
      <div className="bg-gray-100 min-h-screen pt-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <ul className="error-messages text-red-500 list-disc pl-5 mb-4">
              <li>That title is required</li>
            </ul>

            <form>
              <fieldset className="space-y-4">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg w-full px-3 py-2 border border-gray-300 rounded"
                    placeholder="Article Title"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control w-full px-3 py-2 border border-gray-300 rounded"
                    placeholder="What's this article about?"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control w-full px-3 py-2 border border-gray-300 rounded"
                    rows="8"
                    placeholder="Write your article (in markdown)"
                  ></textarea>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control w-full px-3 py-2 border border-gray-300 rounded"
                    placeholder="Enter tags"
                  />
                  <div className="tag-list flex flex-wrap gap-2 mt-2">
                    <span className="tag-default tag-pill bg-gray-200 rounded-full px-3 py-1 text-sm">
                      tag
                    </span>
                    {/* 他のタグもここに追加 */}
                  </div>
                </div>
                <button
                  className="btn btn-lg w-full md:w-auto px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  type="button"
                >
                  Publish Article
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
