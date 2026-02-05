"use client";

import { useEffect, useState } from "react";
import "@/styles/home/fv.css";

export default function IndexFv() {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(true);
    }, 450);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="img fvImg">
      <div className={`img fvLogo ${showLogo ? "isVisible" : ""}`}></div>
    </div>
  );
}
