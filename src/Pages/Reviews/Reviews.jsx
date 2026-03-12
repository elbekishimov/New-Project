import { useState } from "react";
import { Star, User, MessageSquare, ShieldCheck, Quote } from "lucide-react";

export default function Reviews() {
    const [reviews, setReviews] = useState([
        {
            name: "John Doe",
            job: "Healthcare Manager",
            rating: 5,
            date: "Mar 10, 2026",
            message: "Their RCM services improved our billing system and helped increase revenue by 30% in just 3 months!",
        },
        {
            name: "Sarah Miller",
            job: "Clinic Director",
            rating: 5,
            date: "Feb 24, 2026",
            message: "Very professional team with fast response and reliable support. They handle complex claims with ease.",
        },
    ]);

    const [form, setForm] = useState({ name: "", job: "", message: "", rating: 5 });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.message) return;

        const newReview = { ...form, date: "Hozirgina" };
        setReviews([newReview, ...reviews]);
        setForm({ name: "", job: "", message: "", rating: 5 });
    };

    return (
        <section className="py-20 px-4 md:px-12 lg:px-24 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-600 px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase">
                        <Star size={16} fill="currentColor" /> Mijozlarimiz fikri
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900">
                        Bizga bo'lgan <span className="text-sky-500 italic">Ishonch</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
                        Dunyo bo'ylab yuzlab tibbiy markazlar o'z moliya tizimini bizga ishonishgan. Ularning tajribasi bilan tanishing.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12 items-start">

                    <div className="lg:col-span-2 space-y-8">
                        {reviews.map((review, index) => (
                            <div
                                key={index}
                                className="group bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 relative overflow-hidden"
                            >
                                <Quote className="absolute -top-4 -right-4 w-24 h-24 text-slate-50 opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="flex gap-1 text-yellow-400">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <Star key={i} size={18} fill="currentColor" />
                                            ))}
                                        </div>
                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{review.date}</span>
                                    </div>

                                    <p className="text-slate-700 text-lg leading-relaxed mb-8 italic">
                                        "{review.message}"
                                    </p>

                                    <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
                                        <div className="w-14 h-14 bg-gradient-to-br from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                                            <User size={28} />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <h4 className="font-black text-slate-900 text-lg leading-none">{review.name}</h4>
                                                <ShieldCheck size={16} className="text-green-500" />
                                            </div>
                                            <p className="text-sm text-slate-500 font-medium mt-1 uppercase tracking-tighter">
                                                {review.job}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="sticky top-10">
                        <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100">
                            <div className="mb-8">
                                <h3 className="text-2xl font-black text-slate-900 mb-2">Fikringizni qoldiring</h3>
                                <p className="text-sm text-slate-400">Sizning fikringiz biz uchun juda muhim.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-slate-400 uppercase ml-1">To'liq ism</label>
                                    <input
                                        type="text"
                                        placeholder="Ismingizni kiriting"
                                        className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl px-5 py-4 focus:bg-white focus:border-sky-500 outline-none transition-all"
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-slate-400 uppercase ml-1">Lavozimingiz</label>
                                    <input
                                        type="text"
                                        placeholder="Masalan: Shifoxona mudiri"
                                        className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl px-5 py-4 focus:bg-white focus:border-sky-500 outline-none transition-all"
                                        value={form.job}
                                        onChange={(e) => setForm({ ...form, job: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-slate-400 uppercase ml-1">Reyting (1-5)</label>
                                    <div className="flex gap-2">
                                        {[1, 2, 3, 4, 5].map(star => (
                                            <button
                                                key={star}
                                                type="button"
                                                onClick={() => setForm({ ...form, rating: star })}
                                                className={`p-2 rounded-lg transition-all ${form.rating >= star ? 'text-yellow-400' : 'text-slate-200 hover:text-slate-300'}`}
                                            >
                                                <Star size={24} fill={form.rating >= star ? "currentColor" : "none"} />
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-slate-400 uppercase ml-1">Mulohaza</label>
                                    <textarea
                                        rows="4"
                                        placeholder="Xizmat haqida nima deya olasiz?"
                                        className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl px-5 py-4 focus:bg-white focus:border-sky-500 outline-none transition-all resize-none"
                                        value={form.message}
                                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-slate-900 hover:bg-sky-600 text-white py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-3 active:scale-95"
                                >
                                    Yuborish <MessageSquare size={20} />
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}