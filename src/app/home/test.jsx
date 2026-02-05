"use client";

import "@/styles/home/test.css";
import Link from "next/link";

export default function IndexTest() {
  return (
    <div className="TestIndex">
      <div className="title">
        <h1>TEST</h1>
        <h2>ジェルネイル理解度テスト</h2>
      </div>
      <div className="testWrapper">
        <div className="img testImg"></div>
        <div className="choice">
          <p>多かった方をクリックしてね！あなたにぴったりの情報が見れるよ！</p>
          <div className="choiceButtonWrapper">
            <Link href="#foundation" className="choiceButton">
              <button>
                <p>A</p>
              </button>
            </Link>
            <Link href="#application" className="choiceButton">
              <button>
                <p>B</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
