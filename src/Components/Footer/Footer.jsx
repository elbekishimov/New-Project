import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ShieldCheck,
  HeartPulse
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 px-4 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-50"></div>
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-sky-500 p-2 rounded-xl group-hover:rotate-12 transition-transform">
                <HeartPulse className="text-white" size={24} />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                Vcare<span className="text-sky-500">Billing</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Biz 1985-yildan beri tibbiy muassasalar uchun moliya va billing jarayonlarini shaffof va samarali boshqarib kelmoqdamiz. Sizning muvaffaqiyatingiz — bizning ustuvorligimiz.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all border border-white/10"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-sky-500 rounded-full"></span> Foydali Havolalar
            </h4>
            <ul className="space-y-4 font-medium">
              {[
                { name: "Bosh sahifa", path: "/" },
                { name: "Xizmatlar", path: "/services" },
                { name: "Mahsulotlar", path: "/products" },
                { name: "Sharhlar", path: "/reviews" },
                { name: "Aloqa", path: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-sky-400 flex items-center gap-2 transition-colors group"
                  >
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-sky-500 rounded-full"></span> Xizmatlarimiz
            </h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li className="hover:text-white transition-colors cursor-pointer">Revenue Cycle Management</li>
              <li className="hover:text-white transition-colors cursor-pointer">Medical Coding</li>
              <li className="hover:text-white transition-colors cursor-pointer">Accounts Receivable</li>
              <li className="hover:text-white transition-colors cursor-pointer">Patient Statements</li>
              <li className="hover:text-white transition-colors cursor-pointer">Credentialing Services</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-sky-500 rounded-full"></span> Obuna Bo'ling
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              So'nggi yangiliklar va moliya bo'yicha maslahatlarni to'g'ridan-to'g'ri pochtangizga qabul qiling.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Email manzilingiz"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-sky-500 transition-all"
              />
              <button className="absolute right-2 top-1.5 bg-sky-500 hover:bg-sky-600 text-white p-1.5 rounded-lg transition-all">
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/5">
              <div className="flex items-center gap-3 text-sm">
                <Phone size={16} className="text-sky-500" /> +1 (800) 123-4567
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail size={16} className="text-sky-500" /> support@vcare.com
              </div>
            </div>
          </div>

        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-slate-500 flex items-center gap-2">
            © {currentYear} <span className="text-slate-400 font-bold">Vcare Medical Billing</span>. Barcha huquqlar himoyalangan.
          </div>

          <div className="flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Maxfiylik siyosati</a>
            <a href="#" className="hover:text-white transition-colors">Foydalanish shartlari</a>
            <div className="flex items-center gap-1 text-green-500/70">
              <ShieldCheck size={14} /> SSL SECURE
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}