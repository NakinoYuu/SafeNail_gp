"use client";

import "@/styles/home/nail.css";
import { useRef, useState } from "react";
import BuyButton from "../Components/buyButton";

import { nailTips } from "@/data/nailTips";

import Link from "next/link";

export default function IndexNail() {
  const wrapperRef = useRef(null);
  const [index, setIndex] = useState(0);

  const move = (dir) => {
    const wrapper = wrapperRef.current;
    const cards = wrapper.children;
    const total = cards.length;
    const cardWidth = cards[0].offsetWidth + 50;

    let next = index + dir;

    if (next < 0) next = total - 1;
    if (next >= total) next = 0;

    wrapper.scrollTo({
      left: cardWidth * next,
      behavior: "smooth",
    });

    setIndex(next);
  };
  return (
    <div className="NailTipIndex">
      <div className="title">
        <h1>NAIL TIP</h1>
        <h2>ネイルチップ</h2>
      </div>
      <div className="nailTipWrapper" ref={wrapperRef}>
        {nailTips.map((tip) => (
          <div className="nailTipContent" key={tip.id}>
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
      <div className="arrowWrapper">
        <button className="arrow left" onClick={() => move(-1)}>
          <i className="fa-solid fa-caret-left"></i>
        </button>
        <button className="arrow right" onClick={() => move(1)}>
          <i className="fa-solid fa-caret-right"></i>
        </button>
      </div>
    </div>
  );
}
