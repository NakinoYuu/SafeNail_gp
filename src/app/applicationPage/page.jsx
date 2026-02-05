"use client";

import "@/styles/styles.css";
import "@/styles/index.css";
import "@/styles/home/application.css";
import "@/styles/applicationPage/page.css";

import BackButton from "../Components/backButton";
import Header from "../Components/header";
import Footer from "../Components/footer";

import Link from "next/link";

export default function applicationPage() {
  return (
    <div className="eachPage">
      <Header />
      <div className="applicationFv">
        <div className="title">
          <h1>APPLIED KNOWLEDGE</h1>
          <h2>応用知識</h2>
        </div>
      </div>
      <div className="applicationWrapper">
        <h4>【知識をさらに身につけよう！】</h4>
        <div className="knowledge knowledge1">
          <h2>①オフの正しい周期とその理由</h2>
          <div className="detail">
            <p className="weeks">
              ジェルネイルの推奨付け替え周期は、3〜4週間です。
            </p>
            <p>正しい周期を守ることで</p>
            <div className="offDescriptionWrapper">
              <div className="offDescriptionContent">
                <div className="img troubleDetailsImg troubleDetailsImg1"></div>
                <p>浮き・欠け</p>
              </div>
              <div className="offDescriptionContent">
                <div className="img troubleDetailsImg troubleDetailsImg2"></div>
                <p>爪への負担</p>
              </div>
              <div className="offDescriptionContent">
                <div className="img troubleDetailsImg troubleDetailsImg3"></div>
                <p>トラブル</p>
              </div>
              <p>
                これらの原因がのリスクが減少するといったメリットがあります。
              </p>
            </div>
            <p>
              オフは面倒な作業ではなく、お爪を守るために欠かせない大切な工程です。正しい周期を守り、お爪を大切にしてあげてください
              ♪
            </p>
          </div>
        </div>
        <div className="knowledge knowledge2">
          <h2>②ジェルの種類によるオフ方法の違い</h2>
          <div className="detail">
            <p>・ソフトジェル：アセトンオフ可能</p>
            <p className="detail">
              →ウレタン系樹脂が主で柔軟性があり、アセトン(溶剤)で溶かしてオフできます。
            </p>
            <p>・ハードジェル：削りオフが必要</p>
            <p className="detail">
              →アクリル系樹脂が主で非常に硬く丈夫で削って落とす必要があります。
            </p>
            <p>使用ジェルの種類に合った方法で、正しくオフを行ってください ♪</p>
          </div>
        </div>
        <h4>【オフについて】</h4>
        <div className="toolWrapper">
          <h2>・必要な道具</h2>
          <div className="toolContents">
            <p>
              ・メタルプッシャー(ウッドスティック等も可)
              <br />
              ・ネイルファイル
              <br />
              ・ネイルマシン
              <br />
              ・集塵機
              <br />
              ・アセトンリムーバー
              <br />
              ・コットン
              <br />
              ・アルミホイル
            </p>
            <div className="img tool tool2"></div>
          </div>
        </div>
        <div className="toolWrapper">
          <h2>・オフの手順</h2>
          <div className="procedureWrapper">
            <h6>①カラージェル・トップジェルを削る</h6>
            <div className="detail">
              <p>
                ネイルファイルまたはマシンを使用し、トップジェルとカラージェルの表面を軽く削ります。アセトンが浸透しやすくなるための下準備です。
              </p>
              <div className="point">
                <p>ポイント</p>
                <p>
                  ・ツヤがなくなる程度まで
                  <br />
                  ・自爪が見えるまで削らない
                </p>
              </div>
            </div>
            <h6>②コットンにアセトンを含ませる</h6>
            <p className="detail">
              コットンにアセトンをたっぷり含ませ、爪全体を覆うように乗せます。
              <br />
              ※乾いているとオフできないため、十分に染み込ませることが大切です。
            </p>
            <h6>③アルミホイルで包む</h6>
            <p className="detail">
              アセトンを含ませたコットンの上から、空気が入らないようにアルミホイルで指先をしっかり包みます。
              <br />
              この状態で10〜15分ほど放置します。
            </p>
            <h6>④浮いてきたジェルを優しく除去する</h6>
            <div className="detail">
              <p>時間を置くと、ジェルがふやけて浮いてきます。</p>
              <div className="point">
                <p>メタルプッシャーやウッドスティックを使い、</p>
                <p>
                  ・力を入れない
                  <br />
                  ・浮いている部分のみ
                </p>
                <p>を優しく押し出すように取り除きます</p>
              </div>
            </div>
            <h6 className="specialProcedure">
              ※一度で取れない場合は、②〜④を繰り返しましょう。
            </h6>
            <h6>⑤残ったジェルを整える</h6>
            <p className="detail">
              完全に取りきれなかった部分は、ネイルファイルで軽く表面を整えます。
              <br />
              削りすぎは背爪を薄くする原因になるため注意してください。
            </p>
            <h6>⑥手洗い・保湿</h6>
            <p className="detail">
              手を石鹸で洗い、手の汚れを落とした後、ハンドクリームやオイルで保湿する
              。
            </p>
          </div>
        </div>
        <h4>【チップでの長さだし方法】</h4>
        <div className="toolWrapper">
          <h2>・必要な道具</h2>
          <div className="toolContents">
            <p>
              ・ネイルチップ
              <br />
              ・ネイルファイル
              <br />
              ・ベースジェル
              <br />
              ・UV/LEDライト
              <br />
              ・メタルプッシャー(ウッドスティック等も可)
              <br />
              ・キューティクルニッパー
              <br />
              ・ガーゼ
              <br />
              ・エタノール <br />
              ・水
              <br />
              ・筆(ボトルタイプなら不要)
            </p>
            <div className="img tool tool3"></div>
          </div>
        </div>
        <div className="toolWrapper">
          <h2>・長さだしの手順</h2>
          <div className="procedureWrapper">
            <h6>①チップサイズを選ぶ</h6>
            <div className="detail">
              <div className="point">
                <p>自爪の横幅に合うチップを選びます。</p>
                <p>
                  ・小さい場合：圧迫・浮きの原因
                  <br />
                  ・大きい場合：不自然な仕上がり
                </p>
                <p>迷った場合は少し大きめを削って調整するのがおすすめです。</p>
              </div>
            </div>
            <h6>②コットンにアセトンを含ませる</h6>
            <div className="detail">
              <div className="point">
                <p>ネイルファイルを使い、</p>
                <p>
                  ・チップの根元カーブ
                  <br />
                  ・長さ
                </p>
                <p>
                  を自爪にフィットするように整えます。ここでのフィット感が、持ちの良さに直結します。
                </p>
              </div>
            </div>
            <h6>③甘皮処理</h6>
            <p className="detail">
              ①先端を水で濡らしたメタルプッシャーで甘皮を押し上げる(角度は約45度)
              <br />
              ②余分な甘皮をキューティクルニッパーでカット
              <br />
              ③水を含ませたガーゼで爪表面の汚れを拭き取る
              <br />
              ④エタノールを含ませたガーゼで油分除去を行う
            </p>
            <h6>④接着剤を塗布</h6>
            <div className="detail">
              <div className="point">
                <p>ネイルファイルを使い、</p>
                <p>
                  ・チップの根元カーブ
                  <br />
                  ・長さ
                </p>
                <p>
                  を自爪にフィットするように整えます。ここでのフィット感が、持ちの良さに直結します。
                </p>
              </div>
              <p>
                ※ここで爪からはみ出したジェルは、硬化前にエタノールを含ませたコットンでよく拭き取ってください。
              </p>
            </div>
            <h6>⑤ チップを装着する </h6>
            <div className="detail">
              <div className="point">
                <p>
                  チップを甘皮側から斜めに置き、先端に向かって倒すように密着させます。
                </p>
                <p>
                  ・空気が入らないように押さえる
                  <br />
                  ・位置がずれないよう注意
                </p>
                <p>ジェル装着の場合は、そのままライトで硬化します。 </p>
              </div>
            </div>

            <h6>⑥固定・確認</h6>
            <div className="detail">
              <div className="point">
                <p>しっかり密着しているかを確認し、</p>
                <p>
                  ・浮き
                  <br />
                  ・ズレ
                  <br />
                  ・隙間
                </p>
                <p>がなければ装着完了です。 </p>
              </div>
              <p>
                必要に応じて、上からベースジェルやトップジェルで補強すると強度が上がります
                ♪
              </p>
            </div>
          </div>
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
