"use client";

import "@/styles/Components/header.css";
import Link from "next/link";

export default function Header() {
  return (
    <div className="header">
      <Link href="/">
        <div className="navLogo"></div>
      </Link>
      <nav className="navBar">
        <div className="navName">
          <Link href="/#news">
            <button>News</button>
          </Link>
        </div>
        <div className="navName">
          <Link href="/#test">
            <button>Test</button>
          </Link>
        </div>
        <div className="navName">
          <Link href="/#foundation">
            <button>Foundation</button>
          </Link>
        </div>
        <div className="navName">
          <Link href="/#application">
            <button>Application</button>
          </Link>
        </div>
        <div className="navName">
          <Link href="/#experience">
            <button>Experience</button>
          </Link>
        </div>
        <div className="navName">
          <Link href="/#nailTip">
            <button>NailTip</button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
