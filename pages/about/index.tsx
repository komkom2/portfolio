import Layout from "@/components/Layout";
import LanguageChart from "@/components/LanguageChart";
import ToolChart from "@/components/ToolChart";
import Image from "next/image";

export default function About() {
    return (
        <Layout>
            <section className="max-w-3xl mx-auto p-4 space-y-16">
                <h1 className="text-7xl font-bold inline-block relative pb-5">
                    <span className="relative z-10">
                        <span className="text-rose-300">A</span>bout Me
                    </span>
                    <span className="absolute left-0 bottom-0 w-full h-2 bg-rose-300 rounded-full z-0"></span>
                </h1>
                {/* ==== 言語セクション ==== */}
                <div className="space-y-6">
                    <h2 className="border-l-4 border-rose-300 pl-4 space-y-2 text-3xl font-semibold text-gray-800">使用言語</h2>
                    <p className="text-gray-600">
                        主に Java を中心に、モバイル・Web 両方の言語に触れたことがあります。<br />
                        業務ではスマホアプリ開発を３年担当していて、<br />
                        使用言語はAndroidがJava、iOSがObjective-Cです。<br /><br />
                        Webについては、業務ではC#のWebサイトのバックエンド実装を半年経験しました。<br />
                        HTML、CSS、JavaScriptは業務経験はございませんが、<br />
                        個人的に２年ほど触ったことがあり、プログラミングに興味を持ったきっかけとなった言語です。<br /><br />
                        最近はアプリをリリースしてみたいと思い、 Flutter でクロスプラットフォーム開発にも挑戦中です。
                    </p>

                    {/* 使用言語アイコン */}
                    <div className="space-y-4">
                        <div className="flex justify-center gap-8">
                            {["Java", "Objective-C", "Flutter"].map((lang) => (
                                <Image
                                    key={lang}
                                    src={`/${lang}_icon.png`}
                                    alt={lang}
                                    width={100}
                                    height={100}
                                    className="h-25 w-auto"
                                />
                            ))}
                        </div>
                        <div className="flex justify-center gap-8">
                            {["HTML", "CSS", "JavaScript", "C_sharp"].map((lang) => (
                                <Image
                                    key={lang}
                                    src={`/${lang}_icon.png`}
                                    alt={lang}
                                    width={100}
                                    height={100}
                                    className="h-24 w-auto"
                                />
                            ))}
                        </div>
                    </div>

                    {/* グラフ */}
                    <LanguageChart />
                </div>

                {/* ==== ツールセクション ==== */}
                <div className="space-y-6">
                    <h2 className="border-l-4 border-rose-300 pl-4 space-y-2 text-3xl font-semibold text-gray-800">使用ツール</h2>
                    <p className="text-gray-600">
                        Android Studio と Xcode をメインに使用しています。<br />
                        Visual Studio、VSCode、SQL Server の使用経験もございます。
                    </p>

                    {/* 使用ツールアイコン */}
                    <div className="space-y-4">
                        <div className="flex justify-center gap-8">
                            {["AndroidStudio", "Xcode"].map((tool) => (
                                <Image
                                    key={tool}
                                    src={`/${tool}_icon.png`}
                                    alt={tool}
                                    width={100}
                                    height={100}
                                    className="h-25 w-auto"
                                />
                            ))}
                        </div>
                        <div className="flex justify-center gap-8">
                            {["VSCode", "VisualStudio", "MicrosoftSQLServer"].map((tool) => (
                                <Image
                                    key={tool}
                                    src={`/${tool}_icon.png`}
                                    alt={tool}
                                    width={100}
                                    height={100}
                                    className="h-25 w-auto"
                                />
                            ))}
                        </div>
                    </div>

                    {/* グラフ */}
                    <ToolChart />
                </div>

                {/* ==== 保有資格セクション ==== */}
                <div className="space-y-6">
                    <h2 className="border-l-4 border-rose-300 pl-4 space-y-2 text-3xl font-semibold text-gray-800">保有資格</h2>

                    {/* テキストリスト */}
                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                        <li>ITパスポート（2021/8）</li>
                        <li>Java Silver SE11(2024/4)</li>
                        <li>基本情報技術者試験(2024/5)</li>
                    </ul>

                    {/* 証明書画像 */}
                    <div className="flex flex-col md:flex-row justify-center items-start gap-8 pt-4">
                        <div className="text-center">
                            <Image
                                src="/certificate_fe.png"
                                alt="基本情報技術者試験 合格証明書"
                                width={200}
                                height={200}
                                className="h-60 w-auto object-contain rounded shadow-md"
                            />
                            <p className="text-sm text-gray-500 mt-2">基本情報技術者試験</p>
                        </div>
                        <div className="text-center">
                            <Image
                                src="/certificate_java_silver.png"
                                alt="Java Silver SE11 合格証明書"
                                width={200}
                                height={200}
                                className="h-60 w-auto object-contain rounded shadow-md"
                            />
                            <p className="text-sm text-gray-500 mt-2">Java Programmer, Silver SE 11</p>
                        </div>
                    </div>
                </div>

                {/* ==== 予定資格セクション ==== */}
                <div className="space-y-6">
                    <h2 className="border-l-4 border-rose-300 pl-4 space-y-2 text-3xl font-semibold text-gray-800">取得予定資格</h2>

                    {/* テキストリスト */}
                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                        <li>Java Gold SE11(予定：2025/10)</li>
                        <li>応用情報技術者試験(予定：2026/4)</li>
                    </ul>
                </div>
            </section>
        </Layout>
    );
}