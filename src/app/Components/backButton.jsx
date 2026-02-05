"use client";

import "@/styles/Components/button.css";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button className="back" onClick={() => router.back()}>
      <p>戻る</p>
    </button>
  );
}
