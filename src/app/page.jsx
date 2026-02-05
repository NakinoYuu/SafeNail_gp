"use client";

import "@/styles/styles.css";
import "@/styles/index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Header from "./Components/header";
import IndexFv from "./home/fv";
import IndexNews from "./home/news";
import Button from "./Components/button";
import IndexTest from "./home/test";
import IndexFoundation from "./home/foundation";
import IndexApplication from "./home/application";
import IndexAllergy from "./home/allergy";
import IndexNailTip from "./home/nail";
import Footer from "./Components/footer";

import Link from "next/link";
import { useFadeIn } from "@/hooks/useFadeIn";

export default function Index() {
  const newsFade = useFadeIn();
  const testFade = useFadeIn();
  const foundationFade = useFadeIn();
  const applicationFade = useFadeIn();
  const allergyFade = useFadeIn();
  const nailFade = useFadeIn();

  return (
    <div className="index">
      <Header />

      {/* FV（演出なし） */}
      <div className="wrapper">
        <IndexFv />
      </div>

      {/* お知らせ */}
      <div
        className={`wrapper fadeSection ${
          newsFade.isVisible ? "isVisible" : ""
        }`}
        ref={newsFade.ref}
        id="news"
      >
        <IndexNews />
        <Link href="/newsPage/">
          <div className="viewMoreButton">
            <Button />
          </div>
        </Link>
      </div>

      {/* テスト */}
      <div
        className={`wrapper fadeSection ${
          testFade.isVisible ? "isVisible" : ""
        }`}
        ref={testFade.ref}
        id="test"
      >
        <IndexTest />
      </div>

      {/* 基礎知識 */}
      <div
        className={`wrapper fadeSection ${
          foundationFade.isVisible ? "isVisible" : ""
        }`}
        ref={foundationFade.ref}
        id="foundation"
      >
        <IndexFoundation />
        <Link href="/foundationPage/">
          <div className="viewMoreButton">
            <Button />
          </div>
        </Link>
      </div>

      {/* 応用知識 */}
      <div
        className={`wrapper fadeSection ${
          applicationFade.isVisible ? "isVisible" : ""
        }`}
        ref={applicationFade.ref}
        id="application"
      >
        <IndexApplication />
        <Link href="/applicationPage/">
          <div className="viewMoreButton">
            <Button />
          </div>
        </Link>
      </div>

      {/* アレルギー */}
      <div
        className={`wrapper fadeSection ${
          allergyFade.isVisible ? "isVisible" : ""
        }`}
        ref={allergyFade.ref}
        id="experience"
      >
        <IndexAllergy />
        <Link href="/allergyPage/">
          <div className="viewMoreButton">
            <Button />
          </div>
        </Link>
      </div>

      {/* ネイルチップ */}
      <div
        className={`wrapper fadeSection ${
          nailFade.isVisible ? "isVisible" : ""
        }`}
        ref={nailFade.ref}
        id="nailTip"
      >
        <IndexNailTip />
        <Link href="/nailPage/">
          <div className="viewMoreButton">
            <Button />
          </div>
        </Link>
      </div>

      {/* フッター */}
      <div className="wrapper">
        <Footer />
      </div>
    </div>
  );
}
