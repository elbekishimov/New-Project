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

        const exists = cart.find((item) => item.id === result.id);

        if (exists) {
            setNotification({ message: "Bu mahsulot korzinkada bor", type: "error" });
            return;
        }

        cart.push(result);
        localStorage.setItem("cart", JSON.stringify(cart));

        setNotification({ message: "Mahsulot korzinkaga qo'shildi", type: "success" });
    };

    if (!result) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-xl">Mahsulot topilmadi</h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center px-4">

            <div className="max-w-4xl w-full grid md:grid-cols-2 gap-10 bg-white shadow-xl rounded-2xl p-6">

                {/* Image */}
                <div className="w-full h-[350px] border rounded-xl overflow-hidden">
                    <img
                        className="w-full h-full object-cover"
                        src={result.image}
                        alt={result.name}
                    />
                </div>

                {/* Info */}
                <div className="flex flex-col justify-center">

                    <h1 className="text-3xl font-bold mb-4">{result.name}</h1>

                    <h2 className="text-2xl text-red-600 font-bold mb-4">${result.price}</h2>

                    <p className="text-gray-600 mb-6">{result.description}</p>

                    <div className="flex gap-4">
                        <button
                            onClick={handleAddCart}
                            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                        >
                            Korzinkaga qo'shish
                        </button>

                        <button
                            onClick={() => navigate(-1)}
                            className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
                        >
                            Orqaga
                        </button>
                    </div>

                </div>

            </div>

            {/* Notification */}
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