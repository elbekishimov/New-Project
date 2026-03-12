import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ShieldCheck, ArrowRight, HeartPulse } from 'lucide-react';

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState({ message: '', type: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      const savedUser = JSON.parse(localStorage.getItem("user"));

      if (!savedUser) {
        setStatus({ message: "Akkount topilmadi. Iltimos, ro'yxatdan o'ting!", type: "error" });
      } else if (
        formData.email === savedUser.email &&
        formData.password === savedUser.password
      ) {
        setStatus({ message: "Xush kelibsiz! Tizimga kirildi.", type: "success" });

      } else {
        setStatus({ message: "Email yoki parol noto'g'ri!", type: "error" });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-12">
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky-100 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-md w-full">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl shadow-xl shadow-blue-200 mb-4 transform -rotate-6">
            <HeartPulse className="text-white" size={32} />
          </div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Vcare <span className="text-blue-600">Portal</span>
          </h2>
          <p className="text-slate-500 mt-2 font-medium">Boshqaruv paneliga xavfsiz kirish</p>
        </div>

        <div className="bg-white rounded-[2rem] shadow-2xl shadow-slate-200/60 p-8 md:p-10 border border-slate-100 relative">
          <form onSubmit={handleSubmit} className="space-y-5">

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-400 uppercase ml-1 tracking-wider">Email Manzil</label>
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
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-50 rounded-2xl focus:bg-white focus:border-blue-500 outline-none transition-all font-medium text-slate-700"
                  placeholder="nomingiz@vcare.com"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center px-1">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Parol</label>
                <Link className="text-xs font-bold text-blue-600 hover:underline">Unutdingizmi?</Link>
              </div>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors">
                  <Lock size={20} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-12 pr-12 py-4 bg-slate-50 border-2 border-slate-50 rounded-2xl focus:bg-white focus:border-blue-500 outline-none transition-all font-medium text-slate-700"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {status.message && (
              <div className={`flex items-center gap-2 p-4 rounded-xl text-sm font-bold animate-in fade-in slide-in-from-top-2 ${status.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                }`}>
                {status.type === 'success' ? <ShieldCheck size={18} /> : null}
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-slate-900 hover:bg-blue-600 text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-slate-200 hover:shadow-blue-200 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  Tizimga kirish <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-slate-50 text-center">
            <p className="text-slate-500 font-medium">
              Akkountingiz yo'qmi?{' '}
              <Link to={'/sign-up'} className="text-blue-600 font-black hover:text-blue-700 ml-1 transition-colors">
                Ro'yxatdan o'ting
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-slate-400">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-tighter">
            <ShieldCheck size={14} /> 256-bit SSL Secure
          </div>
          <div className="w-1.5 h-1.5 bg-slate-200 rounded-full"></div>
          <div className="text-xs font-bold uppercase tracking-tighter">
            HIPAA Compliant
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;