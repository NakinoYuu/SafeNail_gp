"use client";

import "@/styles/home/application.css";

export default function IndexApplication() {
  return (
    <div className="applicationIndex">
      <div className="title">
        <h1>APPLIED KNOWLEDGE</h1>
        <h2>応用知識</h2>
      </div>
      <div className="call">
        <h6>
          セルフネイルを続けていく中で、「オフのタイミング」や「正しい外し方」はとても大切です。
          <br />
          間違ったオフや無理な除去は、爪が薄くなる・欠けるなどの原因になります。{" "}
        </h6>
        <h6>
          応用知識では、爪を守りながらネイルを楽しむための情報をわかりやすくまとめています。{" "}
        </h6>
      </div>
      <div className="AKDescription">
        <div className="AKDetails">
          <h2>オフの正しい周期</h2>
          <div className="img AKImg1"></div>
          <p>3〜4週間が推奨される理由を解説しています。 </p>
        </div>
        <div className="AKDetails">
          <h2>正しいオフ手順</h2>
          <div className="img AKImg2"></div>
          <p>
            オフに必要な道具や、爪を傷めにくい基本のオフ方法を掲載しています。{" "}
          </p>
        </div>
        <div className="AKDetails">
          <h2>チップでの長さだし</h2>
          <div className="img AKImg3"></div>
          <p>初心者でも挑戦しやすい手順を紹介しています。</p>
        </div>
      </div>
    </div>
  );
}
