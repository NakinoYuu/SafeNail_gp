"use client";

import "@/styles/home/nail.css";
import "@/styles/Components/button.css";

import Link from "next/link";

export default function BuyButton() {
  return (
    <Link href="/enterPage/">
      <button className="tipBuy">
        <p>購入する</p>
      </button>
    </Link>
  );
}
