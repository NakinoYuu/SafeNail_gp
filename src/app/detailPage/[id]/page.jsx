"use client";
import "@/styles/styles.css";
import "@/styles/index.css";
import "@/styles/detailPage/detail.css";

import { useParams } from "next/navigation";
import { nailTips } from "@/data/nailTips";
import { useState } from "react";

import Header from "../../Components/header";
import Footer from "../../Components/footer";
import BackButton from "../../Components/backButton";
import BuyButton from "../../Components/buyButton";
import Link from "next/link";

export default function NailTipDetail() {
  const { id } = useParams();
  const tip = nailTips.find((t) => t.id === id);

  // ★ 追加：メイン画像の state
  const [mainImage, setMainImage] = useState(tip?.mainImage);

  if (!tip) return <p>商品が見つかりません</p>;
  return (
    <div className="nailTipDetailWrapper">
      <Header />

      <div className="nailTipDetailContent">
        <div className="nailTipDetailImgWrapper">
          {/* メイン画像 */}
          <div
            className="img nailTipDetailImgMain"
            style={{ backgroundImage: `url(${mainImage})` }}
          ></div>

          {/* サブ画像 */}
          <div className="img nailTipDetailImgSubWrapper">
            {tip.subImages.map((img, i) => (
              <div
                key={i}
                className="img nailTipDetailImgSub"
                style={{ backgroundImage: `url(${img})` }}
                onClick={() => setMainImage(img)}
              ></div>
            ))}
          </div>
        </div>

        <div className="nailTipDetailText">
          {tip.type === "limited" && <h6>{tip.title}</h6>}
          <p className="price">{tip.price}</p>

          <p>
            {tip.title}
            <br />
            {tip.description}
          </p>

          <BuyButton />
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
