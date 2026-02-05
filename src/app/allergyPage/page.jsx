"use client";

import "@/styles/styles.css";
import "@/styles/index.css";
import "@/styles/home/allergy.css";
import "@/styles/allergy/page.css";

import BackButton from "../Components/backButton";
import Header from "../Components/header";
import Footer from "../Components/footer";

import Link from "next/link";

export default function allergyPage() {
  return (
    <div className="eachPage">
      <Header />
      <div className="allergyFv">
        <div className="title">
          <h1>ALLERGY EXPERIENCE</h1>
          <h2>ジェルアレルギー体験談</h2>
        </div>
      </div>
      <div className="allergyWrapper">
        <h2>すべて</h2>
        {/* 一つ目 */}
        <div className="experience">
          <div className="img experienceImg experienceImg1"></div>
          <div className="experienceText">
            <h3 className="experienceTitle">私のジェルアレルギー体験談</h3>
            <p>
              2年前に経験したジェルアレルギーの体験談と、最後の写真まで伸ばすのに役立ったヒントを共有したいと思っています。最初の写真は、私が始めたときの状態です。BIABを使い始めたのですが、Amazonで安いものを購入しました。約2ヶ月間使用したところ、2枚目の写真のように、爪に薄く曇ったような見た目と、いくつかの茶色い斑点(おそらくグリーンネイルと水分が閉じ込められたもの）…
            </p>
          </div>
          <Link
            href="https://www.reddit.com/r/GelX_Nails/comments/1gbd9hm/my_gel_allergy_journey/?tl=ja"
            className="experienceDetail"
          >
            <button>
              <p>詳細</p>
            </button>
          </Link>
        </div>
        {/* 二つ目 */}
        <div className="experience">
          <div className="img experienceImg experienceImg2"></div>
          <div className="experienceText">
            <h3 className="experienceTitle">私のジェルアレルギー体験談</h3>
            <p>
              2年前に経験したジェルアレルギーの体験談と、最後の写真まで伸ばすのに役立ったヒントを共有したいと思っています。最初の写真は、私が始めたときの状態です。BIABを使い始めたのですが、Amazonで安いものを購入しました。約2ヶ月間使用したところ、2枚目の写真のように、爪に薄く曇ったような見た目と、いくつかの茶色い斑点(おそらくグリーンネイルと水分が閉じ込められたもの）…
            </p>
          </div>
          <Link
            href="https://www.reddit.com/r/GelX_Nails/comments/1gbd9hm/my_gel_allergy_journey/?tl=ja"
            className="experienceDetail"
          >
            <button>
              <p>詳細</p>
            </button>
          </Link>
        </div>
        {/* 三つ目 */}
        <div className="experience">
          <div className="img experienceImg experienceImg3"></div>
          <div className="experienceText">
            <h3 className="experienceTitle">私のジェルアレルギー体験談</h3>
            <p>
              2年前に経験したジェルアレルギーの体験談と、最後の写真まで伸ばすのに役立ったヒントを共有したいと思っています。最初の写真は、私が始めたときの状態です。BIABを使い始めたのですが、Amazonで安いものを購入しました。約2ヶ月間使用したところ、2枚目の写真のように、爪に薄く曇ったような見た目と、いくつかの茶色い斑点(おそらくグリーンネイルと水分が閉じ込められたもの）…
            </p>
          </div>
          <Link
            href="https://www.reddit.com/r/GelX_Nails/comments/1gbd9hm/my_gel_allergy_journey/?tl=ja"
            className="experienceDetail"
          >
            <button>
              <p>詳細</p>
            </button>
          </Link>
        </div>
        {/* 四つ目 */}
        <div className="experience">
          <div className="img experienceImg experienceImg4"></div>
          <div className="experienceText">
            <h3 className="experienceTitle">私のジェルアレルギー体験談</h3>
            <p>
              2年前に経験したジェルアレルギーの体験談と、最後の写真まで伸ばすのに役立ったヒントを共有したいと思っています。最初の写真は、私が始めたときの状態です。BIABを使い始めたのですが、Amazonで安いものを購入しました。約2ヶ月間使用したところ、2枚目の写真のように、爪に薄く曇ったような見た目と、いくつかの茶色い斑点(おそらくグリーンネイルと水分が閉じ込められたもの）…
            </p>
          </div>
          <Link
            href="https://www.reddit.com/r/GelX_Nails/comments/1gbd9hm/my_gel_allergy_journey/?tl=ja"
            className="experienceDetail"
          >
            <button>
              <p>詳細</p>
            </button>
          </Link>
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
