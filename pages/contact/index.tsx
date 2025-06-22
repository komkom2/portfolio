import Layout from "@/components/Layout";
import { useState } from "react";

export default function Contact() {
    const [isSent, setIsSent] = useState(false); // 送信状態を管理

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // ページリロード防止

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/myzjdool", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                setIsSent(true);
                form.reset();
            } else {
                alert("送信に失敗しました…");
            }
        } catch (error) {
            alert("ネットワークエラーが発生しました");
        }
    };

    return (
        <Layout>
            <section className="max-w-3xl mx-auto p-4 space-y-6">
                <h1 className="text-7xl font-bold inline-block relative pb-5">
                    <span className="relative z-10">
                        <span className="text-rose-300">C</span>ontact
                    </span>
                    <span className="absolute left-0 bottom-0 w-full h-2 bg-rose-300 rounded-full z-0"></span>
                </h1>

                {isSent ? (
                    <p className="text-orange-500 text-lg font-medium">
                        ご連絡ありがとうございます！<br />
                        確認次第ご返信いたします 🕊️
                    </p>
                ) : (
                    <form
                        onSubmit={handleSubmit}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && e.target instanceof HTMLInputElement) {
                                e.preventDefault();
                            }
                        }}
                        className="space-y-6"
                    >
                        <label className="block">
                            Your Name
                            <input
                                type="text"
                                name="name"
                                required
                                className="block w-full rounded-xl bg-rose-50 p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-rose-200"
                            />
                        </label>

                        <label className="block">
                            Your Mail Address
                            <input
                                type="email"
                                name="email"
                                required
                                className="block p-3 w-full rounded-xl mt-1 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-transparent bg-rose-50"
                            />
                        </label>

                        <label className="block">
                            Message
                            <textarea
                                name="message"
                                rows={5}
                                required
                                className="block w-full rounded-xl bg-rose-50 p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-rose-200"
                            />
                        </label>

                        <button
                            type="submit"
                            className="bg-rose-300 text-white px-4 py-2 rounded hover:bg-rose-400 transition"
                        >
                            Submit
                        </button>
                    </form>
                )}
            </section>
        </Layout>
    );
}