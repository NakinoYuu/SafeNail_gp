"use client";

import "@/styles/home/news.css";

export default function indexNews() {
  return (
    <div className="newsIndex">
      <div className="title">
        <h1>NEWS</h1>
        <h2>お知らせ</h2>
      </div>
      <div className="newsWrapper">
        <div className="news">
          <p className="ymd">2025.11.12　|</p>
          <p className="newsDetails">
            季節限定ネイルチップの発売を開始しました
          </p>
        </div>
        <div className="news">
          <p className="ymd">2025.11.11　|</p>
          <p className="newsDetails">新作ネイルチップのご案内(追加)</p>
        </div>
        <div className="news">
          <p className="ymd">2025.11.10　|</p>
          <p className="newsDetails">新作ネイルチップのご案内</p>
        </div>
      </div>
    </div>
  );
}
