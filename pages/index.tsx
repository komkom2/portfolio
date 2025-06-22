import Layout from "@/components/Layout";
import Image from "next/image";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

import { news } from "@/lib/news";
import { parse } from 'date-fns';

export default function Home() {
  return (
    <Layout>
      <section className="max-w-3xl mx-auto p-4 space-y-6">

        {/* 名前＋アイコン */}
        <h1 className="{engFont.className} text-7xl font-bold flex items-center gap-3">
          <FontAwesomeIcon icon={faPaw} className="text-rose-300 w-25 h25" />
          K.Mio
        </h1>

        {/* 吹き出しエリア（画像右、吹き出し左） */}
        <div className="flex items-center gap-4 justify-end ">
          <p
            className="relative bg-rose-50 text-gray-900 p-6 rounded-[2rem] max-w-md shadow-lg font-medium
  before:content-[''] before:absolute before:top-8 before:right-[-24px]
  before:border-y-[12px] before:border-l-[24px] before:border-y-transparent before:border-l-rose-50 "
          >
            ポートフォリオサイトにようこそ 🐾<br /><br />
            主に学習の記録をまとめています。<br /><br />
            最近はJava Goldの資格取得に向けて勉強中です ✏️
          </p>

          {/* プロフィール画像（右側） */}
          <Image
            src="/cat_img.png"
            alt="K.Mio"
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>

        {/* ==== NEWSセクション ==== */}
        <div className="mt-12 space-y-4">
          <h2 className="text-xl font-bold inline-block relative pb-1">
            <span className="relative z-10">
              News
            </span>
            <span className="absolute left-0 bottom-0 w-full h-1 bg-rose-300 rounded-full z-0"></span>
          </h2>

          <ul className="space-y-2">

            {news.slice(0, 5).map((item, index) => {
              // "2025/06/22" → Date オブジェクトに変換
              const newsDate = parse(item.date, 'yyyy/MM/dd', new Date());
              const now = new Date();

              // 経過日数の計算
              const diffTime = now.getTime() - newsDate.getTime();
              const diffDays = diffTime / (1000 * 60 * 60 * 24); // ミリ秒→日

              const isNew = diffDays <= 3;

              return (
                <li key={index} className="flex items-start">
                  <div className="w-[50px] flex justify-end pr-2">
                    {isNew && (
                      <span className="text-xs text-white bg-rose-300 rounded-full px-2 py-0.5 whitespace-nowrap">
                        NEW
                      </span>
                    )}
                  </div>
                  <p className="text-base text-gray-600 font-medium">
                    <span className="font-mono text-xs text-gray-400 mr-2">{item.date}</span>
                    {item.text}
                  </p>
                </li>
              );
            })}
          </ul>
          <div className="pt-2">
            <a
              href="/news"
              className="text-sm text-rose-400 hover:underline"
            >
              過去のNews一覧を見る →
            </a>
          </div>
        </div>

      </section>
    </Layout>
  );
}