import { Link, Outlet } from 'react-router-dom';
import hero from '../../IMG/service-hero.png';
import service1 from '../../IMG/service1.png';
import service2 from '../../IMG/service2.png';
import service3 from '../../IMG/service3.png';
import service4 from '../../IMG/service4.png';

export default function Services() {
  const serviceData = [
    {
      title: "Tibbiy Billing va Kodlash",
      desc: "Tibbiy billing va kodlash bo'yicha tajribali mutaxassislarimiz bilan moliyaviy muvaffaqiyatingizni qayta tiklang. Biz har bir muolaja aniq qayd etilishini ta'minlash uchun ICD-10, CPT va HCPCS kodlash standartlaridan foydalanamiz.",
      features: ["ICD-10/CPT Optimizatsiyasi", "Xatosiz Da'volar Yuborish", "Auditdan Himoya"],
      img: service1,
      color: "from-blue-50 to-sky-100"
    },
    {
      title: "Sug'urta Qoplamasini Tekshirish",
      desc: "Bemor tashrifidan oldin sug'urta qoplamasini tekshirish orqali to'lov rad etilishining oldini oling. Biz real vaqt rejimida hammualliflik to'lovlari (co-pays), deduktivlar va oldindan ruxsat olish talablarini tekshiramiz.",
      features: ["Real-vaqtda Qoplamani Tekshirish", "Co-pay va Deduktiv Nazorati", "Oldindan Ruxsatnoma (Prior Auth)"],
      img: service2,
      color: "from-indigo-50 to-blue-50"
    }
  ];

  return (
    <div className="bg-white font-sans overflow-hidden">

      {/* 1. KATTA KIRISH (HERO SECTION) */}
      <section className="relative py-24 px-4 md:px-12 lg:px-24 bg-slate-900 text-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 blur-[120px]"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              Zamonaviy Tibbiyot Uchun <span className="text-blue-400">To'liq Tsiklli</span> RCM Yechimlari
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl italic border-l-4 border-blue-500 pl-6">
              "Biz shunchaki billing bilan shug'ullanmaymiz, biz sizning tibbiy biznesingizning moliyaviy barqarorligini ta'minlaymiz."
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2 bg-slate-800/50 px-5 py-3 rounded-2xl border border-slate-700 backdrop-blur-sm">
                <span className="text-blue-400 font-bold">✔</span> 98% Toza Da'volar Ko'rsatkichi
              </div>
              <div className="flex items-center gap-2 bg-slate-800/50 px-5 py-3 rounded-2xl border border-slate-700 backdrop-blur-sm">
                <span className="text-blue-400 font-bold">✔</span> HIPAA Talablariga To'liq Mos
              </div>
            </div>
          </div>
          <div className="flex-1 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img src={hero} alt="Vcare Service Hero" className="relative w-full rounded-3xl shadow-2xl border border-slate-700 object-cover" />
          </div>
        </div>
      </section>

      {/* 2. ISH JARAYONI (HOW WE WORK) */}
      <section className="py-24 bg-slate-50 px-4 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">Bizning Ish Tizimimiz</h2>
            <div className="h-1.5 w-24 bg-blue-500 mx-auto mt-6 rounded-full"></div>
            <p className="text-slate-500 mt-6 text-lg">Muvaffaqiyatga eltuvchi 4 bosqichli strategiyamiz</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { step: "01", t: "Ma'lumot To'plash", d: "Bemor va ko'rsatilgan xizmatlar haqidagi ma'lumotlarni xavfsiz qabul qilamiz." },
              { step: "02", t: "Audit va Kodlash", d: "Mutaxassislarimiz har bir kodni xatolikka qarshi sinchiklab tekshiradi." },
              { step: "03", t: "Da'vo Yuborish", d: "Tayyorlangan claimlar 24 soat ichida sug'urta kompaniyalariga uzatiladi." },
              { step: "04", t: "To'lov Nazorati", d: "Mablag'lar sizning hisobingizga tushguniga qadar jarayonni kuzatamiz." }
            ].map((item, i) => (
              <div key={i} className="group relative p-8 bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 border-b-8 border-transparent hover:border-blue-500 transition-all duration-300">
                <span className="text-6xl font-black text-slate-50 absolute top-4 right-6 group-hover:text-blue-50 transition-colors">{item.step}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-4 relative z-10">{item.t}</h3>
                <p className="text-slate-600 text-sm leading-relaxed relative z-10">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ASOSIY XIZMATLAR (ZIG-ZAG) */}
      <section className="py-24 px-4 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto space-y-40">
          {/* Service 1: Billing & Coding */}
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                Tibbiy Billing va <br /> <span className="text-blue-600">Professional Kodlash</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                Bizning professional koderlarimiz har bir tashxisni aniq kodlaydi. Bu orqali rad etilishlar (denials) sonini sezilarli darajada kamaytiramiz. Biz bilan har bir cent o'z vaqtida qaytadi.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["ICD-10 Audit", "CPT Kodlash", "Rad etilgan Da'volar Boshqaruvi", "Haftalik Moliyaviy Hisobot"].map(li => (
                  <li key={li} className="flex items-center gap-3 text-slate-700 font-bold">
                    <div className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div> {li}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 bg-gradient-to-tr from-blue-100 to-transparent p-10 rounded-[4rem] relative">
              <img src={service1} alt="Tibbiy Billing" className="rounded-3xl shadow-2xl transform hover:-rotate-2 transition-transform duration-500" />
            </div>
          </div>

          {/* Service 2: Verification */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                Muvofiqlikni <br /> <span className="text-indigo-600">Oldindan Tekshirish</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                Sug'urta qoplamasini oldindan tekshirish — moliyaviy barqarorlik garovidir. Bemor klinikaga kelishidan oldin biz barcha moliyaviy masalalarni aniqlashtirib qo'yamiz.
              </p>
              <div className="p-6 bg-indigo-50 border-l-8 border-indigo-500 rounded-r-3xl shadow-inner">
                <p className="text-indigo-900 font-bold italic">
                  "Vcare bilan ishlaganda, kutilmagan to'lov rad etilishlari va bemorlar bilan yuzaga keladigan moliyaviy tushunmovchiliklardan butunlay qutulasiz."
                </p>
              </div>
            </div>
            <div className="flex-1 bg-gradient-to-tl from-indigo-100 to-transparent p-10 rounded-[4rem] relative">
              <img src={service2} alt="Sug'urta Tekshiruvi" className="rounded-3xl shadow-2xl transform hover:rotate-2 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ SECTION (SAVOL-JAVOBLAR) */}
      <section className="py-24 bg-slate-900 text-white px-4 md:px-12 lg:px-24 rounded-t-[5rem]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-16">Ko'p Beriladigan Savollar</h2>
          <div className="space-y-6 text-left">
            {[
              { q: "Xizmat haqi qanday hisoblanadi?", a: "Biz yig'ilgan umumiy mablag'ning kichik foiziga yoki har bir yuborilgan da'vo (claim) uchun belgilangan narxda ishlaymiz. Tanlov sizda!" },
              { q: "Ma'lumotlar xavfsizligi qanday?", a: "Barcha ma'lumotlar HIPAA talablari asosida 256-bitli shifrlangan serverlarda saqlanadi. Xavfsizlik biz uchun birinchi o'rinda." },
              { q: "Hisobotlar qay tartibda beriladi?", a: "Siz haftalik va oylik batafsil moliyaviy tahlillarni olasiz. Shuningdek, istalgan vaqtda portalingiz orqali holatni kuzatishingiz mumkin." }
            ].map((faq, i) => (
              <details key={i} className="group bg-slate-800/50 p-8 rounded-3xl cursor-pointer border border-slate-700 hover:border-blue-500 transition-all duration-300">
                <summary className="font-bold text-xl list-none flex justify-between items-center outline-none">
                  {faq.q}
                  <span className="w-8 h-8 flex items-center justify-center bg-slate-700 rounded-full group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <p className="mt-6 text-slate-400 leading-relaxed text-lg border-t border-slate-700 pt-6 font-medium">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FINAL CALL TO ACTION */}
      <section className="py-24 px-4 text-center bg-white">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-blue-600 to-blue-800 py-20 px-10 rounded-[4rem] shadow-2xl shadow-blue-500/40 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mt-32"></div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 relative z-10">Klinikangiz Daromadini Oshirishga <br /> Tayyormisiz?</h2>
          <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto font-medium relative z-10">
            Moliya tizimingizni mutaxassislarga topshiring va bor e'tiboringizni bemorlarga qarating. Bugun bepul audit so'rang!
          </p>
          <Link to="/contact" className="relative z-10 bg-white text-blue-600 px-14 py-6 rounded-2xl font-black text-2xl hover:scale-105 active:scale-95 transition-all shadow-xl inline-block">
            Hoziroq Bog'lanish
          </Link>
        </div>
      </section>

      <Outlet />
    </div>
  );
}