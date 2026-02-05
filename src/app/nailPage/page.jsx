"use client";

import "@/styles/styles.css";
import "@/styles/index.css";
import "@/styles/home/nail.css";
import "@/styles/nail/page.css";

import { useRef, useState } from "react";

import Header from "../Components/header";
import BackButton from "../Components/backButton";
import BuyButton from "../Components/buyButton";
import Footer from "../Components/footer";

import { nailTips } from "@/data/nailTips";

import Link from "next/link";

export default function nailPage() {
  const [tab, setTab] = useState("all");
  const filteredTips =
    tab === "all" ? nailTips : nailTips.filter((t) => t.type === tab);

  return (
    <div className="eachPage">
      <Header />
      <div className="nailFv">
        <div className="title">
          <h1>NAIL TIP</h1>
          <h2>ネイルチップ</h2>
        </div>
      </div>
      <div className="nailWrapper">
        <h2
          onClick={() => setTab("all")}
          className={tab === "all" ? "active" : ""}
        >
          <p>すべて</p>
        </h2>
        <h2
          onClick={() => setTab("limited")}
          className={tab === "limited" ? "active" : ""}
        >
          <p>限定ネイル</p>
        </h2>
        <h2
          onClick={() => setTab("regular")}
          className={tab === "regular" ? "active" : ""}
        >
          <p>定額メニュー</p>
        </h2>
      </div>
      <div className="nailGrid">
        {filteredTips.map((tip) => (
          <div className="nailTip" key={tip.id}>
            <div
              className="img tipImg"
              style={{ backgroundImage: `url(${tip.mainImage})` }}
            ></div>
            <div className="tipText">
              <h2>{tip.title}</h2>
              <p>{tip.price}</p>
              <Link href={`/detailPage/${tip.id}`}>
                <button className="tipDetail">
                  <p>詳細</p>
                </button>
              </Link>
              <BuyButton />
            </div>
          </div>
        ))}
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
