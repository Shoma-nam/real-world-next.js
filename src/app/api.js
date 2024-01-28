// api.js
async function fetchPopularTags() {
  try {
    const response = await fetch("APIのエンドポイント"); // タグデータを提供するAPIのURLを指定
    if (!response.ok) {
      throw new Error("タグデータの取得に失敗しました。");
    }
    const data = await response.json();
    return data.tags; // タグデータが含まれている適切なプロパティを指定
  } catch (error) {
    console.error("タグデータの取得エラー:", error);
    return [];
  }
}

export { fetchPopularTags };
