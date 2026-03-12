import { Mail, Phone, MapPin, Clock, Send, Globe, MessageSquare } from 'lucide-react';
import contactHero from '../../IMG/service-hero.png';

export default function Contact() {
  const contactDetails = [
    { icon: <MapPin className="text-blue-500" />, title: "Bizning Manzil", content: "123 Medical Avenue, Suite 400, New York, NY 10001" },
    { icon: <Phone className="text-blue-500" />, title: "Telefon", content: "+1 (800) 123-4567" },
    { icon: <Mail className="text-blue-500" />, title: "Email", content: "support@medicalrcm.com" },
    { icon: <Clock className="text-blue-500" />, title: "Ish Vaqti", content: "Dush - Jum: 9:00 - 18:00" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">

      <section className="relative py-20 px-4 md:px-12 lg:px-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-bold tracking-widest uppercase">
              Biz bilan bog'laning
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
              Sizga <span className="text-blue-600 italic">Yordam</span> Berishga Tayyormiz
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Billing jarayonlarini avtomatlashtirish yoki daromadlarni oshirish bo'yicha savollaringiz bormi? Mutaxassislarimiz 24 soat ichida sizga javob berishadi.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-lg">
                <MessageSquare size={20} /> Live Chat
              </button>
              <button className="flex items-center gap-2 bg-white border-2 border-slate-200 text-slate-800 px-8 py-4 rounded-2xl font-bold hover:border-blue-600 transition-all">
                <Globe size={20} /> Global Support
              </button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-50 animate-pulse"></div>
            <img
              className="w-full h-auto object-cover rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-8 border-white relative z-10"
              src={contactHero}
              alt="Contact Medical Billing Team"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-12 lg:px-24 -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-[3rem] shadow-2xl shadow-slate-200/50 overflow-hidden flex flex-col lg:flex-row border border-slate-100">

            <div className="lg:w-1/3 bg-blue-600 p-12 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>

              <div className="space-y-12 relative z-10">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Aloqa Ma'lumotlari</h2>
                  <p className="text-blue-100">Biz bilan bog'lanishning bir necha oson yo'llari mavjud.</p>
                </div>

                <div className="space-y-8">
                  {contactDetails.map((item, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                      <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-white/70 text-sm uppercase tracking-wider">{item.title}</h4>
                        <p className="text-lg font-medium">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-16 pt-8 border-t border-white/20 flex gap-6">
                {['Facebook', 'LinkedIn', 'Twitter'].map(social => (
                  <a key={social} href="#" className="text-sm font-bold hover:text-blue-200 underline decoration-blue-400">{social}</a>
                ))}
              </div>
            </div>

            <div className="lg:w-2/3 p-12 md:p-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Xabar Yo'llang</h2>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 ml-1 italic">To'liq ismingiz</label>
                  <input
                    type="text"
                    placeholder="Ism va familiya"
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 ml-1 italic">Email manzilingiz</label>
                  <input
                    type="email"
                    placeholder="example@mail.com"
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-slate-500 ml-1 italic">Mavzu</label>
                  <select className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 focus:bg-white transition-all appearance-none cursor-pointer">
                    <option>Xizmatlar haqida savol</option>
                    <option>Narxlar tahlili</option>
                    <option>Texnik yordam</option>
                    <option>Hamkorlik</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-slate-500 ml-1 italic">Xabar matni</label>
                  <textarea
                    rows="5"
                    placeholder="Qanday yordam bera olamiz?"
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 focus:bg-white transition-all resize-none"
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-2xl font-black text-lg shadow-xl shadow-blue-200 hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                  >
                    Yuborish <Send size={20} />
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

      <section className="pb-20 px-4 md:px-12">
        <div className="max-w-7xl mx-auto h-[400px] bg-slate-200 rounded-[3rem] overflow-hidden border-8 border-white shadow-xl flex items-center justify-center relative">
          <div className="text-center z-10">
            <div className="bg-white p-4 rounded-full shadow-lg inline-block mb-4">
              <MapPin className="text-blue-600 animate-bounce" size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Google Maps Joylashuvi</h3>
            <p className="text-slate-500 text-sm mt-2">Bu yerda sizning ofisingiz manzili ko'rinadi.</p>
          </div>
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>
      </section>
    </div>
  )
}