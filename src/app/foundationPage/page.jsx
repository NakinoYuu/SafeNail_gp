"use client";

import "@/styles/styles.css";
import "@/styles/index.css";
import "@/styles/home/foundation.css";
import "@/styles/foundation/page.css";

import BackButton from "../Components/backButton";
import Header from "../Components/header";
import Footer from "../Components/footer";

import Link from "next/link";

export default function foundationPage() {
  return (
    <div className="eachPage">
      <Header />
      <div className="foundationFv">
        <div className="title">
          <h1>FUNDAMENTAL KNOWLEDGE</h1>
          <h2>基礎知識</h2>
        </div>
      </div>
      <div className="foundationWrapper">
        <h4>【以下3つの知識をつけた上で施術をしよう！】</h4>
        <h6>
          ※ジェルネイルは正しい知識がないまま行うと、爪トラブルやアレルギーにつながる可能性があります。
          <br />
          まずは安全に楽しむための基本知識を確認しましょう。
        </h6>
        <div className="knowledge knowledge1">
          <h2>①お爪の構造</h2>
          <div className="detail">
            <div className="plateDescriptionWrapper">
              <div className="img plateDescriptionImg"></div>
              <div className="plateDescription">
                <p>爪は以下の三層に分かれています。</p>
                <div className="plateContents">
                  <p>①一層目：背爪(トッププレート)</p>
                  <p>②二層目：中層(ミドルプレート)</p>
                  <p>③三層目：複層(アンダープレート)</p>
                </div>
                <p>
                  ジェルネイルは、一番上の背爪(トッププレート)のみにジェルを塗布して施術します。
                </p>
              </div>
            </div>
            <div className="Cause">
              <p>
                オフの際に削りすぎたり、無理にめくって剥がしてしまうと背爪が薄くなり、
              </p>
              <p>
                ・爪が脆くなる
                <br />
                ・乾燥しやすくなる
                <br />
                ・二枚爪になりやすくなる
              </p>
              <p>
                といったトラブルの原因になります。ジェルネイルを継続するためにも爪への負担を最小限に抑えましょう
                ♪
              </p>
            </div>
          </div>
        </div>
        <div className="knowledge knowledge2">
          <h2>②ジェルアレルギーについて</h2>
          <div className="detail">
            <p>
              ジェルアレルギーとは、ジェルネイルの成分(HEMAなど)が皮膚に触れることで免疫反応が起こり、
            </p>
            <div className="allergyDetailsImgWrapper">
              <div className="allergyDetailsImgContents">
                <div className="img allergyDetailsImg1 allergyDetailsImg"></div>
                <p>かゆみ</p>
              </div>
              <div className="allergyDetailsImgContents">
                <div className="img allergyDetailsImg2 allergyDetailsImg"></div>
                <p>赤み</p>
              </div>
              <div className="allergyDetailsImgContents">
                <div className="img allergyDetailsImg3 allergyDetailsImg"></div>
                <p>腫れ</p>
              </div>
              <div className="allergyDetailsImgContents">
                <div className="img allergyDetailsImg4 allergyDetailsImg"></div>
                <p>湿疹</p>
              </div>
            </div>
            <p>などの症状が現れるアレルギー反応のことです。</p>
            <div className="Cause">
              <p>主な原因</p>
              <p>
                ・ジェルのはみ出し
                <br />
                ・未硬化ジェルが皮膚に触れる
              </p>
              <p>
                一度なると完治が難しいと言われているため、施術中は皮膚にジェルを付けないことを常に意識し、セルフネイルライフを楽しんでください
                ♪
              </p>
            </div>
          </div>
        </div>
        <div className="knowledge knowledge3">
          <h2>③ネイルの推奨周期</h2>
          <div className="detail">
            <p>
              ジェルネイルの推奨付け替え周期は3〜4週間です。正しい周期を守り、お爪を大切にしてあげてください
              ♪<br />
              ※詳しくは応用編へ。
            </p>
          </div>
        </div>
        <h4>【セルフネイルについて】</h4>
        <div className="toolWrapper">
          <h2>・必要な道具</h2>
          <div className="toolContents">
            <p>
              ・メタルプッシャー(ウッドスティック等も可)
              <br />
              ・ガーゼ
              <br />
              ・コットン
              <br />
              ・キューティクルニッパー
              <br />
              ・ネイルファイル
              <br />
              ・ベースジェル
              <br />
              ・カラージェル
              <br />
              ・トップジェル
              <br />
              ・UV/LEDライト
              <br />
              ・筆(ボトルタイプなら不要)
              <br />
              ・エタノール
              <br />
              ・水
            </p>
            <div className="img tool"></div>
          </div>
        </div>
        <div className="toolWrapper">
          <h2>・ジェルネイルの手順</h2>
          <div className="procedureWrapper">
            <h6>①手指消毒</h6>
            <p className="detail">手や爪についた汚れ・雑菌を落とす</p>
            <h6>②爪の形を好きな形に整える</h6>
            <p className="detail">
              ネイルファイルを使用し、好みの形に整えます。
              <br />
              ※仕上がりの美しさに大きく影響します。
            </p>
            <h6>③甘皮処理(ネイルの持ち・見た目を良くするため)</h6>
            <p className="detail">
              ①先端を水で濡らしたメタルプッシャーで甘皮を押し上げる(角度は約45度)
              <br />
              ②余分な甘皮をキューティクルニッパーでカット
              <br />
              ③水を含ませたガーゼで爪表面の汚れを拭き取る
              <br />
              ④エタノールを含ませたガーゼで油分除去を行う
            </p>
            <h6>④ジェルの塗布</h6>
            <p className="detail">
              ①ベースジェルを塗布する→ライトに入れて硬化する
              <br />
              ②カラージェルを塗布する→ライトに入れて硬化する
              <br />
              ③トップジェルを塗布する→ライトに入れて硬化する
              <br />
              ※硬化時間は各メーカーの指定時間を参考にしてください。
              <br />
              ※ジェルが皮膚にはみ出した場合は、アレルギー防止のためエタノールを含ませたコットンで必ず拭き取る。
            </p>

            <h6 className="procedure5">
              ⑤トップの未硬化ジェルをエタノールを含ませたコットンで拭き取る(ノーワイプトップ使用時は不要)
            </h6>
            <h6>⑥ 手洗い・保湿</h6>
            <p className="detail">
              手を石鹸で洗い、手の汚れを落とした後、ハンドクリームやオイルで保湿する
            </p>
          </div>
        </div>

        <div></div>
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
