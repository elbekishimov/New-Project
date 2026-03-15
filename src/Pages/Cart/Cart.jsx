import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export default function Cart() {
    const { t } = useTranslation();
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const data = localStorage.getItem("cart");
        setCart(data ? JSON.parse(data) : []);
    }, []);

    const handleRemove = (id) => {
        const updated = cart.filter((item) => item.id !== id);
        setCart(updated);
        localStorage.setItem("cart", JSON.stringify(updated));
    };

    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold mb-6">{t('cart.title')}</h1>
            <div className="grid grid-cols-3 gap-6">
                {cart.length === 0 ? (
                    <h2>{t('cart.empty')}</h2>
                ) : (
                    cart.map((item) => (
                        <div key={item.id} className="border p-4 rounded-xl shadow">
                            <div className="h-[200px] mb-3">
                                <img className="w-full h-full object-cover" src={item.image} alt={item.name} />
                            </div>
                            <h3 className="font-bold">{item.name}</h3>
                            <p className="text-red-600 font-bold mb-3">${item.price}</p>
                            <button
                                onClick={() => handleRemove(item.id)}
                                className="bg-red-600 text-white px-4 py-2 rounded"
                            >
                                {t('cart.remove')}
                            </button>
                            <Link to={'/checkout'} className='px-10 ml-3 bg-[#0088CA] text-white py-2 rounded-lg'>Sotib olish</Link>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}