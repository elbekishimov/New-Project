import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Linkedin,
  Facebook,
  Twitter
} from "lucide-react";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
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

    // Telegram Bot Ma'lumotlari
    const botToken = "YOUR_BOT_TOKEN";
    const chatId = "YOUR_CHAT_ID";

    const text = `
📩 **Yangi xabar (Contact Form):**
👤 **Ism:** ${form.name}
📧 **Email:** ${form.email}
📝 **Mavzu:** ${form.subject}
💬 **Xabar:** ${form.message}
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
        setStatus({ message: "Xabaringiz muvaffaqiyatli yuborildi!", type: "success" });
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error();
      }
    } catch (error) {
      setStatus({ message: "Xatolik yuz berdi. Iltimos, qayta urinib ko'ring.", type: "error" });
    } finally {
      setIsLoading(false);
      // 5 soniyadan keyin xabarni o'chirish
      setTimeout(() => setStatus({ message: '', type: '' }), 5000);
    }
  };

  return (
    <div className="bg-white min-h-screen text-slate-600 font-sans">

      {/* 1. HERO SECTION */}
      <section className="bg-slate-900 py-24 px-4 md:px-12 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            Biz bilan <span className="text-sky-400">bog'laning</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-300 text-lg md:text-xl font-medium">
            Savollaringiz bormi? Bizning jamoamiz billing jarayonlarini optimallashtirishda sizga yordam berishga tayyor.
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 py-24">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* LEFT SIDE: CONTACT INFO */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-8 underline decoration-sky-400 decoration-4 underline-offset-8">
                Ma'lumotlarimiz
              </h2>

              <div className="grid gap-8">
                <div className="flex items-start gap-5">
                  <div className="bg-sky-50 p-4 rounded-2xl text-sky-500 shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Manzil</h4>
                    <p className="text-slate-500">123 Healthcare Avenue, Suite 400<br />New York, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-emerald-50 p-4 rounded-2xl text-emerald-500 shadow-sm">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Telefon</h4>
                    <p className="text-slate-500">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-orange-50 p-4 rounded-2xl text-orange-500 shadow-sm">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Email</h4>
                    <p className="text-slate-500">info@vcarebilling.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-purple-50 p-4 rounded-2xl text-purple-500 shadow-sm">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Ish vaqti</h4>
                    <p className="text-slate-500">Dushanba – Juma: 09:00 – 18:00<br />Shanba – Yakshanba: Dam olish kuni</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-8 border-t border-slate-100">
              <p className="font-bold text-slate-900 mb-4">Bizni kuzatib boring:</p>
              <div className="flex gap-4">
                {[Linkedin, Facebook, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="p-3 bg-slate-100 rounded-xl text-slate-600 hover:bg-sky-500 hover:text-white transition-all">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: CONTACT FORM */}
          <div className="relative">
            <div className="absolute -inset-4 bg-sky-500/5 rounded-[3rem] -z-10 rotate-1"></div>
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-50">
              <h3 className="text-2xl font-black text-slate-900 mb-6">Xabar yuboring</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">To'liq ism</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jonibek Toshpo'latov"
                    className="w-full p-4 bg-slate-50 border-2 border-slate-50 rounded-2xl focus:bg-white focus:border-sky-500 outline-none transition-all font-medium"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="vcare@example.com"
                    className="w-full p-4 bg-slate-50 border-2 border-slate-50 rounded-2xl focus:bg-white focus:border-sky-500 outline-none transition-all font-medium"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Mavzu</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Billing maslahati"
                    className="w-full p-4 bg-slate-50 border-2 border-slate-50 rounded-2xl focus:bg-white focus:border-sky-500 outline-none transition-all font-medium"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Xabar</label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Xabaringizni yozing..."
                    className="w-full p-4 bg-slate-50 border-2 border-slate-50 rounded-2xl focus:bg-white focus:border-sky-500 outline-none transition-all font-medium resize-none"
                  />
                </div>

                {status.message && (
                  <div className={`flex items-center gap-3 p-4 rounded-2xl text-sm font-bold animate-in zoom-in-95 ${status.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                    }`}>
                    {status.type === 'success' ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-slate-900 hover:bg-sky-600 text-white py-4 rounded-2xl font-black text-lg shadow-xl transition-all flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-70 group"
                >
                  {isLoading ? (
                    <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      Yuborish <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MAP (PLACEHOLDER) */}
      <section className="w-full h-96 bg-slate-100 grayscale hover:grayscale-0 transition-all duration-700">
        <iframe
          title="office map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2528082187!2d-74.11976373946229!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1645523456789!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

    </div>
  );
}