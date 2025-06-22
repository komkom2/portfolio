import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import '@fortawesome/fontawesome-svg-core/styles.css'; // 必須！
config.autoAddCss = false; // 重複読み込み防止！

import Link from 'next/link';

import { M_PLUS_Rounded_1c, Comfortaa, Noto_Sans_JP } from "next/font/google"; //https://fonts.google.com/

const engFont = Comfortaa({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-eng",
});

const jaFont = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-japanese",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
        <nav style={{
          display: "flex",
          justifyContent: "space-between", // ← 左右に分ける
          alignItems: "center",
          marginLeft: "20px",
          marginRight: "30px"
        }}>
          {/* 左側：ロゴ */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none" }}>
              <FontAwesomeIcon icon={faPaw} className="text-rose-300" style={{ width: "30px", height: "30px" }} />
              <span style={{ fontWeight: "bold", fontSize: "1.8rem", color: "inherit" }}>K.Mio</span>
            </Link>
          </div>

          {/* 右側：リンクたち */}
          <div style={{ display: "flex", gap: "1rem" }}>
            <Link href="/about">About</Link>
            <Link href="/works">Works</Link>
            <Link href="/news">News</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>
      </header>
      <main className={jaFont.className} style={{ padding: "1rem" }}>
        <Component {...pageProps} />
      </main>
      <footer style={{
        textAlign: 'center',
        color: '#999',
        fontSize: '0.875rem',
        marginTop: '0.5rem',
        marginBottom: '3rem'
      }}>
        Copyright © 2025 K.Mio
      </footer>
    </>
  );
}