import { useTranslation } from 'react-i18next';
import React, { useState } from "react";
import { MessageSquare, User, Mail, Phone, Send, CheckCircle2, XCircle } from "lucide-react";

export default function LeaveMessage() {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [status, setStatus] = useState({ message: '', type: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const botToken = "YOUR_BOT_TOKEN";
    const chatId = "YOUR_CHAT_ID";

    const text = `
📩 **Yangi xabar qoldirildi:**
👤 **Ism:** ${form.name}
📧 **Email:** ${form.email}
📞 **Tel:** ${form.phone || "Ko'rsatilmagan"}
💬 **Xabar:** ${form.message}
    `;

    try {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: 'Markdown'
        })
      });

      if (response.ok) {
        setStatus({ message: t('leaveMessage.form.success'), type: "success" });
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error();
      }
    } catch (error) {
      setStatus({ message: t('leaveMessage.form.error'), type: "error" });
    } finally {
      setIsLoading(false);
      setTimeout(() => setStatus({ message: '', type: '' }), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-20 relative overflow-hidden">

      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-sky-200/30 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-emerald-100/40 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-2xl w-full bg-white p-8 md:p-14 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-white relative">

        <div className="text-center mb-10">
          <div className="inline-flex bg-sky-50 p-4 rounded-2xl text-sky-500 mb-4 shadow-sm">
            <MessageSquare size={32} />
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            {t('leaveMessage.title')}
          </h1>
          <p className="text-slate-500 mt-2 font-medium">
            {t('leaveMessage.subtitle')}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-sky-500 transition-colors">
              <User size={20} />
            </div>
            <input
              type="text"
              name="name"
              placeholder={t('leaveMessage.form.name')}
              required
              value={form.name}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-50 rounded-2xl focus:bg-white focus:border-sky-500 outline-none transition-all font-medium"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-sky-500 transition-colors">
                <Mail size={20} />
              </div>
              <input
                type="email"
                name="email"
                placeholder={t('leaveMessage.form.email')}
                required
                value={form.email}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-50 rounded-2xl focus:bg-white focus:border-sky-500 outline-none transition-all font-medium"
              />
            </div>

            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-sky-500 transition-colors">
                <Phone size={20} />
              </div>
              <input
                type="tel"
                name="phone"
                placeholder={t('leaveMessage.form.phone')}
                value={form.phone}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-50 rounded-2xl focus:bg-white focus:border-sky-500 outline-none transition-all font-medium"
              />
            </div>
          </div>

          <div className="relative group">
            <textarea
              name="message"
              rows="5"
              placeholder={t('leaveMessage.form.message')}
              required
              value={form.message}
              onChange={handleChange}
              className="w-full p-5 bg-slate-50 border-2 border-slate-50 rounded-2xl focus:bg-white focus:border-sky-500 outline-none transition-all font-medium resize-none"
            />
          </div>

          {status.message && (
            <div className={`flex items-center gap-3 p-4 rounded-2xl text-sm font-bold animate-in slide-in-from-top-2 duration-300 ${status.type === 'success' ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'
              }`}>
              {status.type === 'success' ? <CheckCircle2 size={20} /> : <XCircle size={20} />}
              {status.message}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-slate-900 hover:bg-sky-600 text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-slate-200 transition-all flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-70 group"
          >
            {isLoading ? (
              <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              <>
                {t('leaveMessage.form.submit')} <Send size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </>
            )}
          </button>
        </form>

        <p className="text-center text-slate-400 text-xs mt-8 font-bold uppercase tracking-widest">
          {t('leaveMessage.form.secure')}
        </p>
      </div>
    </div>
  );
}