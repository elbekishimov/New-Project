import React, { useState } from 'react';
import { 
  CreditCard, 
  ShieldCheck, 
  User, 
  Mail, 
  Phone, 
  ChevronRight,
  Lock,
  CheckCircle2
} from 'lucide-react';

export default function CheckoutPage({ service }) {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);

  // Namuna uchun xizmat ma'lumotlari (agar props kelmasa)
  const orderData = service || {
    title: "Vcare Medical Billing",
    price: "499",
    priceUnit: "USD",
    category: "Medical Services"
  };

  const handlePayment = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    // To'lov simulyatsiyasi
    setTimeout(() => {
      setIsProcessing(false);
      alert("To'lov muvaffaqiyatli amalga oshirildi!");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Sarlavha va Progress */}
        <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black text-slate-900">Xizmatni rasmiylashtirish</h1>
            <p className="text-slate-500 font-medium">Xavfsiz to'lov tizimi orqali buyurtmangizni yakunlang.</p>
          </div>
          <div className="flex items-center gap-2 text-sm font-bold">
            <span className="text-sky-500">Xizmat</span>
            <ChevronRight size={16} className="text-slate-300" />
            <span className="text-slate-900">To'lov</span>
            <ChevronRight size={16} className="text-slate-300" />
            <span className="text-slate-300">Yakunlash</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* CHAP TOMON: FOYDALANUVCHI VA TO'LOV */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* 1. Shaxsiy ma'lumotlar */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-sky-50 text-sky-500 rounded-xl flex items-center justify-center">
                  <User size={20} />
                </div>
                <h2 className="text-xl font-bold text-slate-900">Aloqa ma'lumotlari</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">To'liq ismingiz</label>
                  <input type="text" placeholder="Elbek ..." className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Email manzilingiz</label>
                  <input type="email" placeholder="example@mail.com" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 transition-all" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Telefon raqam</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">+998</span>
                    <input type="tel" placeholder="90 123 45 67" className="w-full pl-16 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 transition-all" />
                  </div>
                </div>
              </div>
            </div>

            {/* 2. To'lov usuli */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-sky-50 text-sky-500 rounded-xl flex items-center justify-center">
                  <CreditCard size={20} />
                </div>
                <h2 className="text-xl font-bold text-slate-900">To'lov usuli</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <button 
                  onClick={() => setPaymentMethod('card')}
                  className={`p-4 rounded-2xl border-2 transition-all flex items-center gap-3 ${paymentMethod === 'card' ? 'border-sky-500 bg-sky-50/50' : 'border-slate-100 bg-white hover:bg-slate-50'}`}
                >
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'card' ? 'border-sky-500' : 'border-slate-300'}`}>
                    {paymentMethod === 'card' && <div className="w-2.5 h-2.5 bg-sky-500 rounded-full"></div>}
                  </div>
                  <span className="font-bold text-slate-800">Bank kartasi</span>
                </button>
                <button 
                  onClick={() => setPaymentMethod('payme')}
                  className={`p-4 rounded-2xl border-2 transition-all flex items-center gap-3 ${paymentMethod === 'payme' ? 'border-sky-500 bg-sky-50/50' : 'border-slate-100 bg-white hover:bg-slate-50'}`}
                >
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'payme' ? 'border-sky-500' : 'border-slate-300'}`}>
                    {paymentMethod === 'payme' && <div className="w-2.5 h-2.5 bg-sky-500 rounded-full"></div>}
                  </div>
                  <span className="font-bold text-slate-800">Payme / Click</span>
                </button>
              </div>

              {paymentMethod === 'card' && (
                <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Karta raqami</label>
                    <input type="text" placeholder="0000 0000 0000 0000" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 transition-all font-mono" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Muddati</label>
                      <input type="text" placeholder="MM/YY" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 transition-all font-mono" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">CVV</label>
                      <input type="password" placeholder="***" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 transition-all font-mono" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* O'NG TOMON: BUYURTMA XULOSASI */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 sticky top-8">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Buyurtma xulosasi</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-slate-900">{orderData.title}</p>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">{orderData.category}</p>
                  </div>
                  <p className="font-bold text-slate-900">${orderData.price}</p>
                </div>
                <div className="h-px bg-slate-100 w-full"></div>
                <div className="flex justify-between items-center text-sm font-medium text-slate-500">
                  <span>Xizmat haqi</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between items-center text-sm font-medium text-slate-500">
                  <span>Soliq (0%)</span>
                  <span>$0.00</span>
                </div>
                <div className="h-px bg-slate-100 w-full"></div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-black text-slate-900">Jami:</span>
                  <span className="text-2xl font-black text-sky-500">${orderData.price}</span>
                </div>
              </div>

              <button 
                onClick={handlePayment}
                disabled={isProcessing}
                className="w-full py-4 bg-sky-500 hover:bg-sky-600 disabled:bg-slate-300 text-white rounded-2xl font-black text-lg shadow-lg shadow-sky-100 transition-all flex items-center justify-center gap-3 mb-6"
              >
                {isProcessing ? (
                  <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Lock size={20} />
                    To'lovni amalga oshirish
                  </>
                )}
              </button>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                  <ShieldCheck size={14} className="text-emerald-500" />
                  Xavfsiz to'lov kafolati
                </div>
                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                  <CheckCircle2 size={14} className="text-emerald-500" />
                  24/7 mijozlarni qo'llab-quvvatlash
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}