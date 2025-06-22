// pages/news.tsx
import Layout from "@/components/Layout";
import { news } from "@/lib/news";
import Link from "next/link";

export default function NewsPage() {
    return (
        <Layout>
            <section className="max-w-3xl mx-auto p-4 space-y-6">
                <h1 className="text-7xl font-bold inline-block relative pb-5">
                    <span className="relative z-10">
                        <span className="text-rose-300">N</span>ews
                    </span>
                    <span className="absolute left-0 bottom-0 w-full h-2 bg-rose-300 rounded-full z-0"></span>
                </h1>

                <ul className="space-y-4">
                    {news.map((item, index) => (
                        <li key={index} className="text-gray-700">
                            <span className="font-mono text-xs text-gray-400 mr-2">{item.date}</span>
                            {item.text}
                        </li>
                    ))}
                </ul>

                <div className="pt-2">
                    <Link
                        href="/"
                        className="text-sm text-rose-500 underline hover:text-rose-400 transition"
                    >
                        ← HOMEに戻る
                    </Link>
                </div>
            </section>
        </Layout>
    );
}