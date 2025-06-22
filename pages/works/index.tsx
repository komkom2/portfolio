import Layout from "@/components/Layout";
import Image from "next/image";
import { useState } from "react";

const works = [
    {
        title: "Qiita記事検索アプリ",
        icon: "/qiitaSearchApp_icon.png",
        images: ["/qiitaSearchApp_ss1.png", "/qiitaSearchApp_ss2.png", "/qiitaSearchApp_ss3.png"],
        techs: ["Java"],
        github: "https://github.com/komkom2/QiitaSearchApp",
        description: `Qiita APIを使った記事検索アプリです。\nアイコンはQiitaのQと、Searchの虫眼鏡をイメージして作りました。\n\n
            複数キーワードで検索可能で、ヒットした記事のうち投稿日が最新のものから20件をRecyclerViewで表示します。\n\n
            リストには投稿者のアイコン、投稿者のユーザー名、投稿日、記事タイトルを表示しています。\n\n
            記事リストの１つをタップすると、その記事をWebViewで表示するようにしています。\n\n今後はタグ検索機能や、お気に入り機能なども追加していきたいと思っています。`,
    },
    {
        title: "日記アプリ",
        icon: "/liteDiary_icon.png",
        images: ["/liteDiary_ss1.png", "/liteDiary_ss2.png", "/liteDiary_ss3.png"],
        techs: ["Flutter", "Hive"],
        github: "https://github.com/komkom2/litediary",
        description: `Hiveでデータを保存できるFlutter製の日記アプリです。\n\n
            シンプルなデザインで、無駄な装飾をなくしてどんな人でも迷わず使えるように作りました。`,
    },
    {
        title: "TODOアプリ",
        icon: "/todo_icon.png",
        images: ["/todo_ss1.png", "/todo_ss2.png", "/todo_ss3.png"],
        techs: ["SwiftUI", "REST API"],
        github: "https://github.com/komkom2/task-manager",
        description: `SwiftUIとREST API（Laravel）を用いたTODO管理アプリです。\n\n
            一覧表示、タスクの追加・編集・削除などの基本的な機能を実装しています。\n\n
            Swiftを学習したくて作り始めたアプリでしたが、今は別の勉強をしているので、また時間があれば機能の拡張をしていきたいなと思っています。`,
    },
    {
        title: "保護猫カフェサイト",
        icon: "",
        images: ["/cat-cafe-minyon.png"],
        techs: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/komkom2/cat-cafe-minyon",
        site: "https://komkom2.github.io/cat-cafe-minyon/",
        description: `保護猫カフェをイメージして作成したWebサイトです。\nもし自分が保護猫カフェを開くなら、Minyonという名前のお店にしたいと思っています。\n\n
            スマホ表示にも対応していて、TOPの画像が変わるようにしています。`,
    },
    {
        title: "ポートフォリオサイト",
        icon: "",
        images: ["/portfolio-site.png"],
        techs: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
        github: "https://github.com/komkom2/portfolioKomkom2",
        description: `Next.js と Tailwind CSS を使って作成した、自分用のポートフォリオサイトです。\n\n
            プロフィール、作品一覧、News、お問い合わせフォームなどをシンプルにまとめました。\n\n
            学習の記録や今後の成果物を紹介するために、少しずつアップデートしていく予定です ✏️`,
    }
];

export default function Works() {
    return (
        <Layout>
            <section className="max-w-3xl mx-auto p-4 space-y-10">
                <h1 className="text-7xl font-bold inline-block relative pb-5">
                    <span className="relative z-10">
                        <span className="text-rose-300">W</span>orks
                    </span>
                    <span className="absolute left-0 bottom-0 w-full h-2 bg-rose-300 rounded-full z-0"></span>
                </h1>

                <h2 className="border-l-4 border-rose-300 pl-4 space-y-2 text-3xl font-semibold text-gray-800">Qiitaアカウント</h2>
                <p className="text-gray-600">
                    調べたことを忘れないように、時々記事に残しています ✏️<br />
                </p>
                <div className="flex items-center gap-10 bg-white rounded-2xl shadow-md p-6 w-fit">
                    <Image
                        src="/qiita_icon.png"
                        alt="Qiita icon"
                        width={100}
                        height={100}
                        className="rounded"
                    />
                    <div className="flex flex-col text-xl">
                        <span className="text-gray-800 font-semibold">komkom2</span>
                        <a
                            href="https://qiita.com/komkom2"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-rose-500 underline"
                        >
                            qiita.com/komkom2 →
                        </a>
                    </div>
                </div>

                <h2 className="border-l-4 border-rose-300 pl-4 space-y-2 text-3xl font-semibold text-gray-800">作品一覧</h2>
                <p className="text-gray-600">
                    今までに作成したモバイルアプリ、Webサイトの一覧です。<br />
                    項目にマウスを乗せると、実装の詳細が確認できます。<br /><br />
                    細かな部分が未実装の作品もあるので、時間がある時に更新していく予定です。<br />
                    （今はJavaGoldの資格取得に向けて、Javaの動作確認アプリをメインで更新しています）
                </p>

                <div className="space-y-10">
                    {works.map((work) => (
                        <div
                            key={work.title}
                            className="relative group bg-pink-50 p-6 rounded-3xl shadow-lg transition"
                        >
                            <div className="bg-white rounded-3xl p-6 space-y-4 transform hover:-translate-y-1 hover:shadow-xl duration-300">
                                <div className="flex justify-start items-start gap-4">
                                    {work.icon && (
                                        <Image
                                            src={work.icon}
                                            alt={`${work.title} Icon`}
                                            width={64}
                                            height={64}
                                            className="rounded-md"
                                        />
                                    )}
                                    <div className="flex flex-col gap-2 text-left">
                                        <h3 className="text-xl font-bold text-gray-800">{work.title}</h3>
                                        <div className="flex gap-2 flex-wrap justify-start">
                                            {work.techs.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="bg-rose-100 text-rose-500 px-2 py-1 text-xs rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            {work.github && (
                                                <a
                                                    href={work.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-rose-500 underline text-sm"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    GitHub リポジトリを見る →
                                                </a>
                                            )}
                                            {work.site && (
                                                <a
                                                    href={work.site}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-rose-500 underline text-sm"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    Webサイトを見る →
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-3 overflow-x-auto justify-center">
                                    {work.images.map((img, i) => (
                                        <Image
                                            key={i}
                                            src={img}
                                            alt={`${work.title} screenshot ${i + 1}`}
                                            width={work.site ? 300 : 200}
                                            height={work.site ? 200 : 300}
                                            className="rounded-lg object-cover"
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* 吹き出し説明 */}
                            <div className="absolute top-4 left-full ml-4 w-75 p-4 rounded-3xl bg-white shadow-xl text-sm text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 border border-rose-100 whitespace-pre-line">
                                {work.description}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Layout>
    );
}