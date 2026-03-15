import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";

export default function ProductItem({ product }) {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <div className="group bg-white border border-slate-100 rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
            <div className="relative w-full h-[220px] rounded-xl overflow-hidden bg-slate-50 mb-4">
                <img
                    className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
                    src={product.image}
                    alt={product.name}
                />
                <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-sm">
                    {t('products.item.sale')}
                </div>
            </div>

            <div className="flex flex-col flex-1">
                <div className="flex items-center gap-1 mb-1 text-yellow-400">
                    {"★★★★★".split("").map((s, i) => <span key={i} className="text-xs">{s}</span>)}
                    <span className="text-gray-400 text-[10px] ml-1">(4.5)</span>
                </div>

                <h5 className="text-slate-800 font-semibold mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                </h5>

                <div className="mt-auto">
                    <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-xl font-bold text-slate-900">${product.price}</span>
                        <span className="text-sm text-gray-400 line-through">${(product.price * 1.2).toFixed(2)}</span>
                    </div>

                    <button
                        onClick={() => navigate(`/products/${product.id}`)}
                        className="w-full bg-slate-900 hover:bg-blue-600 text-white py-2.5 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 group/btn"
                    >
                        {t('products.item.details')}
                        <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                    </button>
                </div>
            </div>
        </div>
    );
}