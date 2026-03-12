import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Notification from "../../../Components/Notification/Notification";

export default function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [notification, setNotification] = useState(null);

    const data = localStorage.getItem("userProduct");
    const products = data ? JSON.parse(data) : [];
    const result = products.find((item) => String(item.id) === id);

    const handleAddCart = () => {
        if (!result) return;
        const cartData = localStorage.getItem("cart");
        const cart = cartData ? JSON.parse(cartData) : [];

        if (cart.find((item) => item.id === result.id)) {
            setNotification({ message: "Bu mahsulot savatchada allaqachon mavjud", type: "error" });
            return;
        }

        cart.push(result);
        localStorage.setItem("cart", JSON.stringify(cart));
        setNotification({ message: "Mahsulot muvaffaqiyatli qo'shildi!", type: "success" });
    };

    if (!result) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-4">
                <div className="text-6xl text-gray-200">☹</div>
                <h1 className="text-2xl font-bold text-gray-400">Mahsulot topilmadi</h1>
                <button onClick={() => navigate(-1)} className="text-blue-500 underline">Orqaga qaytish</button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <button onClick={() => navigate(-1)} className="mb-8 flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-all font-medium">
                    ← Orqaga qaytish
                </button>

                <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100">

                    <div className="space-y-4">
                        <div className="aspect-square bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 p-8 flex items-center justify-center">
                            <img className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-700" src={result.image} alt={result.name} />
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="aspect-square rounded-xl bg-slate-50 border border-slate-100 cursor-pointer opacity-50 hover:opacity-100 transition-opacity"></div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <div className="mb-6">
                            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-2 block">Premium Quality</span>
                            <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">{result.name}</h1>

                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-3xl font-bold text-red-600">${result.price}</span>
                                <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                                    Omborda mavjud
                                </div>
                            </div>

                            <p className="text-slate-600 leading-relaxed text-lg mb-8">
                                {result.description || "Ushbu mahsulot yuqori sifatli xomashyodan tayyorlangan bo'lib, uzoq muddatli foydalanish va maksimal qulaylikni ta'minlaydi."}
                            </p>
                        </div>

                        <div className="space-y-4 mb-8 border-t border-slate-100 pt-8">
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-400">Kategoriya:</span>
                                <span className="text-slate-800 font-semibold">Elektronika / Aksessuarlar</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-400">Yetkazib berish:</span>
                                <span className="text-slate-800 font-semibold">Bepul (24 soat ichida)</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-400">Kafolat:</span>
                                <span className="text-slate-800 font-semibold">12 oy rasmiy</span>
                            </div>
                        </div>

                        <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <button
                                onClick={handleAddCart}
                                className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all"
                            >
                                Savatchaga qo'shish
                            </button>
                            <button className="px-8 py-4 bg-slate-100 text-slate-800 rounded-2xl font-bold hover:bg-slate-200 transition-all">
                                Sevimlilarga qo'shish
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {notification && (
                <Notification
                    message={notification.message}
                    type={notification.type}
                    onClose={() => setNotification(null)}
                />
            )}
        </div>
    );
}