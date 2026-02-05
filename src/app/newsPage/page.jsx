"use client";

import "@/styles/styles.css";
import "@/styles/index.css";
import "@/styles/news/page.css";

import BackButton from "../Components/backButton";
import Header from "../Components/header";
import Footer from "../Components/footer";

import Link from "next/link";

export default function newsPage() {
  return (
    <div className="eachPage">
      <Header />
      <div className="newsFv">
        <div className="title">
          <h1>NEWS</h1>
          <h2>お知らせ</h2>
        </div>
      </div>
      <div className="newsWrapper">
        <h2>すべて</h2>
        <div className="news">
          <p className="ymd">2025.11.12　|</p>
          <p className="newsDetails">
            季節限定ネイルチップの発売を開始いたしました
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
        <div className="news">
          <p className="ymd">2025.11.01　|</p>
          <p className="newsDetails">ホームページを開設しました！</p>
        </div>
      </div>
      <Link href="/">
        <div className="backButton">
          <BackButton />
        </div>
      </Link>
      <Footer />
    </div>
  );
}
