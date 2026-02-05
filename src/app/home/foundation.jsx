"use client";

import "@/styles/home/foundation.css";

export default function IndexFoundation() {
  return (
    <div className="foundationIndex">
      <div className="title">
        <h1>FUNDAMENTAL KNOWLEDGE</h1>
        <h2>基礎知識</h2>
      </div>
      <div className="call">
        <h6>
          セルフネイルを、もっと安心して楽しむために。
          <br />
          ジェルネイルは正しい知識がないまま行うと、爪トラブルやアレルギーにつながる可能性があります。
        </h6>
        <h6>
          基礎知識では、安全に・長くネイルを楽しむための情報をわかりやすくまとめています。
        </h6>
      </div>
      <div className="FNDescription">
        <div className="FNDetails">
          <h2>お爪の構造</h2>
          <div className="img FNImg1"></div>
          <p>
            爪が脆苦なる原因や、乾燥・トラブルの原因を詳しく掲載しています。
          </p>
        </div>
        <div className="FNDetails">
          <h2>ジェルアレルギーについて</h2>
          <div className="img FNImg2"></div>
          <p>
            かゆみ・赤み・腫れ・湿疹などの症状の原因や、回避方法を説明しています。
          </p>
        </div>
        <div className="FNDetails">
          <h2>ジェルネイルの手順</h2>
          <div className="img FNImg3"></div>
          <p>ジェルネイルに必要な道具や、手順を掲載しています。</p>
        </div>
      </div>
    </div>
  );
}
