import { useState } from "react";

export default function Reviews() {

    const [reviews, setReviews] = useState([
        {
            name: "John Doe",
            job: "Healthcare Manager",
            message:
                "Their RCM services improved our billing system and helped increase revenue.",
        },
        {
            name: "Sarah Miller",
            job: "Clinic Director",
            message:
                "Very professional team with fast response and reliable support.",
        },
    ]);

    const [form, setForm] = useState({
        name: "",
        job: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name || !form.message) return;

        setReviews([...reviews, form]);

        setForm({
            name: "",
            job: "",
            message: "",
        });
    };

    return (
        <section className="py-16 px-4 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-slate-900">
                        Client <span className="text-sky-500">Reviews</span>
                    </h2>
                    <p className="text-slate-600 mt-4">
                        See what our clients say and leave your own feedback.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">

                    <div className="space-y-6">
                        {reviews.map((review, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100"
                            >
                                <p className="text-slate-600 mb-4">
                                    "{review.message}"
                                </p>

                                <div>
                                    <h4 className="font-semibold text-slate-800">
                                        {review.name}
                                    </h4>
                                    <p className="text-sm text-slate-500">
                                        {review.job}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-xl">
                        <h3 className="text-2xl font-bold text-sky-500 mb-6">
                            Leave a Review
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-5">

                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-sky-500 outline-none"
                                value={form.name}
                                onChange={(e) =>
                                    setForm({ ...form, name: e.target.value })
                                }
                            />

                            <input
                                type="text"
                                placeholder="Your Job / Position"
                                className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-sky-500 outline-none"
                                value={form.job}
                                onChange={(e) =>
                                    setForm({ ...form, job: e.target.value })
                                }
                            />

                            <textarea
                                rows="4"
                                placeholder="Write your review..."
                                className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-sky-500 outline-none"
                                value={form.message}
                                onChange={(e) =>
                                    setForm({ ...form, message: e.target.value })
                                }
                            />

                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
                            >
                                Submit Review
                            </button>

                        </form>
                    </div>

                </div>

            </div>
        </section>
    );
}