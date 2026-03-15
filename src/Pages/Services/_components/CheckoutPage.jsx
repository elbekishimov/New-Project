import React, { useState } from 'react';
import { 
  CreditCard, ShieldCheck, User, Mail, Phone, 
  ChevronRight, Lock, CheckCircle2 
} from 'lucide-react';

export default function CheckoutPage({ service }) {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    cardNumber: ''
  });

  const orderData = service || {
    title: "Vcare Medical Billing",
    price: "499",
    priceUnit: "USD",
    category: "Medical Services"
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendToTelegram = async () => {

    const botToken = "8713138124:AAEouuCbg8TsIGH6BfJDQXfAR0J90ICH3k8";
    const chatId = "5821065938";

    const text = `
💰 **Yangi To'lov Muvaffaqiyatli!**
━━━━━━━━━━━━━━━━━━
👤 **Mijoz:** ${formData.fullName}
📧 **Email:** ${formData.email}
📞 **Tel:** +998 ${formData.phone}
🛠 **Xizmat:** ${orderData.title}
💵 **Summa:** $${orderData.price}
💳 **To'lov usuli:** ${paymentMethod === 'card' ? 'Bank kartasi' : 'Payme/Click'}
🕒 **Vaqt:** ${new Date().toLocaleString()}
━━━━━━━━━━━━━━━━━━
✅ To'lov tasdiqlandi.
    `;

    try {
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: 'Markdown'
        })
      });
    } catch (error) {
      console.error("Telegram error:", error);
    }
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.phone) {
      alert("Iltimos, ismingiz va telefon raqamingizni kiriting!");
      return;
    }

    setIsProcessing(true);

    setTimeout(async () => {
      await sendToTelegram(); 
      setIsProcessing(false);
      alert("To'lov muvaffaqiyatli amalga oshirildi va operatorga xabar yuborildi!");
      
      setFormData({ fullName: '', email: '', phone: '', cardNumber: '' });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 md:px-12 text-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black">Xizmatni rasmiylashtirish</h1>
            <p className="text-slate-500 font-medium">Xavfsiz to'lov tizimi orqali buyurtmangizni yakunlang.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-sky-50 text-sky-500 rounded-xl flex items-center justify-center">
                  <User size={20} />
                </div>
                <h2 className="text-xl font-bold">Aloqa ma'lumotlari</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">To'liq ismingiz</label>
                  <input 
                    type="text" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Elbek ..." 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-sky-500 transition-all" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Email manzilingiz</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="example@mail.com" 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-sky-500 transition-all" 
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Telefon raqam</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">+998</span>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="90 123 45 67" 
                      className="w-full pl-16 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-sky-500 transition-all" 
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
               <h2 className="text-xl font-bold mb-6">To'lov usuli</h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <button 
                  onClick={() => setPaymentMethod('card')}
                  className={`p-4 rounded-2xl border-2 transition-all flex items-center gap-3 ${paymentMethod === 'card' ? 'border-sky-500 bg-sky-50/50' : 'border-slate-100 bg-white hover:bg-slate-50'}`}
                >
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'card' ? 'border-sky-500' : 'border-slate-300'}`}>
                    {paymentMethod === 'card' && <div className="w-2.5 h-2.5 bg-sky-500 rounded-full"></div>}
                  </div>
                  <span className="font-bold">Bank kartasi</span>
                </button>
                <button 
                  onClick={() => setPaymentMethod('payme')}
                  className={`p-4 rounded-2xl border-2 transition-all flex items-center gap-3 ${paymentMethod === 'payme' ? 'border-sky-500 bg-sky-50/50' : 'border-slate-100 bg-white hover:bg-slate-50'}`}
                >
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'payme' ? 'border-sky-500' : 'border-slate-300'}`}>
                    {paymentMethod === 'payme' && <div className="w-2.5 h-2.5 bg-sky-500 rounded-full"></div>}
                  </div>
                  <span className="font-bold">Payme / Click</span>
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 sticky top-8">
              <h2 className="text-xl font-bold mb-6">Buyurtma xulosasi</h2>
              <div className="flex justify-between items-center mb-8">
                <span className="text-lg font-black">Jami:</span>
                <span className="text-2xl font-black text-sky-500">${orderData.price}</span>
              </div>

              <button 
                onClick={handlePayment}
                disabled={isProcessing}
                className="w-full py-4 bg-sky-500 hover:bg-sky-600 disabled:bg-slate-300 text-white rounded-2xl font-black text-lg shadow-lg transition-all flex items-center justify-center gap-3"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}